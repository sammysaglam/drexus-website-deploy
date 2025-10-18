"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Divider, Link } from "@heroui/react";
import { motion } from "framer-motion";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatBlock } from "@/components/ui/StatBlock";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export default function MVPFastPage() {
  const stats = [
    { label: "Average Time to MVP", value: "6 weeks", trend: { value: 15, isPositive: true } },
    { label: "Successful Launches", value: "47", trend: { value: 23, isPositive: true } },
    { label: "Client Satisfaction", value: "98%" },
  ];

  const faqs = [
    {
      question: "What if we need to pivot during development?",
      answer:
        "Our agile approach includes weekly sprint reviews and built-in flexibility. We&apos;ve successfully navigated pivots for 73% of our startup clients, often improving the final product.",
    },
    {
      question: "How do you ensure quality with such fast delivery?",
      answer:
        "We use battle-tested patterns, automated testing, and senior engineers only. Our MVP framework includes monitoring, security basics, and scalability considerations from day one.",
    },
    {
      question: "What happens after the MVP launches?",
      answer:
        "We offer seamless transition options: hand off to your team with documentation, continue with us for growth features, or engage our on-demand support. 89% of clients continue working with us post-launch.",
    },
    {
      question: "Can you work with our existing technical team?",
      answer:
        "Absolutely. We excel at augmenting existing teams, sharing knowledge, and establishing processes. Our Friday Progress Receipts keep everyone aligned.",
    },
    {
      question: "What tech stack do you use?",
      answer:
        "We&apos;re stack-flexible but have deep expertise in React, Node.js, Python, and cloud-native architectures. We&apos;ll recommend the best fit for your specific needs and future scaling plans.",
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
              title="MVP Fast-Track"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "MVP Fast-Track" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Launch your product in 6 weeks, not 6 months. For funded startups ready to move fast
              without compromising quality.
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
                  The Challenge
                </Chip>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                  Your Runway is Burning While Your Product Isn&apos;t Shipping
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    You&apos;ve raised funding. You have a vision. But every week without a live
                    product is a week of lost learning, lost customers, and lost momentum.
                  </p>
                  <p className="font-semibold">Common symptoms we see:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Hiring taking 3-6 months for senior engineers</li>
                    <li>Analysis paralysis on technical decisions</li>
                    <li>Feature creep delaying launch</li>
                    <li>No clear path from idea to production</li>
                  </ul>
                  <Card className="mt-6 bg-red-50 border-red-200">
                    <CardBody>
                      <p className="text-red-900 font-semibold">
                        The Stakes: 70% of startups cite &ldquo;moving too slowly&rdquo; as a key
                        factor in failure.
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
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    What &ldquo;Good&rdquo; Looks Like
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0"
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
                        <p className="font-semibold text-gray-900">
                          Week 6: Live MVP with Real Users
                        </p>
                        <p className="text-sm text-gray-600">
                          Not a prototype—a production system processing real transactions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0"
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
                        <p className="font-semibold text-gray-900">Clear Metrics Dashboard</p>
                        <p className="text-sm text-gray-600">
                          Know exactly how users behave from day one
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0"
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
                        <p className="font-semibold text-gray-900">Scalable Foundation</p>
                        <p className="text-sm text-gray-600">
                          Architecture that grows from 100 to 100k users without rewrites
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="primary" variant="flat" className="mb-4">
                Our Approach
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                From Kickoff to Launch in 6 Weeks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our battle-tested process delivers predictable results through focused sprints and
                clear milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Week 1-2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 ml-4">Week 1-2: Foundation</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-gray-900">Discovery & Architecture</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Scope crystallization workshop</li>
                        <li>• Tech stack selection</li>
                        <li>• Infrastructure setup</li>
                        <li>• Design system creation</li>
                      </ul>
                      <Divider className="my-3" />
                      <p className="text-sm font-medium text-blue-600">
                        Deliverable: Clickable prototype + Technical spec
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Week 3-4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 ml-4">Week 3-4: Core Build</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-gray-900">Feature Development</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Core user flows</li>
                        <li>• Database & API</li>
                        <li>• Authentication & security</li>
                        <li>• Payment integration</li>
                      </ul>
                      <Divider className="my-3" />
                      <p className="text-sm font-medium text-blue-600">
                        Deliverable: Functional beta + API documentation
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Week 5-6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 ml-4">
                        Week 5-6: Polish & Launch
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-gray-900">Production Ready</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Testing & QA</li>
                        <li>• Performance optimization</li>
                        <li>• Monitoring setup</li>
                        <li>• Launch coordination</li>
                      </ul>
                      <Divider className="my-3" />
                      <p className="text-sm font-medium text-blue-600">
                        Deliverable: Live MVP + Operations playbook
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>

            {/* Friday Progress Receipts */}
            <Card className="bg-blue-50 border-blue-200">
              <CardBody className="p-8">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      Weekly Friday Progress Receipts
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Every Friday, you receive a comprehensive update including:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>✓ Features completed this week</li>
                        <li>✓ Blockers and resolutions</li>
                        <li>✓ Next week&apos;s priorities</li>
                      </ul>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>✓ Budget and timeline status</li>
                        <li>✓ Live demo links</li>
                        <li>✓ Key decisions needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <Chip color="success" variant="flat" className="mb-4">
                Proven Results
              </Chip>
              <h2 className="text-3xl font-serif font-bold text-navy-900">
                Success Stories from the Fast Lane
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <TestimonialCard quote="Drexus delivered our marketplace MVP in 5 weeks. We onboarded our first 100 vendors within days of launch and closed our Series A three months later." />
              <TestimonialCard quote="We were burning $200k/month trying to hire. Drexus got us to market 4x faster than our original timeline. Best decision we made." />
            </div>

            {/* Success Metrics */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-blue-600">47</p>
                  <p className="text-sm text-gray-600">MVPs Launched</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">6.2</p>
                  <p className="text-sm text-gray-600">Avg Weeks to Launch</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">$2.3M</p>
                  <p className="text-sm text-gray-600">Avg Funding Raised</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">89%</p>
                  <p className="text-sm text-gray-600">Continue Post-MVP</p>
                </div>
              </div>
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
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Ready to Move Fast?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Start with our MVP Scope Builder to get a clear picture of your 6-week roadmap and
                investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as={Link}
                  href="/tools/mvp-scope-builder"
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8"
                >
                  Use MVP Scope Builder
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  variant="bordered"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8"
                >
                  Book a Strategy Call
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                Average response time: 2 hours during business hours
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
