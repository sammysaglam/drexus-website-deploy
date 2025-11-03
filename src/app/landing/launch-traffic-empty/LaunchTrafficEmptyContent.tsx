"use client";

import React from "react";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

import { SplitHero } from "@/components/landing";
import { useBookingModal } from "@/hooks/useBookingModal";

export default function LaunchTrafficEmptyContent() {
  const { openModal } = useBookingModal();

  const faqs = [
    {
      question: "Isn't this just about running more ads?",
      answer:
        "No. Ads only work when you know who you're reaching, where they are, what message they respond to, what you want them to do next. The model above focuses on personas, channels and conversion flows — ads are just one execution tool.",
    },
    {
      question: "Can we apply this model if our engineering team is still finishing the build?",
      answer:
        "Absolutely. In fact, it's ideal to embed this marketing model during build. That way the launch isn't a surprise — it's a coordinated event with users ready to engage.",
    },
    {
      question: "How do I create 20 personas without spending months?",
      answer:
        "Start with workshops and existing data: customer surveys, user analytics, sales feedback. Use our free persona template (included in the strategy PDF) to map fast, then refine over time as you collect real data.",
    },
    {
      question: "What if our ideal users aren't online or active in communities?",
      answer:
        "Then use the same channel-mapping-logic: look for where they search problems, which keywords they use, what podcasts or webinars they attend. If they're offline, build online look-alikes and test small campaigns to validate.",
    },
    {
      question: "How soon can I expect measurable results?",
      answer:
        "If you follow the steps and execute with focus, you'll typically see initial activation/engagement improvements in 4-6 weeks. The bigger, sustained conversion lifts take preparation and consistent tracking of personas, channels and metrics.",
    },
  ];

  return (
    <main id="main-content">
      {/* Hero Section */}
      <SplitHero
        headline="When The Launch Was Live And The Traffic Was Empty"
        subheadline="A go-live without outcome is just a checkbox. We help you launch features people actually use."
        ctaText="AI Marketing Plan Generator →"
        onCtaClick={() => (window.location.href = "/tools/ai-marketing-plan")}
        imageSrc="/images/launch-traffic-empty.png"
        imageAlt="Illustration for launch traffic empty"
        backgroundColor="rgba(10, 28, 63, 1)"
        dark
        heightPx={600}
        contentMaxWidthPx={560}
        imageWidthPercent={58}
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
              You remember that moment
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              The build was done, the button turned green, the press release went out — yet the user
              dashboard stayed quiet. Crickets. Thousands of lines of code, multiple sprints, and
              still… minimal impact.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              If you're nodding, you're not alone. We've worked with dozens of scale-ups where the
              engineering team delivered the app, but growth stalled. Why? Because building it is
              only half the job. If the right users aren't in the door — or worse, they come and
              leave without converting — you've launched into nowhere.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              At Drexus, we believe launches should land, not just go live. And an app that nobody
              uses is not just a missed opportunity — it's wasted effort, budget and momentum.
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

      {/* Step 1: Define Your Ideal 20 Personas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 1: Define Your Ideal 20 Personas — in detail
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              We use our proprietary marketing-model to dig deep: up to 20 personas, not generic
              segments. Each persona includes demographics, job role, motivations, pain-points,
              preferred channels, objections. Because the person who downloads your app and the
              person who pays for the licence are rarely the same, and you need both profiles clear
              upfront.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">What each persona includes:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">Demographics and job role</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">Core motivations and pain-points</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">Preferred channels and timing</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">Common objections and concerns</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">Decision-making process</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-navy-600 mr-3">●</span>
                    <p className="text-gray-700">Success metrics they care about</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6">
                The long-term show: persona work isn't just "nice to have" — it's foundational.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 2: Track Where They Hang Out */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 2: Track Where They Hang Out — online & offline
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Once your personas are mapped, we trace their actual behaviours:
            </p>
            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                We build a detailed channel map:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">What LinkedIn groups do they join?</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Which Slack communities do they lurk in?</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Which newsletters do they open?</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    What keywords they search when they're desperate for a solution?
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6">
                For example: "VP of Growth in fintech startups uses Product Hunt at 7-9 am, browses
                indie app list at lunch, and checks X (formerly Twitter) at 5pm."
              </p>
              <p className="text-lg text-gray-700 mt-4">
                This gives you precise interceptions, not blindcasts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 3: Intercept. Engage. Nurture. Convert. */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 3: Intercept. Engage. Nurture. Convert.
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Here's the step-by-step flow we recommend:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Intercept</h3>
                <p className="text-gray-700 mb-4">
                  Run ads, posts or DMs referencing the persona's urgent pain-point ("Your feature
                  launched. But metrics are flat. Let's fix that.") tuned to their phrasing.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Engage</h3>
                <p className="text-gray-700 mb-4">
                  Offer value immediately — a checklist, a microroadmap, case study — something they
                  recognise as relevant.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Nurture</h3>
                <p className="text-gray-700 mb-4">
                  Use segmented email or chat flows that speak directly to the persona's stage
                  (awareness, evaluation, decision). Tailor content about how others like them
                  turned silent launch into active user base.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Convert</h3>
                <p className="text-gray-700 mb-4">
                  Present a low-risk next-step (free strategy session, downloadable tool) so they
                  don't feel sold, they feel supported.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 4: Align the Build With the Market */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 4: Align the Build With the Market From Day One
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Too many teams build features in isolation, drop launch day with a fanfare — and then
              wonder why adoption is weak. In contrast we recommend building with marketing
              plug-points baked in:
            </p>
            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Each feature comes with who it serves, what persona it helps, and how we'll
                    announce it.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Product + marketing teams live in the same cadence — your landing pages, hero
                    copy, email flows and feature packaging evolve alongside sprint delivery.
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6">
                This prevents the "engineers shipped it, but marketing didn't know" gap.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 5: Measure What Matters */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Step 5: Measure What Matters — Then Iterate Loudly
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              You launched. Now what? The metrics you report should be beyond "number of downloads."
              Focus on:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Activation</h3>
                <p className="text-gray-700">Percentage of new users doing your key action</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Retention</h3>
                <p className="text-gray-700">Week 1/week 2/week 4 drop-off</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Conversion</h3>
                <p className="text-gray-700">Free → paid or free → engaged</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Channel ROI</h3>
                <p className="text-gray-700">Which persona, which channel brought quality users</p>
              </div>
            </div>
            <div className="bg-navy-50 rounded-lg p-8 text-center">
              <p className="text-lg text-navy-900">
                Every week you should ask: "Which persona did we talk to? Which channel reached
                them? What was their outcome?" If you can't answer, you're flying blind.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Marketing Tool Reveal */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-8">
              This seems like a lot of work, right?
            </h2>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
              The good news is that we have built a marketing tool that will study your business
              inside out, and do all of this for you. Yes, that's right — it's all automated FOR
              YOU!
            </p>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
              It's new, and we are offering it for free at the moment, with a 1 on 1 chat with our
              marketing director who will give you some free advice on where to start!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={openModal}
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Book a Free Marketing Strategy Call →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story From the Field */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              A Story From the Field
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              One SaaS scale-up launched a major onboarding flow. Launch day came. Downloads: 3k.
              Activity: negligible. The CTO was frustrated, the growth team anxious. Using the
              4-step plan above we:
            </p>
            <div className="bg-navy-50 rounded-lg p-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Defined 16 personas (found one under-served segment in EMEA)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Mapped them to three niche tech communities and one Slack channel
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Created a micro-campaign ("Your onboarding is silent? Let's light it up")
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">
                    Rebuilt the copy for the feature to speak that persona's language ("You've
                    onboarded 300 users. Zero engaged. Here's how to fix it in 14 days.")
                  </p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 mt-6 text-center">
                <p className="text-lg text-navy-900 font-semibold">
                  Within 6 weeks, activation doubled, retention improved by 18% and the feature
                  became the top source of paid conversions.
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

      {/* Free Strategy Offer */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">
              Free Strategy Offer (No Pressure)
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Ready to fix the "live but silent" problem? Book a Free Marketing Strategy and a
              15-minute call with our Marketing Director. We'll walk through your persona map, your
              launch flow, your next 90-day plan. No sales, just serious insight.
            </p>
            <div className="bg-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                What's included in the 15-min call:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Your persona map and target segments</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Your current launch flow analysis</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Your next 90-day marketing plan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-navy-600 mr-3">●</span>
                  <p className="text-gray-700">Channel recommendations and quick wins</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={openModal}
                size="lg"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Book a Free Marketing Strategy Call →
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
              Don't launch into nowhere
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Your app deserves users who actually use it. Start with the free marketing strategy
              and see how to turn your silent launch into active engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onPress={openModal}
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Book Strategy Call →
              </Button>
              <Button
                as={Link}
                href="/tools/ai-marketing-plan"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-3 w-full sm:w-auto"
              >
                Get Free Marketing Strategy →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
