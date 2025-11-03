"use client";

import React from "react";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

import { SplitHero } from "@/components/landing";
import { useBookingModal } from "@/hooks/useBookingModal";

export default function DeveloperVanishedContent() {
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
      question: "How do I know if my developer has actually vanished vs. just being slow?",
      answer:
        "If you haven't received a written update in 3+ days, can't access your codebase, or progress has stalled without explanation, it's time to activate the recovery plan.",
    },
    {
      question: "Can I really recover in just 2 weeks?",
      answer:
        "Yes, with the right scope reset and focus on one activation path. The key is cutting features, not rebuilding everything.",
    },
    {
      question: "What if I don't have access to the code or repository?",
      answer:
        "This is a red flag. The 72-hour containment plan includes steps to secure your assets and assess what you actually own.",
    },
  ];

  return (
    <main id="main-content">
      {/* Hero Section */}
      <SplitHero
        headline="My Developer Vanished Mid-Sprint."
        subheadline="We've all been there. Here's the exact 2-week project plan founders use to recover fast — scope, code, cadence. Free template included."
        ctaText="Get the Free Recovery Plan →"
        onCtaClick={() => handleDownload("Drexus Recovery Checklist.pdf")}
        secondaryText="Download the 2-Week Project Playbook →"
        onSecondaryClick={() => handleDownload("Drexus 2 week project PLAYBOOK.pdf")}
        imageSrc="/images/the-vanishing-developer.png"
        imageAlt="Illustration for vanished developer scenario"
        backgroundColor="rgba(10, 28, 63, 1)"
        dark
        heightPx={600}
        contentMaxWidthPx={560}
        imageWidthPercent={51}
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
              You thought the hard part was finding a dev
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              It's not. The real risk starts after code begins — when communication thins, standups
              slip, and progress stops being visible. Suddenly your burn rate continues, but your
              product doesn't move.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At Drexus, we've rebuilt dozens of "mid-sprint orphans." This page shows you exactly
              how to recover, protect your runway, and ship a testable product within two weeks,
              even if your team just imploded.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/compare-your-process"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                <span className="hidden sm:inline">
                  Compare Your Current Sprint to the Drexus Way →
                </span>
                <span className="sm:hidden text-[12px]">
                  Compare Your Current Sprint to the Drexus Way →
                </span>
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

      {/* Step 1 - Stabilize and contain */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 1 — Stabilize and contain the chaos
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              When a dev vanishes, every hour matters. Here's the immediate triage we use before
              touching code.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                The 72-Hour Containment Plan:
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-navy-900 mb-2">
                      Freeze your repository and revoke old credentials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-navy-900 mb-2">
                      Export backlog and note what's done, what's half-done, what's untouched.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-navy-900 mb-2">
                      Define your "minimums" — what you need to launch fast.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-navy-900 mb-2">
                      Use our Risk Ledger to flag unknowns and dependencies before they burn more
                      days.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6">
                You can do this yourself — the Risk Ledger template walks you through it.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/risk-ledger"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Open the Free Risk Ledger →
              </Button>
              <Button
                onPress={() => handleDownload("Drexus Sample Recovery Log.pdf")}
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                View a Sample Recovery Log →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 2 - Rebuild scope */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 2 — Rebuild your scope in one page
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You don't need a rewrite, you need a scope reset. The Project Scope 1-Pager cuts your
              project to one activation path, a testable slice you can finish in two sprints.
            </p>
            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">What the template gives you:</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-2">
                        A clear 6-line project scope, with "must-have" vs "cut later" features
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-2">
                        Acceptance criteria that turn partial work into usable slices
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-2">
                        Non-functional targets (auth, latency, uptime) so quality stays measurable
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-2">
                        A format you can hand to any new dev in minutes
                      </h4>
                    </div>
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
                See Real Examples →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 3 - Reset cadence */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 3 — Reset the cadence, not the code
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              A failed sprint isn't about technology; it's about visibility.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Our founders recover by installing one simple ritual: the Friday Progress Receipt — a
              short weekly report listing shipped items, current blockers, and next steps.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              It turns chaos into rhythm, and fear into data.
            </p>
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

      {/* The 2-Week Recovery Plan */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              The 2-Week Recovery Plan
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Here's the same framework our clients use when they inherit half-built products:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-navy-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-6">
                  Week 1 — Audit, cut, rebuild
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-600 font-bold">●</span>
                    <p className="text-gray-700">Run Risk Ledger + Scope 1-Pager</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-600 font-bold">●</span>
                    <p className="text-gray-700">Identify one shippable path</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-600 font-bold">●</span>
                    <p className="text-gray-700">Set daily check-ins, rewrite unclear tickets</p>
                  </div>
                </div>
              </div>
              <div className="bg-navy-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-6">Week 2 — Ship & demo</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">●</span>
                    <p className="text-gray-700">Rebuild broken flows, stabilize environments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">●</span>
                    <p className="text-gray-700">Push live, test, and document</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">●</span>
                    <p className="text-gray-700">End week with demo and progress receipt</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-8 text-center mb-8">
              <p className="text-lg text-navy-900">
                By day 14, you'll have a working product and a clean base to scale.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={() => handleDownload("Drexus 2 week project PLAYBOOK.pdf")}
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Download the 2-Week Project Plan →
              </Button>
              <Button
                onPress={() => handleDownload("Drexus Project Fast Track Guide.pdf")}
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Explore Project Fast Track →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vendor red flags */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Vendor red flags to never ignore again
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              If you spot these patterns early, you'll never lose another sprint:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3">●</span>
                  <p className="text-lg font-bold text-navy-900">
                    No written updates or demo cadence
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3">●</span>
                  <p className="text-lg font-bold text-navy-900">
                    Access to repo or environment is "coming soon"
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3">●</span>
                  <p className="text-lg font-bold text-navy-900">
                    "It's working on my machine" becomes the norm
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3">●</span>
                  <p className="text-lg font-bold text-navy-900">
                    Invoices arrive faster than commits
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-8 text-center mb-8">
              <p className="text-lg text-navy-900">
                We bundled the top 10 signals in a short checklist.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={() => handleDownload("Drexus Red Flag Checklist.pdf")}
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Download the Red Flag Checklist →
              </Button>
              <Button
                as={Link}
                href="/tools/vendor-diligence-scorecard"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Compare Vendor Reliability →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* If you want proof */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              If you want proof
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Teams at Reddit and Goldman Sachs have validated our delivery model — predictable
              hours, real-time transparency, and fixed pricing that keeps founders safe.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              But don't take our word for it. Read a real case study of a founder who recovered
              mid-project and shipped on time.
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
                Join a Free Office Hour Session →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keep your learning loop alive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Keep your learning loop alive
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Even if you're not ready to work with anyone, make your next sprint smarter.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <div>
                    <p className="text-lg font-bold text-navy-900 mb-2">
                      Project Scope 1-Pager — define what "done" means again
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <div>
                    <p className="text-lg font-bold text-navy-900 mb-2">
                      Risk Ledger — see what's blocking you before it hurts
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <div>
                    <p className="text-lg font-bold text-navy-900 mb-2">
                      Experiment Planner — test and learn instead of guessing
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <div>
                    <p className="text-lg font-bold text-navy-900 mb-2">
                      Weekly Insights — new insights every Tuesday
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/insights"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Check Weekly Insights →
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
              FAQs
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
          </motion.div>
        </div>
      </section>

      {/* Final word */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-8">
              Final word — recover once, learn forever
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              You can't control who ghosts you, but you can control your system.
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Start by creating your two-week recovery plan — free, detailed, and instantly useful.
              Whether you build alone or with us, it's how founders get back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={openModal}
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Book a Strategy Call →
              </Button>
              <Button
                as={Link}
                href="/tools/mvp-scope-builder"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Build Your Scope 1-Pager →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
