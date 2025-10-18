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
  const isUpcoming = new Date(event.date.start) > new Date();
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
      price: event.registration.price === 0 ? "0" : event.registration.price.toString(),
      priceCurrency: event.registration.currency || "CHF",
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
