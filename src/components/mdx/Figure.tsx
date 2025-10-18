"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export const Figure: React.FC<FigureProps> = ({ src, alt, caption, className = "" }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`my-8 ${className}`}
    >
      <div className="rounded-lg overflow-hidden shadow-lg relative">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={400}
          className="w-full h-auto"
          style={{ objectFit: "cover" }}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center italic">{caption}</figcaption>
      )}
    </motion.figure>
  );
};
