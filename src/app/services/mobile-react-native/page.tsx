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
    title: "Cross-Platform Mobile App",
    description: "iOS and Android apps from a single codebase",
    icon: "📱",
  },
  {
    title: "Native Module Integration",
    description: "Custom native modules when you need platform-specific features",
    icon: "🔧",
  },
  {
    title: "App Store Deployment",
    description: "Complete submission to Apple App Store and Google Play",
    icon: "🚀",
  },
  {
    title: "Push Notifications",
    description: "Real-time engagement with Firebase or custom solutions",
    icon: "🔔",
  },
  {
    title: "Offline Functionality",
    description: "Sync strategies for seamless offline experience",
    icon: "📡",
  },
  {
    title: "Performance Optimization",
    description: "60fps animations and fast startup times",
    icon: "⚡",
  },
];

const timelinePhases = [
  {
    week: "Week 1-2",
    title: "Planning & Setup",
    activities: [
      "Requirements analysis",
      "Architecture design",
      "Development environment",
      "CI/CD pipeline setup",
    ],
  },
  {
    week: "Week 3-6",
    title: "Core Development",
    activities: [
      "UI component development",
      "Navigation implementation",
      "API integration",
      "State management",
    ],
  },
  {
    week: "Week 7-9",
    title: "Platform Features",
    activities: [
      "Native module integration",
      "Push notifications",
      "Deep linking",
      "Analytics integration",
    ],
  },
  {
    week: "Week 10-12",
    title: "Polish & Launch",
    activities: [
      "Performance optimization",
      "Beta testing",
      "App store submission",
      "Launch support",
    ],
  },
];

export default function MobileReactNativePage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "React Native Mobile Development",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "Cross-platform mobile app development with React Native",
    areaServed: "Global",
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
              title="React Native Mobile Development"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Mobile React Native" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Build beautiful, performant mobile apps for iOS and Android with a single codebase.
              Get to market faster without compromising on quality.
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
                      Native Performance, React Productivity
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        React Native lets you build mobile apps using only JavaScript and React. But
                        unlike other cross-platform solutions, it renders using real native
                        components, not webviews.
                      </p>
                      <p>
                        Our React Native experts know when to use the framework&apos;s strengths and
                        when to drop down to native code for optimal performance.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Why Choose React Native:
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
                            <strong>Cost Effective:</strong> One codebase for iOS and Android
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
                            <strong>Fast Development:</strong> Hot reloading and shared components
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
                            <strong>True Native:</strong> Platform-specific UI and performance
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
                            <strong>Large Ecosystem:</strong> Thousands of libraries and tools
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">
                          Mobile Development Process
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Structure</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Senior React Native Engineer</li>
                              <li>• Mobile UI/UX Designer</li>
                              <li>• QA Engineer (iOS & Android)</li>
                              <li>• DevOps Engineer</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Development Tools</h4>
                            <p className="text-gray-700">
                              Expo, React Navigation, Redux/MobX, CodePush
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Testing Approach</h4>
                            <p className="text-gray-700">Jest, Detox, device farms, beta testing</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Typical Investment</h4>
                            <p className="text-2xl font-bold text-teal-600">Starting from: $100</p>
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
                  What We Deliver
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
                  Typical 12-Week Mobile Project
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
                    Mobile Apps That Deliver
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We&apos;ve shipped 40+ React Native apps to the App Store and Google Play
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-teal-600 mb-2">4.8★</p>
                      <p className="text-gray-600">Average app store rating</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-cyan-600 mb-2">5M+</p>
                      <p className="text-gray-600">Total app downloads</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
                      <p className="text-gray-600">Code sharing iOS/Android</p>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Go Mobile?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s build a mobile app your users will love on both iOS and Android
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Start Your Mobile Project
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
