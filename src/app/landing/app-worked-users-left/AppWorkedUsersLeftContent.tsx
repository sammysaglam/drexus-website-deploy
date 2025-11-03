"use client";

import React from "react";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

import { SplitHero } from "@/components/landing";
import { useBookingModal } from "@/hooks/useBookingModal";

export default function AppWorkedUsersLeftContent() {
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
      question: "How do I know if my app is actually working vs. just having low retention?",
      answer:
        "If users complete the core action but don't return, your product works but your feedback loop is broken. The Project Feedback Loop helps you identify exactly where users drop off and why.",
    },
    {
      question: "Can I really improve retention in just 2 weeks?",
      answer:
        "Yes, with focused experiments. Most retention issues come from 1-2 friction points that can be identified and fixed quickly with the right data and approach.",
    },
    {
      question: "What if I don't have analytics set up yet?",
      answer:
        "The Project Feedback Loop includes simple event tracking that doesn't require heavy analytics. You can start with basic instrumentation and build from there.",
    },
  ];

  return (
    <main id="main-content">
      {/* Hero Section */}
      <SplitHero
        headline="The App Worked. The Users Left."
        subheadline="Launch isn't the goal—traction is. Use our Project Feedback Loop to validate fast and impress your next investor."
        ctaText="Open the Project Feedback Loop Tool →"
        onCtaClick={() => (window.location.href = "/tools/project-feedback-loop")}
        secondaryText="Download the Free Retention Checklist →"
        onSecondaryClick={() => handleDownload("Drexus Retention Checklist.pdf")}
        imageSrc="/images/app-worked-users-left.png"
        imageAlt="Illustration for users leaving after launch"
        backgroundColor="rgba(10, 28, 63, 1)"
        dark
        heightPx={600}
        contentMaxWidthPx={560}
        imageWidthPercent={42}
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
              You shipped. Now you need proof it matters.
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Your product works, but users aren't sticking. It's not failure, it's feedback—if you
              know how to read it.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Drexus helps founders turn post-launch silence into traction signals.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              This page gives you the same framework our funded startups use to validate features,
              capture learnings, and show investors real momentum in weeks, not months.
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
                <span className="hidden sm:inline">Compare Your Process to the Drexus Way →</span>
                <span className="sm:hidden text-sm">Compare Your Process to the Drexus Way →</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 1 - Understand what users actually did */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 1 — Understand what users actually did
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You don't need another feature—you need a feedback loop. The Project Feedback Loop
              turns raw events into clear, testable insights.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Here's how it works:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-navy-900 mb-2">
                      Define one metric that signals user success (activation, retention, or
                      repeat).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-navy-900 mb-2">
                      Instrument your app for simple event tracking—no heavy analytics needed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-navy-900 mb-2">
                      Run one small experiment every two weeks, not ten features in ten weeks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-navy-900 mb-2">
                      Close the loop with a Friday Progress Receipt—so your investors see clarity,
                      not chaos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/project-feedback-loop"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Run the Project Feedback Loop Tool →
              </Button>
              <Button
                onPress={() => handleDownload("Drexus Experiment Sample.pdf")}
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                See a Sample Experiment Plan →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 2 - Revisit your onboarding path */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 2 — Revisit your onboarding path
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Most users drop before they ever see value. The fix is rarely another feature; it's
              clarity, speed, and friction removal.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Use our Conversion Audit to see exactly where people leave, how long they wait, and
              what's breaking trust.
            </p>
            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">You'll uncover:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Where the drop-offs start (auth, first action, or delay)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">The "first aha" moment that your product hides</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    What needs one-word fixes in your copy—not weeks of rebuilds
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/conversion-audit"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Run the Conversion Audit →
              </Button>
              <Button
                onPress={() => handleDownload("Drexus The Conversion Microcopy Playbook.pdf")}
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Read:The Conversion Microcopy Playbook →</span>
                <span className="sm:hidden text-sm">Read: The Conversion Microcopy Playbook →</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 3 - Replace launch once with learn fast */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 3 — Replace "launch once" with "learn fast"
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The best founders measure projects as experiments, not milestones. Our
              4-Experiments/Month Planner makes that pace real.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Each experiment includes:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Hypothesis, metric, and owner</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">2-week timeline</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Success/fail criteria, so every test produces a decision
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6">
                This is the same cadence that turns "we think" into "we know," and investors love
                that language.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/experiment-planner"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Open the Experiment Planner →
              </Button>
              <Button
                onPress={() => handleDownload("Drexus Example Framework.pdf")}
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Download Example Framework →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 4 - Show traction, not talk about it */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 4 — Show traction, not talk about it
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You don't need vanity metrics. You need a clear story of progress—built from visible
              iteration and data-backed decisions.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Drexus packages that story naturally through our Friday Progress Receipts and
              structured project playbooks.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Each Friday, you send your investors a single page: shipped, in-progress, next, with
              real numbers attached. That's how you look like a founder in control.
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

      {/* Step 5 - Make traction your strongest pitch */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 5 — Make traction your strongest pitch
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Investors back patterns, not promises. Once your product produces consistent feedback
              loops, you can quantify retention, activation, and iteration velocity.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We can help you translate those signals into a one-page "Investor Proof Sheet" that
              shows momentum, not noise.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Includes:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Key activation metrics</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Experiment velocity</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Post-launch retention trend</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Technical reliability snapshot</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={() => handleDownload("Drexus Investor Proof.pdf")}
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Get the Investor Proof Template →
              </Button>
              <Button
                as={Link}
                href="/events/office-hours"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Join a Free Office Hour →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What founders learn through this system */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              What founders learn through this system
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We asked the ones who've done it right:
            </p>
            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <blockquote className="text-lg text-navy-900 mb-4 italic">
                "Our app wasn't broken—it was blind. The 4-experiment loop made user drop-offs
                obvious. Within one month, we had data our investors could actually read."
              </blockquote>
              <cite className="text-sm text-gray-600">
                — Lena K., SaaS Founder (Seed Round, Berlin)
              </cite>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/case-studies"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Read More Case Studies →
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

      {/* Keep your learning cycle going */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Keep your learning cycle going
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You don't have to rebuild. Just tighten your loop. Start small: one experiment, one
              improvement, one proof point.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Experiment Planner</h4>
                <p className="text-gray-700 mb-4">Test ideas in two-week sprints</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Conversion Audit</h4>
                <p className="text-gray-700 mb-4">Fix friction before it leaks growth</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-navy-900 mb-3">Weekly Insights</h4>
                <p className="text-gray-700 mb-4">New insights every Tuesday</p>
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
                href="/tools/project-feedback-loop"
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Run the Feedback Loop Tool →
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

      {/* Final thought */}
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
              Final thought
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Your product is working fine. It's your feedback loop that's broken.
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Fix that, and traction follows naturally.
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Start with one experiment today—it's free, simple, and the fastest way to look like
              the founder investors want to back.
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
                href="/tools/conversion-audit"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Run a Conversion Audit →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
