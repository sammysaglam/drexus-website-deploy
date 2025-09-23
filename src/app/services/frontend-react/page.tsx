"use client";

import React, { useState } from "react";

import { Button, Card, CardBody, Chip, Link, Tab, Tabs } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui";

const deliverables = [
  {
    title: "React Component Library",
    description: "Reusable, accessible components with Storybook documentation",
    icon: "⚛️",
  },
  {
    title: "Performance Optimization",
    description: "Code splitting, lazy loading, and bundle size optimization",
    icon: "⚡",
  },
  {
    title: "State Management",
    description: "Redux/Zustand/Context setup with best practices",
    icon: "🔄",
  },
  {
    title: "Testing Suite",
    description: "Unit tests, integration tests, and E2E with Cypress",
    icon: "✅",
  },
  {
    title: "CI/CD Pipeline",
    description: "Automated builds, tests, and deployments",
    icon: "🚀",
  },
  {
    title: "Documentation",
    description: "Component docs, architecture guides, and onboarding materials",
    icon: "📚",
  },
];

const timelinePhases = [
  {
    week: "Week 1",
    title: "Setup & Architecture",
    activities: [
      "Development environment setup",
      "Architecture planning",
      "Component structure design",
      "Tech stack finalization",
    ],
  },
  {
    week: "Week 2-3",
    title: "Core Development",
    activities: [
      "Component development",
      "State management implementation",
      "API integration",
      "Responsive design",
    ],
  },
  {
    week: "Week 4-5",
    title: "Feature Implementation",
    activities: [
      "Advanced features",
      "Third-party integrations",
      "Performance optimization",
      "Cross-browser testing",
    ],
  },
  {
    week: "Week 6",
    title: "Polish & Deployment",
    activities: [
      "Bug fixes and refinements",
      "Documentation completion",
      "Deployment setup",
      "Knowledge transfer",
    ],
  },
];

const artifacts = [
  {
    type: "Component Library",
    description: "Storybook with all UI components and variants",
    preview: "📖",
  },
  {
    type: "Performance Reports",
    description: "Lighthouse scores and optimization recommendations",
    preview: "📊",
  },
  {
    type: "Test Coverage",
    description: "90%+ coverage with automated test suites",
    preview: "🧪",
  },
  {
    type: "Build Pipeline",
    description: "GitHub Actions/GitLab CI with staging environments",
    preview: "⚙️",
  },
];

const techStack = [
  "React 18+",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "React Query/SWR",
  "React Hook Form",
  "Framer Motion",
  "Jest & React Testing Library",
];

export default function FrontendReactPage() {
  const [selected, setSelected] = useState("overview");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "React Frontend Development Service",
    provider: {
      "@type": "Organization",
      name: "Drexus",
    },
    description: "Expert React development services for modern, performant web applications.",
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "React Development Services",
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
              title="React Frontend Development"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Frontend React" },
              ]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Build blazing-fast, accessible React applications with senior engineers who live and
              breathe modern frontend development.
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
                      Modern React Development
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        React has become the de facto standard for building modern web applications.
                        But with great power comes great complexity. Our senior React engineers
                        bring years of experience to ensure your application is built right from the
                        start.
                      </p>
                      <p>
                        We don&apos;t just write components—we architect scalable frontend systems
                        that are maintainable, performant, and delightful to use.
                      </p>
                      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3">
                        Our React Expertise:
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
                            <strong>Performance First:</strong> Sub-second load times and 60fps
                            interactions
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
                            <strong>Accessibility Built-in:</strong> WCAG 2.1 AA compliance from day
                            one
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
                            <strong>Type Safety:</strong> TypeScript throughout for fewer bugs
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
                            <strong>Modern Patterns:</strong> Hooks, Suspense, Server Components
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 mb-6">
                      <CardBody className="p-8">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">How We Work</h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Engagement Model</h4>
                            <p className="text-gray-700">
                              Dedicated React team embedded with your project
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Team Structure</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Senior React Engineer (Lead)</li>
                              <li>• Mid-level React Developer</li>
                              <li>• UI/UX Designer (part-time)</li>
                              <li>• QA Engineer (part-time)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Development Process
                            </h4>
                            <p className="text-gray-700">
                              Agile sprints with daily standups and weekly demos
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Pricing</h4>
                            <p className="text-2xl font-bold text-blue-600">$125-150/hour</p>
                            <p className="text-sm text-gray-600 mt-1">Typical project: $80k-200k</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardBody className="p-6">
                        <h4 className="font-bold text-navy-900 mb-3">Tech Stack We Love</h4>
                        <div className="flex flex-wrap gap-2">
                          {techStack.map((tech, index) => (
                            <Chip key={index} size="sm" variant="flat" color="primary">
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
                  What We Deliver
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
                    Development Artifacts
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
                  Typical 6-Week Sprint
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
                    React Excellence in Action
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We&apos;ve built React applications that serve millions of users daily
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-blue-600 mb-2">99.9%</p>
                      <p className="text-gray-600">Uptime across all deployments</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-green-600 mb-2">&lt;1s</p>
                      <p className="text-gray-600">Average page load time</p>
                    </CardBody>
                  </Card>
                  <Card className="text-center">
                    <CardBody className="p-6">
                      <p className="text-4xl font-bold text-purple-600 mb-2">95+</p>
                      <p className="text-gray-600">Lighthouse performance score</p>
                    </CardBody>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">
                    Case Study: E-commerce Platform
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-700 mb-4">
                        A growing e-commerce platform needed to rebuild their frontend to handle
                        Black Friday traffic and improve conversion rates. Their jQuery-based system
                        was showing its age.
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Built React + Next.js SSR application</li>
                        <li>• Implemented real-time inventory updates</li>
                        <li>• Created reusable component library</li>
                        <li>• Optimized for Core Web Vitals</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• 47% improvement in page load speed</li>
                        <li>• 23% increase in conversion rate</li>
                        <li>• Handled 10x Black Friday traffic</li>
                        <li>• 60% reduction in bounce rate</li>
                      </ul>
                      <Card className="bg-blue-50 border-blue-200">
                        <CardBody className="p-4">
                          <p className="text-blue-900 italic">
                            &ldquo;The new React frontend transformed our business. Page loads are
                            instant, and our conversion rate improvements paid for the entire
                            project in 3 months.&rdquo;
                          </p>
                          <p className="text-sm text-blue-700 mt-2">— Jennifer Liu, VP Product</p>
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
              Ready to Build Something Amazing with React?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a React application that your users will love
            </p>
            <Button
              as={Link}
              href="/contact/book-a-call"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Start Your React Project
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
