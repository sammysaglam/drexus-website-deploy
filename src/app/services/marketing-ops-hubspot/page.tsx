"use client";

import React, { useState } from "react";

import { Button, Card, CardBody, Chip, Link, Tab, Tabs } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui";

const deliverables = [
  {
    title: "HubSpot Implementation",
    description: "Complete setup and customization of your HubSpot instance",
    icon: "🏗️",
  },
  {
    title: "Marketing Automation",
    description: "Workflows, lead scoring, and nurture campaigns",
    icon: "🤖",
  },
  {
    title: "CRM Integration",
    description: "Connect HubSpot with your entire tech stack",
    icon: "🔄",
  },
  {
    title: "Custom Reporting",
    description: "Dashboards that track what matters to your business",
    icon: "📊",
  },
  {
    title: "Lead Management",
    description: "Optimized processes from MQL to SQL to customer",
    icon: "🎯",
  },
  {
    title: "Team Training",
    description: "Empower your team to leverage HubSpot fully",
    icon: "🎓",
  },
];

const timelinePhases = [
  {
    week: "Week 1",
    title: "Audit & Strategy",
    activities: [
      "Current state assessment",
      "Requirements gathering",
      "Tech stack audit",
      "Strategy development",
    ],
  },
  {
    week: "Week 2",
    title: "Setup & Migration",
    activities: [
      "HubSpot configuration",
      "Data migration",
      "Integration setup",
      "Custom properties",
    ],
  },
  {
    week: "Week 3",
    title: "Automation Build",
    activities: ["Workflow creation", "Lead scoring setup", "Email templates", "Campaign setup"],
  },
  {
    week: "Week 4",
    title: "Launch & Training",
    activities: ["Testing & QA", "Team training", "Documentation", "Go-live support"],
  },
];

const hubspotFeatures = [
  "Marketing Hub",
  "Sales Hub",
  "Service Hub",
  "CMS Hub",
  "Operations Hub",
  "Workflows",
  "Reports",
  "Integrations",
];

export default function MarketingOpsHubSpotPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing Operations & HubSpot Services",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "HubSpot implementation and marketing operations optimization services.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing Operations Services",
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
              title="Marketing Ops & HubSpot"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Marketing Ops & HubSpot" },
              ]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Unlock the full power of HubSpot. We help marketing teams automate workflows, optimize
              conversions, and prove ROI.
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
                      Marketing That Runs Itself
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        HubSpot is powerful, but most teams use only 20% of its capabilities. We
                        help you leverage the full platform to automate repetitive tasks and focus
                        on strategy.
                      </p>
                      <p>
                        From implementation to optimization, we ensure your marketing operations run
                        smoothly, efficiently, and profitably.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our Marketing Ops Expertise:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Full Stack HubSpot:</strong> Certified in all HubSpot hubs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Integration Masters:</strong> Connect your entire tech stack
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Data-Driven:</strong> Every decision backed by analytics
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Revenue Focused:</strong> Align marketing with sales goals
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-orange-50 to-amber-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">HubSpot Services</h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Service Types</h4>
                            <p className="text-gray-700">
                              Implementation, migration, optimization, training
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Structure</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• HubSpot Solutions Architect</li>
                              <li>• Marketing Automation Specialist</li>
                              <li>• Integration Developer</li>
                              <li>• Analytics Expert</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Typical Duration</h4>
                            <p className="text-gray-700">
                              4-week implementation, ongoing optimization
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment Range</h4>
                            <p className="text-2xl font-bold text-orange-600">$95-125/hour</p>
                            <p className="text-sm text-gray-600 mt-1">Typical project: $20k-60k</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">HubSpot Features We Master</h4>
                        <div className="flex flex-wrap gap-2">
                          {hubspotFeatures.map((feature, index) => (
                            <Chip key={index} size="sm" variant="flat" color="warning">
                              {feature}
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
                  Marketing Ops Deliverables
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  4-Week HubSpot Implementation
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
                              <Chip color="warning" variant="flat" className="mb-2">
                                {phase.week}
                              </Chip>
                              <h3 className="text-xl font-bold text-navy-900">{phase.title}</h3>
                            </div>
                            <div className="md:col-span-2">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {phase.activities.map((activity, idx) => (
                                  <li key={idx} className="flex items-center text-gray-700">
                                    <svg
                                      className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0"
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
                    Marketing Ops Success
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We&apos;ve helped teams 10x their marketing efficiency
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-orange-600 mb-2">73%</p>
                      <p className="text-gray-600">Lead quality improvement</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-amber-600 mb-2">5x</p>
                      <p className="text-gray-600">Marketing velocity</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-yellow-600 mb-2">42%</p>
                      <p className="text-gray-600">Cost per lead reduction</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: B2B Software Company
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        Marketing team spending 60% of time on manual tasks. Poor lead handoff to
                        sales. No visibility into ROI.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Complete HubSpot implementation</li>
                        <li>• 47 automated workflows created</li>
                        <li>• Salesforce integration</li>
                        <li>• Custom attribution reporting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• 80% reduction in manual tasks</li>
                        <li>• 156% increase in MQLs</li>
                        <li>• 45% improvement in SQL conversion</li>
                        <li>• Clear ROI visibility by channel</li>
                      </ul>
                      <Card className="bg-orange-50 border-orange-200">
                        <CardBody className="p-4">
                          <p className="text-orange-900 italic">
                            &ldquo;Drexus transformed our marketing operations. What used to take
                            days now happens automatically. Our team can finally focus on
                            strategy.&rdquo;
                          </p>
                          <p className="text-sm text-orange-700 mt-2">— Lisa Chen, VP Marketing</p>
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
              Ready to Supercharge Your Marketing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s unlock the full power of HubSpot for your team
            </p>
            <Button
              as={Link}
              href="/contact/book-a-call"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Get Your HubSpot Audit
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
