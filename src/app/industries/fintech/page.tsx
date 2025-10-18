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
    title: "Regulatory Compliance",
    description: "Navigate PCI DSS, PSD2, KYC/AML, and regional regulations",
    icon: "⚖️",
  },
  {
    title: "Security First",
    description: "Bank-grade encryption, fraud detection, and secure infrastructure",
    icon: "🔐",
  },
  {
    title: "Payment Processing",
    description: "ACH, wires, cards, wallets, and emerging payment methods",
    icon: "💳",
  },
  {
    title: "Financial APIs",
    description: "Banking integrations, market data, and third-party services",
    icon: "🏦",
  },
  {
    title: "Risk Management",
    description: "Real-time fraud detection and transaction monitoring",
    icon: "🛡️",
  },
  {
    title: "Reconciliation",
    description: "Automated ledgers and financial reporting accuracy",
    icon: "📊",
  },
];

const integrationMap = [
  { category: "Banking APIs", tools: ["Plaid", "Yodlee", "Open Banking", "BaaS Providers"] },
  { category: "Payments", tools: ["Stripe", "Adyen", "Square", "PayPal", "Dwolla"] },
  { category: "Identity", tools: ["Jumio", "Onfido", "Trulioo", "Socure"] },
  { category: "Compliance", tools: ["Chainalysis", "ComplyAdvantage", "Sift", "Unit21"] },
  { category: "Market Data", tools: ["Alpha Vantage", "IEX Cloud", "Polygon", "Refinitiv"] },
  { category: "Infrastructure", tools: ["AWS", "Azure", "HSMs", "Vault"] },
];

const risksAndMitigations = [
  {
    risk: "Regulatory Changes",
    mitigation: "Modular architecture allowing rapid compliance updates",
  },
  {
    risk: "Security Breaches",
    mitigation: "Defense in depth, regular pentesting, SOC2 certification",
  },
  {
    risk: "Scaling Challenges",
    mitigation: "Event-driven architecture and horizontal scaling patterns",
  },
  {
    risk: "Partner Dependencies",
    mitigation: "Multi-provider strategies and fallback systems",
  },
];

const caseStudies = [
  {
    title: "Digital Banking Platform",
    description: "Built a neobank serving 500K+ users with full banking capabilities",
    metrics: ["$2B+ processed annually", "99.99% uptime", "SOC2 Type II certified"],
    tags: ["Banking", "Compliance", "Scale"],
  },
  {
    title: "Investment Robo-Advisor",
    description: "Automated investment platform managing $100M+ in assets",
    metrics: ["SEC compliant", "0.3s trade execution", "$100M+ AUM"],
    tags: ["Investing", "Automation", "Compliance"],
  },
  {
    title: "B2B Payment Platform",
    description: "Cross-border payment solution for enterprise clients",
    metrics: ["50+ countries", "$500M+ monthly volume", "T+0 settlements"],
    tags: ["Payments", "B2B", "International"],
  },
];

export default function FinTechIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FinTech Industry Expertise - Drexus",
    description: "Deep expertise in building secure, compliant financial technology solutions",
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
          item: { "@id": "https://drexus.com/industries/fintech", name: "FinTech" },
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
              title="FinTech Industry Expertise"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "FinTech" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Building the future of finance with secure, compliant, and innovative technology
              solutions. From digital banking to crypto, we&apos;ve shipped it all.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">$5B+</p>
                <p className="text-gray-600">Processed Annually</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">30+</p>
                <p className="text-gray-600">FinTech Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 mb-2">100%</p>
                <p className="text-gray-600">Compliance Track Record</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600 mb-2">50ms</p>
                <p className="text-gray-600">Avg Transaction Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Nuances */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                FinTech Requires Special Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Financial services demand the highest standards of security, compliance, and
                reliability.
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
              FinTech Integration Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationMap.map((category, index) => (
                <Card key={index} className="bg-white">
                  <CardBody className="p-6">
                    <h3 className="font-bold text-navy-900 mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <Chip key={idx} size="sm" variant="flat" color="success">
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
              Risk Mitigation Strategies
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
                        <div className="bg-amber-100 text-amber-600 rounded-full p-2 mr-4">
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
              FinTech Success Stories
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
                    "Drexus navigated our complex regulatory requirements while delivering a platform that processes millions in transactions daily. They're true FinTech experts.",
                  author: "Sarah Thompson",
                  title: "CEO",
                  company: "PayFlow (Series A FinTech)",
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Build the Future of Finance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s create secure, compliant FinTech solutions that scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Discuss Your FinTech Project
              </Button>
              <Button
                as={Link}
                href="/tools/vendor-diligence-scorecard"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white/10 font-semibold px-12"
              >
                Security Assessment Tool
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
