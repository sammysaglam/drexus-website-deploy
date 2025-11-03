import React from "react";

import type { Metadata } from "next";
import Script from "next/script";

import { NavMega, FooterMega } from "@/components/layout";

import AppWorkedUsersLeftContent from "./AppWorkedUsersLeftContent";

export const metadata: Metadata = {
  title: "The App Worked. The Users Left. | Project Feedback Loop",
  description:
    "Launch isn't the goal—traction is. Use our Project Feedback Loop to validate fast and impress your next investor.",
  keywords: [
    "app feedback loop",
    "user retention",
    "project feedback loop",
    "conversion audit",
    "experiment planner",
    "startup traction",
    "user activation",
    "retention checklist",
    "investor proof",
    "product validation",
  ],
  openGraph: {
    title: "The App Worked. The Users Left. | Project Feedback Loop",
    description:
      "Launch isn't the goal—traction is. Use our Project Feedback Loop to validate fast and impress your next investor.",
    type: "article",
    url: "https://drexus.com/landing/app-worked-users-left",
  },
  twitter: {
    card: "summary_large_image",
    title: "The App Worked. The Users Left. | Project Feedback Loop",
    description:
      "Launch isn't the goal—traction is. Use our Project Feedback Loop to validate fast and impress your next investor.",
  },
};

export default function MessageClarityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The App Worked. The Users Left. | Project Feedback Loop",
    description:
      "Launch isn't the goal—traction is. Use our Project Feedback Loop to validate fast and impress your next investor.",
    author: { "@type": "Organization", name: "Drexus" },
    publisher: {
      "@type": "Organization",
      name: "Drexus",
      logo: { "@type": "ImageObject", url: "https://drexus.com/logo.png" },
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
        <AppWorkedUsersLeftContent />
        <FooterMega />
      </div>
    </>
  );
}
