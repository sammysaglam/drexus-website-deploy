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
    title: "User Research & Insights",
    description: "Interviews, surveys, and usability testing findings",
    icon: "🔬",
  },
  {
    title: "Information Architecture",
    description: "Site maps, user flows, and navigation structures",
    icon: "🗺️",
  },
  {
    title: "Wireframes & Prototypes",
    description: "Low and high-fidelity interactive prototypes",
    icon: "📐",
  },
  {
    title: "Design System",
    description: "Component library, style guide, and documentation",
    icon: "🎨",
  },
  {
    title: "Visual Design",
    description: "Pixel-perfect UI designs for all screens and states",
    icon: "✨",
  },
  {
    title: "Handoff Documentation",
    description: "Detailed specs, assets, and implementation guides",
    icon: "📦",
  },
];

const timelinePhases = [
  {
    week: "Week 1",
    title: "Discovery & Research",
    activities: [
      "Stakeholder interviews",
      "User research planning",
      "Competitive analysis",
      "Current state audit",
    ],
  },
  {
    week: "Week 2-3",
    title: "Strategy & Architecture",
    activities: [
      "User personas & journeys",
      "Information architecture",
      "Wireframing key flows",
      "Concept validation",
    ],
  },
  {
    week: "Week 4-5",
    title: "Design & Prototyping",
    activities: [
      "Visual design exploration",
      "Interactive prototypes",
      "Design system creation",
      "Usability testing",
    ],
  },
  {
    week: "Week 6",
    title: "Refinement & Handoff",
    activities: [
      "Design refinements",
      "Developer handoff prep",
      "Documentation",
      "Implementation support",
    ],
  },
];

const artifacts = [
  {
    type: "Figma Files",
    description: "Complete design files with components and variants",
    preview: "🎨",
  },
  {
    type: "User Research Report",
    description: "Findings, insights, and recommendations",
    preview: "📊",
  },
  {
    type: "Usability Test Results",
    description: "Video recordings and analysis of user sessions",
    preview: "🎥",
  },
  {
    type: "Design System",
    description: "Storybook or Figma library with all components",
    preview: "📚",
  },
];

const designPrinciples = [
  "Accessibility First",
  "Mobile-First Design",
  "Data-Driven Decisions",
  "Iterative Process",
  "User-Centered",
  "Performance Focused",
  "Consistent Experience",
  "Delightful Details",
];

export default function UXUIPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UX/UI Design Service",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description:
      "Professional UX/UI design services creating intuitive, beautiful digital experiences.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design Services",
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
              title="UX/UI Design"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "UX/UI" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Transform complex problems into elegant, intuitive experiences that delight users and
              drive business results.
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
                      Design That Drives Results
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Great design is invisible. When done right, users don&apos;t think about the
                        interface—they accomplish their goals effortlessly. That&apos;s the standard
                        we hold ourselves to.
                      </p>
                      <p>
                        Our design process combines deep user research, iterative prototyping, and
                        meticulous attention to detail to create experiences that are both beautiful
                        and functional.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our Design Philosophy:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Research-Driven:</strong> Every decision backed by user data
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Inclusive Design:</strong> Accessible to all users by default
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Systems Thinking:</strong> Scalable design systems, not just
                            screens
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Business Aligned:</strong> Design that drives measurable
                            outcomes
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">
                          Our Design Process
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Design Team</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Senior UX Designer (Lead)</li>
                              <li>• UI Designer</li>
                              <li>• User Researcher</li>
                              <li>• Interaction Designer</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Tools We Use</h4>
                            <p className="text-gray-700">
                              Figma, Sketch, Adobe CC, Principle, Maze, Hotjar
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Collaboration Style
                            </h4>
                            <p className="text-gray-700">
                              Embedded with your team, daily syncs, weekly reviews
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment Range</h4>
                            <p className="text-2xl font-bold text-purple-600">
                              Starting from: $100
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">Design Principles</h4>
                        <div className="flex flex-wrap gap-2">
                          {designPrinciples.map((principle, index) => (
                            <Chip key={index} size="sm" variant="flat" color="secondary">
                              {principle}
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
                  Design Deliverables
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
                    Design Artifacts
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
                  6-Week Design Sprint
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
                                      className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0"
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
                    Design That Delivers Impact
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our designs don&apos;t just look good—they drive real business results
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-purple-600 mb-2">87%</p>
                      <p className="text-gray-600">Average improvement in user satisfaction</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-pink-600 mb-2">3.2x</p>
                      <p className="text-gray-600">Average increase in conversion rates</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-indigo-600 mb-2">52%</p>
                      <p className="text-gray-600">Reduction in support tickets</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: B2B SaaS Platform Redesign
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        A complex B2B analytics platform was losing deals due to a confusing
                        interface. Users couldn&apos;t complete basic tasks without extensive
                        training.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Approach</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• 50+ user interviews and observation sessions</li>
                        <li>• Complete information architecture overhaul</li>
                        <li>• Progressive disclosure for complex features</li>
                        <li>• Mobile-responsive design system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• 73% reduction in time to first value</li>
                        <li>• 4.8/5 user satisfaction (up from 2.3)</li>
                        <li>• 65% decrease in training requirements</li>
                        <li>• 3x improvement in trial-to-paid conversion</li>
                      </ul>
                      <Card className="bg-purple-50 border-purple-200">
                        <CardBody className="p-4">
                          <p className="text-purple-900 italic">
                            &ldquo;The redesign transformed our product from a necessary evil to a
                            tool our customers actually enjoy using. Sales cycles shortened by
                            40%.&rdquo;
                          </p>
                          <p className="text-sm text-purple-700 mt-2">— Sarah Martinez, CPO</p>
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
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s design experiences your users will love
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Start Your Design Project
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
