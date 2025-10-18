"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Link, Progress } from "@heroui/react";
import { motion } from "framer-motion";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatBlock } from "@/components/ui/StatBlock";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function OpsConversionPage() {
  const stats = [
    { label: "Avg Conversion Lift", value: "32%", trend: { value: 32, isPositive: true } },
    { label: "Implementation Time", value: "4 weeks", trend: { value: 20, isPositive: true } },
    { label: "ROI Timeline", value: "2 months" },
  ];

  const conversionIssues = [
    { name: "Cart Abandonment", current: 68, improved: 45 },
    { name: "Form Drop-off", current: 73, improved: 38 },
    { name: "Trial to Paid", current: 12, improved: 28 },
    { name: "Onboarding Completion", current: 54, improved: 87 },
  ];

  const faqs = [
    {
      question: "How do you identify conversion bottlenecks?",
      answer:
        "We use a combination of quantitative analytics, session recordings, user interviews, and heuristic evaluation. Our proprietary audit framework examines 127 conversion factors across your funnel.",
    },
    {
      question: "What if we don't have good analytics in place?",
      answer:
        "No problem. Week 1 includes implementing proper tracking. We'll set up event tracking, conversion goals, and custom dashboards so you have visibility even after our engagement.",
    },
    {
      question: "Do you run A/B tests?",
      answer:
        "Yes, but strategically. We focus on high-impact changes first, then validate with tests. Most clients see 15-20% improvements before needing statistical validation.",
    },
    {
      question: "How do you work with our marketing team?",
      answer:
        "We become an extension of your team. Daily Slack updates, weekly strategy calls, and our Friday Progress Receipts ensure perfect alignment. Your team retains full control.",
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
              title="Ops Conversion Boost"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "Conversion Optimization" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Stop losing customers in your funnel. Data-driven optimization that turns visitors
              into revenue.
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
                  The Revenue Leak
                </Chip>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  You&apos;re Paying for Traffic That Doesn&apos;t Convert
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Your marketing team drives thousands of visitors. Your product team builds great
                    features. But somewhere between landing and purchasing, you&apos;re losing 95%+
                    of potential customers.
                  </p>
                  <p className="font-semibold">The painful symptoms:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>High CAC with declining LTV:CAC ratio</li>
                    <li>Marketing asking for bigger budgets while conversion stays flat</li>
                    <li>Product building features that don&apos;t move the needle</li>
                    <li>Analytics showing problems but not solutions</li>
                  </ul>
                  <Card className="mt-6 bg-red-50 border-red-200">
                    <CardBody>
                      <p className="text-red-900 font-semibold">
                        Every 1% improvement in conversion = 10% reduction in acquisition costs
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
                      Before vs. After Optimization
                    </h3>
                    <div className="space-y-6">
                      {conversionIssues.map((issue, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">{issue.name}</span>
                            <span className="text-sm text-gray-600">
                              {issue.current}% → {issue.improved}%
                            </span>
                          </div>
                          <div className="relative">
                            <Progress
                              value={issue.current}
                              className="h-3"
                              color="danger"
                              aria-label={`Current ${issue.name} rate`}
                            />
                            <Progress
                              value={issue.improved}
                              className="h-3 mt-1"
                              color="success"
                              aria-label={`Improved ${issue.name} rate`}
                            />
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

        {/* What Good Looks Like */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                The Transformation
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                What &ldquo;Good&rdquo; Looks Like
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A funnel that works as hard as your team does
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
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">30%+ Conversion Lift</h3>
                    <p className="text-gray-600">
                      Turn 3 out of 100 visitors into customers instead of 2. That&apos;s 50% more
                      revenue.
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Real-Time Visibility</h3>
                    <p className="text-gray-600">
                      Custom dashboards showing exactly where users succeed or struggle, updated
                      hourly.
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Lower CAC</h3>
                    <p className="text-gray-600">
                      Same marketing spend, more customers. Watch your unit economics transform.
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
                The 4-Week Conversion Sprint
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic optimization based on 500+ funnel transformations
              </p>
            </div>

            <div className="space-y-8">
              {/* Week 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardBody className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            1
                          </div>
                          <h3 className="text-2xl font-bold text-navy-900">
                            Week 1: Deep Dive Audit
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Comprehensive analysis of your entire funnel using quantitative and
                          qualitative methods.
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-semibold text-navy-900">Analytics Review</p>
                            <p className="text-sm text-gray-600 mt-1">GA4, Mixpanel, Amplitude</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-semibold text-navy-900">User Sessions</p>
                            <p className="text-sm text-gray-600 mt-1">Hotjar, FullStory analysis</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-semibold text-navy-900">Heuristic Eval</p>
                            <p className="text-sm text-gray-600 mt-1">127-point checklist</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-semibold text-navy-900">User Interviews</p>
                            <p className="text-sm text-gray-600 mt-1">5-8 customer calls</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Week 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardBody className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            2
                          </div>
                          <h3 className="text-2xl font-bold text-navy-900">Week 2: Quick Wins</h3>
                        </div>
                        <p className="text-gray-700">
                          Implement high-impact, low-effort changes that deliver immediate results.
                        </p>
                      </div>
                      <div className="lg:col-span-2">
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
                            <span className="text-gray-700">Fix broken flows and error states</span>
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
                            <span className="text-gray-700">
                              Optimize page load speed (target &lt; 3s)
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
                            <span className="text-gray-700">
                              Clarify value propositions and CTAs
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
                            <span className="text-gray-700">Remove unnecessary form fields</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Week 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardBody className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            3
                          </div>
                          <h3 className="text-2xl font-bold text-navy-900">
                            Week 3: Strategic Changes
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Implement deeper optimizations based on user behavior patterns.
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <div className="bg-blue-50 rounded-lg p-6">
                          <p className="font-semibold text-navy-900 mb-3">Focus Areas:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-medium text-gray-900">
                                • Pricing page optimization
                              </p>
                              <p className="font-medium text-gray-900">• Checkout flow redesign</p>
                              <p className="font-medium text-gray-900">
                                • Trust signal enhancement
                              </p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">• Mobile experience fixes</p>
                              <p className="font-medium text-gray-900">• Personalization layers</p>
                              <p className="font-medium text-gray-900">• A/B test setup</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Week 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardBody className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            4
                          </div>
                          <h3 className="text-2xl font-bold text-navy-900">
                            Week 4: Scale & Handoff
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Documentation, training, and setting up continuous optimization processes.
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          <CardBody className="p-6">
                            <p className="font-bold text-lg mb-2">Deliverables:</p>
                            <ul className="space-y-2 text-blue-100">
                              <li>✓ Custom analytics dashboard</li>
                              <li>✓ Optimization playbook (50+ pages)</li>
                              <li>✓ A/B testing roadmap</li>
                              <li>✓ Team training session</li>
                              <li>✓ 30-day support package</li>
                            </ul>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                Real Results
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900">
                Conversion Success Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <TestimonialCard quote="Drexus increased our trial-to-paid conversion from 11% to 29% in just 4 weeks. The ROI was evident within the first month." />
              <TestimonialCard quote="We were skeptical about quick wins, but they reduced our checkout abandonment by 40% in week 2. Game-changing expertise." />
            </div>

            {/* Case Study Highlight */}
            <Card className="bg-gradient-to-br from-gray-50 to-blue-50">
              <CardBody className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">
                      Case Study: B2B SaaS Platform
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Challenge:</strong> 4% visitor-to-trial conversion rate
                      </p>
                      <p>
                        <strong>Solution:</strong> Comprehensive funnel optimization
                      </p>
                      <p>
                        <strong>Timeline:</strong> 4-week sprint
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-300">
                        <p className="font-bold text-lg text-navy-900">Results:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• 11% visitor-to-trial conversion (+175%)</li>
                          <li>• $2.3M additional ARR in 6 months</li>
                          <li>• 52% reduction in CAC</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-blue-600">175%</p>
                      <p className="text-sm text-gray-600 mt-1">Conversion Increase</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-green-600">4</p>
                      <p className="text-sm text-gray-600 mt-1">Weeks to Impact</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-purple-600">$2.3M</p>
                      <p className="text-sm text-gray-600 mt-1">Additional ARR</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-orange-600">52%</p>
                      <p className="text-sm text-gray-600 mt-1">CAC Reduction</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
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
                Ready to Stop the Revenue Leak?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free conversion audit that identifies your biggest opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as={Link}
                  href="/tools/conversion-audit"
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8"
                >
                  Get Free Conversion Audit
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="bordered"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8"
                >
                  Schedule Strategy Call
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                Takes 5 minutes • Get results in 24 hours
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
