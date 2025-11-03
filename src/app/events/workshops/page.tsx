"use client";

import { useState, useMemo, Suspense } from "react";

import { Button, Chip, Input, Select, SelectItem } from "@heroui/react";

import { EventCard } from "@/components/ui/EventCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Event, getEventsByType } from "@/lib/events";

interface FilterOption {
  value: string;
  label: string;
}

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

const locations = [
  { value: "all", label: "All Locations" },
  { value: "in-person", label: "In-Person" },
  { value: "hybrid", label: "Hybrid" },
  { value: "virtual", label: "Virtual" },
];

function WorkshopsContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Workshops", href: "/events/workshops" },
  ];

  const [personaFilter, setPersonaFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Get only workshop events
  const allWorkshops = getEventsByType("workshop");

  const filteredWorkshops = useMemo(() => {
    return allWorkshops
      .filter((workshop) => {
        // Status filter
        const isWorkshopPast = new Date(workshop.date.start) <= new Date();
        if (!showPastEvents && isWorkshopPast) return false;

        // Persona filter
        if (personaFilter !== "all" && !workshop.persona.includes(personaFilter)) return false;

        // Month filter
        if (monthFilter !== "all") {
          const eventMonth = new Date(workshop.date.start).getMonth() + 1;
          if (eventMonth.toString() !== monthFilter) return false;
        }

        // Location filter
        if (locationFilter !== "all" && workshop.location.type !== locationFilter) return false;

        // Search filter
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            workshop.title.toLowerCase().includes(query) ||
            workshop.description.toLowerCase().includes(query) ||
            workshop.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            workshop.speakers.some(
              (speaker) =>
                speaker.name.toLowerCase().includes(query) ||
                speaker.title.toLowerCase().includes(query)
            )
          );
        }

        return true;
      })
      .sort((a, b) => new Date(b.date.start).getTime() - new Date(a.date.start).getTime());
  }, [allWorkshops, personaFilter, monthFilter, locationFilter, searchQuery, showPastEvents]);

  const now = new Date();
  const upcomingWorkshops = filteredWorkshops.filter((w) => new Date(w.date.start) > now);
  const pastWorkshops = filteredWorkshops.filter((w) => new Date(w.date.start) <= now);

  // Convert Event to EventCard format
  const formatWorkshopForCard = (workshop: Event) => ({
    id: workshop.id,
    title: workshop.title,
    description: workshop.description,
    date: {
      day: new Date(workshop.date.start).getDate().toString().padStart(2, "0"),
      month: new Date(workshop.date.start)
        .toLocaleDateString("en-US", { month: "short" })
        .toUpperCase(),
      year: new Date(workshop.date.start).getFullYear().toString(),
      time: new Date(workshop.date.start).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }),
    },
    location: {
      city: workshop.location.city || "Virtual",
      venue: workshop.location.venue,
      isVirtual: workshop.location.type === "virtual",
    },
    type: workshop.type,
    link: `/events/${workshop.slug}`,
    featured: workshop.featured,
    attendees: workshop.registration.registered,
  });

  return (
    <>
      <PageHeader
        title="Workshops"
        subtitle="Hands-on learning experiences designed to accelerate your product development and business growth"
        breadcrumbs={breadcrumbs}
      />

      {/* Workshop Benefits Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Choose Our Workshops?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our workshops are designed for hands-on learning with practical frameworks, real-world
              case studies, and actionable takeaways you can implement immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Hands-On Learning</h3>
              <p className="text-gray-600">
                Interactive sessions with practical exercises, templates, and tools you can use
                right away.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry experts with proven track records at leading companies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Actionable Outcomes</h3>
              <p className="text-gray-600">
                Leave with concrete frameworks, templates, and action plans for your specific
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

            <Select
              label="Location"
              selectedKeys={[locationFilter]}
              onChange={(e) => setLocationFilter(e.target.value)}
              size="sm"
              items={locations}
            >
              {(item: FilterOption) => <SelectItem key={item.value}>{item.label}</SelectItem>}
            </Select>

            <div className="flex flex-col">
              <Input
                placeholder="Search workshops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="lg"
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
            </div>

            <div className="flex items-end">
              <Button
                variant={showPastEvents ? "solid" : "bordered"}
                onPress={() => setShowPastEvents(!showPastEvents)}
                className="h-12 w-full text-[16px]"
              >
                {showPastEvents ? "Hide Past Workshops" : "Show Past Workshops"}
              </Button>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600 text-center">
            All times shown in Europe/Zurich timezone.
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      {upcomingWorkshops.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-semibold text-navy-900 mb-8">
              Upcoming Workshops ({upcomingWorkshops.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingWorkshops.map((workshop) => (
                <div key={workshop.id} className="relative">
                  <EventCard
                    title={formatWorkshopForCard(workshop).title}
                    description={formatWorkshopForCard(workshop).description}
                    date={formatWorkshopForCard(workshop).date}
                    location={formatWorkshopForCard(workshop).location}
                    type={formatWorkshopForCard(workshop).type}
                    link={formatWorkshopForCard(workshop).link}
                    featured={formatWorkshopForCard(workshop).featured}
                    attendees={formatWorkshopForCard(workshop).attendees}
                  />
                  {workshop.registration.status === "waitlist" && (
                    <div className="absolute top-4 right-4">
                      <Chip color="warning" size="sm">
                        Waitlist
                      </Chip>
                    </div>
                  )}
                  {workshop.registration.status === "closed" && (
                    <div className="absolute top-4 right-4">
                      <Chip color="danger" size="sm">
                        Sold Out
                      </Chip>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Workshops / On-Demand */}
      {showPastEvents && pastWorkshops.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-semibold text-navy-900 mb-8">
              Past Workshops & On-Demand ({pastWorkshops.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastWorkshops.map((workshop) => (
                <div key={workshop.id} className="relative">
                  <EventCard
                    title={formatWorkshopForCard(workshop).title}
                    description={formatWorkshopForCard(workshop).description}
                    date={formatWorkshopForCard(workshop).date}
                    location={formatWorkshopForCard(workshop).location}
                    type={formatWorkshopForCard(workshop).type}
                    link={formatWorkshopForCard(workshop).link}
                    featured={formatWorkshopForCard(workshop).featured}
                    attendees={formatWorkshopForCard(workshop).attendees}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredWorkshops.length === 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <p className="text-gray-500 text-lg mb-4">No workshops found matching your criteria.</p>
            <Button
              variant="bordered"
              onPress={() => {
                setPersonaFilter("all");
                setMonthFilter("all");
                setLocationFilter("all");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-navy-900">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer custom workshops tailored to your team's specific needs. Let us design a
            learning experience that addresses your unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              color="primary"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              as="a"
              href="/contact"
            >
              Request Custom Workshop
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy-900"
              as="a"
              href="/events"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function WorkshopsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkshopsContent />
    </Suspense>
  );
}
