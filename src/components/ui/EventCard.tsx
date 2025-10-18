"use client";

import React from "react";

import { Card, CardBody, Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  description: string;
  date: {
    day: string;
    month: string;
    year: string;
    time?: string;
  };
  location: {
    city: string;
    venue?: string;
    isVirtual?: boolean;
  };
  type: "conference" | "webinar" | "workshop" | "summit" | "office-hours" | "roundtable";
  link: string;
  featured?: boolean;
  attendees?: number;
  className?: string;
  fixedHeight?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  location,
  type,
  link,
  featured = false,
  attendees,
  className = "",
  fixedHeight = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        as="a"
        href={link}
        className={`h-full ${fixedHeight ? "min-h-[280px]" : ""} bg-white border ${
          featured ? "border-blue-500 shadow-lg" : "border-gray-200"
        } hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
      >
        <CardBody className="p-0">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Date Block */}
            <div
              className={`flex-shrink-0 p-6 text-left lg:text-center ${
                featured ? "bg-blue-600 text-white" : "bg-gray-50"
              } lg:w-32`}
            >
              <div className="flex items-center gap-2 lg:flex-col lg:gap-0">
                <div className={`text-3xl font-bold ${featured ? "text-white" : "text-navy-900"}`}>
                  {date.day}
                </div>
                <div className="flex flex-col lg:block">
                  <div
                    className={`text-sm uppercase tracking-wider ${
                      featured ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {date.month}
                  </div>
                  <div className={`text-sm ${featured ? "text-blue-100" : "text-gray-500"}`}>
                    {date.year}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Chip
                    size="sm"
                    variant="flat"
                    color={
                      type === "conference"
                        ? "primary"
                        : type === "webinar"
                          ? "secondary"
                          : "default"
                    }
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Chip>
                  {featured && (
                    <Chip size="sm" color="warning" variant="flat">
                      Featured
                    </Chip>
                  )}
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-2 text-truncate-3">{title}</h3>

                <p className="text-gray-600 mb-4 text-truncate-2">{description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
                    {location.city}
                    {location.venue && ` • ${location.venue}`}
                    {location.isVirtual && " • Virtual"}
                  </div>

                  {/* {date.time && (
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {date.time}
                    </div>
                  )} */}

                  {attendees && (
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      {attendees}+ attendees
                    </div>
                  )}
                </div>
              </div>

              {/* Learn More Button at Bottom */}
              <div className="mt-4">
                <Button
                  color={featured ? "primary" : "default"}
                  variant={featured ? "solid" : "flat"}
                  size="sm"
                  className="font-medium"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
