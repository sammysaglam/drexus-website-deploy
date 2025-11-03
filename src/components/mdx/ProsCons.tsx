"use client";

import React from "react";

import { motion } from "framer-motion";

interface ProsConsProps {
  pros: string[];
  cons: string[];
  className?: string;
}

export const ProsCons: React.FC<ProsConsProps> = ({ pros, cons, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`my-8 grid md:grid-cols-2 gap-6 ${className}`}
    >
      {/* Pros */}
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <h4 className="flex items-center text-lg font-semibold text-green-900 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Pros
        </h4>
        <ul className="space-y-2">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <h4 className="flex items-center text-lg font-semibold text-red-900 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Cons
        </h4>
        <ul className="space-y-2">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-4 h-4 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="text-gray-700">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
