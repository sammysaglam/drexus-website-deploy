import { eventsData } from "../data/events";

export interface Speaker {
  name: string;
  title: string;
  bio: string;
  photo: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  duration: string;
  speaker?: string;
}

export interface EventLocation {
  type: "virtual" | "in-person" | "hybrid";
  venue?: string;
  address?: string;
  city?: string;
  country?: string;
  platform?: string;
}

export interface EventRegistration {
  status: "open" | "closed" | "waitlist";
  price: number;
  currency?: string;
  capacity?: number;
  registered?: number;
  link?: string;
}

export interface OnDemandInfo {
  available: boolean;
  slug?: string;
  duration?: string;
  views?: number;
  transcript?: boolean;
}

export interface Resource {
  title: string;
  type: "pdf" | "tool" | "template" | "video";
  link: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: "workshop" | "webinar" | "office-hours" | "conference" | "summit" | "roundtable";
  status: "upcoming" | "past";
  persona: string[];
  date: {
    start: string; // ISO 8601 format
    end: string;
    timezone: string;
    displayDate: string;
  };
  location: EventLocation;
  speakers: Speaker[];
  agenda?: AgendaItem[];
  registration: EventRegistration;
  onDemand?: OnDemandInfo;
  resources?: Resource[];
  tags: string[];
  featured: boolean;
}

export function getAllEvents(): Event[] {
  return eventsData.events as Event[];
}

export function getEventBySlug(slug: string): Event | undefined {
  return eventsData.events.find((event) => event.slug === slug) as Event | undefined;
}

export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return eventsData.events
    .filter((event) => new Date(event.date.start) > now)
    .sort((a, b) => new Date(a.date.start).getTime() - new Date(b.date.start).getTime()) as Event[];
}

export function getPastEvents(): Event[] {
  const now = new Date();
  return eventsData.events
    .filter((event) => new Date(event.date.start) <= now)
    .sort((a, b) => new Date(b.date.start).getTime() - new Date(a.date.start).getTime()) as Event[];
}

export function getEventsByType(type: string): Event[] {
  return eventsData.events.filter((event) => event.type === type) as Event[];
}

export function getEventsByPersona(persona: string): Event[] {
  return eventsData.events.filter((event) => event.persona.includes(persona)) as Event[];
}

export function getFeaturedEvents(): Event[] {
  return eventsData.events.filter((event) => event.featured) as Event[];
}

export function getEventsByMonth(year: number, month: number): Event[] {
  return eventsData.events.filter((event) => {
    const eventDate = new Date(event.date.start);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  }) as Event[];
}

export function getRelatedEvents(currentEvent: Event, limit: number = 3): Event[] {
  return eventsData.events
    .filter((event) => {
      if (event.id === currentEvent.id) return false;

      // Score based on shared attributes
      let score = 0;

      // Same type
      if (event.type === currentEvent.type) score += 3;

      // Shared personas
      const sharedPersonas = event.persona.filter((p) => currentEvent.persona.includes(p));
      score += sharedPersonas.length * 2;

      // Shared tags
      const sharedTags = event.tags.filter((t) => currentEvent.tags.includes(t));
      score += sharedTags.length;

      return score > 0;
    })
    .sort((a, b) => {
      // Sort by relevance (shared attributes) and then by date
      const scoreA =
        (a.type === currentEvent.type ? 3 : 0) +
        a.persona.filter((p) => currentEvent.persona.includes(p)).length * 2 +
        a.tags.filter((t) => currentEvent.tags.includes(t)).length;
      const scoreB =
        (b.type === currentEvent.type ? 3 : 0) +
        b.persona.filter((p) => currentEvent.persona.includes(p)).length * 2 +
        b.tags.filter((t) => currentEvent.tags.includes(t)).length;

      if (scoreA !== scoreB) return scoreB - scoreA;

      // If same score, prefer upcoming events
      if (a.status !== b.status) {
        return a.status === "upcoming" ? -1 : 1;
      }

      // Then sort by date
      return new Date(a.date.start).getTime() - new Date(b.date.start).getTime();
    })
    .slice(0, limit) as Event[];
}

export function formatEventDate(event: Event, includeTime: boolean = true): string {
  const startDate = new Date(event.date.start);
  const endDate = new Date(event.date.end);

  // Use consistent formatting to avoid hydration issues
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const startWeekday = weekdays[startDate.getDay()];
  const startMonth = months[startDate.getMonth()];
  const startDay = startDate.getDate();
  const startYear = startDate.getFullYear();

  let formattedStart = `${startWeekday}, ${startMonth} ${startDay}, ${startYear}`;

  if (includeTime) {
    const startHour = startDate.getHours();
    const startMinute = startDate.getMinutes().toString().padStart(2, "0");
    const ampm = startHour >= 12 ? "PM" : "AM";
    const displayHour = startHour % 12 || 12;
    formattedStart += ` at ${displayHour}:${startMinute} ${ampm}`;
  }

  // If same day, just show end time
  if (startDate.toDateString() === endDate.toDateString()) {
    const endHour = endDate.getHours();
    const endMinute = endDate.getMinutes().toString().padStart(2, "0");
    const endAmpm = endHour >= 12 ? "PM" : "AM";
    const endDisplayHour = endHour % 12 || 12;
    const endTime = `${endDisplayHour}:${endMinute} ${endAmpm}`;
    return `${formattedStart} - ${endTime}`;
  }

  return formattedStart;
}

export function getLocalTimeHint(event: Event): string {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    return "";
  }

  try {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTimezone === event.date.timezone) {
      return "";
    }

    const startDate = new Date(event.date.start);
    const localTime = startDate.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
      timeZone: userTimezone,
    });

    return `(${localTime} your time)`;
  } catch {
    // Fallback if timezone detection fails
    return "";
  }
}

export function generateICS(event: Event): string {
  const startDate = new Date(event.date.start);
  const endDate = new Date(event.date.end);

  // Format dates for ICS (YYYYMMDDTHHMMSSZ)
  const formatICSDate = (date: Date) => {
    return date
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  };

  const location =
    event.location.type === "virtual"
      ? event.location.platform || "Online"
      : `${event.location.venue || ""}, ${event.location.address || ""}, ${event.location.city || ""}`.trim();

  const description = `${event.description}\\n\\nRegister at: ${event.registration.link || "https://drexus.com/events/" + event.slug}`;

  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Drexus//Events//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:${event.id}@drexus.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${description}
LOCATION:${location}
STATUS:CONFIRMED
ORGANIZER;CN=Drexus:mailto:events@drexus.com
END:VEVENT
END:VCALENDAR`;

  return ics;
}

export function generateGoogleCalendarUrl(event: Event): string {
  const startDate = new Date(event.date.start);
  const endDate = new Date(event.date.end);

  // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
  const formatGoogleDate = (date: Date) => {
    return date
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  };

  const location =
    event.location.type === "virtual"
      ? event.location.platform || "Online"
      : `${event.location.venue || ""}, ${event.location.address || ""}, ${event.location.city || ""}`.trim();

  const description = `${event.description}\\n\\nRegister at: ${event.registration.link || "https://drexus.com/events/" + event.slug}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`,
    details: description,
    location: location,
    trp: "false",
    // Add reminder parameters (30 minutes before event)
    reminders: "popup:30",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function getEventTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    workshop: "Workshop",
    webinar: "Webinar",
    "office-hours": "Office Hours",
    conference: "Conference",
    summit: "Summit",
    roundtable: "Roundtable",
  };
  return labels[type] || type;
}

export function formatEventTime(startDate: string, timezone: string): string {
  const date = new Date(startDate);
  return date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
    timeZone: timezone,
  });
}

export function getEventTypeColor(
  type: string
): "primary" | "secondary" | "success" | "warning" | "danger" | "default" {
  const colors: Record<
    string,
    "primary" | "secondary" | "success" | "warning" | "danger" | "default"
  > = {
    workshop: "primary",
    webinar: "success",
    "office-hours": "warning",
    conference: "secondary",
    summit: "secondary",
    roundtable: "danger",
  };
  return colors[type] || "default";
}
