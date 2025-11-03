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
    title: "Paid Media Strategy",
    description: "Channel mix, budget allocation, and growth projections",
    icon: "📈",
  },
  {
    title: "Campaign Management",
    description: "Google Ads, Facebook, LinkedIn, and more",
    icon: "🎯",
  },
  {
    title: "Conversion Optimization",
    description: "Landing pages, ad creative, and funnel optimization",
    icon: "🔄",
  },
  {
    title: "Attribution Modeling",
    description: "Multi-touch attribution and ROI tracking",
    icon: "📊",
  },
  {
    title: "Creative Testing",
    description: "Ad copy, images, and video creative optimization",
    icon: "🎨",
  },
  {
    title: "Performance Reporting",
    description: "Real-time dashboards and weekly insights",
    icon: "📱",
  },
];

const timelinePhases = [
  {
    week: "Week 1",
    title: "Audit & Strategy",
    activities: ["Account audit", "Competitor analysis", "Strategy development", "KPI alignment"],
  },
  {
    week: "Week 2",
    title: "Setup & Launch",
    activities: ["Campaign structure", "Tracking setup", "Creative development", "Initial launch"],
  },
  {
    week: "Week 3-4",
    title: "Optimization",
    activities: [
      "Performance analysis",
      "Bid optimization",
      "Creative testing",
      "Audience refinement",
    ],
  },
  {
    week: "Ongoing",
    title: "Scale & Iterate",
    activities: [
      "Expansion strategies",
      "New channel testing",
      "Continuous optimization",
      "Reporting & insights",
    ],
  },
];

const channels = [
  "Google Ads",
  "Facebook Ads",
  "LinkedIn Ads",
  "TikTok Ads",
  "YouTube Ads",
  "Amazon Ads",
  "Display",
  "Retargeting",
];

export default function PerformanceMarketingPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Performance Marketing Services",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "Data-driven paid acquisition that delivers profitable growth at scale.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Performance Marketing Services",
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
              title="Performance Marketing"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Performance Marketing" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Paid acquisition that actually pays off. We turn ad spend into profitable revenue
              through data-driven optimization.
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
                      Growth at Profitable Scale
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Anyone can spend money on ads. The challenge is making every dollar work
                        harder than the last. We specialize in profitable growth through relentless
                        optimization.
                      </p>
                      <p>
                        Our performance marketing team combines creative excellence with analytical
                        rigor to deliver campaigns that scale efficiently.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our Performance Approach:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>ROI Obsessed:</strong> Every campaign must deliver profitable
                            returns
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Full-Funnel:</strong> From awareness to conversion optimization
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Creative + Data:</strong> Beautiful ads backed by performance
                            data
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
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
                            <strong>Always Testing:</strong> Continuous experimentation and learning
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">
                          Performance Marketing Model
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Service Models</h4>
                            <p className="text-gray-700">
                              Full management, co-management, or consulting
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Structure</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Performance Lead</li>
                              <li>• Media Buyers (Channel Experts)</li>
                              <li>• Creative Strategist</li>
                              <li>• Data Analyst</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Minimum Budgets</h4>
                            <p className="text-gray-700">Flexible</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Investiment</h4>
                            <p className="text-2xl font-bold text-blue-600">Starting from: $100</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">Channels We Master</h4>
                        <div className="flex flex-wrap gap-2">
                          {channels.map((channel, index) => (
                            <Chip key={index} size="sm" variant="flat" color="primary">
                              {channel}
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
                  Performance Deliverables
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
                  Performance Marketing Timeline
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
                    Performance That Pays
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We manage $10M+ in annual ad spend profitably
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-blue-600 mb-2">3.2x</p>
                      <p className="text-gray-600">Average ROAS</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-indigo-600 mb-2">$42</p>
                      <p className="text-gray-600">Average CPA reduction</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-purple-600 mb-2">287%</p>
                      <p className="text-gray-600">Average growth rate</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: D2C E-commerce Scale
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        D2C brand plateaued at $50k/month in revenue. Facebook CPAs rising, Google
                        Ads underperforming. Needed profitable scale.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Complete account restructure</li>
                        <li>• New creative testing framework</li>
                        <li>• Expanded to 5 new channels</li>
                        <li>• Custom attribution model</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• $500k/month revenue in 6 months</li>
                        <li>• 3.8x blended ROAS</li>
                        <li>• 52% reduction in CAC</li>
                        <li>• Profitable on first purchase</li>
                      </ul>
                      <Card className="bg-blue-50 border-blue-200">
                        <CardBody className="p-4">
                          <p className="text-blue-900 italic">
                            &ldquo;Drexus didn&apos;t just manage our ads—they transformed our
                            entire growth strategy. We&apos;re now a $6M brand.&rdquo;
                          </p>
                          <p className="text-sm text-blue-700 mt-2">— James Wilson, Founder</p>
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
              Ready for Profitable Growth?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s turn your ad spend into revenue that scales
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Get Your Free Audit
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
