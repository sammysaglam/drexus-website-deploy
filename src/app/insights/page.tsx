import React from "react";

import { getAllInsights } from "@/lib/insights";

import InsightsContent from "./insights-content";

export const dynamic = "force-dynamic";

interface InsightsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function InsightsPage({ searchParams }: InsightsPageProps) {
  try {
    // Load insights data on the server
    const insights = await getAllInsights();

    // Get search params on the server
    const params = await searchParams;
    const initialFilters = {
      searchQuery: (params.q as string) || "",
      selectedType: (params.type as string) || "all",
      selectedPersona: (params.persona as string) || "all",
      selectedTag: (params.tag as string) || "all",
      sortBy: (params.sort as string) || "newest",
    };

    return (
      <>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Insights & Research
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Strategic guidance, industry analysis, and practical frameworks to accelerate your
                business
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <InsightsContent initialInsights={insights} initialFilters={initialFilters} />
      </>
    );
  } catch (error) {
    console.error("Failed to load insights:", error);
    return (
      <>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Insights & Research
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Strategic guidance, industry analysis, and practical frameworks to accelerate your
                business
              </p>
            </div>
          </div>
        </section>

        {/* Error State */}
        <div className="py-12 text-center">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unable to load insights</h2>
            <p className="text-gray-600">Please try refreshing the page.</p>
          </div>
        </div>
      </>
    );
  }
}
