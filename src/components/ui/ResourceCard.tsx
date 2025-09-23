"use client";

import React from "react";

import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ResourceCardProps {
  title: string;
  description: string;
  type: string; // Allow any string for flexibility
  image?: string;
  link: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
  eyebrow?: React.ReactNode; // Custom eyebrow content
  footer?: React.ReactNode; // Custom footer content
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  image,
  link,
  date,
  readTime,
  tags,
  className = "",
  eyebrow,
  footer,
}) => {
  const typeStyles: Record<string, string> = {
    article: "bg-blue-100 text-blue-700",
    whitepaper: "bg-purple-100 text-purple-700",
    report: "bg-green-100 text-green-700",
    webinar: "bg-orange-100 text-orange-700",
    tool: "bg-pink-100 text-pink-700",
    "special-report": "bg-indigo-100 text-indigo-700",
    trend: "bg-teal-100 text-teal-700",
    benchmark: "bg-amber-100 text-amber-700",
    playbook: "bg-rose-100 text-rose-700",
  };

  const getTypeStyle = (t: string) => typeStyles[t.toLowerCase()] || "bg-gray-100 text-gray-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        className={`h-full bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 card-hover ${className}`}
      >
        {image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {!eyebrow && (
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeStyle(type)}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
                </span>
              </div>
            )}
          </div>
        )}

        <CardBody className="p-6">
          {eyebrow ? (
            <div>{eyebrow}</div>
          ) : !image ? (
            <div className="mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeStyle(type)}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
              </span>
            </div>
          ) : null}

          <h3 className="text-xl font-bold text-navy-900 mb-2 line-clamp-2">{title}</h3>

          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

          <div className="flex items-center text-sm text-gray-500 space-x-4">
            {date && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {date}
              </span>
            )}
            {readTime && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {readTime}
              </span>
            )}
          </div>

          {!footer && tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {footer && <div className="mt-4">{footer}</div>}
        </CardBody>

        <CardFooter className="px-6 pb-6 pt-0">
          <Button as="a" href={link} color="primary" variant="flat" className="w-full font-medium">
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
