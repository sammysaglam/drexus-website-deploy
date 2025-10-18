"use client";

import React from "react";

import { Button, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

interface LandingCTAProps {
  headline: string;
  description?: string;
  ctaText: string;
  onCtaClick: () => void;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  // Optional secondary action
  secondaryText?: string;
  secondaryHref?: string;
}

export function LandingCTA({
  headline,
  description,
  ctaText,
  onCtaClick,
  variant = "primary",
  className = "",
  secondaryText,
  secondaryHref,
}: LandingCTAProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "accent":
        return {
          container: "bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white",
          button:
            "bg-white text-navy-900 hover:bg-gray-100 font-semibold px-4 sm:px-8 py-3 sm:py-4 w-full sm:w-fit text-sm sm:text-base",
          secondaryButton:
            "bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-4 sm:px-8 py-3 sm:py-4 w-full sm:w-fit text-sm sm:text-base",
        };
      case "secondary":
        return {
          container: "bg-gray-50",
          button:
            "bg-navy-900 text-white hover:bg-navy-800 font-semibold px-4 sm:px-8 py-3 sm:py-4 w-full sm:w-fit text-sm sm:text-base",
          secondaryButton:
            "bg-white text-navy-900 border-2 border-navy-900 hover:bg-navy-50 font-semibold px-4 sm:px-8 py-3 sm:py-4 w-full sm:w-fit text-sm sm:text-base",
        };
      default:
        return {
          container: "bg-navy-900 text-white",
          button:
            "bg-white text-navy-900 hover:bg-gray-100 font-semibold px-4 sm:px-8 py-3 sm:py-4 w-full sm:w-fit text-sm sm:text-base",
          secondaryButton:
            "bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-4 sm:px-8 py-3 sm:py-4 w-full sm:w-fit text-sm sm:text-base",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <div className="mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className={`${styles.container} border-none`}>
            <CardBody className="p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4 sm:mb-6">
                {headline}
              </h2>

              {description && (
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
                  {description}
                </p>
              )}

              <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 sm:flex-nowrap flex-wrap w-full">
                <Button size="md" className={styles.button} onPress={onCtaClick}>
                  {ctaText}
                </Button>
                {secondaryText && secondaryHref ? (
                  <Link href={secondaryHref} className="inline-flex w-full sm:w-auto">
                    <Button size="md" className={styles.secondaryButton}>
                      {secondaryText}
                    </Button>
                  </Link>
                ) : null}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
