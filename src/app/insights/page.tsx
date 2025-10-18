import React, { Suspense } from "react";

import { getAllInsights } from "@/lib/insights";

import InsightsContent from "./insights-content";

export default async function InsightsPage() {
  // Load insights data on the server
  const insights = await getAllInsights();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Insights & Research</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Strategic guidance, industry analysis, and practical frameworks to accelerate your
              business
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Suspense fallback={<div className="py-12 text-center">Loading insights...</div>}>
        <InsightsContent initialInsights={insights} />
      </Suspense>
    </>
  );
}
