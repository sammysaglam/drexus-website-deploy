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

export const StatBlock = ({
  value,
  label,
  description,
  trend,
  icon,
  className = "",
}: StatBlockProps) => {
  // Format large trend values for better display
  const formatTrendValue = (val: number) => {
    if (val >= 1000) {
      return `${(val / 1000).toFixed(0)}K`;
    }
    return val.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-6 md:p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors mb-2 ${className}`}
    >
      <div className="flex flex-col items-center text-center flex-1">
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">{label}</p>

        <div className="flex items-center justify-center gap-2">
          <p className="text-xl md:text-2xl font-bold text-navy-900 leading-tight whitespace-nowrap">
            {value}
          </p>

          {trend && (
            <div
              className={`flex items-center text-xs font-medium ${
                trend.isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              <svg
                className={`w-3 h-3 mr-1 ${trend.isPositive ? "" : "transform rotate-180"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {formatTrendValue(Math.abs(trend.value))}%
            </div>
          )}
        </div>

        {description && <p className="mt-3 text-xs text-gray-600 text-center">{description}</p>}
      </div>

      {icon && (
        <div className="mt-4 flex-shrink-0">
          <div className="p-3 bg-gray-50 rounded-lg text-gray-600">{icon}</div>
        </div>
      )}
    </motion.div>
  );
};
