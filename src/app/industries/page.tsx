"use client";

import React from "react";

import { Button, Card, CardBody, CardFooter, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";

const industries = [
  {
    slug: "saas",
    title: "SaaS",
    description:
      "Multi-tenancy, subscription billing, and scalable architectures for software platforms",
    icon: "☁️",
    stats: { clients: "50+", highlight: "$500M+ Combined ARR" },
    expertise: ["Multi-tenancy", "Billing Systems", "API Design", "Scale"],
  },
  {
    slug: "fintech",
    title: "FinTech",
    description:
      "Secure, compliant financial technology solutions for payments, banking, and investing",
    icon: "🏦",
    stats: { clients: "30+", highlight: "PCI & SOC2 Compliant" },
    expertise: ["Payment Processing", "KYC/AML", "Security", "Compliance"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    description: "High-performance online stores and marketplaces built for conversion",
    icon: "🛒",
    stats: { clients: "75+", highlight: "$2B+ GMV Processed" },
    expertise: ["Checkout Optimization", "Inventory", "Fulfillment", "Analytics"],
  },
  {
    slug: "marketplaces",
    title: "Marketplaces",
    description: "Two-sided platforms connecting buyers and sellers at scale",
    icon: "🤝",
    stats: { clients: "20+", highlight: "100M+ Transactions" },
    expertise: ["Matching Algorithms", "Trust Systems", "Payments", "Reviews"],
  },
  {
    slug: "healthtech",
    title: "HealthTech",
    description: "HIPAA-compliant digital health solutions for providers and patients",
    icon: "🏥",
    stats: { clients: "15+", highlight: "HIPAA Certified" },
    expertise: ["EHR Integration", "Telemedicine", "HIPAA", "Clinical Workflows"],
  },
  {
    slug: "media",
    title: "Media & Entertainment",
    description: "Streaming platforms and content management systems built for scale",
    icon: "🎬",
    stats: { clients: "25+", highlight: "1B+ Streams Delivered" },
    expertise: ["Video Streaming", "CDN", "DRM", "Recommendation Engines"],
  },
];

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries We Serve",
    description: "Drexus industry expertise across SaaS, FinTech, E-commerce, and more",
    numberOfItems: industries.length,
    itemListElement: industries.map((industry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: industry.title,
        description: industry.description,
        url: `https://drexus.com/industries/${industry.slug}`,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="json-ld-industries"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="Industries We Serve"
              breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Deep domain expertise across the industries shaping our digital future. We don&apos;t
              just build software—we understand your business.
            </p>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600 mb-2">215+</p>
                <p className="text-gray-600">Industry Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600 mb-2">6</p>
                <p className="text-gray-600">Core Industries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600 mb-2">12+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600 mb-2">95%</p>
                <p className="text-gray-600">Client Retention</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Specialized Expertise, Proven Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each industry has unique challenges. We bring battle-tested solutions and deep
                understanding to every engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardBody className="p-8">
                      <div className="text-5xl mb-4">{industry.icon}</div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-3">{industry.title}</h3>
                      <p className="text-gray-600 mb-6">{industry.description}</p>

                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-500">Clients Served</span>
                          <span className="font-bold text-navy-900">{industry.stats.clients}</span>
                        </div>
                        <div className="text-sm font-semibold text-blue-600">
                          {industry.stats.highlight}
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-2">Core Expertise:</p>
                        <div className="flex flex-wrap gap-2">
                          {industry.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className="px-8 pb-8">
                      <Button
                        as={Link}
                        href={`/industries/${industry.slug}`}
                        color="primary"
                        variant="flat"
                        className="w-full"
                      >
                        Explore {industry.title} Expertise
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Industry Focus Matters */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Why Industry Expertise Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardBody className="p-8 text-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Faster Time to Market</h3>
                  <p className="text-gray-600">
                    We&apos;ve solved similar problems before. No learning curve, no false starts.
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="p-8 text-center">
                  <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Built-in Compliance</h3>
                  <p className="text-gray-600">
                    We know your regulations—HIPAA, PCI, SOC2—and build compliance from day one.
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="p-8 text-center">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Industry Best Practices</h3>
                  <p className="text-gray-600">
                    Leverage proven patterns and avoid common pitfalls specific to your industry.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We work across many sectors. Let&apos;s discuss how our expertise translates to your
              unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Discuss Your Industry Needs
              </Button>
              <Button
                as={Link}
                href="/case-studies"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white/10 font-semibold px-12"
              >
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
