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
    title: "Content Delivery",
    description: "Global CDN, adaptive streaming, and multi-device playback",
    icon: "🌐",
  },
  {
    title: "Monetization Models",
    description: "Subscriptions, ads, PPV, and hybrid revenue streams",
    icon: "💰",
  },
  {
    title: "Rights Management",
    description: "DRM, geo-blocking, and content licensing controls",
    icon: "🔐",
  },
  {
    title: "User Engagement",
    description: "Recommendations, personalization, and social features",
    icon: "💬",
  },
  {
    title: "Content Management",
    description: "Massive libraries, metadata, and discovery tools",
    icon: "📚",
  },
  {
    title: "Analytics & Insights",
    description: "Viewer behavior, content performance, and revenue optimization",
    icon: "📊",
  },
];

const integrationMap = [
  { category: "Video Infrastructure", tools: ["AWS Media", "Cloudflare Stream", "Mux", "Wowza"] },
  { category: "DRM & Security", tools: ["Widevine", "FairPlay", "PlayReady", "Verimatrix"] },
  {
    category: "Monetization",
    tools: ["Stripe Billing", "Google Ad Manager", "SpotX", "FreeWheel"],
  },
  { category: "Analytics", tools: ["Conviva", "Google Analytics", "Mixpanel", "Custom BI"] },
  { category: "CDN", tools: ["Cloudflare", "Akamai", "Fastly", "AWS CloudFront"] },
  { category: "CMS", tools: ["Contentful", "Strapi", "Custom CMS", "WordPress VIP"] },
];

const risksAndMitigations = [
  {
    risk: "Scalability Challenges",
    mitigation: "Auto-scaling infrastructure and intelligent caching",
  },
  {
    risk: "Content Piracy",
    mitigation: "Multi-layer DRM and watermarking technologies",
  },
  {
    risk: "Platform Competition",
    mitigation: "Unique content and superior user experience",
  },
  {
    risk: "Bandwidth Costs",
    mitigation: "Smart encoding and edge optimization",
  },
];

const caseStudies = [
  {
    title: "Streaming Platform Launch",
    description: "Built OTT platform serving 10M+ monthly active users",
    metrics: ["1B+ streams/month", "4K HDR support", "99.95% uptime"],
    tags: ["Streaming", "Scale", "OTT"],
  },
  {
    title: "News Media Platform",
    description: "Modern digital newsroom with real-time publishing",
    metrics: ["50M+ pageviews", "3min avg session", "40% subscriber growth"],
    tags: ["Publishing", "News", "Subscription"],
  },
  {
    title: "Creator Economy Platform",
    description: "Marketplace for premium content creators",
    metrics: ["100K+ creators", "$50M+ paid out", "85% retention"],
    tags: ["Creator", "Marketplace", "Monetization"],
  },
];

export default function MediaIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Media & Entertainment Industry Expertise - Drexus",
    description: "Deep expertise in building scalable media platforms and streaming services",
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
          item: { "@id": "https://drexus.com/industries/media", name: "Media" },
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
              title="Media & Entertainment Industry Expertise"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "Media & Entertainment" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              From streaming giants to digital publishers, we build platforms that deliver content
              at scale. 1 billion+ streams delivered and counting.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 mb-2">25+</p>
                <p className="text-gray-600">Media Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-pink-600 mb-2">1B+</p>
                <p className="text-gray-600">Streams Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-2">50M+</p>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-violet-600 mb-2">99.95%</p>
                <p className="text-gray-600">Platform Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Nuances */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Media Requires Massive Scale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When millions tune in simultaneously, your platform can&apos;t just work—it must
                excel. We build for prime time, every time.
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
              Media Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationMap.map((category, index) => (
                <Card key={index} className="bg-white">
                  <CardBody className="p-6">
                    <h3 className="font-bold text-navy-900 mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <Chip key={idx} size="sm" variant="flat" color="secondary">
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
              Media Industry Challenges
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
                        <div className="bg-purple-100 text-purple-600 rounded-full p-2 mr-4">
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
              Media Success Stories
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
                    "Drexus built us a streaming platform that handles our biggest live events without a hiccup. 5 million concurrent viewers? No problem. That reliability is priceless.",
                  author: "Mark Harrison",
                  title: "CTO",
                  company: "StreamFlow Media",
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Stream at Scale?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s build a media platform that captivates audiences worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Discuss Your Media Project
              </Button>
              <Button
                as={Link}
                href="/case-studies"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white/10 font-semibold px-12"
              >
                View Media Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
