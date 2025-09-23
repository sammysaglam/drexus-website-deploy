"use client";

import React from "react";

import { motion } from "framer-motion";

interface DoDontProps {
  dos: string[];
  donts: string[];
  className?: string;
}

export const DoDont: React.FC<DoDontProps> = ({ dos, donts, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`my-8 grid md:grid-cols-2 gap-6 ${className}`}
    >
      {/* Do */}
      <div className="bg-white rounded-lg p-6 border-2 border-green-500">
        <h4 className="flex items-center text-lg font-semibold text-green-700 mb-4">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Do
        </h4>
        <ul className="space-y-3">
          {dos.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">✓</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Don't */}
      <div className="bg-white rounded-lg p-6 border-2 border-red-500">
        <h4 className="flex items-center text-lg font-semibold text-red-700 mb-4">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          Don&apos;t
        </h4>
        <ul className="space-y-3">
          {donts.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">✗</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
