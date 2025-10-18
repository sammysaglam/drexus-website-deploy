"use client";

import { PageHeader } from "@/components/ui/PageHeader";

import WebinarsClient from "./WebinarsClient";

export default function WebinarsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Webinars", href: "/events/webinars" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main id="main-content">
        <PageHeader
          title="Webinars"
          subtitle="Expert insights, practical strategies, and actionable frameworks from our team"
          breadcrumbs={breadcrumbs}
        />

        <WebinarsClient />
      </main>
    </div>
  );
}
