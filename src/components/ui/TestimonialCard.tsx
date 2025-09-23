"use client";

import React from "react";

import { Card, CardBody, Avatar } from "@heroui/react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company?: string;
    avatar?: string;
  };
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${className}`}
      >
        <CardBody className="p-8">
          <svg className="w-10 h-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
            &ldquo;{quote}&rdquo;
          </blockquote>

          <div className="flex items-center">
            {author.avatar ? (
              <Avatar src={author.avatar} alt={author.name} className="w-12 h-12" />
            ) : (
              <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center text-white font-semibold">
                {author.name
                  ?.split(" ")
                  ?.map((n) => n[0])
                  ?.join("")
                  ?.toUpperCase()}
              </div>
            )}

            <div className="ml-4">
              <p className="font-semibold text-gray-900">{author.name}</p>
              <p className="text-sm text-gray-600">
                {author.title}
                {author.company && `, ${author.company}`}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
