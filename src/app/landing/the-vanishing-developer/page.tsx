import React from "react";

import type { Metadata } from "next";
import Script from "next/script";

import { NavMega, FooterMega } from "@/components/layout";

import DeveloperVanishedContent from "./DeveloperVanishedContent";

export const metadata: Metadata = {
  title: "My Developer Vanished Mid-Sprint - 2-Week Project Recovery Plan",
  description:
    "We've all been there. Here's the exact 2-week project plan founders use to recover fast — scope, code, cadence. Free template included.",
  keywords: [
    "developer vanished",
    "mid-sprint recovery",
    "project recovery plan",
    "developer ghosted",
    "project recovery",
    "startup recovery",
    "development crisis",
    "sprint recovery",
    "developer disappeared",
    "project rescue",
    "2-week recovery plan",
    "project scope 1-pager",
  ],
  openGraph: {
    title: "My Developer Vanished Mid-Sprint - 2-Week Project Recovery Plan",
    description:
      "We've all been there. Here's the exact 2-week project plan founders use to recover fast — scope, code, cadence. Free template included.",
    type: "article",
    url: "https://drexus.com/landing/the-vanishing-developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Developer Vanished Mid-Sprint - 2-Week Project Recovery Plan",
    description:
      "We've all been there. Here's the exact 2-week project plan founders use to recover fast — scope, code, cadence. Free template included.",
  },
};

export default function DeveloperVanishedPage() {
  // JSON-LD structured data for this landing page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "My Developer Vanished Mid-Sprint - 2-Week Project Recovery Plan",
    description:
      "We've all been there. Here's the exact 2-week project plan founders use to recover fast — scope, code, cadence. Free template included.",
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
        <DeveloperVanishedContent />
        <FooterMega />
      </div>
    </>
  );
}
