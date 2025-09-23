"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { StatBlock } from "@/components/ui/StatBlock";
import { getAllCaseStudies, getFeaturedCaseStudies } from "@/lib/case-studies";

export default function CaseStudiesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
  ];

  const allCaseStudies = getAllCaseStudies();
  const featuredCaseStudies = getFeaturedCaseStudies();

  // Calculate aggregate metrics
  const totalRevenue = "$23M+";
  const avgTimeToMarket = "60% faster";
  const clientRetention = "100%";

  return (
    <>
      <PageHeader
        title="Case Studies"
        subtitle="Real results from real partnerships"
        breadcrumbs={breadcrumbs}
      />

      {/* Key Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatBlock
              label="Revenue Generated"
              value={totalRevenue}
              description="Combined client revenue growth"
            />
            <StatBlock
              label="Faster Delivery"
              value={avgTimeToMarket}
              description="Average time-to-market improvement"
            />
            <StatBlock
              label="Client Success"
              value={clientRetention}
              description="Client satisfaction rate"
            />
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">Featured Success Stories</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study) => (
              <Card
                key={study.id}
                isPressable
                as={Link}
                href={`/case-studies/${study.slug}`}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <CardBody className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Chip size="sm" variant="flat" className="mb-3">
                        {study.industry}
                      </Chip>
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">{study.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{study.summary}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.metrics.slice(0, 2).map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-navy-800">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                        {metric.change && (
                          <div className="text-sm font-medium text-green-600">{metric.change}</div>
                        )}
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-navy-200 pl-4 mb-4">
                    <p className="text-gray-700 italic">"{study.results.testimonial.quote}"</p>
                    <footer className="text-sm text-gray-600 mt-2">
                      — {study.results.testimonial.author}, {study.results.testimonial.title}
                    </footer>
                  </blockquote>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{study.timeline}</span>
                    <span className="text-navy-600 font-medium">Read Full Story →</span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">All Client Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCaseStudies.map((study) => (
              <Card
                key={study.id}
                isPressable
                as={Link}
                href={`/case-studies/${study.slug}`}
                className="hover:shadow-md transition-shadow duration-200"
              >
                <CardBody className="p-6">
                  <Chip size="sm" variant="flat" className="mb-3">
                    {study.industry}
                  </Chip>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.client}</p>

                  <div className="space-y-2 mb-4">
                    {study.outcomes.slice(0, 2).map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{study.timeline}</span>
                    <span className="text-navy-600 font-medium">View Details →</span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-navy-900 font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/tools/vendor-diligence-scorecard"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-navy-900 transition-colors"
            >
              Evaluate Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
