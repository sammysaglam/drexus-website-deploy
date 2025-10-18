"use client";

import React from "react";

import { motion } from "framer-motion";

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
  className?: string;
}

export const Quote: React.FC<QuoteProps> = ({ children, author, role, className = "" }) => {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`my-8 ${className}`}
    >
      <div className="border-l-4 border-blue-600 pl-6 py-4">
        <div className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-4">
          &ldquo;{children}&rdquo;
        </div>
        {author && (
          <div className="text-sm text-gray-600">
            <span className="font-semibold">&mdash; {author}</span>
            {role && <span className="text-gray-500">, {role}</span>}
          </div>
        )}
      </div>
    </motion.blockquote>
  );
};
