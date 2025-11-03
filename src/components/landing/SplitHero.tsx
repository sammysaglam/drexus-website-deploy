"use client";

import React from "react";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SplitHeroProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
  onCtaClick: () => void;
  secondaryText?: string;
  onSecondaryClick?: () => void;
  imageSrc: string;
  imageAlt: string;
  ctaVariant?: "primary" | "secondary";
  className?: string;
  backgroundColor?: string;
  dark?: boolean;
  heightPx?: number;
  contentMaxWidthPx?: number;
  imageWidthPercent?: number;
  imageGutterPx?: number;
}

export function SplitHero({
  headline,
  subheadline,
  ctaText,
  onCtaClick,
  secondaryText,
  onSecondaryClick,
  imageSrc,
  imageAlt,
  ctaVariant = "primary",
  className = "",
  backgroundColor,
  dark = false,
  heightPx = 560,
  contentMaxWidthPx = 560,
  imageWidthPercent = 56,
  imageGutterPx = 24,
}: SplitHeroProps) {
  return (
    <section
      className={`py-12 lg:py-0 ${className}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div
        className="mx-auto px-6 max-w-6xl relative lg:h-[var(--hero-h)]"
        style={{ ["--hero-h" as any]: `${heightPx}px` }}
      >
        {/* Left: text + button */}
        <div
          className="relative z-[1] flex h-full items-center justify-center lg:justify-start lg:pr-[calc(var(--img-reserve))]"
          style={{ ["--img-reserve" as any]: `${imageWidthPercent}% + ${imageGutterPx}px` }}
        >
          <div
            className="text-center lg:text-left mx-auto"
            style={{ maxWidth: `${contentMaxWidthPx}px` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                className={`text-4xl lg:text-6xl font-serif font-bold leading-tight ${dark ? "text-white" : "text-navy-900"}`}
              >
                {headline}
              </h1>
              {subheadline ? (
                <p
                  className={`mt-5 text-lg lg:text-2xl max-w-2xl ${dark ? "text-gray-200" : "text-gray-600"}`}
                >
                  {subheadline}
                </p>
              ) : null}
              <div className="mt-8">
                <Button
                  size="md"
                  color={ctaVariant === "primary" ? "primary" : "secondary"}
                  className={
                    dark
                      ? "border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-4 bg-transparent w-full sm:w-[320px]"
                      : ctaVariant === "primary"
                        ? "bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-4 w-full sm:w-[320px]"
                        : "bg-white text-navy-900 border-2 border-navy-900 hover:bg-navy-50 font-semibold px-8 py-4 w-full sm:w-[320px]"
                  }
                  onPress={onCtaClick}
                >
                  {ctaText}
                </Button>
              </div>
              {secondaryText && onSecondaryClick ? (
                <div className="mt-4">
                  <Button
                    size="md"
                    color={ctaVariant === "primary" ? "primary" : "secondary"}
                    className={
                      dark
                        ? "border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-4 bg-transparent w-full sm:w-[320px]"
                        : ctaVariant === "primary"
                          ? "bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8 py-4 w-full sm:w-[320px]"
                          : "bg-white text-navy-900 border-2 border-navy-900 hover:bg-navy-50 font-semibold px-8 py-4 w-full sm:w-[320px]"
                    }
                    onPress={onSecondaryClick}
                  >
                    {secondaryText}
                  </Button>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>

        {/* Right: image, pinned to the right and filling hero height (mirrors homepage behavior) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-y-0 right-0 hidden lg:block items-end justify-end"
          style={{ width: `${imageWidthPercent}%` }}
        >
          <div className="relative w-full h-full overflow-visible">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
