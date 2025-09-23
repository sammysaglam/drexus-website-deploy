import { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  EventDetailClient,
  SpeakerCard,
  EventInfoBar,
  AgendaCard,
} from "@/components/events/EventDetailClient";
import { EventCard } from "@/components/ui/EventCard";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  getEventBySlug,
  getRelatedEvents,
  formatEventDate,
  getLocalTimeHint,
  getEventTypeLabel,
  getEventTypeColor,
} from "@/lib/events";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | Events`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "website",
      images: event.speakers[0]?.photo ? [event.speakers[0].photo] : undefined,
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = getRelatedEvents(event);
  const isUpcoming = event.status === "upcoming";
  const isFull = !!(
    event.registration.capacity &&
    event.registration.registered !== undefined &&
    event.registration.registered >= event.registration.capacity
  );
  const registrationPercentage =
    event.registration.capacity && event.registration.registered !== undefined
      ? (event.registration.registered / event.registration.capacity) * 100
      : 0;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: event.title, href: `/events/${event.slug}` },
  ];

  // JSON-LD Event Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.date.start,
    endDate: event.date.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode:
      event.location.type === "virtual"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : event.location.type === "hybrid"
          ? "https://schema.org/MixedEventAttendanceMode"
          : "https://schema.org/OfflineEventAttendanceMode",
    location:
      event.location.type === "virtual"
        ? {
            "@type": "VirtualLocation",
            url: event.registration.link,
          }
        : {
            "@type": "Place",
            name: event.location.venue,
            address: {
              "@type": "PostalAddress",
              streetAddress: event.location.address,
              addressLocality: event.location.city,
              addressCountry: event.location.country,
            },
          },
    organizer: {
      "@type": "Organization",
      name: "Drexus",
      url: "https://drexus.com",
    },
    performer: event.speakers.map((speaker) => ({
      "@type": "Person",
      name: speaker.name,
      jobTitle: speaker.title,
    })),
    offers: {
      "@type": "Offer",
      price: event.registration.price === "Free" ? "0" : event.registration.price,
      priceCurrency: event.registration.price.includes("CHF") ? "CHF" : "USD",
      availability: isFull ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
      url: event.registration.link,
    },
  };

  const personas: Record<string, string> = {
    founder: "Founders",
    cto: "CTOs",
    product: "Product Managers",
    "product-lead": "Product Leaders",
    ops: "Operations",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={event.title} subtitle={event.description} breadcrumbs={breadcrumbs} />

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Event Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Info Bar */}
              <EventInfoBar
                event={event}
                formattedDate={formatEventDate(event)}
                typeLabel={getEventTypeLabel(event.type)}
                typeColor={getEventTypeColor(event.type)}
                localTimeHint={getLocalTimeHint(event)}
              />

              {/* Speakers */}
              <div>
                <h2 className="text-xl font-semibold text-navy-900 mb-4">Speakers</h2>
                <div className="space-y-4">
                  {event.speakers.map((speaker, index) => (
                    <SpeakerCard key={index} speaker={speaker} />
                  ))}
                </div>
              </div>

              {/* Agenda */}
              {event.agenda && (
                <div>
                  <h2 className="text-xl font-semibold text-navy-900 mb-4">Agenda</h2>
                  <AgendaCard agenda={event.agenda} />
                </div>
              )}

              {/* Resources */}
              {event.resources && event.resources.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-navy-900 mb-4">Resources</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.link}
                        className="flex items-center gap-3 p-4 border rounded-lg hover:border-navy-300 transition-colors"
                      >
                        <div className="text-navy-600">
                          {resource.type === "pdf" && (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          )}
                          {resource.type === "tool" && (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                          {resource.type === "template" && (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-navy-800">{resource.title}</p>
                          <p className="text-sm text-gray-600 capitalize">{resource.type}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Registration */}
            <div className="space-y-6">
              <EventDetailClient
                event={event}
                isUpcoming={isUpcoming}
                isFull={isFull}
                registrationPercentage={registrationPercentage}
                personas={personas}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-semibold text-navy-900 mb-8">Related Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((relatedEvent) => (
                <EventCard
                  key={relatedEvent.id}
                  title={relatedEvent.title}
                  description={relatedEvent.description}
                  date={{
                    day: new Date(relatedEvent.date.start).getDate().toString().padStart(2, "0"),
                    month: new Date(relatedEvent.date.start)
                      .toLocaleDateString("en-US", { month: "short" })
                      .toUpperCase(),
                    year: new Date(relatedEvent.date.start).getFullYear().toString(),
                    time: new Date(relatedEvent.date.start).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      timeZoneName: "short",
                    }),
                  }}
                  location={{
                    city: relatedEvent.location.city || "Virtual",
                    venue: relatedEvent.location.venue,
                    isVirtual: relatedEvent.location.type === "virtual",
                  }}
                  type={relatedEvent.type}
                  link={`/events/${relatedEvent.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
