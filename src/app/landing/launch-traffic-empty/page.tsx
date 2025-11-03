import React from "react";

import type { Metadata } from "next";
import Script from "next/script";

import { NavMega, FooterMega } from "@/components/layout";

import LaunchTrafficEmptyContent from "./LaunchTrafficEmptyContent";

export const metadata: Metadata = {
  title: "When The Launch Was Live And The Traffic Was Empty | Launch Features People Use",
  description:
    "A go-live without outcome is just a checkbox. Learn how to launch features people actually use with persona-driven marketing and proper go-to-market alignment.",
  keywords: [
    "product launch",
    "user acquisition",
    "persona mapping",
    "go-to-market strategy",
    "feature adoption",
    "user activation",
    "marketing alignment",
    "product marketing",
    "launch strategy",
    "user engagement",
    "product launch failure",
    "empty traffic",
  ],
  openGraph: {
    title: "When The Launch Was Live And The Traffic Was Empty | Launch Features People Use",
    description:
      "A go-live without outcome is just a checkbox. Learn how to launch features people actually use with persona-driven marketing and proper go-to-market alignment.",
    type: "article",
    url: "https://drexus.com/landing/launch-traffic-empty",
  },
  twitter: {
    card: "summary_large_image",
    title: "When The Launch Was Live And The Traffic Was Empty | Launch Features People Use",
    description:
      "A go-live without outcome is just a checkbox. Learn how to launch features people actually use with persona-driven marketing and proper go-to-market alignment.",
  },
};

export default function LaunchTrafficEmptyPage() {
  // JSON-LD structured data for this landing page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When The Launch Was Live And The Traffic Was Empty",
    description:
      "A go-live without outcome is just a checkbox. Learn how to launch features people actually use with persona-driven marketing and proper go-to-market alignment.",
    author: {
      "@type": "Organization",
      name: "Drexus",
    },
    publisher: {
      "@type": "Organization",
      name: "Drexus",
      logo: {
        "@type": "ImageObject",
        url: "https://drexus.com/logo.png",
      },
    },
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <NavMega />
        <LaunchTrafficEmptyContent />
        <FooterMega />
      </div>
    </>
  );
}
