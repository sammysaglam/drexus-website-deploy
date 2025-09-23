"use client";

import React from "react";

import { motion } from "framer-motion";

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Step: React.FC<StepProps> = ({ number, title, children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      className={`my-6 flex ${className}`}
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div className="ml-4 flex-1">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <div className="text-gray-700">{children}</div>
      </div>
    </motion.div>
  );
};
