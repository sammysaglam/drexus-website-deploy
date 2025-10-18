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
    title: "24/7 Monitoring",
    description: "Round-the-clock system monitoring and alerting",
    icon: "👁️",
  },
  {
    title: "Bug Fixes & Updates",
    description: "Rapid response to issues and regular updates",
    icon: "🐛",
  },
  {
    title: "Performance Optimization",
    description: "Continuous improvements to speed and efficiency",
    icon: "⚡",
  },
  {
    title: "Security Patches",
    description: "Proactive security updates and vulnerability fixes",
    icon: "🔒",
  },
  {
    title: "Feature Enhancements",
    description: "Iterative improvements based on user feedback",
    icon: "✨",
  },
  {
    title: "Documentation",
    description: "Keep docs current with system changes",
    icon: "📚",
  },
];

const supportPlans = [
  {
    name: "Essential",
    hours: "20 hours/month",
    response: "24 hours",
    features: ["Bug fixes", "Security patches", "Monthly reports"],
    price: "Flexible",
  },
  {
    name: "Professional",
    hours: "40 hours/month",
    response: "8 hours",
    features: [
      "Everything in Essential",
      "Performance optimization",
      "Feature updates",
      "24/7 monitoring",
    ],
    price: "Flexible",
  },
  {
    name: "Enterprise",
    hours: "80+ hours/month",
    response: "2 hours",
    features: [
      "Everything in Professional",
      "Dedicated team",
      "Priority support",
      "SLA guarantees",
    ],
    price: "Custom pricing",
  },
];

const metrics = [
  "Response Time",
  "Resolution Time",
  "Uptime",
  "Performance",
  "Security Score",
  "User Satisfaction",
  "Code Quality",
  "Tech Debt",
];

const timelinePhases = [
  {
    week: "Week 1-2",
    title: "Onboarding & Assessment",
    activities: [
      "System audit & documentation review",
      "Monitoring setup & configuration",
      "Team access & tool provisioning",
      "Initial health check & baseline metrics",
    ],
  },
  {
    week: "Week 3-4",
    title: "Monitoring & Optimization",
    activities: [
      "24/7 monitoring activation",
      "Performance baseline establishment",
      "Security vulnerability assessment",
      "First optimization recommendations",
    ],
  },
  {
    week: "Week 5-6",
    title: "Proactive Maintenance",
    activities: [
      "Regular maintenance schedule setup",
      "Automated backup verification",
      "Security patch deployment",
      "Performance optimization implementation",
    ],
  },
  {
    week: "Week 7-8",
    title: "Continuous Improvement",
    activities: [
      "Monthly reporting & insights",
      "Feature enhancement planning",
      "Process refinement",
      "Long-term roadmap alignment",
    ],
  },
];

export default function SupportMaintenancePage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Support & Maintenance Services",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "Keep your systems running smoothly with proactive support and maintenance.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Support Services",
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
              title="Support & Maintenance"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Support & Maintenance" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Sleep soundly knowing your systems are monitored, maintained, and continuously
              improved by the team that built them.
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
                      Your Software Never Sleeps
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Launch is just the beginning. As your business evolves, your software needs
                        to keep pace. Our support teams ensure your systems stay fast, secure, and
                        aligned with your goals.
                      </p>
                      <p>
                        We offer flexible support plans that scale with your needs—from essential
                        maintenance to full-service management.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our Support Philosophy:
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
                            <strong>Proactive:</strong> Fix issues before users notice them
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
                            <strong>Responsive:</strong> Rapid response when issues arise
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
                            <strong>Continuous:</strong> Always improving performance and features
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
                            <strong>Transparent:</strong> Clear communication and regular updates
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Support Services</h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Coverage Options</h4>
                            <p className="text-gray-700">
                              Business hours or 24/7 support available
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Access</h4>
                            <p className="text-gray-700">Same engineers who built your system</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Response Times</h4>
                            <p className="text-gray-700">
                              2-24 hours depending on plan and severity
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Starting From</h4>
                            <p className="text-2xl font-bold text-green-600">Starting from: $100</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">What We Monitor</h4>
                        <div className="flex flex-wrap gap-2">
                          {metrics.map((metric, index) => (
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

            {selected === "plans" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">
                  Support Plans for Every Need
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {supportPlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className={`h-full ${index === 1 ? "border-2 border-blue-500" : ""}`}>
                        <CardBody className="p-8">
                          {index === 1 && (
                            <Chip color="primary" variant="flat" className="mb-4">
                              Most Popular
                            </Chip>
                          )}
                          <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                          <p className="text-gray-600 mb-4">{plan.hours}</p>
                          <p className="text-sm text-gray-500 mb-6">
                            Response time: {plan.response}
                          </p>
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, idx) => (
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
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-auto">
                            <p className="text-2xl font-bold text-navy-900 mb-4">{plan.price}</p>
                            <Button
                              as={Link}
                              href="/contact"
                              color={index === 1 ? "primary" : "default"}
                              variant={index === 1 ? "solid" : "flat"}
                              className="w-full"
                            >
                              Get Started
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
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
                  Comprehensive Support Services
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
                  8-Week Support Onboarding
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
                              <Chip color="primary" variant="flat" className="mb-4" size="lg">
                                {phase.week}
                              </Chip>
                              <h3 className="text-2xl font-bold text-navy-900">{phase.title}</h3>
                            </div>
                            <div className="md:col-span-2">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {phase.activities.map((activity, idx) => (
                                  <div key={idx} className="flex items-center text-gray-700">
                                    <svg
                                      className="w-5 h-5 text-green-600 mr-3 flex-shrink-0"
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
                                    {activity}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardBody className="p-8">
                      <h3 className="text-2xl font-bold text-navy-900 mb-4">
                        Ongoing Support Excellence
                      </h3>
                      <p className="text-gray-700 mb-6">
                        After the initial 8-week onboarding, our support becomes a seamless part of
                        your operations. We maintain continuous monitoring, regular maintenance, and
                        proactive improvements to keep your systems running at peak performance.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg
                              className="w-8 h-8 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">24/7 Monitoring</h4>
                          <p className="text-sm text-gray-600">
                            Continuous system health monitoring with instant alerts
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg
                              className="w-8 h-8 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Rapid Response</h4>
                          <p className="text-sm text-gray-600">
                            Quick issue resolution with guaranteed response times
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg
                              className="w-8 h-8 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">Performance Insights</h4>
                          <p className="text-sm text-gray-600">
                            Regular reports and optimization recommendations
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
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
                    Reliability You Can Count On
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our support teams maintain 99.9%+ uptime across all client systems
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-green-600 mb-2">99.95%</p>
                      <p className="text-gray-600">Average uptime</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-emerald-600 mb-2">&lt;2hr</p>
                      <p className="text-gray-600">Average response time</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-teal-600 mb-2">4.9/5</p>
                      <p className="text-gray-600">Client satisfaction</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: E-commerce Platform Support
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        Fast-growing e-commerce platform needed reliable support to handle traffic
                        spikes, security threats, and continuous feature updates.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• 24/7 monitoring and alerting</li>
                        <li>• Automated scaling for traffic spikes</li>
                        <li>• Weekly performance optimization</li>
                        <li>• Monthly security audits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results (12 months)</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• 99.98% uptime achieved</li>
                        <li>• Zero security incidents</li>
                        <li>• 45% performance improvement</li>
                        <li>• 67% reduction in critical bugs</li>
                      </ul>
                      <Card className="bg-green-50 border-green-200">
                        <CardBody className="p-4">
                          <p className="text-green-900 italic">
                            &ldquo;Drexus support is like having a world-class engineering team on
                            speed dial. They keep our platform running flawlessly.&rdquo;
                          </p>
                          <p className="text-sm text-green-700 mt-2">— Kevin Park, CTO</p>
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
              Keep Your Systems Running Smoothly
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us handle the maintenance while you focus on growth
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Get Support Today
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
