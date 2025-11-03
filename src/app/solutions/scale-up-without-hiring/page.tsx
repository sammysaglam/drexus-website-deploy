"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Divider, Link } from "@heroui/react";
import { motion } from "framer-motion";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatBlock } from "@/components/ui/StatBlock";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function ScaleUpWithoutHiringPage() {
  const stats = [
    { label: "Avg Time to Onboard", value: "48 hours", trend: { value: 50, isPositive: true } },
    { label: "Senior Engineers Available", value: "127", trend: { value: 35, isPositive: true } },
    { label: "Client Retention", value: "92%" },
  ];

  const capacityModels = [
    {
      title: "Sprint Teams",
      duration: "2-4 weeks",
      size: "3-5 engineers",
      best_for: "Feature sprints, urgent fixes",
      commitment: "Low",
    },
    {
      title: "Squad Augmentation",
      duration: "1-3 months",
      size: "2-8 engineers",
      best_for: "Product launches, migrations",
      commitment: "Medium",
    },
    {
      title: "Dedicated Teams",
      duration: "3-12 months",
      size: "5-20 engineers",
      best_for: "Full product ownership",
      commitment: "High",
    },
  ];

  const comparisonData = [
    {
      aspect: "Time to Productivity",
      hiring: "3-6 months",
      drexus: "48 hours",
      advantage: "60x faster",
    },
    {
      aspect: "Quality Guarantee",
      hiring: "Variable",
      drexus: "Senior only",
      advantage: "Consistent excellence",
    },
    {
      aspect: "Flexibility",
      hiring: "Fixed headcount",
      drexus: "Scale up/down anytime",
      advantage: "100% elastic",
    },
    {
      aspect: "True Cost",
      hiring: "$200k+ per engineer",
      drexus: "Pay for output",
      advantage: "40% lower TCO",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you scale up our team?",
      answer:
        "We can deploy senior engineers within 48 hours for urgent needs. For larger teams (5+ engineers), we typically need 3-5 days to assemble the right expertise. Our bench of 127+ pre-vetted seniors means we always have capacity.",
    },
    {
      question: "What about knowledge retention and continuity?",
      answer:
        "We assign dedicated tech leads who remain with your project throughout. All work is documented in real-time, we use your tools and processes, and we can gradually transition knowledge to your permanent team when ready.",
    },
    {
      question: "How do you ensure quality with external teams?",
      answer:
        "Only senior engineers (7+ years) work on client projects. We have rigorous code review processes, automated testing requirements, and weekly quality audits. Our 92% retention rate reflects consistent delivery excellence.",
    },
    {
      question: "Can we interview and select specific engineers?",
      answer:
        "Absolutely. We present qualified candidates based on your requirements. You can interview them, review their portfolios, and even run technical assessments. Once selected, those engineers are dedicated to your project.",
    },
    {
      question: "What if we need to scale down?",
      answer:
        "No problem. Our contracts allow scaling down with 2 weeks notice. No severance, no HR complications. We'll ensure smooth knowledge transfer and can maintain a smaller team for ongoing support.",
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
              title="Scale Without Hiring"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "Scale Without Hiring" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Elastic engineering capacity that scales with your needs. No hiring delays, no fixed
              costs, no quality compromises.
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
                <Chip color="warning" variant="flat" className="mb-4">
                  The Scaling Paradox
                </Chip>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  You Need to Move Fast, But Hiring Slows You Down
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Your product is gaining traction. Customers want features yesterday. Competitors
                    are catching up. But building a world-class engineering team takes months you
                    don&apos;t have.
                  </p>
                  <p className="font-semibold">The hiring trap:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>3-6 months to hire senior engineers</li>
                    <li>$200k+ per year before they write a line of code</li>
                    <li>50% bad hire rate in rushed processes</li>
                    <li>Fixed costs whether you need them or not</li>
                    <li>Painful layoffs when priorities shift</li>
                  </ul>
                  <Card className="mt-6 bg-orange-50 border-orange-200">
                    <CardBody>
                      <p className="text-orange-900 font-semibold">
                        Meanwhile: Your roadmap falls further behind every day
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
                      Hiring vs. Drexus Capacity
                    </h3>
                    <div className="space-y-4">
                      {comparisonData.map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">{item.aspect}</span>
                            <Chip size="sm" color="success" variant="flat">
                              {item.advantage}
                            </Chip>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-red-100 rounded p-2 text-center">
                              <p className="text-xs text-gray-600">Traditional Hiring</p>
                              <p className="font-semibold text-red-900">{item.hiring}</p>
                            </div>
                            <div className="bg-green-100 rounded p-2 text-center">
                              <p className="text-xs text-gray-600">Drexus</p>
                              <p className="font-semibold text-green-900">{item.drexus}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                The Solution
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Engineering Capacity as a Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                World-class engineers, on demand, integrated with your team, delivering from day one
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Instant Capacity</h3>
                    <p className="text-gray-600">
                      Senior engineers ready to start tomorrow, not next quarter
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
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Guaranteed Quality</h3>
                    <p className="text-gray-600">Only senior engineers with proven track records</p>
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Pay for Output</h3>
                    <p className="text-gray-600">No benefits, equity, or severance. Just results</p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>

            {/* Capacity Models */}
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Flexible Engagement Models
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capacityModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full ${index === 1 ? "border-2 border-blue-600" : ""}`}>
                    {index === 1 && (
                      <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardBody className="p-6">
                      <h4 className="text-xl font-bold text-navy-900 mb-4">{model.title}</h4>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration</span>
                          <span className="font-semibold">{model.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Team Size</span>
                          <span className="font-semibold">{model.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Commitment</span>
                          <Chip
                            size="sm"
                            color={
                              model.commitment === "Low"
                                ? "success"
                                : model.commitment === "Medium"
                                  ? "warning"
                                  : "primary"
                            }
                            variant="flat"
                          >
                            {model.commitment}
                          </Chip>
                        </div>
                      </div>
                      <Divider />
                      <p className="text-sm text-gray-600 mt-4">
                        <span className="font-semibold">Best for:</span> {model.best_for}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="primary" variant="flat" className="mb-4">
                How It Works
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                From Request to Results in 48 Hours
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process gets you productive capacity faster than posting a job
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-start mb-12"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0 self-start">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Submit Capacity Request</h3>
                  <Card className="bg-gray-50">
                    <CardBody className="p-6">
                      <p className="text-gray-700 mb-4">
                        Tell us what you need: skills, team size, duration, and start date
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900">Skills Examples:</p>
                          <ul className="text-gray-600 mt-1 space-y-1">
                            <li>• React + TypeScript</li>
                            <li>• Node.js + AWS</li>
                            <li>• Python + ML</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Timeline:</p>
                          <ul className="text-gray-600 mt-1 space-y-1">
                            <li>• Urgent (&lt; 48hrs)</li>
                            <li>• Standard (&lt; 1 week)</li>
                            <li>• Planned (&lt; 2 weeks)</li>
                          </ul>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-start mb-12"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0 self-start">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Team Assembly & Matching
                  </h3>
                  <Card className="bg-gray-50">
                    <CardBody className="p-6">
                      <p className="text-gray-700 mb-4">
                        We match senior engineers from our bench to your specific needs
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-blue-600">127+</p>
                          <p className="text-sm text-gray-600">Available Seniors</p>
                        </div>
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-green-600">3-5</p>
                          <p className="text-sm text-gray-600">Matched to You</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-start mb-12"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0 self-start">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Interview & Selection</h3>
                  <Card className="bg-gray-50">
                    <CardBody className="p-6">
                      <p className="text-gray-700 mb-4">
                        You interview candidates and select your preferred team
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-600 mr-3"
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
                          <span className="text-gray-700">Technical interviews (optional)</span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-600 mr-3"
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
                          <span className="text-gray-700">Portfolio and reference review</span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-600 mr-3"
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
                          <span className="text-gray-700">Cultural fit assessment</span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-start"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0 self-start">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Integration & Delivery</h3>
                  <Card className="bg-gradient-to-br from-green-50 to-blue-50">
                    <CardBody className="p-6">
                      <p className="text-gray-700 mb-4">
                        Your new team joins your standup and starts delivering
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-semibold text-navy-900 mb-2">Day 1 Checklist:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>✓ Access to your tools and repos</li>
                          <li>✓ Join team channels and meetings</li>
                          <li>✓ First tasks assigned and in progress</li>
                          <li>✓ Direct Slack communication established</li>
                          <li>✓ Friday Progress Receipt scheduled</li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Efficiency */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                The Economics
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                40% Lower Total Cost of Engineering
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When you factor in all costs, elastic capacity delivers better ROI
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardBody className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                    True Cost Comparison: Senior Engineer
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Traditional Hiring */}
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-5 h-5 text-red-600"
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
                        Traditional Hiring
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Base Salary</span>
                          <span className="font-semibold">$180,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Benefits & Taxes (30%)</span>
                          <span className="font-semibold">$54,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Recruiting Costs</span>
                          <span className="font-semibold">$25,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Onboarding (3 months)</span>
                          <span className="font-semibold">$45,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Equipment & Tools</span>
                          <span className="font-semibold">$5,000</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between text-lg">
                          <span className="font-bold text-gray-900">Annual Cost</span>
                          <span className="font-bold text-red-600">$309,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Productive Hours</span>
                          <span className="text-gray-900">~1,400/yr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-900">Cost per Hour</span>
                          <span className="font-bold text-red-600">$221</span>
                        </div>
                      </div>
                    </div>

                    {/* Drexus Model */}
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-5 h-5 text-green-600"
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
                        </div>
                        Drexus Capacity
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Hourly Rate</span>
                          <span className="font-semibold">$100-150</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">No Benefits/Taxes</span>
                          <span className="font-semibold text-green-600">$0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">No Recruiting</span>
                          <span className="font-semibold text-green-600">$0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Productive Day 1</span>
                          <span className="font-semibold text-green-600">$0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">No Equipment</span>
                          <span className="font-semibold text-green-600">$0</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between text-lg">
                          <span className="font-bold text-gray-900">Monthly Cost*</span>
                          <span className="font-bold text-green-600">$2,000 - $5,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Productive Hours</span>
                          <span className="text-gray-900">~120/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-900">Cost per Hour</span>
                          <span className="font-bold text-green-600">$17-42</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
                    <p className="text-lg font-bold text-blue-900">
                      You save $124,000 per engineer per year
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      Plus: Scale up/down anytime • No bad hires • No severance
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    *Based on average utilization. Actual costs vary by engagement model.
                  </p>
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
                Success at Scale
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900">
                Teams That Scaled Without the Headaches
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <TestimonialCard quote="We went from 3 to 18 engineers in 2 weeks for a critical launch. No recruiting, no onboarding—just instant productivity. Saved us 6 months and $500k." />
              <TestimonialCard quote="Drexus gives us the flexibility to scale our team with market demands. During peak season, we 5x our capacity. In quiet periods, we scale back. Perfect elasticity." />
            </div>

            {/* Case Study */}
            <Card className="bg-gradient-to-br from-gray-50 to-blue-50">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                  Case Study: Series B SaaS Startup
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">Before</div>
                    <p className="text-gray-700">5 engineers, 3-month feature cycles</p>
                    <p className="text-sm text-gray-600 mt-2">Losing deals to faster competitors</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">With Drexus</div>
                    <p className="text-gray-700">5 + 12 Drexus engineers</p>
                    <p className="text-sm text-gray-600 mt-2">3-week feature cycles</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">Results</div>
                    <p className="text-gray-700">4x velocity, 2x revenue growth</p>
                    <p className="text-sm text-gray-600 mt-2">Market leader in 12 months</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700 italic">
                    &ldquo;We couldn&apos;t have hit our aggressive post-funding targets without
                    Drexus. They gave us the engineering firepower of a 50-person team with the
                    overhead of 5. When we needed to pivot, we swapped skills without missing a
                    beat. This is how modern engineering teams should work.&rdquo;
                  </p>
                  <p className="text-right mt-4 font-semibold text-gray-900">
                    — Jason Wu, Founder & CEO
                  </p>
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
                Stop Letting Hiring Slow You Down
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get the engineering capacity you need, when you need it. First engineers can start
                in 48 hours.
              </p>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Request Engineering Capacity
              </Button>
              <p className="text-sm text-blue-200 mt-6">
                Quick 15-min call to understand your needs • Team proposals within 24 hours
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
