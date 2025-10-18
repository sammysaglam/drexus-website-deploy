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
    title: "Infrastructure as Code",
    description: "Terraform/CloudFormation templates for reproducible deployments",
    icon: "🏗️",
  },
  {
    title: "CI/CD Pipelines",
    description: "Automated build, test, and deployment workflows",
    icon: "🔄",
  },
  {
    title: "Monitoring & Alerting",
    description: "Comprehensive observability with dashboards and alerts",
    icon: "📊",
  },
  {
    title: "Auto-Scaling",
    description: "Cost-effective scaling based on actual demand",
    icon: "📈",
  },
  {
    title: "Disaster Recovery",
    description: "Backup strategies and failover procedures",
    icon: "🛡️",
  },
  {
    title: "Security Hardening",
    description: "Zero-trust architecture and compliance automation",
    icon: "🔒",
  },
];

const timelinePhases = [
  {
    week: "Week 1",
    title: "Assessment & Planning",
    activities: [
      "Infrastructure audit",
      "Security assessment",
      "Performance baseline",
      "Architecture design",
    ],
  },
  {
    week: "Week 2",
    title: "Foundation Setup",
    activities: [
      "IaC implementation",
      "Network architecture",
      "Security policies",
      "Base monitoring",
    ],
  },
  {
    week: "Week 3",
    title: "Automation Build",
    activities: [
      "CI/CD pipelines",
      "Automated testing",
      "Deployment automation",
      "Rollback procedures",
    ],
  },
  {
    week: "Week 4",
    title: "Optimization & Handoff",
    activities: ["Performance tuning", "Cost optimization", "Documentation", "Team training"],
  },
];

const artifacts = [
  {
    type: "Infrastructure Code",
    description: "Complete IaC repository with GitOps workflows",
    preview: "📁",
  },
  {
    type: "Runbooks",
    description: "Operational procedures for common scenarios",
    preview: "📋",
  },
  {
    type: "Monitoring Dashboards",
    description: "Custom dashboards for all critical metrics",
    preview: "📊",
  },
  {
    type: "Security Reports",
    description: "Compliance status and vulnerability assessments",
    preview: "🔐",
  },
];

const techStack = [
  "AWS/GCP/Azure",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "ArgoCD",
  "Prometheus",
  "Grafana",
  "ELK Stack",
  "Vault",
];

export default function DevOpsSREPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "DevOps & SRE Services",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "Enterprise DevOps and Site Reliability Engineering for 99.99% uptime.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DevOps Services",
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
              title="DevOps & SRE"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "DevOps & SRE" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Build reliable, scalable infrastructure that runs itself. From startup to enterprise,
              we automate everything.
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
                      Infrastructure That Never Sleeps
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        In the cloud era, your infrastructure needs to be as agile as your business.
                        We build systems that scale automatically, heal themselves, and cost less to
                        run.
                      </p>
                      <p>
                        Our DevOps and SRE practices transform how you ship software—from monthly
                        releases to multiple deployments per day, with confidence.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our DevOps Excellence:
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
                            <strong>99.99% Uptime:</strong> SLAs backed by automated incident
                            response
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
                            <strong>10x Deployment Speed:</strong> From commit to production in
                            minutes
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
                            <strong>Cost Optimization:</strong> Save 30-50% on cloud bills
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
                            <strong>Security First:</strong> Zero-trust architecture by default
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-orange-50 to-red-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">
                          How We Transform Ops
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Engagement Model</h4>
                            <p className="text-gray-700">
                              Embedded SRE team or project-based transformation
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Composition</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Senior SRE/DevOps Engineer</li>
                              <li>• Cloud Architect</li>
                              <li>• Security Engineer</li>
                              <li>• Automation Specialist</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Approach</h4>
                            <p className="text-gray-700">
                              GitOps, Infrastructure as Code, observability-driven
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment Range</h4>
                            <p className="text-2xl font-bold text-orange-600">
                              Starting from: $100
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">Our Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {techStack.map((tech, index) => (
                            <Chip key={index} size="sm" variant="flat" color="warning">
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
                  DevOps Deliverables
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
                    Infrastructure Artifacts
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
                  4-Week DevOps Transformation
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
                    Infrastructure Excellence
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We&apos;ve helped companies scale from thousands to millions of users
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-orange-600 mb-2">99.99%</p>
                      <p className="text-gray-600">Average uptime SLA</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-red-600 mb-2">15min</p>
                      <p className="text-gray-600">Average deploy time</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-orange-600 mb-2">40%</p>
                      <p className="text-gray-600">Average cost reduction</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: E-commerce Platform Scale
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        A fast-growing e-commerce platform was experiencing daily outages during
                        peak hours. Manual deployments took hours and often failed.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Kubernetes migration with auto-scaling</li>
                        <li>• GitOps deployment with ArgoCD</li>
                        <li>• Comprehensive monitoring with Prometheus</li>
                        <li>• Automated rollback procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• Zero downtime during Black Friday</li>
                        <li>• 10x faster deployments</li>
                        <li>• 45% reduction in infrastructure costs</li>
                        <li>• 99.99% uptime achieved</li>
                      </ul>
                      <Card className="bg-orange-50 border-orange-200">
                        <CardBody className="p-4">
                          <p className="text-orange-900 italic">
                            &ldquo;Drexus transformed our infrastructure from a liability to a
                            competitive advantage. We now deploy fearlessly.&rdquo;
                          </p>
                          <p className="text-sm text-orange-700 mt-2">
                            — Alex Rivera, VP Engineering
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
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready for 99.99% Uptime?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s build infrastructure that scales with your ambitions
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Start Your DevOps Journey
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
