import React from "react";

import type { Metadata } from "next";
import Script from "next/script";

import { NavMega, FooterMega } from "@/components/layout";

import QuietLaunchContent from "./QuietLaunchContent";

export const metadata: Metadata = {
  title: "The Build That Launched Quietly — And Changed Everything | Strategic Quiet Launches",
  description:
    "Quiet wins scale louder. Learn how to launch under the radar, keep your burn low, and let results speak louder than noise with data-driven strategy.",
  keywords: [
    "quiet launch",
    "strategic launch",
    "data-driven launch",
    "launch strategy",
    "Marketing Intelligence Model",
    "persona mapping",
    "silent launch",
    "stealth launch",
    "soft launch strategy",
    "quiet launch strategy",
    "launch under radar",
    "data-driven marketing",
    "persona-driven launch",
    "strategic product launch",
  ],
  openGraph: {
    title: "The Build That Launched Quietly — And Changed Everything | Strategic Quiet Launches",
    description:
      "Quiet wins scale louder. Learn how to launch under the radar, keep your burn low, and let results speak louder than noise with data-driven strategy.",
    type: "article",
    url: "https://drexus.com/landing/quiet-launch",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Build That Launched Quietly — And Changed Everything | Strategic Quiet Launches",
    description:
      "Quiet wins scale louder. Learn how to launch under the radar, keep your burn low, and let results speak louder than noise with data-driven strategy.",
  },
};

export default function QuietLaunchPage() {
  // JSON-LD structured data for this landing page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Build That Launched Quietly — And Changed Everything",
    description:
      "Quiet wins scale louder. Learn how to launch under the radar, keep your burn low, and let results speak louder than noise with data-driven strategy.",
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
        <QuietLaunchContent />
        <FooterMega />
      </div>
    </>
  );
}
