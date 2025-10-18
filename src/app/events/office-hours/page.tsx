"use client";

import { useState, useMemo, Suspense } from "react";

import { Button, Chip, Input, Select, SelectItem, Card, CardBody } from "@heroui/react";

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

const topics = [
  { value: "all", label: "All Topics" },
  { value: "technical", label: "Technical" },
  { value: "product", label: "Product Strategy" },
  { value: "growth", label: "Growth & Marketing" },
  { value: "operations", label: "Operations" },
  { value: "leadership", label: "Leadership" },
  { value: "funding", label: "Funding & Finance" },
];

function OfficeHoursContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Office Hours", href: "/events/office-hours" },
  ];

  const [personaFilter, setPersonaFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Get only office hours events
  const allOfficeHours = getEventsByType("office-hours");

  const filteredOfficeHours = useMemo(() => {
    return allOfficeHours
      .filter((officeHour) => {
        // Status filter
        const isOfficeHourPast = new Date(officeHour.date.start) <= new Date();
        if (!showPastEvents && isOfficeHourPast) return false;

        // Persona filter
        if (personaFilter !== "all" && !officeHour.persona.includes(personaFilter)) return false;

        // Month filter
        if (monthFilter !== "all") {
          const eventMonth = new Date(officeHour.date.start).getMonth() + 1;
          if (eventMonth.toString() !== monthFilter) return false;
        }

        // Topic filter (based on tags)
        if (topicFilter !== "all") {
          const hasTopicTag = officeHour.tags.some((tag) =>
            tag.toLowerCase().includes(topicFilter.toLowerCase())
          );
          if (!hasTopicTag) return false;
        }

        // Search filter
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            officeHour.title.toLowerCase().includes(query) ||
            officeHour.description.toLowerCase().includes(query) ||
            officeHour.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            officeHour.speakers.some(
              (speaker) =>
                speaker.name.toLowerCase().includes(query) ||
                speaker.title.toLowerCase().includes(query)
            )
          );
        }

        return true;
      })
      .sort((a, b) => new Date(b.date.start).getTime() - new Date(a.date.start).getTime());
  }, [allOfficeHours, personaFilter, monthFilter, topicFilter, searchQuery, showPastEvents]);

  const now = new Date();
  const upcomingOfficeHours = filteredOfficeHours.filter((oh) => new Date(oh.date.start) > now);
  const pastOfficeHours = filteredOfficeHours.filter((oh) => new Date(oh.date.start) <= now);

  // Convert Event to EventCard format
  const formatOfficeHourForCard = (officeHour: Event) => ({
    id: officeHour.id,
    title: officeHour.title,
    description: officeHour.description,
    date: {
      day: new Date(officeHour.date.start).getDate().toString().padStart(2, "0"),
      month: new Date(officeHour.date.start)
        .toLocaleDateString("en-US", { month: "short" })
        .toUpperCase(),
      year: new Date(officeHour.date.start).getFullYear().toString(),
      time: new Date(officeHour.date.start).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }),
    },
    location: {
      city: officeHour.location.city || "Virtual",
      venue: officeHour.location.venue,
      isVirtual: officeHour.location.type === "virtual",
    },
    type: officeHour.type,
    link: `/events/${officeHour.slug}`,
    featured: officeHour.featured,
    attendees: officeHour.registration.registered,
  });

  return (
    <>
      <PageHeader
        title="Office Hours"
        subtitle="Get direct access to our experts for personalized advice, quick wins, and strategic guidance"
        breadcrumbs={breadcrumbs}
      />

      {/* Office Hours Concept Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">What Are Office Hours?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Think of Office Hours as your direct line to industry experts. These are intimate,
              interactive sessions where you can ask specific questions, get personalized advice,
              and receive actionable guidance tailored to your unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardBody className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Ask Anything</h3>
                <p className="text-gray-600 text-sm">
                  No question is too basic or too complex. Get expert answers to your specific
                  challenges.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardBody className="text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Quick Wins</h3>
                <p className="text-gray-600 text-sm">
                  Get immediate, actionable advice you can implement right away to solve pressing
                  issues.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardBody className="text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
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
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Small Groups</h3>
                <p className="text-gray-600 text-sm">
                  Intimate sessions with limited participants ensure personalized attention and
                  deeper insights.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardBody className="text-center p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Real-Time Help</h3>
                <p className="text-gray-600 text-sm">
                  Get instant feedback and guidance on your current projects and immediate
                  challenges.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">How Office Hours Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Office Hours are designed to maximize value in minimal time. Here's what to
              expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Submit Your Question</h3>
              <p className="text-gray-600">
                When you register, share your specific challenge or question. This helps our experts
                prepare and ensures you get targeted advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Join the Session</h3>
              <p className="text-gray-600">
                Participate in a small group discussion where everyone gets individual attention.
                Ask follow-up questions and dive deep into solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Take Action</h3>
              <p className="text-gray-600">
                Leave with a clear action plan, specific next steps, and the confidence to implement
                solutions immediately.
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
              label="Topic"
              selectedKeys={[topicFilter]}
              onChange={(e) => setTopicFilter(e.target.value)}
              size="sm"
              items={topics}
            >
              {(item: FilterOption) => <SelectItem key={item.value}>{item.label}</SelectItem>}
            </Select>

            <div className="flex flex-col">
              <Input
                placeholder="Search office hours..."
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
                className="w-full h-12 text-[16px]"
              >
                {showPastEvents ? "Hide Past Sessions" : "Show Past Sessions"}
              </Button>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600 text-center">
            All times shown in Europe/Zurich timezone.
          </div>
        </div>
      </section>

      {/* Upcoming Office Hours */}
      {!showPastEvents && upcomingOfficeHours.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-semibold text-navy-900 mb-8">
              Upcoming Office Hours ({upcomingOfficeHours.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingOfficeHours.map((officeHour) => (
                <div key={officeHour.id} className="relative">
                  <EventCard
                    title={formatOfficeHourForCard(officeHour).title}
                    description={formatOfficeHourForCard(officeHour).description}
                    date={formatOfficeHourForCard(officeHour).date}
                    location={formatOfficeHourForCard(officeHour).location}
                    type={formatOfficeHourForCard(officeHour).type}
                    link={formatOfficeHourForCard(officeHour).link}
                    featured={formatOfficeHourForCard(officeHour).featured}
                    attendees={formatOfficeHourForCard(officeHour).attendees}
                  />
                  {officeHour.registration.status === "waitlist" && (
                    <div className="absolute top-4 right-4">
                      <Chip color="warning" size="sm">
                        Waitlist
                      </Chip>
                    </div>
                  )}
                  {officeHour.registration.status === "closed" && (
                    <div className="absolute top-4 right-4">
                      <Chip color="danger" size="sm">
                        Full
                      </Chip>
                    </div>
                  )}
                  {/* {getLocalTimeHint(officeHour) && (
                    <div className="mt-2 text-xs text-gray-500 text-center">
                      {getLocalTimeHint(officeHour)}
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Office Hours */}
      {showPastEvents && pastOfficeHours.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-semibold text-navy-900 mb-8">
              Past Office Hours ({pastOfficeHours.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastOfficeHours.map((officeHour) => (
                <div key={officeHour.id} className="relative">
                  <EventCard
                    title={formatOfficeHourForCard(officeHour).title}
                    description={formatOfficeHourForCard(officeHour).description}
                    date={formatOfficeHourForCard(officeHour).date}
                    location={formatOfficeHourForCard(officeHour).location}
                    type={formatOfficeHourForCard(officeHour).type}
                    link={formatOfficeHourForCard(officeHour).link}
                    featured={formatOfficeHourForCard(officeHour).featured}
                    attendees={formatOfficeHourForCard(officeHour).attendees}
                  />
                  {officeHour.onDemand?.available && (
                    <div className="absolute top-4 right-4">
                      <Chip color="success" size="sm">
                        Recording Available
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
      {filteredOfficeHours.length === 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <p className="text-gray-500 text-lg mb-4">
              No office hours found matching your criteria.
            </p>
            <Button
              variant="bordered"
              onPress={() => {
                setPersonaFilter("all");
                setMonthFilter("all");
                setTopicFilter("all");
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
          <h2 className="text-3xl font-bold text-white mb-4">Need More Personalized Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Office Hours not quite what you need? We offer one-on-one consulting sessions and custom
            workshops tailored to your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              color="primary"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              as="a"
              href="/contact"
            >
              Book a Consultation
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy-900"
              as="a"
              href="/events/workshops"
            >
              Explore Workshops
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function OfficeHoursPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OfficeHoursContent />
    </Suspense>
  );
}
