"use client";

import React, { useState } from "react";

import { Button, Card, CardBody, Chip, Link, Tab, Tabs } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui";

const deliverables = [
  {
    title: "RESTful & GraphQL APIs",
    description: "Scalable, documented APIs with OpenAPI/GraphQL schemas",
    icon: "🔌",
  },
  {
    title: "Database Architecture",
    description: "Optimized schemas, migrations, and query performance",
    icon: "🗄️",
  },
  {
    title: "Authentication & Security",
    description: "JWT/OAuth, rate limiting, and security best practices",
    icon: "🔒",
  },
  {
    title: "Microservices",
    description: "Event-driven architecture with message queues",
    icon: "🎯",
  },
  {
    title: "DevOps Integration",
    description: "Docker, Kubernetes, and CI/CD pipelines",
    icon: "🚢",
  },
  {
    title: "Monitoring & Logging",
    description: "APM, centralized logging, and alerting",
    icon: "📊",
  },
];

const timelinePhases = [
  {
    week: "Week 1",
    title: "Architecture & Setup",
    activities: [
      "API design and documentation",
      "Database schema design",
      "Development environment setup",
      "CI/CD pipeline configuration",
    ],
  },
  {
    week: "Week 2-3",
    title: "Core Development",
    activities: [
      "API endpoint implementation",
      "Database integration",
      "Authentication system",
      "Core business logic",
    ],
  },
  {
    week: "Week 4-5",
    title: "Integration & Testing",
    activities: [
      "Third-party integrations",
      "Unit and integration tests",
      "Performance optimization",
      "Security hardening",
    ],
  },
  {
    week: "Week 6",
    title: "Deployment & Monitoring",
    activities: [
      "Production deployment",
      "Monitoring setup",
      "Load testing",
      "Documentation finalization",
    ],
  },
];

const artifacts = [
  {
    type: "API Documentation",
    description: "Swagger/OpenAPI specs with interactive docs",
    preview: "📘",
  },
  {
    type: "Performance Metrics",
    description: "Load test results and optimization reports",
    preview: "⚡",
  },
  {
    type: "Security Report",
    description: "Penetration test results and remediation",
    preview: "🛡️",
  },
  {
    type: "Infrastructure as Code",
    description: "Terraform/CloudFormation templates",
    preview: "☁️",
  },
];

const techStack = [
  "Node.js",
  "TypeScript",
  "Express/Fastify",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "RabbitMQ/Kafka",
  "Docker",
  "Jest",
];

export default function BackendNodePage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Node.js Backend Development Service",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "Enterprise-grade Node.js backend development for scalable applications.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Backend Development Services",
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
              title="Node.js Backend Development"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Backend Node" },
              ]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Build rock-solid, scalable backends with Node.js experts who understand enterprise
              requirements and startup agility.
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
                      Enterprise Node.js Excellence
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Node.js powers some of the world&apos;s most demanding applications—from
                        Netflix to PayPal. Its non-blocking, event-driven architecture makes it
                        perfect for building fast, scalable backends.
                      </p>
                      <p>
                        Our Node.js experts bring deep understanding of asynchronous patterns,
                        performance optimization, and enterprise-grade security to every project.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our Backend Expertise:
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
                            <strong>Scalability First:</strong> Handle millions of concurrent
                            connections
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
                            <strong>Security by Design:</strong> OWASP compliance and regular audits
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
                            <strong>Performance Optimized:</strong> Sub-50ms response times
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
                            <strong>Cloud Native:</strong> AWS, GCP, Azure deployment expertise
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">
                          How We Build Backends
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Architecture Patterns
                            </h4>
                            <p className="text-gray-700">
                              Microservices, event-driven, or monolithic—we choose what fits
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Composition</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Senior Backend Architect</li>
                              <li>• Node.js Engineers (2-3)</li>
                              <li>• DevOps Engineer</li>
                              <li>• Database Specialist</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Development Standards
                            </h4>
                            <p className="text-gray-700">
                              TDD, code reviews, automated testing, continuous deployment
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment Range</h4>
                            <p className="text-2xl font-bold text-blue-600">$100-150/hour</p>
                            <p className="text-sm text-gray-600 mt-1">Typical project: $60k-180k</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">Our Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {techStack.map((tech, index) => (
                            <Chip key={index} size="sm" variant="flat" color="success">
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
                  Backend Deliverables
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
                    Technical Artifacts
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
                  6-Week Backend Sprint
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
                                      className="w-5 h-5 text-green-600 mr-2 flex-shrink-0"
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
                    Backend Performance at Scale
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our Node.js backends power mission-critical applications
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-green-600 mb-2">50ms</p>
                      <p className="text-gray-600">Average API response time</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-blue-600 mb-2">10M+</p>
                      <p className="text-gray-600">Daily API requests handled</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-purple-600 mb-2">99.99%</p>
                      <p className="text-gray-600">API uptime SLA</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: FinTech Payment Platform
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        A payment processing startup needed to build a PCI-compliant backend capable
                        of handling thousands of transactions per second with sub-second processing
                        times.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Microservices architecture with Node.js</li>
                        <li>• Redis for session management and caching</li>
                        <li>• PostgreSQL with read replicas</li>
                        <li>• Kafka for event streaming</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• 5,000+ TPS with 99th percentile &lt; 100ms</li>
                        <li>• PCI DSS Level 1 compliance achieved</li>
                        <li>• Zero security incidents in 2 years</li>
                        <li>• 40% reduction in infrastructure costs</li>
                      </ul>
                      <Card className="bg-green-50 border-green-200">
                        <CardBody className="p-4">
                          <p className="text-green-900 italic">
                            &ldquo;Drexus built us a backend that rivals the big payment processors.
                            We process millions daily without breaking a sweat.&rdquo;
                          </p>
                          <p className="text-sm text-green-700 mt-2">— Marcus Chen, CTO</p>
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
              Need a Backend That Never Breaks?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s build APIs and infrastructure that scale with your ambitions
            </p>
            <Button
              as={Link}
              href="/contact/book-a-call"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Discuss Your Backend Needs
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
