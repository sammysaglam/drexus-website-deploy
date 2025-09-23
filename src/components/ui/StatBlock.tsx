"use client";

import React from "react";

import { motion } from "framer-motion";

interface StatBlockProps {
  value: string | number;
  label: string;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  value,
  label,
  description,
  trend,
  icon,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-6 md:p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</p>

          <div className="mt-2 flex items-baseline">
            <p className="text-3xl md:text-4xl font-bold text-navy-900">{value}</p>

            {trend && (
              <div
                className={`ml-2 flex items-center text-sm font-medium ${
                  trend.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                <svg
                  className={`w-4 h-4 mr-1 ${trend.isPositive ? "" : "transform rotate-180"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {Math.abs(trend.value)}%
              </div>
            )}
          </div>

          {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
        </div>

        {icon && (
          <div className="ml-4 flex-shrink-0">
            <div className="p-3 bg-gray-50 rounded-lg text-gray-600">{icon}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
