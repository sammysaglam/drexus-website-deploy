"use client";

import React from "react";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

import { SplitHero } from "@/components/landing";
import { useBookingModal } from "@/hooks/useBookingModal";

export default function AffordableDevCostsContent() {
  const { openModal } = useBookingModal();

  const handleDownload = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/docs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const faqs = [
    {
      question: "Is this only for funded startups?",
      answer:
        "No, we work with founders, growth teams, and enterprise leaders. The path is the same, clear scope, transparent cadence, measurable progress.",
    },
    {
      question: "Do you insist on long retainers?",
      answer:
        "No, start with a clearly scoped project or a two-week pilot. Keep going only if the receipts are strong.",
    },
    {
      question: "Do we own the code?",
      answer:
        "Yes. Ownership and clean handover are standard here, see our procurement page for details.",
    },
  ];

  return (
    <main id="main-content">
      {/* Hero Section */}
      <SplitHero
        headline={"\"We Hired 'Affordable,' It Cost €27k.\""}
        subheadline="The hidden math behind cheap devs. Use our fixed-price estimator to see what reliable actually costs, and saves."
        ctaText="Free Guide: App Scope 1-Pager →"
        onCtaClick={() => handleDownload("Drexus Scope Guide.pdf")}
        imageSrc="/images/affordable-dev-costs.png"
        imageAlt="Cost stacks with downward arrow and hand illustration"
        backgroundColor="rgba(10, 28, 63, 1)"
        dark
        heightPx={600}
        contentMaxWidthPx={560}
        imageWidthPercent={52}
      />

      {/* Intro Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              If you are here, you are trying to ship a credible app, not a deck
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You want predictable cost, senior execution, and visible progress every Friday. That
              is exactly how we work, with fixed scopes, weekly "Friday Progress Receipts," and
              senior engineers who have shipped 50 plus mobile apps.
            </p>

            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                What you will get on this page
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">
                      A simple cost reality check, with the estimator you can run in a minute
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">
                      The exact project scope format we use to avoid bloat and hidden rework
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">
                      A short list of vendor red flags to help you avoid the next €27k mistake
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">
                      Multiple ways to keep learning, no pushy sales talk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/compare-your-process"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-4 sm:px-8 py-3 w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Compare Your Process to the Drexus Way →</span>
                <span className="sm:hidden text-sm">Compare Your Process to the Drexus Way →</span>
              </Button>
              <Button
                as={Link}
                href="/insights"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Check Weekly Insights →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Reality Check */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              The cost reality check
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Cheap rates hide expensive risks, context loss, and rework. Use our estimator to model
              runway impact, team bus-factor, and delivery reliability. It is a plain calculator,
              not a gate.
            </p>

            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Run a quick scenario</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">
                    Enter a target release date and a realistic feature list
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">
                    See the cost of overruns vs a fixed, testable scope
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">
                    Export an estimate you can share with your investors
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                as={Link}
                href="/tools/roi-calculator"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Open the ROI Calculator →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scope 1-Pager */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Avoid bloat with the Scope 1-Pager
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Most overruns start with fuzzy scoping. Our one-page template forces one activation
              path, clear acceptance criteria, and two cut-lines so you keep momentum. You can
              generate it in minutes with our builder.
            </p>

            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">What the template includes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">
                      One activation path, so you test value without detours
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">Acceptance criteria that prevent rework</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">
                      Non-functional basics, auth and p95 latency targets
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">
                      Two cut-lines, so hard choices are easy when time gets tight
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/mvp-scope-builder"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Build Your Scope 1-Pager →
              </Button>
              <Button
                onPress={() => handleDownload("Drexus Scope Sample.pdf")}
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Download a Sample →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vendor Red Flags */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Vendor red flags to watch this week
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Ship with your eyes open. If your current or future vendor shows these patterns, costs
              will drift.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">⚠️</span>
                  <div>
                    <p className="text-lg font-bold text-navy-900 mb-3">
                      No weekly written update with shipped, in-progress, and next
                    </p>
                    <p className="text-gray-700 mb-4">
                      You get surprised later. Our Friday Progress Receipts solve this in a simple,
                      reliable way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">⚠️</span>
                  <div>
                    <p className="text-lg font-bold text-navy-900 mb-3">
                      Vague ownership of code and environments
                    </p>
                    <p className="text-gray-700 mb-4">Migration later becomes another project.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">⚠️</span>
                  <div>
                    <p className="text-lg font-bold text-navy-900 mb-3">No pilot rubric</p>
                    <p className="text-gray-700 mb-4">
                      You cannot prove fit before committing. We run two-week pilots with clear exit
                      criteria.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">⚠️</span>
                  <div>
                    <p className="text-lg font-bold text-navy-900 mb-3">
                      No objective diligence score
                    </p>
                    <p className="text-gray-700 mb-4">
                      You are betting on a pitch, not a plan. Use our Vendor Diligence Scorecard to
                      compare partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/vendor-diligence-scorecard"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Copy the Vendor Diligence Scorecard →
              </Button>
              <Button
                as={Link}
                href="/solutions/pilot-2-week"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                See 2-Week Pilot Terms →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Friday Progress Receipts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Progress you can read in five minutes, every Friday
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You will see exactly what shipped, what is in progress, and what is next. It is a
              ritual, simple and boring, which is why it works.
            </p>

            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                A typical Friday receipt shows
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">
                    Shipped features and fixes, linked to tickets
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">
                    Current sprint items with percent complete
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">
                    Next week plan and risks, so decisions are on time
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={() => handleDownload("Drexus Friday Receipt Sample.pdf")}
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                View a Sample Friday Receipt →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Six Week Roadmap */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              What a six-week roadmap should look like
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You are not buying hours, you are buying a reliable path to a testable product. We use
              React, Node, production-ready infrastructure, and give you weekly demos.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">0-1</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">Discovery and scope</h4>
                <p className="text-gray-700 text-sm">
                  Finalize the one-page scope, define acceptance, set cut-lines
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">2-3</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">Core slice</h4>
                <p className="text-gray-700 text-sm">
                  Authentication and profile, data model, first activation path
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">4-5</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">Real usage</h4>
                <p className="text-gray-700 text-sm">
                  Live dashboards or core flows, observability, error budgets
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-600">6</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-3">Ship and learn</h4>
                <p className="text-gray-700 text-sm">
                  Beta taps, analytics, post-launch support plan
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={() => handleDownload("Drexus Project Fast Track Guide.pdf")}
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                See Project Fast-Track →
              </Button>
              <Button
                as={Link}
                href="/tools/experiment-planner"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Run the Experiment Planner →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof and Context */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Proof and context
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Leaders at Reddit and Goldman Sachs have publicly endorsed our work, and we host
              regular office hours and webinars so you can test our thinking before you buy
              anything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/case-studies"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Read Case Studies →
              </Button>
              <Button
                as={Link}
                href="/events/office-hours"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Join Office Hours Event →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Keep learning without booking a call
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Pick one resource, make one improvement this week. You will build momentum, and if you
              need us, we will be here.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Conversion Audit</h4>
                <p className="text-gray-700 mb-4">
                  Find the 20 percent of friction causing most of the loss, then fix it in order.
                </p>
                <Button
                  as={Link}
                  href="/tools/conversion-audit"
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold"
                >
                  Run Audit Now →
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Risk Ledger</h4>
                <p className="text-gray-700 mb-4">
                  Surface unknowns and dependencies before they burn your launch.
                </p>
                <Button
                  as={Link}
                  href="/tools/risk-ledger"
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold"
                >
                  Open Ledger →
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Weekly Insights</h4>
                <p className="text-gray-700 mb-4 flex-grow">
                  One practical idea every Tuesday, short and useful.
                </p>
                <Button
                  as={Link}
                  href="/insights"
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-4 py-2 mt-auto w-fit"
                >
                  <span className="inline">Weekly Insights →</span>
                </Button>
              </div>
            </div>
            <div className="text-center"></div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 sm:mb-12 text-center">
              FAQ, short and honest
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200"
                >
                  <p className="text-lg font-bold text-navy-900 mb-3">{faq.question}</p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                as={Link}
                href="/pricing"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Explore Pricing and Procurement →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-navy-900 text-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-8">
              Final nudge, zero pressure
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              If you only do one thing today, generate your project scope 1-Pager. It will sharpen
              your thinking and protect your budget, whether you work with us or not.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={openModal}
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-3"
              >
                Book a Strategy Call →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
