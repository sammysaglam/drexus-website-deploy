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
    title: "Data Warehouse",
    description: "Modern data warehouse optimized for analytics at scale",
    icon: "🏢",
  },
  {
    title: "ETL Pipelines",
    description: "Automated data ingestion from all your sources",
    icon: "🔄",
  },
  {
    title: "Analytics Dashboards",
    description: "Self-service dashboards for business insights",
    icon: "📊",
  },
  {
    title: "Machine Learning Models",
    description: "Predictive models that drive business decisions",
    icon: "🤖",
  },
  {
    title: "Data Governance",
    description: "Security, privacy, and compliance frameworks",
    icon: "🔐",
  },
  {
    title: "Real-time Analytics",
    description: "Stream processing for instant insights",
    icon: "⚡",
  },
];

const timelinePhases = [
  {
    week: "Week 1-2",
    title: "Discovery & Architecture",
    activities: [
      "Data source audit",
      "Requirements gathering",
      "Architecture design",
      "Tool selection",
    ],
  },
  {
    week: "Week 3-4",
    title: "Foundation Building",
    activities: [
      "Data warehouse setup",
      "Initial ETL pipelines",
      "Data quality framework",
      "Security implementation",
    ],
  },
  {
    week: "Week 5-6",
    title: "Analytics Development",
    activities: [
      "Dashboard creation",
      "KPI implementation",
      "ML model training",
      "Performance optimization",
    ],
  },
  {
    week: "Week 7-8",
    title: "Deployment & Training",
    activities: ["Production deployment", "User training", "Documentation", "Handoff & support"],
  },
];

const artifacts = [
  {
    type: "Data Architecture",
    description: "Complete blueprint of your data ecosystem",
    preview: "🗺️",
  },
  {
    type: "Analytics Dashboards",
    description: "Interactive dashboards for all stakeholders",
    preview: "📈",
  },
  {
    type: "Data Dictionary",
    description: "Comprehensive documentation of all data assets",
    preview: "📚",
  },
  {
    type: "ML Models",
    description: "Production-ready predictive models",
    preview: "🧠",
  },
];

const techStack = [
  "Snowflake",
  "BigQuery",
  "dbt",
  "Airflow",
  "Spark",
  "Python",
  "Tableau",
  "Looker",
  "TensorFlow",
];

export default function DataAnalyticsPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data & Analytics Services",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "Transform raw data into actionable insights with modern analytics solutions.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Data Services",
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
              title="Data & Analytics"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Data & Analytics" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Turn your data into your most valuable asset. We build modern data platforms that
              deliver insights at the speed of business.
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
                      Data-Driven Decisions at Scale
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Your data is growing exponentially, but are your insights? We help companies
                        build modern data stacks that turn raw data into competitive advantage.
                      </p>
                      <p>
                        From real-time dashboards to predictive analytics, we create data platforms
                        that empower every team to make better decisions faster.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our Data Expertise:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Unified Data Platform:</strong> Single source of truth for all
                            metrics
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Self-Service Analytics:</strong> Empower teams without SQL
                            knowledge
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Real-Time Insights:</strong> From event to dashboard in seconds
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>ML-Powered:</strong> Predictive analytics and anomaly detection
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Modern Data Stack</h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Structure</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Data Architect (Lead)</li>
                              <li>• Analytics Engineer</li>
                              <li>• Data Scientist</li>
                              <li>• BI Developer</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Typical Stack</h4>
                            <p className="text-gray-700">
                              Cloud DW + dbt + Orchestration + BI Tools
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Delivery Model</h4>
                            <p className="text-gray-700">
                              8-week implementation with ongoing support
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment Range</h4>
                            <p className="text-2xl font-bold text-indigo-600">
                              Starting from: $100
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">Technologies We Love</h4>
                        <div className="flex flex-wrap gap-2">
                          {techStack.map((tech, index) => (
                            <Chip key={index} size="sm" variant="flat" color="secondary">
                              {tech}
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
                  Analytics Deliverables
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
                    Data Platform Artifacts
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
                  8-Week Data Transformation
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
                              <Chip color="secondary" variant="flat" className="mb-2">
                                {phase.week}
                              </Chip>
                              <h3 className="text-xl font-bold text-navy-900">{phase.title}</h3>
                            </div>
                            <div className="md:col-span-2">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {phase.activities.map((activity, idx) => (
                                  <li key={idx} className="flex items-center text-gray-700">
                                    <svg
                                      className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0"
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
                    Data Success Stories
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We&apos;ve helped companies unlock millions in value from their data
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-indigo-600 mb-2">10x</p>
                      <p className="text-gray-600">Faster reporting cycles</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-purple-600 mb-2">85%</p>
                      <p className="text-gray-600">Reduction in data errors</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-pink-600 mb-2">$2M+</p>
                      <p className="text-gray-600">Average annual savings</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: Retail Analytics Platform
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        A retail chain with 200+ stores had data scattered across 15 different
                        systems. Reports took weeks to generate and were often contradictory.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Unified data warehouse on Snowflake</li>
                        <li>• Real-time inventory tracking</li>
                        <li>• Predictive demand forecasting</li>
                        <li>• Self-service dashboards for store managers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• Daily reporting vs. monthly</li>
                        <li>• 30% reduction in inventory costs</li>
                        <li>• 25% increase in sales from better forecasting</li>
                        <li>• 90% user adoption across stores</li>
                      </ul>
                      <Card className="bg-indigo-50 border-indigo-200">
                        <CardBody className="p-4">
                          <p className="text-indigo-900 italic">
                            &ldquo;The data platform Drexus built transformed how we operate. Store
                            managers now make decisions based on real-time data, not gut
                            feel.&rdquo;
                          </p>
                          <p className="text-sm text-indigo-700 mt-2">— Maria Gonzalez, COO</p>
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
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Unlock Your Data&apos;s Potential?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s build a data platform that drives real business value
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Start Your Data Journey
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
