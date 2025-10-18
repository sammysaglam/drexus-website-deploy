"use client";

import React from "react";

import { Button, Card, CardBody, CardHeader, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";

const solutions = [
  {
    id: "mvp-fast",
    title: "MVP Fast-Track",
    description:
      "Launch your product in 6 weeks, not 6 months. For funded startups ready to move fast without compromising quality.",
    persona: "Startup CEO",
    icon: "🚀",
    href: "/solutions/mvp-fast",
    cta: "MVP Scope Builder",
  },
  {
    id: "ops-conversion",
    title: "Ops Conversion Boost",
    description:
      "Stop losing customers in your funnel. Data-driven optimization that turns visitors into revenue.",
    persona: "Operations Leader",
    icon: "📈",
    href: "/solutions/ops-conversion",
    cta: "Conversion Audit",
  },
  {
    id: "roadmap-unblock",
    title: "Roadmap Unblock",
    description:
      "Remove technical blockers that are holding your product roadmap hostage. Expert engineers who solve the hard problems.",
    persona: "Engineering Manager",
    icon: "🔓",
    href: "/solutions/roadmap-unblock",
    cta: "Risk Ledger",
  },
  {
    id: "vendor-diligence",
    title: "Vendor Due Diligence",
    description:
      "Don't bet your digital transformation on the wrong partner. Expert technical due diligence that protects your investment.",
    persona: "VP at Enterprise",
    icon: "🔍",
    href: "/solutions/vendor-diligence",
    cta: "Vendor Scorecard",
  },
  {
    id: "pilot-2-week",
    title: "2-Week Pilot Program",
    description:
      "Try before you buy. Real work, real results, real fast. The smart way to validate a technical partnership.",
    persona: "Product Manager",
    icon: "🎯",
    href: "/solutions/pilot-2-week",
    cta: "Book Pilot",
  },
  {
    id: "scale-up",
    title: "Scale Without Hiring",
    description:
      "Elastic engineering capacity that scales with your needs. No hiring delays, no fixed costs, no quality compromises.",
    persona: "Growth Stage CTO",
    icon: "⚡",
    href: "/solutions/scale-up-without-hiring",
    cta: "Request Capacity",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="Solutions for Every Stage"
              breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-cyan-100 [&_a]:text-cyan-200 [&_a:hover]:text-cyan-100 [&_span]:text-white [&_svg]:text-cyan-200"
              container={false}
            />
            <p className="text-xl text-cyan-50 max-w-3xl mt-4">
              Whether you&apos;re launching an MVP, fixing conversion issues, or scaling your team,
              we have a proven solution tailored to your needs.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
                      <div className="flex items-center justify-between w-full mb-4">
                        <span className="text-4xl">{solution.icon}</span>
                        <Chip size="sm" variant="flat" color="primary">
                          {solution.persona}
                        </Chip>
                      </div>
                      <h3 className="text-xl font-bold text-navy-900">{solution.title}</h3>
                    </CardHeader>
                    <CardBody className="px-6 py-4 flex flex-col justify-between">
                      <p className="text-gray-600 mb-6">{solution.description}</p>
                      <div className="space-y-3">
                        <Button
                          as={Link}
                          href={solution.href}
                          variant="flat"
                          color="primary"
                          className="w-full"
                        >
                          Learn More
                        </Button>
                        <p className="text-center text-sm text-gray-500">Tool: {solution.cta}</p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-900 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Not Sure Which Solution Fits?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your specific challenges and find the perfect approach for your
              team.
            </p>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
            >
              Book a Strategy Call
            </Button>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
