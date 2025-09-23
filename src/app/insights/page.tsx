import React, { Suspense } from "react";

import InsightsContent from "./insights-content";

function InsightsLoading() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
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

      {/* Main Content with Suspense */}
      <Suspense fallback={<InsightsLoading />}>
        <InsightsContent />
      </Suspense>
    </>
  );
}
