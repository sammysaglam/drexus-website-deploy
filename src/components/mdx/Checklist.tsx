"use client";

import React from "react";

import { motion } from "framer-motion";

interface ChecklistItem {
  text: string;
  checked?: boolean;
}

interface ChecklistProps {
  title?: string;
  items: ChecklistItem[] | string[];
  className?: string;
}

export const Checklist: React.FC<ChecklistProps> = ({ title, items, className = "" }) => {
  const normalizedItems = items.map((item) =>
    typeof item === "string" ? { text: item, checked: false } : item
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`my-8 p-6 bg-gray-50 rounded-lg ${className}`}
    >
      {title && <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>}
      <ul className="space-y-3">
        {normalizedItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              {item.checked ? (
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth={2} />
                </svg>
              )}
            </div>
            <span className={`ml-3 ${item.checked ? "text-gray-700" : "text-gray-700"}`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
