import React from "react";

import type { Metadata } from "next";
import Script from "next/script";

import { NavMega, FooterMega } from "@/components/layout";

import AffordableDevCostsContent from "./AffordableDevCostsContent";

export const metadata: Metadata = {
  title: "\"We Hired 'Affordable,' It Cost €27k.\" - The Hidden Math Behind Cheap Devs",
  description:
    "The hidden math behind cheap devs. Use our fixed-price estimator to see what reliable actually costs, and saves. Get predictable cost, senior execution, and visible progress every Friday.",
  keywords: [
    "affordable developers",
    "cheap development",
    "fixed price estimator",
    "app scope 1-pager",
    "startup development costs",
    "reliable development team",
    "Friday progress receipts",
    "vendor red flags",
    "MVP scope builder",
    "development cost calculator",
  ],
  openGraph: {
    title: "\"We Hired 'Affordable,' It Cost €27k.\" - The Hidden Math Behind Cheap Devs",
    description:
      "The hidden math behind cheap devs. Use our fixed-price estimator to see what reliable actually costs, and saves. Get predictable cost, senior execution, and visible progress every Friday.",
    type: "article",
    url: "https://drexus.com/landing/affordable-dev-costs",
  },
  twitter: {
    card: "summary_large_image",
    title: "\"We Hired 'Affordable,' It Cost €27k.\" - The Hidden Math Behind Cheap Devs",
    description:
      "The hidden math behind cheap devs. Use our fixed-price estimator to see what reliable actually costs, and saves. Get predictable cost, senior execution, and visible progress every Friday.",
  },
};

export default function MVPScopeDisasterPage() {
  // JSON-LD structured data for this landing page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "\"We Hired 'Affordable,' It Cost €27k.\" - The Hidden Math Behind Cheap Devs",
    description:
      "The hidden math behind cheap devs. Use our fixed-price estimator to see what reliable actually costs, and saves. Get predictable cost, senior execution, and visible progress every Friday.",
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
        <AffordableDevCostsContent />
        <FooterMega />
      </div>
    </>
  );
}
