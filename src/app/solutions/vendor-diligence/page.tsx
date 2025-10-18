"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatBlock } from "@/components/ui/StatBlock";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function VendorDiligencePage() {
  const stats = [
    { label: "Vendors Evaluated", value: "237", trend: { value: 28, isPositive: true } },
    { label: "Bad Vendors Avoided", value: "41%" },
    { label: "Avg Assessment Time", value: "48 hrs", trend: { value: 30, isPositive: true } },
  ];

  const risks = [
    {
      category: "Technical Capability",
      indicators: [
        "Portfolio doesn't match your needs",
        "No similar industry experience",
        "Outdated technology stack",
        "No senior engineers available",
      ],
    },
    {
      category: "Delivery Risk",
      indicators: [
        "No clear development process",
        "Poor communication history",
        "Unclear project ownership",
        "No established SLAs",
      ],
    },
    {
      category: "Financial Health",
      indicators: [
        "Cash flow problems",
        "High client concentration",
        "Recent layoffs or turnover",
        "Litigation history",
      ],
    },
    {
      category: "Security & Compliance",
      indicators: [
        "No security certifications",
        "Data handling concerns",
        "Weak IP protection",
        "No cyber insurance",
      ],
    },
  ];

  const faqs = [
    {
      question: "What makes software vendor evaluation different?",
      answer:
        "Software vendors require deep technical assessment beyond typical procurement. You need to evaluate their actual code quality, security practices, scalability approach, and ability to integrate with your systems. Traditional RFPs miss these critical factors.",
    },
    {
      question: "How long does proper due diligence take?",
      answer:
        "Our accelerated process delivers comprehensive results in 48-72 hours. Traditional approaches take 4-6 weeks and often miss technical red flags. We know what to look for and where to find it quickly.",
    },
    {
      question: "What if we&apos;ve already selected a vendor?",
      answer:
        "Pre-contract validation is valuable. We can assess their proposal, validate their claims, and identify risks before you sign. If issues arise, you'll have leverage to negotiate better terms or walk away.",
    },
    {
      question: "Do you evaluate offshore vendors?",
      answer:
        "Yes, with specific expertise in cross-border risks. We assess communication protocols, time zone coverage, IP protection, quality standards, and have on-ground contacts in major offshore markets.",
    },
  ];

  const evaluationFramework = [
    { area: "Technical Architecture Review", weight: 25 },
    { area: "Code Quality Assessment", weight: 20 },
    { area: "Team Capability Analysis", weight: 20 },
    { area: "Delivery Track Record", weight: 15 },
    { area: "Financial Stability", weight: 10 },
    { area: "Security & Compliance", weight: 10 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="Vendor Due Diligence"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "Vendor Diligence" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Don&apos;t bet your digital transformation on the wrong partner. Expert technical due
              diligence that protects your investment.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Chip color="danger" variant="flat" className="mb-4">
                  The Hidden Risks
                </Chip>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  One Bad Vendor Can Derail Your Entire Digital Strategy
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    You&apos;re not technical. They know it. Their proposal looks great, references
                    check out, and the price is right. But 6 months later, you&apos;re explaining to
                    the board why the project failed.
                  </p>
                  <p className="font-semibold">The expensive mistakes we prevent:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Vendors who can&apos;t scale beyond the demo</li>
                    <li>Hidden dependencies and vendor lock-in</li>
                    <li>Security vulnerabilities that risk your data</li>
                    <li>Bait-and-switch with junior resources</li>
                    <li>IP ownership disputes after delivery</li>
                  </ul>
                  <Card className="mt-6 bg-red-50 border-red-200">
                    <CardBody>
                      <p className="text-red-900 font-semibold">
                        41% of enterprise software projects fail due to vendor-related issues
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
                    <h3 className="text-2xl font-bold text-navy-900 mb-6">Red Flags We Look For</h3>
                    <div className="space-y-6">
                      {risks.map((risk, index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-navy-900 mb-3 flex items-center">
                            <svg
                              className="w-5 h-5 text-red-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                              />
                            </svg>
                            {risk.category}
                          </h4>
                          <ul className="space-y-1 ml-7">
                            {risk.indicators.map((indicator, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="text-gray-400 mr-2">•</span>
                                {indicator}
                              </li>
                            ))}
                          </ul>
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
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                Peace of Mind
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                What Proper Due Diligence Delivers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make vendor decisions with the same confidence as your technical peers
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Technical Validation</h3>
                    <p className="text-gray-600">
                      Know their actual capabilities, not just what the sales team promises.
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Fair Pricing</h3>
                    <p className="text-gray-600">
                      Understand what you&apos;re really paying for and avoid hidden costs.
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Board-Ready Reports</h3>
                    <p className="text-gray-600">
                      Clear, executive-friendly documentation that justifies your decision.
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
                Our Process
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Comprehensive Vendor Assessment in 48 Hours
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fast, thorough, and designed for non-technical executives
              </p>
            </div>

            {/* Process Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

              {/* Hour 0-12 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
              >
                <div className="lg:text-right">
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-center justify-end mb-4">
                        <h3 className="text-xl font-bold text-navy-900 mr-4">
                          Hour 0-12: Discovery
                        </h3>
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Review vendor proposals and materials</li>
                        <li>• Technical architecture assessment</li>
                        <li>• Public records and reputation check</li>
                        <li>• Initial red flag identification</li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>
                <div className="hidden lg:block"></div>
              </motion.div>

              {/* Hour 12-24 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
              >
                <div className="hidden lg:block"></div>
                <div>
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          2
                        </div>
                        <h3 className="text-xl font-bold text-navy-900">Hour 12-24: Deep Dive</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Code repository analysis (if available)</li>
                        <li>• Team capability verification</li>
                        <li>• Reference checks with technical contacts</li>
                        <li>• Security and compliance audit</li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>

              {/* Hour 24-36 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
              >
                <div className="lg:text-right">
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-center justify-end mb-4">
                        <h3 className="text-xl font-bold text-navy-900 mr-4">
                          Hour 24-36: Analysis
                        </h3>
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Risk scoring and categorization</li>
                        <li>• Cost-benefit analysis</li>
                        <li>• Alternative vendor comparison</li>
                        <li>• Negotiation leverage points</li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>
                <div className="hidden lg:block"></div>
              </motion.div>

              {/* Hour 36-48 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div className="hidden lg:block"></div>
                <div>
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          4
                        </div>
                        <h3 className="text-xl font-bold text-navy-900">Hour 36-48: Delivery</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Executive summary and recommendation</li>
                        <li>• Detailed technical assessment</li>
                        <li>• Risk mitigation strategies</li>
                        <li>• Decision support presentation</li>
                      </ul>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Evaluation Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <Card className="bg-gray-50">
                <CardBody className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                    Our Evaluation Framework
                  </h3>
                  <div className="space-y-4 max-w-3xl mx-auto">
                    {evaluationFramework.map((item, index) => (
                      <div key={index}>
                        {/* Mobile layout: text above bar, percentage below */}
                        <div className="md:hidden space-y-2">
                          <span className="font-medium text-gray-900 block">{item.area}</span>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-blue-600 h-3 rounded-full"
                              style={{ width: `${item.weight * 4}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-end">
                            <span className="text-sm text-gray-600">{item.weight}%</span>
                          </div>
                        </div>

                        {/* Desktop layout: horizontal */}
                        <div className="hidden md:flex items-center gap-6">
                          <span className="font-medium text-gray-900 flex-1">{item.area}</span>
                          <div className="flex items-center">
                            <div className="w-48 bg-gray-200 rounded-full h-3 mr-4">
                              <div
                                className="bg-blue-600 h-3 rounded-full"
                                style={{ width: `${item.weight * 4}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-10">{item.weight}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="primary" variant="flat" className="mb-4">
                Deliverables
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Everything You Need to Make the Right Decision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardBody className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-600"
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
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy-900 mb-2">Executive Summary</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        1-page overview with clear go/no-go recommendation
                      </p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• Key findings and risks</li>
                        <li>• Financial implications</li>
                        <li>• Decision rationale</li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy-900 mb-2">Risk Assessment</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Comprehensive risk matrix with mitigation strategies
                      </p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• Technical risks scored 1-10</li>
                        <li>• Business impact analysis</li>
                        <li>• Mitigation recommendations</li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy-900 mb-2">Technical Deep Dive</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Detailed technical analysis for your IT team
                      </p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• Architecture assessment</li>
                        <li>• Security evaluation</li>
                        <li>• Integration complexity</li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy-900 mb-2">Contract Guidance</h3>
                      <p className="text-gray-600 text-sm mb-3">Key terms and negotiation points</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li>• SLA recommendations</li>
                        <li>• IP protection clauses</li>
                        <li>• Exit strategy provisions</li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                Protected Investments
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900">
                Due Diligence That Pays for Itself
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <TestimonialCard quote="Drexus saved us from a $2M mistake. The vendor looked perfect on paper, but their assessment uncovered critical security flaws and a history of abandoned projects." />
              <TestimonialCard quote="As a non-technical executive, I finally had the confidence to push back on vendor claims. Their report gave me the ammunition to negotiate 40% off the initial quote." />
            </div>

            {/* Case Study */}
            <Card className="bg-gradient-to-br from-gray-50 to-blue-50">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                  Case Study: $5M ERP Implementation
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg
                        className="w-10 h-10 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-navy-900 mb-2">Initial Choice</h4>
                    <p className="text-gray-700">Lowest bidder with impressive demos</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Hidden risks: No enterprise experience
                    </p>
                  </div>
                  <div>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg
                        className="w-10 h-10 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-navy-900 mb-2">Our Assessment</h4>
                    <p className="text-gray-700">48-hour deep dive revealed 14 red flags</p>
                    <p className="text-sm text-gray-600 mt-2">Recommended: Different vendor</p>
                  </div>
                  <div>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg
                        className="w-10 h-10 text-green-600"
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
                    </div>
                    <h4 className="font-bold text-lg text-navy-900 mb-2">Result</h4>
                    <p className="text-gray-700">On-time delivery with new vendor</p>
                    <p className="text-sm text-gray-600 mt-2">Saved: $1.8M in overruns</p>
                  </div>
                </div>
              </CardBody>
            </Card>
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
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Don&apos;t Bet Your Career on Vendor Promises
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get unbiased technical validation before you sign. Our Vendor Diligence Scorecard
                gives you a quick risk assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as={Link}
                  href="/tools/vendor-diligence-scorecard"
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8"
                >
                  Get Vendor Scorecard
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="bordered"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8"
                >
                  Request Full Assessment
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                Free scorecard • Full assessment in 48 hours
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
