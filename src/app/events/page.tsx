"use client";

import { useState, useMemo } from "react";

import { Button, Chip, Input, Select, SelectItem } from "@heroui/react";

import { EventCard } from "@/components/ui/EventCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllEvents, Event, getLocalTimeHint } from "@/lib/events";

interface FilterOption {
  value: string;
  label: string;
}

const eventTypes = [
  { value: "all", label: "All Types" },
  { value: "workshop", label: "Workshop" },
  { value: "webinar", label: "Webinar" },
  { value: "office-hours", label: "Office Hours" },
  { value: "conference", label: "Conference" },
  { value: "roundtable", label: "Roundtable" },
];

const personas = [
  { value: "all", label: "All Audiences" },
  { value: "founder", label: "Founders" },
  { value: "cto", label: "CTOs" },
  { value: "product", label: "Product Managers" },
  { value: "product-lead", label: "Product Leaders" },
  { value: "ops", label: "Operations" },
];

const months = [
  { value: "all", label: "All Months" },
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

export default function EventsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
  ];

  const [typeFilter, setTypeFilter] = useState("all");
  const [personaFilter, setPersonaFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPastEvents, setShowPastEvents] = useState(false);

  const allEvents = getAllEvents();

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      // Status filter
      if (!showPastEvents && event.status === "past") return false;

      // Type filter
      if (typeFilter !== "all" && event.type !== typeFilter) return false;

      // Persona filter
      if (personaFilter !== "all" && !event.persona.includes(personaFilter)) return false;

      // Month filter
      if (monthFilter !== "all") {
        const eventMonth = new Date(event.date.start).getMonth() + 1;
        if (eventMonth.toString() !== monthFilter) return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          event.speakers.some(
            (speaker) =>
              speaker.name.toLowerCase().includes(query) ||
              speaker.title.toLowerCase().includes(query)
          )
        );
      }

      return true;
    });
  }, [allEvents, typeFilter, personaFilter, monthFilter, searchQuery, showPastEvents]);

  const upcomingEvents = filteredEvents.filter((e) => e.status === "upcoming");
  const pastEvents = filteredEvents.filter((e) => e.status === "past");

  // Convert Event to EventCard format
  const formatEventForCard = (event: Event) => ({
    id: event.id,
    title: event.title,
    description: event.description,
    date: {
      day: new Date(event.date.start).getDate().toString().padStart(2, "0"),
      month: new Date(event.date.start)
        .toLocaleDateString("en-US", { month: "short" })
        .toUpperCase(),
      year: new Date(event.date.start).getFullYear().toString(),
      time: new Date(event.date.start).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }),
    },
    location: {
      city: event.location.city || "Virtual",
      venue: event.location.venue,
      isVirtual: event.location.type === "virtual",
    },
    type: event.type,
    link: `/events/${event.slug}`,
    featured: event.featured,
    attendees: event.registration.registered,
  });

  return (
    <>
      <PageHeader
        title="Events & Webinars"
        subtitle="Join us for workshops, webinars, and exclusive roundtables"
        breadcrumbs={breadcrumbs}
      />

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Select
              label="Event Type"
              selectedKeys={[typeFilter]}
              onChange={(e) => setTypeFilter(e.target.value)}
              size="sm"
              items={eventTypes}
            >
              {(item: FilterOption) => <SelectItem key={item.value}>{item.label}</SelectItem>}
            </Select>

            <Select
              label="Audience"
              selectedKeys={[personaFilter]}
              onChange={(e) => setPersonaFilter(e.target.value)}
              size="sm"
              items={personas}
            >
              {(item: FilterOption) => <SelectItem key={item.value}>{item.label}</SelectItem>}
            </Select>

            <Select
              label="Month"
              selectedKeys={[monthFilter]}
              onChange={(e) => setMonthFilter(e.target.value)}
              size="sm"
              items={months}
            >
              {(item: FilterOption) => <SelectItem key={item.value}>{item.label}</SelectItem>}
            </Select>

            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="sm"
              startContent={
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />

            <div className="flex items-end">
              <Button
                variant={showPastEvents ? "solid" : "bordered"}
                size="sm"
                onPress={() => setShowPastEvents(!showPastEvents)}
                className="w-full"
              >
                {showPastEvents ? "Hide Past Events" : "Show Past Events"}
              </Button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 text-center">
            All times shown in Europe/Zurich timezone.
            {typeof window !== "undefined" && (
              <span className="ml-2">
                Your local timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-semibold text-navy-900 mb-8">
              Upcoming Events ({upcomingEvents.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="relative">
                  <EventCard {...formatEventForCard(event)} />
                  {event.registration.status === "waitlist" && (
                    <div className="absolute top-4 right-4">
                      <Chip color="warning" size="sm">
                        Waitlist
                      </Chip>
                    </div>
                  )}
                  {getLocalTimeHint(event) && (
                    <div className="mt-2 text-xs text-gray-500 text-center">
                      {getLocalTimeHint(event)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events / On-Demand */}
      {showPastEvents && pastEvents.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-semibold text-navy-900 mb-8">
              Past Events & On-Demand ({pastEvents.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="relative">
                  <EventCard {...formatEventForCard(event)} />
                  {event.onDemand?.available && (
                    <div className="absolute top-4 right-4">
                      <Chip color="success" size="sm">
                        On-Demand
                      </Chip>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredEvents.length === 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <p className="text-gray-500 text-lg mb-4">No events found matching your criteria.</p>
            <Button
              variant="bordered"
              onPress={() => {
                setTypeFilter("all");
                setPersonaFilter("all");
                setMonthFilter("all");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
