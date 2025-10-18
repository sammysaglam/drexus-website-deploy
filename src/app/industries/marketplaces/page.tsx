"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { TestimonialCard } from "@/components/case-studies/CaseStudyClient";
import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";

const domainNuances = [
  {
    title: "Two-Sided Dynamics",
    description: "Balance supply and demand while growing both sides",
    icon: "⚖️",
  },
  {
    title: "Trust & Safety",
    description: "Reviews, ratings, fraud detection, and dispute resolution",
    icon: "🛡️",
  },
  {
    title: "Payment Splitting",
    description: "Complex payment flows, escrow, and commission handling",
    icon: "💰",
  },
  {
    title: "Search & Discovery",
    description: "Help buyers find what they need among millions of listings",
    icon: "🔍",
  },
  {
    title: "Network Effects",
    description: "Build features that make the platform more valuable as it grows",
    icon: "🚀",
  },
  {
    title: "Seller Tools",
    description: "Empower sellers with analytics, automation, and growth tools",
    icon: "📊",
  },
];

const integrationMap = [
  { category: "Payments", tools: ["Stripe Connect", "PayPal", "Mangopay", "Adyen"] },
  { category: "Identity", tools: ["Jumio", "Onfido", "Persona", "Socure"] },
  { category: "Search", tools: ["Algolia", "Elasticsearch", "Typesense", "Meilisearch"] },
  { category: "Communications", tools: ["Twilio", "SendGrid", "Stream", "Pusher"] },
  { category: "Analytics", tools: ["Amplitude", "Mixpanel", "Segment", "Heap"] },
  { category: "Trust & Safety", tools: ["Sift", "Signifyd", "Riskified", "Custom ML"] },
];

const risksAndMitigations = [
  {
    risk: "Chicken & Egg Problem",
    mitigation: "Strategic seeding and single-player mode features",
  },
  {
    risk: "Disintermediation",
    mitigation: "Value-added services that keep transactions on-platform",
  },
  {
    risk: "Quality Control",
    mitigation: "Automated moderation and community-driven standards",
  },
  {
    risk: "Liquidity Imbalance",
    mitigation: "Dynamic pricing and supply incentives",
  },
];

const caseStudies = [
  {
    title: "B2B Materials Marketplace",
    description: "Connected 10K+ suppliers with enterprise buyers",
    metrics: ["$100M+ GMV Year 1", "3-day average transaction", "15% take rate"],
    tags: ["B2B", "Enterprise", "Logistics"],
  },
  {
    title: "Service Professional Platform",
    description: "Marketplace for home services with instant booking",
    metrics: ["50K+ providers", "4.7 average rating", "85% repeat bookings"],
    tags: ["Services", "Consumer", "Mobile"],
  },
  {
    title: "Creative Asset Marketplace",
    description: "Digital marketplace for designers and content creators",
    metrics: ["1M+ assets", "100K+ creators", "$25M ARR"],
    tags: ["Digital Goods", "Creative", "Global"],
  },
];

export default function MarketplacesIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Marketplace Industry Expertise - Drexus",
    description: "Deep expertise in building two-sided marketplaces that scale",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@id": "https://drexus.com", name: "Home" },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: { "@id": "https://drexus.com/industries", name: "Industries" },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: { "@id": "https://drexus.com/industries/marketplaces", name: "Marketplaces" },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="json-ld-industry"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="Marketplace Industry Expertise"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "Marketplaces" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              We&apos;ve built marketplaces that connect millions of buyers and sellers. From
              solving the cold start problem to scaling liquidity, we know what works.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-600 mb-2">20+</p>
                <p className="text-gray-600">Marketplaces Built</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-600 mb-2">100M+</p>
                <p className="text-gray-600">Transactions Processed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">$10B+</p>
                <p className="text-gray-600">GMV Facilitated</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-2">3M+</p>
                <p className="text-gray-600">Active Users</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Nuances */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Marketplaces Are Complex Ecosystems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Success requires mastering network effects, trust systems, and the delicate balance
                between buyers and sellers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domainNuances.map((nuance, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardBody className="p-6">
                      <div className="text-4xl mb-4">{nuance.icon}</div>
                      <h3 className="text-lg font-bold text-navy-900 mb-2">{nuance.title}</h3>
                      <p className="text-gray-600">{nuance.description}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Marketplace Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationMap.map((category, index) => (
                <Card key={index} className="bg-white">
                  <CardBody className="p-6">
                    <h3 className="font-bold text-navy-900 mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <Chip key={idx} size="sm" variant="flat" color="primary">
                          {tool}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Risks & Mitigations */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Common Challenges & Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {risksAndMitigations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="bg-teal-100 text-teal-600 rounded-full p-2 mr-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-navy-900 mb-2">{item.risk}</h3>
                          <p className="text-gray-600">{item.mitigation}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Marketplace Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardBody className="p-8">
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <div className="space-y-2 mb-6">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <svg
                              className="w-4 h-4 text-green-600 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {metric}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, idx) => (
                          <Chip key={idx} size="sm" variant="flat">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="max-w-4xl mx-auto">
              <TestimonialCard
                testimonial={{
                  quote:
                    "Drexus solved our chicken-and-egg problem brilliantly. They built features that attracted sellers first, then created tools that brought buyers. Now we're the leader in our category.",
                  author: "Tom Anderson",
                  title: "Founder & CEO",
                  company: "ServiceConnect",
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Build Your Marketplace?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a platform that brings buyers and sellers together at scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Discuss Your Marketplace
              </Button>
              <Button
                as={Link}
                href="/case-studies"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white/10 font-semibold px-12"
              >
                View Marketplace Cases
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
