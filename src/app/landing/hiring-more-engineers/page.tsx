import React from "react";

import type { Metadata } from "next";
import Script from "next/script";

import { NavMega, FooterMega } from "@/components/layout";

import HiringMoreEngineersContent from "./HiringMoreEngineersContent";

export const metadata: Metadata = {
  title: "She Thought Hiring More Engineers Would Fix It — System Over Staff | Drexus",
  description:
    "Throughput scales with clarity, not headcount. Learn how Sarah's team cleared their roadmap by optimizing systems, not hiring more engineers.",
  keywords: [
    "engineering velocity",
    "system optimization",
    "Friday Receipts",
    "delivery throughput",
    "team scaling",
    "roadmap velocity",
    "hiring engineers",
    "system before staff",
    "throughput optimization",
    "engineering team management",
    "CTO scaling",
    "development velocity",
  ],
  openGraph: {
    title: "She Thought Hiring More Engineers Would Fix It — System Over Staff | Drexus",
    description:
      "Throughput scales with clarity, not headcount. Learn how Sarah's team cleared their roadmap by optimizing systems, not hiring more engineers.",
    type: "article",
    url: "https://drexus.com/landing/hiring-more-engineers",
  },
  twitter: {
    card: "summary_large_image",
    title: "She Thought Hiring More Engineers Would Fix It — System Over Staff | Drexus",
    description:
      "Throughput scales with clarity, not headcount. Learn how Sarah's team cleared their roadmap by optimizing systems, not hiring more engineers.",
  },
};

export default function HiringMoreEngineersPage() {
  // JSON-LD structured data for this landing page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "She Thought Hiring More Engineers Would Fix It — System Over Staff",
    description:
      "Throughput scales with clarity, not headcount. Learn how Sarah's team cleared their roadmap by optimizing systems, not hiring more engineers.",
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
        <HiringMoreEngineersContent />
        <FooterMega />
      </div>
    </>
  );
}
