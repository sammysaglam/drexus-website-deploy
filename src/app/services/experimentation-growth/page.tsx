"use client";

import React, { useState } from "react";

import { Button, Card, CardBody, Chip, Link, Tab, Tabs } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui";

const deliverables = [
  {
    title: "Growth Strategy",
    description: "Data-driven roadmap for sustainable growth",
    icon: "📈",
  },
  {
    title: "A/B Testing Framework",
    description: "Rapid experimentation infrastructure and processes",
    icon: "🧪",
  },
  {
    title: "Analytics Setup",
    description: "Event tracking, funnels, and cohort analysis",
    icon: "📊",
  },
  {
    title: "Growth Dashboard",
    description: "Real-time metrics for all key growth indicators",
    icon: "📱",
  },
  {
    title: "Activation Playbook",
    description: "Optimize user onboarding and first-value moments",
    icon: "🚀",
  },
  {
    title: "Retention Programs",
    description: "Engagement campaigns and lifecycle automation",
    icon: "🔄",
  },
];

const timelinePhases = [
  {
    week: "Week 1",
    title: "Growth Audit",
    activities: ["Analytics audit", "Funnel analysis", "User research", "Opportunity mapping"],
  },
  {
    week: "Week 2-3",
    title: "Infrastructure Setup",
    activities: [
      "Experimentation tools",
      "Analytics implementation",
      "Dashboard creation",
      "Process documentation",
    ],
  },
  {
    week: "Week 4-5",
    title: "First Experiments",
    activities: [
      "Hypothesis generation",
      "Test design & launch",
      "Results analysis",
      "Iteration planning",
    ],
  },
  {
    week: "Week 6+",
    title: "Scale & Optimize",
    activities: ["Velocity increase", "Team enablement", "Playbook creation", "Growth loops"],
  },
];

const growthMetrics = [
  "Acquisition",
  "Activation",
  "Retention",
  "Revenue",
  "Referral",
  "LTV/CAC",
  "Payback Period",
  "North Star Metric",
];

export default function ExperimentationGrowthPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Experimentation & Growth Services",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "Data-driven growth through continuous experimentation and optimization.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Growth Services",
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
              title="Experimentation & Growth"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Experimentation & Growth" },
              ]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Stop guessing, start growing. We build experimentation cultures that drive
              predictable, sustainable growth through data.
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
                      Growth Through Scientific Method
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        The best growth teams don&apos;t rely on tactics—they build systems. We help
                        you create a culture of experimentation where every decision is backed by
                        data.
                      </p>
                      <p>
                        From setting up your first A/B test to running 50+ experiments per quarter,
                        we provide the tools, processes, and expertise to accelerate your growth.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our Growth Approach:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Data-First:</strong> Every hypothesis backed by quantitative
                            insights
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>High Velocity:</strong> Ship experiments weekly, not monthly
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Full-Funnel:</strong> Optimize from acquisition to retention
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Sustainable:</strong> Build growth loops, not growth hacks
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">
                          Growth Engagement Model
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Structure</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Growth Lead</li>
                              <li>• Data Analyst</li>
                              <li>• Growth Engineer</li>
                              <li>• UX Researcher</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Engagement Types</h4>
                            <p className="text-gray-700">
                              Embedded team, sprint-based, or ongoing advisory
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Typical Duration</h4>
                            <p className="text-gray-700">3-6 month initial engagement</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment Range</h4>
                            <p className="text-2xl font-bold text-emerald-600">$125-155/hour</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Typical engagement: $50k-150k
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">Metrics We Optimize</h4>
                        <div className="flex flex-wrap gap-2">
                          {growthMetrics.map((metric, index) => (
                            <Chip key={index} size="sm" variant="flat" color="success">
                              {metric}
                            </Chip>
                          ))}
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
                  Growth Deliverables
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
              </motion.div>
            )}

            {selected === "timeline" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">
                  Growth Transformation Timeline
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
                              <Chip color="success" variant="flat" className="mb-2">
                                {phase.week}
                              </Chip>
                              <h3 className="text-xl font-bold text-navy-900">{phase.title}</h3>
                            </div>
                            <div className="md:col-span-2">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {phase.activities.map((activity, idx) => (
                                  <li key={idx} className="flex items-center text-gray-700">
                                    <svg
                                      className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0"
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
                    Growth Results That Matter
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We&apos;ve helped companies achieve sustainable, predictable growth
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-emerald-600 mb-2">283%</p>
                      <p className="text-gray-600">Average growth rate</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-teal-600 mb-2">45%</p>
                      <p className="text-gray-600">Conversion improvement</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-green-600 mb-2">3:1</p>
                      <p className="text-gray-600">Average LTV:CAC ratio</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: B2B SaaS Growth Engine
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        A B2B SaaS platform had plateaued at $2M ARR. Their product team was
                        shipping features, but growth remained flat.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Built experimentation infrastructure</li>
                        <li>• Ran 127 experiments in 6 months</li>
                        <li>• Optimized entire user journey</li>
                        <li>• Created growth loops for virality</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• 312% ARR growth to $8.2M</li>
                        <li>• 67% improvement in activation</li>
                        <li>• 45% reduction in churn</li>
                        <li>• 2.5x increase in viral coefficient</li>
                      </ul>
                      <Card className="bg-emerald-50 border-emerald-200">
                        <CardBody className="p-4">
                          <p className="text-emerald-900 italic">
                            &ldquo;Drexus transformed us from a feature factory to a growth machine.
                            Every team now thinks in experiments and metrics.&rdquo;
                          </p>
                          <p className="text-sm text-emerald-700 mt-2">
                            — David Park, Head of Growth
                          </p>
                        </CardBody>
                      </Card>
                    </div>
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
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s build a growth engine that compounds over time
            </p>
            <Button
              as={Link}
              href="/contact/book-a-call"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Start Growing Faster
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
