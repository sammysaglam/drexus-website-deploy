"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Divider, Link } from "@heroui/react";
import { motion } from "framer-motion";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader, StatBlock, TestimonialCard } from "@/components/ui";

export default function Pilot2WeekPage() {
  const stats = [
    { label: "Pilots Completed", value: "89", trend: { value: 18, isPositive: true } },
    { label: "Conversion to Full Engagement", value: "94%", trend: { value: 6, isPositive: true } },
    { label: "Avg Decision Time", value: "5 days", trend: { value: 28, isPositive: true } },
  ];

  const pilotTerms = [
    {
      term: "Fixed Scope",
      description: "Clearly defined deliverable agreed upfront",
    },
    {
      term: "Fixed Price",
      description: "$15,000 - $25,000 depending on complexity",
    },
    {
      term: "Fixed Timeline",
      description: "10 business days from kickoff to delivery",
    },
    {
      term: "Senior Team",
      description: "Same experts who'll handle full engagement",
    },
  ];

  const exitCriteria = [
    {
      outcome: "Success → Scale",
      condition: "Pilot objectives met",
      next: "Seamless transition to full engagement with pilot fee credited",
    },
    {
      outcome: "Success → Handoff",
      condition: "Good fit, but you'll continue internally",
      next: "Full documentation and knowledge transfer included",
    },
    {
      outcome: "Not a Fit → Part Ways",
      condition: "Expectations misaligned",
      next: "No hard feelings, you keep all work product",
    },
  ];

  const perfectPilots = [
    {
      title: "Proof of Concept",
      description: "Technical feasibility for a critical feature",
      examples: ["API integration", "Performance optimization", "Security implementation"],
    },
    {
      title: "Process Improvement",
      description: "Fixing a specific operational pain point",
      examples: ["CI/CD pipeline", "Testing automation", "Code review process"],
    },
    {
      title: "Vendor Comparison",
      description: "Build vs. buy evaluation with working prototype",
      examples: ["Framework selection", "Platform migration", "Tool evaluation"],
    },
    {
      title: "Team Augmentation Test",
      description: "See how we integrate with your team",
      examples: ["Feature development", "Bug fixing sprint", "Code refactoring"],
    },
  ];

  const faqs = [
    {
      question: "What exactly can we accomplish in 2 weeks?",
      answer:
        "More than you'd think. We've built working payment integrations, fixed critical performance issues, created data pipelines, and deployed ML models—all within pilot timeframes. The key is precise scoping and senior execution.",
    },
    {
      question: "How is this different from a typical agency 'discovery phase'?",
      answer:
        "Discovery phases produce documents. Our pilots produce working software. You'll see actual code, experience our communication style, and have something tangible to show stakeholders.",
    },
    {
      question: "What if we need to adjust scope during the pilot?",
      answer:
        "Minor adjustments are fine and expected. For major pivots, we'll discuss converting to a full engagement. The pilot structure ensures discipline on both sides.",
    },
    {
      question: "Do we need to commit to a larger engagement?",
      answer:
        "No. The pilot has clear exit criteria with no strings attached. 94% of clients continue because they want to, not because they have to.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="2-Week Pilot Program"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "2-Week Pilot" },
              ]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Try before you buy. Real work, real results, real fast. The smart way to validate a
              technical partnership.
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
                <Chip color="primary" variant="flat" className="mb-4">
                  The Dilemma
                </Chip>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Big Commitments Are Risky. No Commitment Gets Nothing Done.
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    You need help, but you&apos;re not ready to sign a 6-month contract with a new
                    vendor. Your last &ldquo;strategic partnership&rdquo; turned into a expensive
                    disappointment. Yet your backlog keeps growing.
                  </p>
                  <p className="font-semibold">The trust paradox:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You can&apos;t evaluate capability without working together</li>
                    <li>You can&apos;t work together without a contract</li>
                    <li>You can&apos;t sign a contract without trust</li>
                    <li>You can&apos;t build trust without... (repeat)</li>
                  </ul>
                  <Card className="mt-6 bg-blue-50 border-blue-200">
                    <CardBody>
                      <p className="text-blue-900 font-semibold">
                        Solution: A structured pilot that proves value before commitment
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
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardBody className="p-8">
                    <h3 className="text-2xl font-bold text-navy-900 mb-6">Pilot Program Terms</h3>
                    <div className="space-y-4">
                      {pilotTerms.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.term}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Divider className="my-6" />
                    <p className="text-center text-gray-600 font-medium">
                      No surprises. No scope creep. No risk.
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Makes a Great Pilot */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                Perfect Pilot Projects
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                What Works Best in 2 Weeks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Focused projects that deliver tangible value and showcase our capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {perfectPilots.map((pilot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardBody className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center mr-4">
                          <svg
                            className="w-6 h-6"
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
                        <h3 className="text-xl font-bold text-navy-900">{pilot.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{pilot.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-900">Examples:</p>
                        <ul className="space-y-1">
                          {pilot.examples.map((example, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <svg
                                className="w-4 h-4 text-green-500 mr-2"
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
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="primary" variant="flat" className="mb-4">
                The Process
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                From First Call to Final Delivery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Streamlined process designed for speed and clarity
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Day -2 to 0 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Card>
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold mr-4 whitespace-nowrap">
                        Day -2 to 0
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy-900 mb-2">Pre-Flight</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="font-semibold text-gray-900">Discovery Call</p>
                            <p className="text-sm text-gray-600">
                              Understand your needs and constraints
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Scope Agreement</p>
                            <p className="text-sm text-gray-600">
                              Define exact deliverables and success criteria
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Contract & Kickoff</p>
                            <p className="text-sm text-gray-600">
                              Simple agreement, team intros, access setup
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Week 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <Card>
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold mr-4 whitespace-nowrap">
                        Week 1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy-900 mb-2">Build Phase</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
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
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-900">
                                Day 1-2: Deep dive and architecture
                              </p>
                              <p className="text-sm text-gray-600">
                                Understanding your systems and designing the solution
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
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
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-900">Day 3-4: Core development</p>
                              <p className="text-sm text-gray-600">
                                Building the main functionality with daily updates
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
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
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-900">Day 5: Mid-point review</p>
                              <p className="text-sm text-gray-600">
                                Demo progress, gather feedback, adjust if needed
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Week 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <Card>
                  <CardBody className="p-6">
                    <div className="flex items-start">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold mr-4 whitespace-nowrap">
                        Week 2
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy-900 mb-2">Polish & Deliver</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
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
                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                              />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-900">
                                Day 6-8: Testing and refinement
                              </p>
                              <p className="text-sm text-gray-600">
                                Quality assurance, performance optimization, bug fixes
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
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
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-900">Day 9: Documentation</p>
                              <p className="text-sm text-gray-600">
                                Code documentation, deployment guide, handover prep
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
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
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-900">Day 10: Final delivery</p>
                              <p className="text-sm text-gray-600">
                                Live demo, code handover, next steps discussion
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Decision Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardBody className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">Decision Time</h3>
                    <p className="text-blue-100">
                      You&apos;ve seen our work, communication style, and delivery speed. Ready to
                      scale?
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Exit Criteria */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="primary" variant="flat" className="mb-4">
                Clear Outcomes
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Three Ways This Can End (All Good)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pre-defined exit criteria mean no awkward conversations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {exitCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardBody className="p-6">
                      <div className="text-center mb-6">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                            index === 0
                              ? "bg-green-100"
                              : index === 1
                                ? "bg-blue-100"
                                : "bg-gray-100"
                          }`}
                        >
                          {index === 0 ? (
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
                          ) : index === 1 ? (
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
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-3-3H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-8 h-8 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 mb-2">{criteria.outcome}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        <span className="font-semibold">When:</span> {criteria.condition}
                      </p>
                      <Divider />
                      <p className="text-gray-600 mt-4">
                        <span className="font-semibold">What happens:</span> {criteria.next}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="mt-12 bg-blue-50 border-blue-200">
              <CardBody className="p-8 text-center">
                <p className="text-lg text-blue-900">
                  <span className="font-bold">94% of pilots</span> convert to full engagements
                  because the value is undeniable.
                  <br />
                  <span className="text-blue-700">The other 6% appreciate the clean exit.</span>
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                Pilot Success Stories
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900">
                From Pilot to Partnership
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <TestimonialCard
                quote="The 2-week pilot eliminated all our concerns. We saw their code quality, communication style, and problem-solving approach firsthand. Now they're our go-to technical partner."
                author={{
                  name: "Amanda Chen",
                  title: "VP Product, InsureTech Startup",
                }}
              />
              <TestimonialCard
                quote="We were skeptical about outsourcing critical features. The pilot proved they could integrate seamlessly with our team. Six months later, they've delivered 10x the pilot's value."
                author={{
                  name: "James Wilson",
                  title: "CTO, Enterprise SaaS",
                }}
              />
            </div>

            {/* Recent Pilots Grid */}
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Recent Pilot Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardBody className="p-6">
                  <Chip size="sm" color="success" variant="flat" className="mb-3">
                    Completed
                  </Chip>
                  <h4 className="font-bold text-navy-900 mb-2">Payment Gateway Integration</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Stripe + subscription management for B2B SaaS
                  </p>
                  <Divider />
                  <div className="mt-3 text-sm">
                    <p>
                      <strong>Duration:</strong> 2 weeks
                    </p>
                    <p>
                      <strong>Outcome:</strong> Full platform rebuild
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <Chip size="sm" color="success" variant="flat" className="mb-3">
                    Completed
                  </Chip>
                  <h4 className="font-bold text-navy-900 mb-2">Performance Optimization</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    React app loading 5x faster with code splitting
                  </p>
                  <Divider />
                  <div className="mt-3 text-sm">
                    <p>
                      <strong>Duration:</strong> 10 days
                    </p>
                    <p>
                      <strong>Outcome:</strong> Ongoing performance work
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <Chip size="sm" color="success" variant="flat" className="mb-3">
                    Completed
                  </Chip>
                  <h4 className="font-bold text-navy-900 mb-2">API Architecture Design</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    GraphQL implementation with real-time subscriptions
                  </p>
                  <Divider />
                  <div className="mt-3 text-sm">
                    <p>
                      <strong>Duration:</strong> 2 weeks
                    </p>
                    <p>
                      <strong>Outcome:</strong> 6-month engagement
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
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
        <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Ready to Test Drive Excellence?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let&apos;s scope your pilot project. 30-minute call to 2-week delivery.
              </p>
              <Button
                as={Link}
                href="/contact/book-a-call"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Book Your Pilot Scoping Call
              </Button>
              <p className="text-sm text-blue-200 mt-6">
                Available slots this week • Response within 2 hours
              </p>

              {/* Pilot pricing note */}
              <Card className="mt-12 max-w-2xl mx-auto bg-white/10 border-white/20">
                <CardBody className="p-6">
                  <p className="text-white font-semibold mb-2">Transparent Pilot Pricing</p>
                  <p className="text-blue-100">
                    $15,000 - $25,000 fixed fee • Credited to larger engagement • No hidden costs
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
