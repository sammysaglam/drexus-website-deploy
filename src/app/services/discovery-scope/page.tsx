"use client";

import React, { useState } from "react";

import { Button, Card, CardBody, Chip, Link, Tab, Tabs } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui";

const deliverables = [
  {
    title: "Technical Specification",
    description:
      "Comprehensive architecture document with data models, API designs, and integration points",
    icon: "📋",
  },
  {
    title: "User Story Map",
    description: "Prioritized features mapped to user journeys with acceptance criteria",
    icon: "🗺️",
  },
  {
    title: "Interactive Prototype",
    description: "Clickable Figma prototype demonstrating core user flows",
    icon: "🎨",
  },
  {
    title: "Risk Assessment",
    description: "Technical, operational, and market risks with mitigation strategies",
    icon: "⚠️",
  },
  {
    title: "Budget & Timeline",
    description: "Detailed project phases with resource allocation and milestones",
    icon: "📊",
  },
  {
    title: "Tech Stack Recommendation",
    description: "Framework and infrastructure choices with rationale",
    icon: "🔧",
  },
];

const timelinePhases = [
  {
    week: "Week 1",
    title: "Stakeholder Alignment",
    activities: [
      "Executive interviews",
      "User research",
      "Competitive analysis",
      "Current state assessment",
    ],
  },
  {
    week: "Week 2",
    title: "Solution Design",
    activities: [
      "Architecture workshop",
      "User flow mapping",
      "Data model design",
      "Integration planning",
    ],
  },
  {
    week: "Week 3",
    title: "Validation & Prototyping",
    activities: [
      "Prototype development",
      "Technical proof of concepts",
      "User testing sessions",
      "Feasibility analysis",
    ],
  },
  {
    week: "Week 4",
    title: "Documentation & Planning",
    activities: [
      "Technical spec writing",
      "Resource planning",
      "Risk documentation",
      "Presentation preparation",
    ],
  },
];

const artifacts = [
  {
    type: "Figma Designs",
    description: "High-fidelity mockups and interactive prototypes",
    preview: "🎨",
  },
  {
    type: "Architecture Diagrams",
    description: "System design, data flow, and infrastructure maps",
    preview: "🏗️",
  },
  {
    type: "API Documentation",
    description: "Endpoint specifications with request/response examples",
    preview: "📡",
  },
  {
    type: "Project Roadmap",
    description: "Gantt charts and milestone tracking in Notion/Jira",
    preview: "📅",
  },
];

const relatedTools = [
  {
    name: "MVP Scope Builder",
    description: "Define your minimum viable product features",
    href: "/tools/mvp-scope-builder",
  },
  {
    name: "Risk Ledger",
    description: "Identify and mitigate project risks early",
    href: "/tools/risk-ledger",
  },
];

export default function DiscoveryScopePage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Discovery & Scoping Service",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description:
      "Transform your vision into a detailed roadmap with technical specifications, user flows, and realistic timelines.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Discovery & Scoping Services",
      itemListElement: deliverables.map((item, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="json-ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="Discovery & Scoping"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Discovery & Scoping" },
              ]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Transform your vision into a detailed roadmap. We turn ambitious ideas into actionable
              plans with technical specifications, user flows, and realistic timelines.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <Tabs
              aria-label="Service details"
              selectedKey={selected}
              onSelectionChange={(key) => setSelected(key as string)}
              classNames={{
                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-blue-600",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:text-blue-600",
              }}
            >
              <Tab key="overview" title="Overview" />
              <Tab key="deliverables" title="Deliverables" />
              <Tab key="timeline" title="Timeline" />
              <Tab key="proof" title="Proof" />
            </Tabs>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            {selected === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                      What is Discovery & Scoping?
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Discovery & Scoping is your insurance policy against building the wrong
                        thing. It&apos;s a structured 4-week engagement that transforms your vision
                        into a detailed blueprint for success.
                      </p>
                      <p>
                        We combine technical expertise with business acumen to create a roadmap that
                        balances ambition with reality, innovation with feasibility, and speed with
                        sustainability.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Why is it critical?
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0"
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
                          <span>
                            <strong>Reduce Risk:</strong> Identify technical and market challenges
                            before writing code
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0"
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
                          <span>
                            <strong>Save Money:</strong> Avoid costly pivots and rewrites down the
                            line
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0"
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
                          <span>
                            <strong>Align Stakeholders:</strong> Get everyone on the same page with
                            visual prototypes
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0"
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
                          <span>
                            <strong>Move Faster:</strong> Clear specifications enable parallel
                            workstreams
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">How We Engage</h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Engagement Model</h4>
                            <p className="text-gray-700">
                              Fixed-price 4-week sprint with dedicated team of 2-3 senior
                              consultants
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Composition</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Product Strategist</li>
                              <li>• Technical Architect</li>
                              <li>• UX Designer</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Friday Progress Receipts
                            </h4>
                            <p className="text-gray-700">
                              Weekly updates with deliverables, decisions needed, and next steps
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment</h4>
                            <p className="text-2xl font-bold text-blue-600">$25,000 - $45,000</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Based on project complexity
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )}

            {selected === "deliverables" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">
                  What You&apos;ll Receive
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {deliverables.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardBody className="p-6">
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
                    Artifact Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {artifacts.map((artifact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="bg-gray-50">
                          <CardBody className="p-6">
                            <div className="flex items-center mb-4">
                              <span className="text-3xl mr-4">{artifact.preview}</span>
                              <div>
                                <h4 className="font-bold text-navy-900">{artifact.type}</h4>
                                <p className="text-sm text-gray-600">{artifact.description}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {selected === "timeline" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">
                  4-Week Sprint Timeline
                </h2>
                <div className="space-y-8">
                  {timelinePhases.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardBody className="p-8">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                            <div>
                              <Chip color="primary" variant="flat" className="mb-2">
                                {phase.week}
                              </Chip>
                              <h3 className="text-xl font-bold text-navy-900">{phase.title}</h3>
                            </div>
                            <div className="md:col-span-2">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {phase.activities.map((activity, idx) => (
                                  <li key={idx} className="flex items-center text-gray-700">
                                    <svg
                                      className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {selected === "proof" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                    Proven Results
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our discovery process has helped dozens of companies avoid costly mistakes and
                    accelerate time to market
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-blue-600 mb-2">73%</p>
                      <p className="text-gray-600">
                        Average cost savings vs. starting without discovery
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-green-600 mb-2">2.5x</p>
                      <p className="text-gray-600">Faster development with clear specifications</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-purple-600 mb-2">94%</p>
                      <p className="text-gray-600">Projects stay within original scope</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: FinTech Startup
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        A funded startup had a vision for disrupting personal finance but no clear
                        technical approach. Multiple vendors quoted wildly different timelines and
                        budgets.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Approach</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Interviewed 50+ potential users</li>
                        <li>• Analyzed 15 competitor platforms</li>
                        <li>• Created 3 architectural options</li>
                        <li>• Built interactive prototype</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• Reduced MVP scope by 40% without losing core value</li>
                        <li>• Identified partnership opportunity saving $500k</li>
                        <li>• Launched 3 months faster than original timeline</li>
                        <li>• Raised Series A with prototype and roadmap</li>
                      </ul>
                      <Card className="bg-blue-50 border-blue-200">
                        <CardBody className="p-4">
                          <p className="text-blue-900 italic">
                            &ldquo;The discovery phase was the best investment we made. It gave us
                            clarity, credibility with investors, and a roadmap we actually
                            followed.&rdquo;
                          </p>
                          <p className="text-sm text-blue-700 mt-2">— Sarah Chen, CEO</p>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">
                    Related Tools
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {relatedTools.map((tool, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardBody className="p-6">
                          <h4 className="font-bold text-navy-900 mb-2">{tool.name}</h4>
                          <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                          <Button
                            as={Link}
                            href={tool.href}
                            size="sm"
                            variant="flat"
                            color="primary"
                          >
                            Try Tool
                          </Button>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Turn Your Vision into Reality?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s start with a discovery sprint that sets your project up for success
            </p>
            <Button
              as={Link}
              href="/contact/book-a-call"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Schedule Discovery Call
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
