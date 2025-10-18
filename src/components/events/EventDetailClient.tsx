"use client";

import { useState } from "react";

import { Button, Card, CardBody, Chip, Avatar, Progress } from "@heroui/react";

import { Event, Speaker, AgendaItem, EventLocation } from "@/lib/events";

import { EventSubscriptionForm } from "./EventSubscriptionForm";

interface EventDetailClientProps {
  event: Event;
  isUpcoming: boolean;
  isFull: boolean;
  registrationPercentage: number;
  personas: Record<string, string>;
}

export function EventDetailClient({
  event,
  isUpcoming,
  isFull: _isFull,
  registrationPercentage,
  personas,
}: EventDetailClientProps) {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleAddToCalendar = () => {
    if (!isUpcoming) return; // Don't allow adding past events to calendar

    const startDate = new Date(event.date.start);
    const endDate = new Date(event.date.end);

    // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    // Format location for Google Calendar
    const formatLocation = (location: EventLocation) => {
      if (location.type === "virtual") {
        return location.platform || "Virtual Event";
      } else if (location.type === "in-person") {
        return [location.venue, location.address, location.city, location.country]
          .filter(Boolean)
          .join(", ");
      } else if (location.type === "hybrid") {
        const venue = [location.venue, location.address, location.city, location.country]
          .filter(Boolean)
          .join(", ");
        return venue
          ? `${venue} (Hybrid - ${location.platform || "Virtual option available"})`
          : `Hybrid Event (${location.platform || "Virtual option available"})`;
      }
      return "Location TBD";
    };

    const googleCalendarUrl = new URL("https://calendar.google.com/calendar/render");
    googleCalendarUrl.searchParams.set("action", "TEMPLATE");
    googleCalendarUrl.searchParams.set("text", event.title);
    googleCalendarUrl.searchParams.set("dates", `${formatDate(startDate)}/${formatDate(endDate)}`);
    googleCalendarUrl.searchParams.set("details", event.description);
    googleCalendarUrl.searchParams.set("location", formatLocation(event.location));

    // Open Google Calendar in new tab
    window.open(googleCalendarUrl.toString(), "_blank");
  };

  return (
    <>
      <Card className="sticky top-4">
        <CardBody className="p-6">
          <h2 className="text-xl font-semibold text-navy-900 mb-4">Registration</h2>

          {/* Registration Status */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Status</span>
              <Chip
                color={
                  !isUpcoming
                    ? "default"
                    : event.registration.status === "open"
                      ? "success"
                      : event.registration.status === "waitlist"
                        ? "warning"
                        : "default"
                }
                variant="flat"
                size="sm"
              >
                {!isUpcoming
                  ? "Completed"
                  : event.registration.status === "open"
                    ? "Open"
                    : event.registration.status === "waitlist"
                      ? "Waitlist"
                      : "Closed"}
              </Chip>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Price</span>
              <span className="font-semibold text-navy-800">
                {!isUpcoming && event.registration.price > 0
                  ? `Was ${event.registration.price} ${event.registration.currency || "CHF"}`
                  : event.registration.price > 0
                    ? `${event.registration.price} ${event.registration.currency || "CHF"}`
                    : "Free"}
              </span>
            </div>

            {event.registration.capacity && (
              <>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{!isUpcoming ? "Attended" : "Spots"}</span>
                  <span className="text-sm">
                    {event.registration.registered} / {event.registration.capacity}
                  </span>
                </div>
                <Progress
                  value={registrationPercentage}
                  color={registrationPercentage > 90 ? "danger" : "primary"}
                  size="sm"
                  className="mb-4"
                />
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {isUpcoming && event.registration.status === "open" && (
              <Button
                color="primary"
                size="lg"
                className="w-full"
                onPress={() => setShowRegistrationModal(true)}
              >
                Register Now
              </Button>
            )}

            {isUpcoming && event.registration.status === "waitlist" && (
              <Button
                color="primary"
                size="lg"
                className="w-full"
                onPress={() => setShowRegistrationModal(true)}
              >
                Join Waitlist
              </Button>
            )}

            {isUpcoming && event.registration.status === "closed" && (
              <div className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">Registration Closed</span>
                </div>
                <p className="text-sm text-gray-500">
                  Registration for this event is no longer available.
                </p>
              </div>
            )}

            {!isUpcoming && !event.onDemand?.available && (
              <div className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">Event Completed</span>
                </div>
                <p className="text-sm text-gray-500">
                  This event has already taken place. Registration is no longer available.
                </p>
              </div>
            )}

            <Button
              variant="bordered"
              size="lg"
              className="w-full"
              onPress={handleAddToCalendar}
              isDisabled={!isUpcoming}
              startContent={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
            >
              {isUpcoming ? "Add to Calendar" : "Event Completed"}
            </Button>
          </div>

          {/* Target Audience */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-medium text-navy-800 mb-3">Who Should Attend</h3>
            <div className="flex flex-wrap gap-2">
              {event.persona.map((persona) => (
                <Chip key={persona} size="sm" variant="flat">
                  {personas[persona] || persona}
                </Chip>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-medium text-navy-800 mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-600">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Event Registration Modal */}
      <EventSubscriptionForm
        event={event}
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
      />
    </>
  );
}

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Card>
      <CardBody className="p-6">
        <div className="flex items-start gap-4">
          <Avatar src={speaker.photo} name={speaker.name} size="lg" className="flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-navy-800">{speaker.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>
            <p className="text-gray-700">{speaker.bio}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export function EventInfoBar({
  event,
  formattedDate,
  typeLabel,
  typeColor,
  localTimeHint,
}: {
  event: Event;
  formattedDate: string;
  typeLabel: string;
  typeColor: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
  localTimeHint: string | undefined;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 pb-6 border-b">
      <Chip color={typeColor} variant="flat">
        {typeLabel}
      </Chip>

      <div className="flex items-center gap-2 text-gray-600">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {formattedDate}
      </div>

      <div className="flex items-center gap-2 text-gray-600">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {event.location.type === "virtual"
          ? event.location.platform
          : `${event.location.venue}, ${event.location.city}`}
      </div>

      {localTimeHint && <div className="text-sm text-blue-600">{localTimeHint}</div>}
    </div>
  );
}

export function AgendaCard({ agenda }: { agenda: AgendaItem[] }) {
  return (
    <Card>
      <CardBody className="p-6">
        <div className="space-y-4">
          {agenda.map((item, index) => (
            <div key={index} className="flex gap-4 pb-4 last:pb-0 last:border-0 border-b">
              <div className="text-navy-600 font-medium min-w-[80px]">{item.time}</div>
              <div className="flex-1">
                <h3 className="font-medium text-navy-800">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.duration}
                  {item.speaker && ` • ${item.speaker}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
