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
    title: "Brand Identity",
    description: "Logo, visual system, and brand guidelines",
    icon: "✨",
  },
  {
    title: "Content Strategy",
    description: "Editorial calendar, voice & tone, content pillars",
    icon: "📝",
  },
  {
    title: "Motion Design",
    description: "Animations, micro-interactions, and video content",
    icon: "🎬",
  },
  {
    title: "Design Systems",
    description: "Component libraries and style guides",
    icon: "🎨",
  },
  {
    title: "Marketing Assets",
    description: "Social media, presentations, and collateral",
    icon: "📱",
  },
  {
    title: "Video Production",
    description: "Product demos, explainers, and brand films",
    icon: "🎥",
  },
];

const timelinePhases = [
  {
    week: "Week 1-2",
    title: "Discovery & Strategy",
    activities: ["Brand audit", "Competitor analysis", "Stakeholder interviews", "Creative brief"],
  },
  {
    week: "Week 3-4",
    title: "Concept Development",
    activities: ["Mood boards", "Initial concepts", "Content planning", "Motion studies"],
  },
  {
    week: "Week 5-6",
    title: "Design & Production",
    activities: ["Visual execution", "Content creation", "Animation development", "Revisions"],
  },
  {
    week: "Week 7-8",
    title: "Delivery & Launch",
    activities: ["Final assets", "Brand guidelines", "Launch support", "Team training"],
  },
];

const capabilities = [
  "Brand Strategy",
  "Visual Design",
  "Motion Graphics",
  "Video Production",
  "Content Writing",
  "3D Design",
  "Illustration",
  "Photography",
];

export default function ContentBrandMotionPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content, Brand & Motion Design Services",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description:
      "Creative services that bring your brand to life through compelling content and motion.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Creative Services",
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
              title="Content, Brand & Motion"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Content, Brand & Motion" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Bring your brand to life with stunning visuals, compelling content, and motion that
              captures attention in a crowded digital world.
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
                      Creative That Connects
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        In a world of infinite scroll, your brand needs to stop thumbs and capture
                        hearts. We create visual experiences that resonate with your audience and
                        drive action.
                      </p>
                      <p>
                        From brand identity to motion design, we craft cohesive creative systems
                        that work across every touchpoint.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our Creative Philosophy:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-pink-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Story First:</strong> Every brand has a story worth telling
                            beautifully
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-pink-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Motion Matters:</strong> Movement brings brands to life
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-pink-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Consistency Wins:</strong> Cohesive systems across all channels
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-pink-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Performance + Beauty:</strong> Creative that converts
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-pink-50 to-purple-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Creative Services</h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Composition</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Creative Director</li>
                              <li>• Brand Designer</li>
                              <li>• Motion Designer</li>
                              <li>• Content Strategist</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Project Types</h4>
                            <p className="text-gray-700">
                              Brand refresh, launch campaigns, ongoing creative
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Typical Timeline</h4>
                            <p className="text-gray-700">4-8 weeks for brand projects</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investment Range</h4>
                            <p className="text-2xl font-bold text-pink-600">Starting from: $100</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">Creative Capabilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {capabilities.map((capability, index) => (
                            <Chip key={index} size="sm" variant="flat" color="secondary">
                              {capability}
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
                  Creative Deliverables
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
                  8-Week Creative Process
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
                                      className="w-5 h-5 text-pink-600 mr-2 flex-shrink-0"
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
                    Creative That Performs
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Beautiful work that drives real business results
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-pink-600 mb-2">147%</p>
                      <p className="text-gray-600">Brand recall improvement</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-purple-600 mb-2">3.5x</p>
                      <p className="text-gray-600">Engagement increase</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-indigo-600 mb-2">82%</p>
                      <p className="text-gray-600">Video completion rate</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: Tech Startup Rebrand
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        B2B startup with a dated brand competing against well-funded competitors.
                        Needed to stand out and attract enterprise clients.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Complete brand identity redesign</li>
                        <li>• Motion design system</li>
                        <li>• Product demo videos</li>
                        <li>• Content strategy & execution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• 220% increase in qualified leads</li>
                        <li>• 67% improvement in brand perception</li>
                        <li>• 3x social media engagement</li>
                        <li>• Closed first Fortune 500 client</li>
                      </ul>
                      <Card className="bg-pink-50 border-pink-200">
                        <CardBody className="p-4">
                          <p className="text-pink-900 italic">
                            &ldquo;The rebrand transformed how we&apos;re perceived in the market.
                            We went from startup to enterprise player overnight.&rdquo;
                          </p>
                          <p className="text-sm text-pink-700 mt-2">— Rachel Kim, CMO</p>
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
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Stand Out?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a brand experience that captures attention and drives results
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Start Your Creative Project
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
