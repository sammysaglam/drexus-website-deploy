"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Divider, Link } from "@heroui/react";
import { motion } from "framer-motion";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatBlock } from "@/components/ui/StatBlock";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function RoadmapUnblockPage() {
  const stats = [
    { label: "Projects Unblocked", value: "127", trend: { value: 45, isPositive: true } },
    { label: "Avg Time to Resolution", value: "3 weeks", trend: { value: 40, isPositive: true } },
    { label: "Technical Debt Reduced", value: "67%", trend: { value: 67, isPositive: true } },
  ];

  const blockers = [
    {
      type: "Legacy System Migration",
      impact: "High",
      typical_duration: "6-12 months",
      our_approach: "Strangler pattern + parallel running",
      result: "3-4 months",
    },
    {
      type: "Performance Bottleneck",
      impact: "Critical",
      typical_duration: "2-3 months",
      our_approach: "Systematic profiling + targeted fixes",
      result: "2-3 weeks",
    },
    {
      type: "Scaling Architecture",
      impact: "High",
      typical_duration: "4-6 months",
      our_approach: "Incremental refactoring + load testing",
      result: "6-8 weeks",
    },
    {
      type: "Security Compliance",
      impact: "Blocking",
      typical_duration: "3-4 months",
      our_approach: "Gap analysis + rapid remediation",
      result: "4-6 weeks",
    },
  ];

  const faqs = [
    {
      question: "How do you integrate with our existing team?",
      answer:
        "We embed senior engineers who join your standups, use your tools, and follow your processes. Think of us as your temporary senior hires who are productive from day one—no ramp-up needed.",
    },
    {
      question: "What if the problem is bigger than expected?",
      answer:
        "Our initial assessment (Week 1) includes a detailed scope and risk analysis. If we uncover larger issues, we'll present options: phased approach, expanded team, or alternative solutions. No surprises.",
    },
    {
      question: "Do you work with our tech stack?",
      answer:
        "Yes. Our engineers have deep experience across all major stacks. Whether it's Java monoliths, Node microservices, Python ML systems, or Go infrastructure—we've unblocked them all.",
    },
    {
      question: "How do you ensure knowledge transfer?",
      answer:
        "Documentation is built into our process. We create architecture diagrams, runbooks, and conduct knowledge transfer sessions. Your team owns the solution when we&apos;re done.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="Roadmap Unblock"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "Roadmap Unblock" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Remove technical blockers that are holding your product roadmap hostage. Expert
              engineers who solve the hard problems.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StatBlock {...stat} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Framing */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Chip color="warning" variant="flat" className="mb-4">
                  The Roadblock Reality
                </Chip>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Your Best Features Are Stuck Behind Technical Debt
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Your product team has a vision. Your customers have needs. But between them
                    stands a wall of technical challenges that your team can&apos;t break through
                    fast enough.
                  </p>
                  <p className="font-semibold">Sound familiar?</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>&ldquo;We need to refactor the monolith first&rdquo; (6+ months)</li>
                    <li>
                      &ldquo;The database can&apos;t handle that scale&rdquo; (unknown timeline)
                    </li>
                    <li>&ldquo;Our CI/CD pipeline would break&rdquo; (quarter-long project)</li>
                    <li>
                      &ldquo;We don&apos;t have anyone who knows that system&rdquo; (hiring...)
                    </li>
                  </ul>
                  <Card className="mt-6 bg-orange-50 border-orange-200">
                    <CardBody>
                      <p className="text-orange-900 font-semibold">
                        Meanwhile: Competitors ship features while you plan migrations
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gray-50">
                  <CardBody className="p-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-6">
                      Common Technical Blockers We Solve
                    </h3>
                    <div className="space-y-4">
                      {blockers.map((blocker, index) => (
                        <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-semibold text-gray-900">{blocker.type}</p>
                            <Chip
                              size="sm"
                              color={
                                blocker.impact === "Critical"
                                  ? "danger"
                                  : blocker.impact === "Blocking"
                                    ? "warning"
                                    : "primary"
                              }
                              variant="flat"
                            >
                              {blocker.impact}
                            </Chip>
                          </div>
                          <p className="text-sm text-gray-600">
                            Typical: {blocker.typical_duration} →{" "}
                            <span className="font-semibold text-green-600">
                              Our delivery: {blocker.result}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Good Looks Like */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                The Breakthrough
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                What &ldquo;Unblocked&rdquo; Looks Like
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your roadmap moving at full speed with technical excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full bg-white">
                  <CardBody className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Features Ship Weekly</h3>
                    <p className="text-gray-600">
                      No more &ldquo;we can&apos;t do that until...&rdquo; Your team builds what
                      customers need, when they need it.
                    </p>
                  </CardBody>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full bg-white">
                  <CardBody className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Rock-Solid Foundation</h3>
                    <p className="text-gray-600">
                      Modern architecture that scales. Automated tests. Clear documentation. Built
                      to last.
                    </p>
                  </CardBody>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full bg-white">
                  <CardBody className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Team Empowerment</h3>
                    <p className="text-gray-600">
                      Your engineers learn new patterns. Clear docs. No black boxes. Full ownership
                      transfer.
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="primary" variant="flat" className="mb-4">
                Our Methodology
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                The Unblocking Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach to removing technical barriers without disrupting your team
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Phase 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardBody className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-navy-900">Discovery Phase</h3>
                        <p className="text-gray-600">Week 1: Deep technical assessment</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Architecture Review</p>
                          <p className="text-sm text-gray-600">
                            Map dependencies, identify bottlenecks
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Risk Assessment</p>
                          <p className="text-sm text-gray-600">
                            Identify hidden complexities early
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
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
                        <div>
                          <p className="font-semibold text-gray-900">Solution Design</p>
                          <p className="text-sm text-gray-600">
                            Multiple approaches with trade-offs
                          </p>
                        </div>
                      </div>
                    </div>
                    <Divider className="my-6" />
                    <p className="text-sm font-medium text-blue-600">
                      Deliverable: Technical roadmap with clear milestones
                    </p>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardBody className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-navy-900">Execution Phase</h3>
                        <p className="text-gray-600">Weeks 2-3: Systematic implementation</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Incremental Delivery</p>
                          <p className="text-sm text-gray-600">
                            Ship improvements daily, not monthly
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Team Collaboration</p>
                          <p className="text-sm text-gray-600">
                            Pair programming, knowledge sharing
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
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
                        <div>
                          <p className="font-semibold text-gray-900">Continuous Testing</p>
                          <p className="text-sm text-gray-600">Automated tests for confidence</p>
                        </div>
                      </div>
                    </div>
                    <Divider className="my-6" />
                    <p className="text-sm font-medium text-green-600">
                      Deliverable: Working solution with zero downtime
                    </p>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardBody className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-navy-900">Optimization Phase</h3>
                        <p className="text-gray-600">Week 4: Performance and polish</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0"
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
                        <div>
                          <p className="font-semibold text-gray-900">Performance Tuning</p>
                          <p className="text-sm text-gray-600">Sub-second response times</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Load Testing</p>
                          <p className="text-sm text-gray-600">Verify 10x scale headroom</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Future-Proofing</p>
                          <p className="text-sm text-gray-600">Built for next 2 years of growth</p>
                        </div>
                      </div>
                    </div>
                    <Divider className="my-6" />
                    <p className="text-sm font-medium text-purple-600">
                      Deliverable: Production-ready system at scale
                    </p>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Phase 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardBody className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-navy-900">Knowledge Transfer</h3>
                        <p className="text-gray-600">Ongoing: Full team enablement</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Documentation</p>
                          <p className="text-sm text-gray-600">Architecture, runbooks, guides</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Training Sessions</p>
                          <p className="text-sm text-gray-600">Hands-on workshops for your team</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">30-Day Support</p>
                          <p className="text-sm text-gray-600">
                            We&apos;re here as you take ownership
                          </p>
                        </div>
                      </div>
                    </div>
                    <Divider className="my-6" />
                    <p className="text-sm font-medium text-orange-600">
                      Deliverable: Empowered team with full ownership
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>

            {/* Risk Ledger CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardBody className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Assess Your Technical Risk</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Use our Risk Ledger tool to identify and prioritize the technical blockers
                    holding back your roadmap. Get actionable insights in minutes.
                  </p>
                  <Button
                    as={Link}
                    href="/tools/risk-ledger"
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
                  >
                    Launch Risk Ledger
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                Success Stories
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900">
                Roadmaps Unblocked, Teams Empowered
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <TestimonialCard quote="We were stuck on a database migration for 8 months. Drexus completed it in 3 weeks with zero downtime. Our team learned techniques we still use today." />
              <TestimonialCard quote="They unblocked our microservices transition that was stalled for a year. Clean architecture, great docs, and our velocity increased 3x post-engagement." />
            </div>

            {/* Case Study Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardBody className="p-6">
                  <Chip color="danger" variant="flat" size="sm" className="mb-3">
                    Performance Crisis
                  </Chip>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    E-commerce Platform Scaling
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Black Friday approaching, system crashing at 10k concurrent users.
                  </p>
                  <Divider className="my-4" />
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Solution:</strong> Caching layer + query optimization
                    </p>
                    <p className="text-sm">
                      <strong>Timeline:</strong> 2 weeks
                    </p>
                    <p className="text-sm">
                      <strong>Result:</strong> Handled 150k concurrent users
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <Chip color="warning" variant="flat" size="sm" className="mb-3">
                    Legacy Migration
                  </Chip>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">15-Year-Old Monolith</h3>
                  <p className="text-gray-700 mb-4">
                    Java monolith blocking all new feature development.
                  </p>
                  <Divider className="my-4" />
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Solution:</strong> Strangler pattern + API gateway
                    </p>
                    <p className="text-sm">
                      <strong>Timeline:</strong> 6 weeks
                    </p>
                    <p className="text-sm">
                      <strong>Result:</strong> 70% faster deployments
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardBody className="p-6">
                        <h3 className="font-bold text-lg text-navy-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Stop Letting Technical Debt Define Your Roadmap
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Identify your biggest blockers with our Risk Ledger, then let&apos;s build a plan to
                eliminate them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as={Link}
                  href="/tools/risk-ledger"
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8"
                >
                  Assess Technical Risk
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="bordered"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8"
                >
                  Talk to an Expert
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                Risk assessment takes 10 minutes • Get personalized recommendations
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
