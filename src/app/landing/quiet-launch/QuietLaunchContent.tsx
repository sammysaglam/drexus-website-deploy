"use client";

import React from "react";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

import { SplitHero } from "@/components/landing";
import { useBookingModal } from "@/hooks/useBookingModal";

export default function QuietLaunchContent() {
  const { openModal } = useBookingModal();

  const faqs = [
    {
      question: "What is a quiet launch?",
      answer:
        "A strategic release to a smaller, targeted audience. It gathers data, optimizes funnels, and builds loyalty before scaling publicly.",
    },
    {
      question: "Why do quiet launches outperform big ones?",
      answer:
        "Because they're rooted in data and iteration, not vanity metrics. You learn faster, spend less, and retain more.",
    },
    {
      question: "How does the Drexus Marketing Model fit in?",
      answer:
        "It replaces traditional trial-and-error marketing with AI-driven persona mapping and funnel design. You'll know exactly who to target and how to nurture them before spending a pound on ads.",
    },
    {
      question: "Is this only for startups?",
      answer:
        "Not at all. Our clients range from early-stage founders to enterprise innovation teams — anyone who needs clarity before scale.",
    },
    {
      question: "What's the first step?",
      answer:
        "Start with a free marketing strategy call. We'll study your business, generate your first set of personas, and show you how to structure a silent launch that converts.",
    },
  ];

  return (
    <main id="main-content">
      {/* Hero Section */}
      <SplitHero
        headline={`"The Build That Launched Quietly — And Changed Everything."`}
        subheadline="Quiet wins scale louder. We'll show you how to launch under the radar, keep your burn low, and let results speak louder than noise."
        ctaText="Plan Your Marketing Strategy →"
        onCtaClick={() => (window.location.href = "/tools/ai-marketing-plan")}
        imageSrc="/images/quiet-launch.png"
        imageAlt="Illustration for quiet launch"
        backgroundColor="rgba(10, 28, 63, 1)"
        dark
        heightPx={600}
        contentMaxWidthPx={560}
        imageWidthPercent={58}
      />

      {/* The Myth of the Big Launch */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              The Myth of the Big Launch
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We've all seen it — the fireworks launch, the polished video, the press coverage. Yet
              behind the curtain, the metrics often tell another story: low retention, burnt ad
              spend, and teams scrambling to justify what went wrong.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The truth is, most real growth doesn't start with spectacle. It starts with silence,
              iteration, and a data-driven foundation that keeps scaling after the applause fades.
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

      {/* How Quiet Launches Win */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              How Quiet Launches Win
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Quiet launches work because they attract data, not drama. They allow your team to
              learn from early adopters, refine funnels, and build proof before chasing press.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Many of today's giants—Airbnb, Notion, even TikTok—didn't launch loud. They built
              loops. They refined their personas, their funnels, and their feedback until their
              audience started doing the marketing for them.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Free resource:</h3>
              <p className="text-lg text-gray-700 mb-6">
                Download our Silent Launch Playbook — includes templates for feedback loops, growth
                funnels, and paid-ad sequences used by top-performing startups.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Book a free strategy call to tailor this framework to your own app or product.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={openModal}
                size="lg"
                variant="bordered"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Book a Free Marketing Strategy Call →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Backend That Builds Momentum */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              The Backend That Builds Momentum
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At Drexus, our Marketing Intelligence Model replaces the need for an entire in-house
              marketing department. It studies your business from the inside out, mapping audience
              behavior, segmenting by value, and generating up to 20 highly accurate personas.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You'll see where they live online, what triggers conversion, and how to reach them
              with tailored creative, messaging, and funnels.
            </p>
            <div className="bg-gradient-to-br from-navy-50 to-blue-50 rounded-2xl p-8 mb-8 border border-navy-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-100 rounded-full mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  The Quiet Launch Advantage
                </h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Imagine launching quietly, targeting the exact communities that move markets, and
                  nurturing them with automated, insight-driven content.
                </p>
                <p className="text-xl font-semibold text-navy-800 mt-4">
                  That's how you win without noise.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">🔍</span>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-2">Precise Targeting</h4>
                  <p className="text-gray-700 text-sm">
                    Identify and reach the exact communities that drive market movement
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">🤖</span>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-2">Automated Nurturing</h4>
                  <p className="text-gray-700 text-sm">
                    AI-driven content and campaigns that work 24/7 to build relationships
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">📈</span>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-2">Silent Growth</h4>
                  <p className="text-gray-700 text-sm">
                    Build momentum without the noise and competition of public launches
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/ai-marketing-plan"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Generate Your Marketing Plan →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Real Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              A Real Story
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              One of our clients, a mid-tier SaaS company, soft-launched to a 400-user waitlist. No
              ads, no influencers. Instead, they used our model to map who those users were, then
              ran a three-week nurture campaign using LinkedIn posts, founder videos, and
              retargeting.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-navy-900 mb-4">
                  They converted 68% of the waitlist into paying users. Their CAC was 91% lower than
                  their previous launch attempt.
                </p>
                <p className="text-lg text-gray-700 italic">
                  The CEO calls it "the quietest, loudest success we ever had."
                </p>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Building The Funnel That Feeds Itself */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Building The Funnel That Feeds Itself
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              A launch isn't just an event — it's the start of a funnel. Quiet launches thrive
              because they invest where it matters:
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 flex flex-col h-full">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Top-of-funnel trust</h3>
                <p className="text-gray-700 flex-grow">
                  Organic thought leadership, expert LinkedIn posting, and community-based
                  awareness.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 flex flex-col h-full">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Middle-of-funnel engagement
                </h3>
                <p className="text-gray-700 flex-grow">
                  Retargeting ads that speak to each persona's pain point, built from Drexus'
                  persona insights.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 flex flex-col h-full">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Bottom-of-funnel conversion
                </h3>
                <p className="text-gray-700 flex-grow">
                  Email sequences, micro-copy testing, and social proof.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We'll walk you through how to design each stage so your app doesn't just launch—it
              lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/tools/conversion-audit"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Audit Your Conversion →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quiet Doesn't Mean Invisible */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Quiet Doesn't Mean Invisible
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              A "quiet" launch doesn't mean hiding. It means leading with strategy over spectacle.
              It's how startups survive, enterprises innovate, and products sustain growth long
              after the hype cycle fades.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              When you understand your audience deeply and execute methodically, you don't need to
              shout — your numbers will.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                Learn how our Marketing Intelligence Model identifies the top 10% of your users
                who'll generate 90% of your growth.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/events/office-hours"
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Join Office Hours →
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
              Ready to launch quietly — and win loudly?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={openModal}
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Book Your Free Strategy Call →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
