"use client";

import { Button, Card, CardBody, Chip, Avatar, Progress } from "@heroui/react";
import Link from "next/link";

import { Event, generateICS, Speaker, AgendaItem } from "@/lib/events";

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
  const handleCalendarDownload = () => {
    const icsContent = generateICS(event);
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.slug}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="sticky top-4">
      <CardBody className="p-6">
        <h2 className="text-xl font-semibold text-navy-900 mb-4">Registration</h2>

        {/* Registration Status */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Status</span>
            <Chip
              color={
                event.registration.status === "open"
                  ? "success"
                  : event.registration.status === "waitlist"
                    ? "warning"
                    : "default"
              }
              variant="flat"
              size="sm"
            >
              {event.registration.status === "open"
                ? "Open"
                : event.registration.status === "waitlist"
                  ? "Waitlist"
                  : "Closed"}
            </Chip>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Price</span>
            <span className="font-semibold text-navy-800">{event.registration.price}</span>
          </div>

          {event.registration.capacity && (
            <>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Spots</span>
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
          {isUpcoming && (
            <Button
              color="primary"
              size="lg"
              className="w-full"
              as="a"
              href={event.registration.link}
              target="_blank"
              rel="noopener noreferrer"
              isDisabled={event.registration.status === "closed"}
            >
              {event.registration.status === "open"
                ? "Register Now"
                : event.registration.status === "waitlist"
                  ? "Join Waitlist"
                  : "Registration Closed"}
            </Button>
          )}

          {!isUpcoming && event.onDemand?.available && (
            <Button
              color="primary"
              size="lg"
              className="w-full"
              as={Link}
              href={`/events/on-demand/${event.onDemand.slug}`}
            >
              Watch On-Demand
            </Button>
          )}

          <Button
            variant="bordered"
            size="lg"
            className="w-full"
            onPress={handleCalendarDownload}
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
            Add to Calendar
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
            {speaker.linkedin && (
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            )}
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
