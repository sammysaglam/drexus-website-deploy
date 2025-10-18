"use client";

import { useState, useMemo } from "react";

import { Button, Chip, Input, Select, SelectItem, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

import { EventCard } from "@/components/ui/EventCard";
import { getAllEvents, Event, getLocalTimeHint } from "@/lib/events";

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

export default function WebinarsClient() {
  const [personaFilter, setPersonaFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPastWebinars, setShowPastWebinars] = useState(false);

  // Newsletter subscription state
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const allEvents = getAllEvents();

  // Filter only webinar events
  const webinarEvents = allEvents.filter((event) => event.type === "webinar");

  const filteredWebinars = useMemo(() => {
    return webinarEvents
      .filter((event) => {
        // Status filter - show upcoming or past events based on toggle
        const isEventUpcoming = new Date(event.date.start) > new Date();
        if (!showPastWebinars && !isEventUpcoming) return false; // Show only upcoming events
        if (showPastWebinars && isEventUpcoming) return false; // Show only past events

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
      })
      .sort((a, b) => new Date(b.date.start).getTime() - new Date(a.date.start).getTime());
  }, [webinarEvents, personaFilter, monthFilter, searchQuery, showPastWebinars]);

  const upcomingWebinars = filteredWebinars.filter((e) => e.status === "upcoming");
  const pastWebinars = filteredWebinars.filter((e) => e.status === "past");

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email address" });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/event-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          eventTitle: "Webinar Notifications",
          eventId: "webinar-newsletter",
          eventDate: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "Successfully subscribed! We'll notify you about upcoming webinars.",
        });
        setEmail(""); // Clear the form
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to subscribe. Please try again.",
        });
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Convert Event to EventCard format
  const formatEventForCard = (event: Event) => {
    const eventDate = new Date(event.date.start);
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    return {
      title: event.title,
      description: event.description,
      date: {
        day: eventDate.getDate().toString().padStart(2, "0"),
        month: months[eventDate.getMonth()],
        year: eventDate.getFullYear().toString(),
        time: getLocalTimeHint(event),
      },
      location: {
        city: event.location.city || "Virtual",
        venue: event.location.venue,
        isVirtual: event.location.type === "virtual",
      },
      type: event.type as "webinar",
      link: `/events/${event.slug}`,
      featured: event.featured,
      attendees: event.registration.registered,
    };
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl lg:text-4xl font-serif font-bold mb-6"
              >
                Learn from the Experts
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg text-blue-100 mb-8"
              >
                Join our free webinars to get actionable insights on product development, technical
                strategy, and growth optimization. No fluff, just proven frameworks from our work
                with 100+ companies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  color="primary"
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8"
                  onPress={() => setShowPastWebinars(false)}
                >
                  View Upcoming
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-white !text-white hover:bg-white/10 font-semibold px-8"
                  onPress={() => setShowPastWebinars(true)}
                >
                  Watch Recordings
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardBody className="text-center p-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    {webinarEvents.filter((e) => e.status === "upcoming").length}
                  </div>
                  <div className="text-sm text-blue-100">Upcoming Webinars</div>
                </CardBody>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardBody className="text-center p-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    {
                      webinarEvents.filter((e) => e.status === "past" && e.onDemand?.available)
                        .length
                    }
                  </div>
                  <div className="text-sm text-blue-100">On-Demand Videos</div>
                </CardBody>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardBody className="text-center p-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    {webinarEvents.reduce((sum, e) => sum + (e.registration.registered || 0), 0)}
                  </div>
                  <div className="text-sm text-blue-100">Total Attendees</div>
                </CardBody>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardBody className="text-center p-6">
                  <div className="text-3xl font-bold text-white mb-2">Free</div>
                  <div className="text-sm text-blue-100">All Webinars</div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              placeholder="Search webinars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="lg"
              className="h-12 text-[16px]"
              startContent={
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

            <div className="flex gap-2">
              <Button
                size="sm"
                variant={!showPastWebinars ? "solid" : "bordered"}
                color={!showPastWebinars ? "primary" : "default"}
                onPress={() => setShowPastWebinars(false)}
                className="flex-1 h-12 text-[16px]"
              >
                Upcoming
              </Button>
              <Button
                size="sm"
                variant={showPastWebinars ? "solid" : "bordered"}
                color={showPastWebinars ? "primary" : "default"}
                onPress={() => setShowPastWebinars(true)}
                className="flex-1 h-12 text-[16px]"
              >
                Past
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars List */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          {!showPastWebinars && upcomingWebinars.length > 0 && (
            <div className="mb-12">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-900 mb-2">
                    Upcoming Webinars
                  </h2>
                  <p className="text-gray-600">
                    Join our live sessions and get your questions answered by experts
                  </p>
                </div>
                <Chip color="success" variant="flat" size="sm">
                  {upcomingWebinars.length} upcoming
                </Chip>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingWebinars.map((webinar) => (
                  <EventCard key={webinar.id} {...formatEventForCard(webinar)} />
                ))}
              </div>
            </div>
          )}

          {showPastWebinars && pastWebinars.length > 0 && (
            <div>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-900 mb-2">
                    Past Webinars
                  </h2>
                </div>
                <Chip color="secondary" variant="flat" size="sm">
                  {pastWebinars.length} Webinars
                </Chip>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastWebinars.map((webinar) => (
                  <div key={webinar.id} className="relative">
                    <EventCard {...formatEventForCard(webinar)} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredWebinars.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No webinars found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <Button
                color="primary"
                variant="flat"
                onPress={() => {
                  setPersonaFilter("all");
                  setMonthFilter("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-900 mb-4">
            Never Miss a Webinar
          </h2>
          <p className="text-gray-600 mb-8">
            Get notified about upcoming webinars and access to exclusive content. Join 500+
            technology leaders who trust our insights.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                size="lg"
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isDisabled={isLoading}
                classNames={{
                  input: "text-base",
                  inputWrapper: "border-gray-300 focus-within:border-navy-500",
                }}
                isRequired
              />
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="bg-navy-900 font-medium text-base"
                isLoading={isLoading}
                isDisabled={!email.trim()}
              >
                Subscribe
              </Button>
            </div>

            {message && (
              <div
                className={`p-3 rounded-lg text-base border mb-4 ${
                  message.type === "success"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }`}
              >
                {message.text}
              </div>
            )}

            <p className="text-xs text-gray-500">Weekly webinar updates. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>
    </>
  );
}
