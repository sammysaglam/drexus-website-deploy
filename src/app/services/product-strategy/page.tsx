"use client";

import React, { useState } from "react";

import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceTabs } from "@/components/ui/ServiceTabs";

const deliverables = [
  {
    title: "Product Vision Document",
    description: "North star vision with success metrics and strategic objectives",
    icon: "🎯",
  },
  {
    title: "Feature Roadmap",
    description: "18-month prioritized roadmap with quarterly milestones",
    icon: "🗓️",
  },
  {
    title: "Go-to-Market Strategy",
    description: "Launch plan with positioning, pricing, and distribution channels",
    icon: "🚀",
  },
  {
    title: "Competitive Analysis",
    description: "Market landscape with differentiation opportunities",
    icon: "🔍",
  },
  {
    title: "User Personas & Jobs",
    description: "Detailed personas with jobs-to-be-done framework",
    icon: "👥",
  },
  {
    title: "Success Metrics Framework",
    description: "KPIs, OKRs, and measurement plan for product health",
    icon: "📈",
  },
];

const timelinePhases = [
  {
    week: "Week 1-2",
    title: "Discovery & Research",
    activities: [
      "Stakeholder interviews",
      "User research & surveys",
      "Market analysis",
      "Competitive landscape",
    ],
  },
  {
    week: "Week 3-4",
    title: "Strategy Formation",
    activities: [
      "Vision workshop",
      "Persona development",
      "Value proposition design",
      "Business model canvas",
    ],
  },
  {
    week: "Week 5-6",
    title: "Roadmap & Planning",
    activities: [
      "Feature prioritization",
      "Release planning",
      "Resource allocation",
      "Risk assessment",
    ],
  },
  {
    week: "Week 7-8",
    title: "Validation & Refinement",
    activities: [
      "Stakeholder review",
      "User validation",
      "Financial modeling",
      "Final documentation",
    ],
  },
];

const artifacts = [
  {
    type: "Strategy Deck",
    description: "Executive presentation with vision, strategy, and roadmap",
    preview: "📊",
  },
  {
    type: "Persona Cards",
    description: "Visual personas with needs, behaviors, and journeys",
    preview: "👤",
  },
  {
    type: "Roadmap Visualization",
    description: "Interactive Gantt chart or timeline in ProductPlan/Roadmunk",
    preview: "📍",
  },
  {
    type: "Metrics Dashboard",
    description: "Measurement framework with tracking templates",
    preview: "📉",
  },
];

const relatedTools = [
  {
    name: "Experiment Planner",
    description: "Design and track product experiments",
    href: "/tools/experiment-planner",
  },
  {
    name: "ROI Calculator",
    description: "Calculate potential return on product investments",
    href: "/tools/roi-calculator",
  },
];

export default function ProductStrategyPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Product Strategy Service",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description:
      "Define your product vision, roadmap, and go-to-market strategy with experienced product strategists.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Product Strategy Services",
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
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="Product Strategy"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Product Strategy" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Define your product&apos;s future with clarity and confidence. We help you create a
              winning strategy that aligns market opportunity with business objectives.
            </p>
          </div>
        </section>

        <ServiceTabs selected={selected} onSelectionChange={setSelected} />

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
                      What is Product Strategy?
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Product Strategy is the bridge between your business goals and customer
                        needs. It&apos;s a comprehensive plan that defines what you&apos;ll build,
                        who you&apos;ll serve, and how you&apos;ll win in the market.
                      </p>
                      <p>
                        Our approach combines data-driven insights with creative problem-solving to
                        craft strategies that are both ambitious and achievable.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Why you need it:
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
                            <strong>Market Fit:</strong> Ensure you&apos;re building what customers
                            actually want
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
                            <strong>Resource Focus:</strong> Prioritize features that drive the most
                            value
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
                            <strong>Team Alignment:</strong> Get everyone rowing in the same
                            direction
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
                            <strong>Competitive Edge:</strong> Differentiate in crowded markets
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
                              8-week intensive strategy sprint with embedded product leaders
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Composition</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Senior Product Strategist</li>
                              <li>• User Research Lead</li>
                              <li>• Business Analyst</li>
                              <li>• Go-to-Market Expert</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Working Style</h4>
                            <p className="text-gray-700">
                              Weekly workshops, async collaboration, and Friday Progress Receipts
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment</h4>
                            <p className="text-2xl font-bold text-blue-600">Starting from: $100</p>
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
                  Strategy Deliverables
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
                    Strategy Artifacts
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
                  8-Week Strategy Sprint
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
                    Strategy That Delivers Results
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our product strategies have helped companies achieve market leadership and
                    sustainable growth
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-blue-600 mb-2">3.2x</p>
                      <p className="text-gray-600">Average revenue growth in 18 months</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-green-600 mb-2">67%</p>
                      <p className="text-gray-600">Increase in user engagement</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-purple-600 mb-2">$2.3M</p>
                      <p className="text-gray-600">Average funding raised post-strategy</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: B2B SaaS Platform
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        A Series A SaaS company had strong technology but was struggling with
                        product-market fit. Customer churn was high, and the roadmap was reactive
                        rather than strategic.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Approach</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Interviewed 80+ customers and churned users</li>
                        <li>• Analyzed usage data to identify value drivers</li>
                        <li>• Redesigned pricing and packaging strategy</li>
                        <li>• Created 18-month roadmap focused on retention</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• Reduced churn from 8% to 3% monthly</li>
                        <li>• Increased ARPU by 45% with new pricing</li>
                        <li>• Achieved product-market fit score of 65%</li>
                        <li>• Raised $15M Series B after implementation</li>
                      </ul>
                      <Card className="bg-blue-50 border-blue-200">
                        <CardBody className="p-4">
                          <p className="text-blue-900 italic">
                            &ldquo;The product strategy engagement transformed our business. We went
                            from guessing to knowing exactly what our customers needed.&rdquo;
                          </p>
                          <p className="text-sm text-blue-700 mt-2">— Mark Thompson, CPO</p>
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
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Define Your Product&apos;s Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a product strategy that drives growth and delights customers
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Schedule Strategy Session
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
