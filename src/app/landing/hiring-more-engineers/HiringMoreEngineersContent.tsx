"use client";

import React from "react";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

import { SplitHero } from "@/components/landing";
import { useBookingModal } from "@/hooks/useBookingModal";

export default function HiringMoreEngineersContent() {
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
      question: "How do I know if my problem is system-related or talent-related?",
      answer:
        "Run a one-week visibility test. Track tasks completed versus time spent communicating. If coordination outweighs creation, you have a system issue, not a talent gap.",
    },
    {
      question: "Can Drexus help diagnose without committing to a full build?",
      answer:
        "Yes. Our free Vendor Diligence Scorecard benchmarks your setup, highlighting where your bottlenecks live before you spend another penny.",
    },
    {
      question: "What's unique about Drexus' marketing model?",
      answer:
        "It's the first system that merges delivery and demand generation. We map your personas, content, and app features into a single roadmap that aligns product velocity with market traction.",
    },
    {
      question: "My investors are pushing for faster launches — what can I show them?",
      answer:
        "Our Friday Receipts Framework creates instant visibility. You'll have real, defensible progress updates you can share with the board weekly.",
    },
    {
      question: "Do I need to switch developers to use Drexus tools?",
      answer:
        "Not at all. Our playbooks, PDFs, and diagnostics work alongside any team or vendor. Start with insight, not overhaul.",
    },
  ];

  return (
    <main id="main-content">
      {/* Hero Section */}
      <SplitHero
        headline="She Thought Hiring More Engineers Would Fix It — It Didn't. Here's What Did."
        subheadline="More heads don't always solve throughput. We focused on system, not just staff — and his roadmap cleared fast."
        ctaText="AI Marketing Plan Generator →"
        onCtaClick={() => (window.location.href = "/tools/ai-marketing-plan")}
        secondaryText="Open Vendor Diligence Scorecard →"
        onSecondaryClick={() => (window.location.href = "/tools/vendor-diligence-scorecard")}
        imageSrc="/images/hiring-more-engineers.png"
        imageAlt="Illustration for hiring more engineers scenario"
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
              When Sarah, a CTO at a scale-up SaaS firm, realized delivery velocity had dropped
              despite doubling her team
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              She assumed they needed more people. But adding engineers only multiplied confusion.
              Work-in-progress ballooned, communication broke down, and "almost done" became the
              company's unofficial slogan.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The truth? Throughput doesn't scale linearly with headcount — it scales with clarity.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At Drexus, we've seen this story hundreds of times. Teams chase speed by hiring, but
              the real bottleneck isn't the people — it's the system. Delivery friction, unclear
              scope, rework loops, and missing progress signals quietly eat away at your roadmap.
            </p>
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
                href="/tools/compare-your-process"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Compare Your Process →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Actually Works */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Here's What Actually Works
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">System Before Staff.</h3>
                <p className="text-gray-700 mb-4">
                  Optimize your flow before expanding your payroll. Map where time leaks —
                  approvals, handoffs, unclear ownership — and patch those before hiring.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  The Friday Receipts Method.
                </h3>
                <p className="text-gray-700 mb-4">
                  Replace "update meetings" with measurable progress reports. Every Friday, list
                  what's shipped, what's in progress, and what's next. Simple, visual, transparent —
                  it turns noise into trust.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Precision Marketing Alignment.
                </h3>
                <p className="text-gray-700 mb-4">
                  Product velocity is useless if your go-to-market lags. Drexus' marketing model
                  studies your business end-to-end, generating up to 20 data-backed personas and a
                  step-by-step strategy on how to attract, engage, and convert them.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Audit Your Build Process.</h3>
                <p className="text-gray-700 mb-4">
                  Use Drexus' Vendor Diligence Scorecard and Risk Ledger tools (free on our site) to
                  benchmark your current delivery setup. You'll see where inefficiency hides and how
                  to close the gaps that cost months.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/vendor-diligence-scorecard"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Open Vendor Diligence Scorecard →
              </Button>
              <Button
                as={Link}
                href="/tools/risk-ledger"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Open Risk Ledger →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Friday Receipts Method */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              The Friday Receipts Method
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Replace "update meetings" with measurable progress reports. Every Friday, list what's
              shipped, what's in progress, and what's next. Simple, visual, transparent — it turns
              noise into trust.
            </p>
            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">How it works:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">What's Shipped</p>
                  <p className="text-gray-700">
                    Completed features and fixes with links to tickets
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">In Progress</p>
                  <p className="text-gray-700">Current sprint items with percent complete</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <p className="text-lg font-bold text-navy-900 mb-3">What's Next</p>
                  <p className="text-gray-700">
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

      {/* Marketing Alignment */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Precision Marketing Alignment
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Product velocity is useless if your go-to-market lags. Drexus' marketing model studies
              your business end-to-end, generating up to 20 data-backed personas and a step-by-step
              strategy on how to attract, engage, and convert them.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We unify product and marketing under one rhythm — so what gets built is what sells.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">What you get:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Up to 20 data-backed personas mapped to your business
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Step-by-step strategy for attracting, engaging, and converting each persona
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Unified product and marketing roadmap that aligns velocity with market traction
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={openModal}
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Book Free Marketing Strategy →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data-Driven Decisions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Data &gt; Drama
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Every decision we make is driven by observable metrics — velocity, stability,
              conversion. That's how we rebuilt Sarah's roadmap without a single extra hire.
            </p>
            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                Real Talk: What We Learned Helping Teams Like Yours
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-lg text-gray-700 mb-2">
                    <strong>When Reddit and Goldman Sachs teams felt "stuck,"</strong> the solution
                    wasn't new hires, it was better cadence.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-lg text-gray-700 mb-2">
                    <strong>One fintech client cut cycle time by 40%</strong> simply by visualizing
                    bottlenecks.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-lg text-gray-700 mb-2">
                    <strong>A healthtech startup unlocked investor confidence</strong> after
                    aligning its engineering velocity with user activation goals, using the same
                    system we now share openly in our free guides.
                  </p>
                </div>
              </div>
            </div>
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
                Join Office Hours →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Free Tools & Resources to Get Started
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              No gated nonsense, no sales pitch — just the frameworks we wish every growth-stage CTO
              had before hiring another engineer.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Free Marketing Strategy</h4>
                <p className="text-gray-700 mb-4 flex-grow">
                  Get a free marketing strategy tailored to your business
                </p>
                <Button
                  as={Link}
                  href="/tools/ai-marketing-plan"
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold mt-auto"
                >
                  Get Strategy →
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Process Comparison Tool</h4>
                <p className="text-gray-700 mb-4 flex-grow">
                  Benchmark your delivery flow against high-performing teams
                </p>
                <Button
                  as={Link}
                  href="/tools/compare-your-process"
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold mt-auto"
                >
                  Compare Process →
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Risk Ledger</h4>
                <p className="text-gray-700 mb-4 flex-grow">
                  Identify risks before they cost you a sprint
                </p>
                <Button
                  as={Link}
                  href="/tools/risk-ledger"
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold mt-auto"
                >
                  Open Risk Ledger →
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Vendor Diligence Scorecard</h4>
                <p className="text-gray-700 mb-4 flex-grow">
                  Benchmark your current delivery setup
                </p>
                <Button
                  as={Link}
                  href="/tools/vendor-diligence-scorecard"
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold mt-auto"
                >
                  Open Scorecard →
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
                <h4 className="text-lg font-bold text-navy-900 mb-3">
                  Conversion Microcopy Playbook
                </h4>
                <p className="text-gray-700 mb-4 flex-grow">
                  Fix the friction in your funnel with proven copy
                </p>
                <Button
                  onPress={() => handleDownload("Drexus The Conversion Microcopy Playbook.pdf")}
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold mt-auto"
                >
                  Download Playbook →
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Scope Builder PDF</h4>
                <p className="text-gray-700 mb-4 flex-grow">
                  Define what to build next, not everything at once
                </p>
                <Button
                  as={Link}
                  href="/tools/mvp-scope-builder"
                  size="sm"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold mt-auto"
                >
                  Build Scope →
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What This Means for You */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              What This Means for You
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              If your backlog keeps growing while your throughput stays flat, it's not your team's
              fault. It's your system's silent resistance.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Start small: one ritual, one receipt, one lens of clarity — and watch how
              predictability follows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 sm:mb-12 text-center">
              FAQ
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200"
                >
                  <p className="text-lg font-bold text-navy-900 mb-3">{faq.question}</p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
              Start small: one ritual, one receipt, one lens of clarity
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              If your backlog keeps growing while your throughput stays flat, it's not your team's
              fault. It's your system's silent resistance.
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Start small: one ritual, one receipt, one lens of clarity — and watch how
              predictability follows.
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
