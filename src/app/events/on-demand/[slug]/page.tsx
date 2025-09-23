import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EventCard } from "@/components/ui/EventCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllEvents, Event } from "@/lib/events";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getOnDemandEvent(slug: string): Event | undefined {
  const allEvents = getAllEvents();
  return allEvents.find(
    (event) => event.status === "past" && event.onDemand?.available && event.onDemand.slug === slug
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getOnDemandEvent(slug);

  if (!event) {
    return {
      title: "Recording Not Found",
    };
  }

  return {
    title: `${event.title} (Recording) | Events`,
    description: `Watch the recording of ${event.title}. ${event.description}`,
    openGraph: {
      title: `${event.title} (Recording)`,
      description: event.description,
      type: "video.other",
    },
  };
}

export default async function OnDemandPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getOnDemandEvent(slug);

  if (!event || !event.onDemand) {
    notFound();
  }

  const relatedEvents = getAllEvents()
    .filter((e) => e.id !== event.id && e.type === event.type)
    .slice(0, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "On-Demand", href: "/events?showPastEvents=true" },
    { label: event.title, href: `/events/on-demand/${slug}` },
  ];

  // JSON-LD VideoObject Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: event.title,
    description: event.description,
    duration: event.onDemand.duration,
    uploadDate: event.date.start,
    contentUrl: `https://drexus.com/events/on-demand/${slug}`,
    embedUrl: `https://drexus.com/embed/events/${slug}`,
    thumbnailUrl: event.speakers[0]?.photo,
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: event.onDemand.views,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader title={event.title} subtitle="On-Demand Recording" breadcrumbs={breadcrumbs} />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Video Player */}
            <div className="lg:col-span-2">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 text-gray-400 mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-400">Video player would be embedded here</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Duration: {event.onDemand.duration} • {event.onDemand.views} views
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-navy-900 mb-2">{event.title}</h1>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Recorded {new Date(event.date.start).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{event.onDemand.duration}</span>
                  <span>•</span>
                  <span>{event.onDemand.views} views</span>
                </div>
              </div>

              {/* Transcript */}
              {event.onDemand.transcript && (
                <div className="border rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-navy-900 mb-4">Transcript Available</h2>
                  <p className="text-gray-600 mb-4">
                    A full transcript of this recording is available for accessibility and search.
                  </p>
                  <button className="text-navy-600 hover:text-navy-700 font-medium">
                    View Full Transcript →
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Speakers */}
              <div className="border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-navy-900 mb-4">Speakers</h2>
                <div className="space-y-4">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Image
                        src={speaker.photo}
                        alt={speaker.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-navy-800">{speaker.name}</h3>
                        <p className="text-sm text-gray-600">{speaker.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              {event.resources && event.resources.length > 0 && (
                <div className="border rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-navy-900 mb-4">Resources</h2>
                  <div className="space-y-3">
                    {event.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.link}
                        className="flex items-center gap-2 text-navy-600 hover:text-navy-700"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                          />
                        </svg>
                        <span className="text-sm font-medium">{resource.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Event Details */}
              <div className="border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-navy-900 mb-4">Event Details</h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-gray-600">Original Date</dt>
                    <dd className="font-medium text-navy-800">
                      {new Date(event.date.start).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Type</dt>
                    <dd className="font-medium text-navy-800 capitalize">{event.type}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-600">Audience</dt>
                    <dd className="flex flex-wrap gap-2 mt-1">
                      {event.persona.map((p) => (
                        <span
                          key={p}
                          className="inline-block px-2 py-1 text-xs bg-gray-100 rounded capitalize"
                        >
                          {p}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="border rounded-lg p-6 bg-navy-50">
                <h3 className="font-semibold text-navy-900 mb-2">Want to attend live next time?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Join our mailing list to get notified about upcoming events.
                </p>
                <Link
                  href="/events"
                  className="inline-block w-full text-center px-4 py-2 bg-navy-600 text-white rounded hover:bg-navy-700 transition-colors"
                >
                  View Upcoming Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-semibold text-navy-900 mb-8">More On-Demand Content</h2>
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
                  link={
                    relatedEvent.onDemand?.available
                      ? `/events/on-demand/${relatedEvent.onDemand.slug}`
                      : `/events/${relatedEvent.slug}`
                  }
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
