"use client";

import React from "react";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";

interface LandingHeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  onCtaClick: () => void;
  ctaVariant?: "primary" | "secondary";
  className?: string;
}

export function LandingHero({
  headline,
  subheadline,
  ctaText,
  onCtaClick,
  ctaVariant = "primary",
  className = "",
}: LandingHeroProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-navy-900 mb-6 leading-tight">
            {headline}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              size="md"
              color={ctaVariant === "primary" ? "primary" : "secondary"}
              className={
                ctaVariant === "primary"
                  ? "bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-4"
                  : "bg-white text-navy-900 border-2 border-navy-900 hover:bg-navy-50 font-semibold px-8 py-4"
              }
              onPress={onCtaClick}
            >
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
