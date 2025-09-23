"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader, TestimonialCard } from "@/components/ui";

const domainNuances = [
  {
    title: "Conversion Optimization",
    description: "Every millisecond and click matters for your bottom line",
    icon: "🎯",
  },
  {
    title: "Inventory Management",
    description: "Real-time sync across warehouses, stores, and channels",
    icon: "📦",
  },
  {
    title: "Payment Processing",
    description: "Multiple gateways, currencies, and fraud prevention",
    icon: "💳",
  },
  {
    title: "Personalization",
    description: "AI-driven recommendations and dynamic pricing",
    icon: "🤖",
  },
  {
    title: "Mobile Commerce",
    description: "50%+ of traffic is mobile—optimize or lose sales",
    icon: "📱",
  },
  {
    title: "Peak Season Scaling",
    description: "Black Friday to Cyber Monday without breaking a sweat",
    icon: "🚀",
  },
];

const integrationMap = [
  { category: "E-commerce Platforms", tools: ["Shopify Plus", "Magento", "BigCommerce", "Custom"] },
  { category: "Payments", tools: ["Stripe", "PayPal", "Square", "Affirm", "Klarna"] },
  { category: "Shipping", tools: ["ShipStation", "Shippo", "FedEx", "UPS", "DHL"] },
  { category: "Marketing", tools: ["Klaviyo", "Mailchimp", "Facebook", "Google Ads"] },
  { category: "Analytics", tools: ["GA4", "Segment", "Mixpanel", "Heap"] },
  { category: "Support", tools: ["Zendesk", "Gorgias", "Intercom", "Freshdesk"] },
];

const risksAndMitigations = [
  {
    risk: "Cart Abandonment",
    mitigation: "Optimized checkout flow and abandoned cart recovery",
  },
  {
    risk: "Site Performance",
    mitigation: "CDN, caching, and Core Web Vitals optimization",
  },
  {
    risk: "Inventory Sync",
    mitigation: "Real-time inventory management across all channels",
  },
  {
    risk: "Security Breaches",
    mitigation: "PCI compliance and continuous security monitoring",
  },
];

const caseStudies = [
  {
    title: "Fashion Retailer Transformation",
    description: "Migrated from legacy platform to modern headless commerce",
    metrics: ["300% mobile conversion increase", "50ms page load time", "$10M+ annual revenue"],
    tags: ["Migration", "Performance", "Mobile"],
  },
  {
    title: "Marketplace Platform",
    description: "Built multi-vendor marketplace handling 50K+ SKUs",
    metrics: ["10K+ sellers onboarded", "99.9% uptime", "45% YoY growth"],
    tags: ["Marketplace", "Scale", "B2B2C"],
  },
  {
    title: "D2C Brand Launch",
    description: "Zero to $5M ARR in 12 months with custom platform",
    metrics: ["2.5% conversion rate", "60% repeat purchase", "4.8 CSAT"],
    tags: ["D2C", "Growth", "Custom"],
  },
];

export default function EcommerceIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "E-commerce Industry Expertise - Drexus",
    description: "Deep expertise in building high-performance e-commerce platforms",
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
          item: { "@id": "https://drexus.com/industries/ecommerce", name: "E-commerce" },
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
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="E-commerce Industry Expertise"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "E-commerce" },
              ]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              We&apos;ve powered $2B+ in online sales. From checkout optimization to inventory
              management, we build e-commerce experiences that convert.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 mb-2">75+</p>
                <p className="text-gray-600">E-commerce Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-pink-600 mb-2">$2B+</p>
                <p className="text-gray-600">GMV Processed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-2">2.8%</p>
                <p className="text-gray-600">Avg Conversion Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">47%</p>
                <p className="text-gray-600">Mobile Revenue Share</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Nuances */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                E-commerce Is More Than a Shopping Cart
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Success requires mastering inventory, logistics, payments, and customer
                experience—all at scale.
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
              E-commerce Tech Stack
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
                        <div className="bg-yellow-100 text-yellow-600 rounded-full p-2 mr-4">
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
              E-commerce Success Stories
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
                quote="Drexus didn't just build us an online store—they created a commerce engine that scales. Our conversion rate tripled, and we handle 10x the traffic without breaking a sweat."
                author={{
                  name: "Jessica Park",
                  title: "CEO",
                  company: "LuxStyle (D2C Fashion Brand)",
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Transform Your E-commerce Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s build a platform that converts browsers into buyers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact/book-a-call"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Discuss Your Store
              </Button>
              <Button
                as={Link}
                href="/tools/conversion-audit"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white/10 font-semibold px-12"
              >
                Free Conversion Audit
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
