"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { TestimonialCard } from "@/components/case-studies/CaseStudyClient";
import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui/PageHeader";

const domainNuances = [
  {
    title: "Multi-Tenancy Architecture",
    description: "Secure data isolation while maintaining efficient resource utilization",
    icon: "🏢",
  },
  {
    title: "Subscription Billing",
    description: "Complex pricing models, usage-based billing, and revenue recognition",
    icon: "💳",
  },
  {
    title: "User Onboarding",
    description: "Reducing time-to-value and driving activation metrics",
    icon: "🚀",
  },
  {
    title: "API-First Design",
    description: "Building platforms that others can extend and integrate with",
    icon: "🔌",
  },
  {
    title: "Scale & Performance",
    description: "Handling exponential growth without exponential costs",
    icon: "📈",
  },
  {
    title: "Security & Compliance",
    description: "SOC2, GDPR, and enterprise security requirements",
    icon: "🔒",
  },
];

const integrationMap = [
  { category: "Authentication", tools: ["Auth0", "Okta", "Azure AD", "Google SSO"] },
  { category: "Payments", tools: ["Stripe", "Paddle", "Chargebee", "Recurly"] },
  { category: "Analytics", tools: ["Segment", "Mixpanel", "Amplitude", "Heap"] },
  { category: "Communication", tools: ["SendGrid", "Twilio", "Intercom", "Customer.io"] },
  { category: "Infrastructure", tools: ["AWS", "GCP", "Kubernetes", "Terraform"] },
  { category: "Monitoring", tools: ["Datadog", "New Relic", "Sentry", "PagerDuty"] },
];

const risksAndMitigations = [
  {
    risk: "Churn Rate",
    mitigation: "Implement predictive analytics and proactive customer success",
  },
  {
    risk: "Feature Creep",
    mitigation: "Data-driven prioritization and clear product strategy",
  },
  {
    risk: "Technical Debt",
    mitigation: "Regular refactoring sprints and automated testing",
  },
  {
    risk: "Competition",
    mitigation: "Focus on core differentiators and rapid innovation",
  },
];

const caseStudies = [
  {
    title: "Analytics Platform Scale-Up",
    description: "Helped a B2B analytics SaaS handle 100x growth in 18 months",
    metrics: ["From 50 to 5,000 customers", "99.99% uptime maintained", "$2M to $25M ARR"],
    tags: ["Scale", "Performance", "Multi-tenancy"],
  },
  {
    title: "Workflow Automation Tool",
    description: "Built an integration platform connecting 200+ third-party services",
    metrics: ["500+ API integrations", "10M+ workflows daily", "45% market share"],
    tags: ["Integrations", "API Design", "Scale"],
  },
  {
    title: "HR Tech Platform",
    description: "Modernized legacy HR software into a cloud-native SaaS solution",
    metrics: ["6-month migration", "70% cost reduction", "NPS increased to 72"],
    tags: ["Migration", "Modernization", "UX"],
  },
];

export default function SaaSIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SaaS Industry Expertise - Drexus",
    description: "Deep expertise in building and scaling SaaS platforms",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@id": "https://drexus.com", name: "Home" },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: { "@id": "https://drexus.com/industries", name: "Industries" },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: { "@id": "https://drexus.com/industries/saas", name: "SaaS" },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="json-ld-industry"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="SaaS Industry Expertise"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "SaaS" },
              ]}
              className="!bg-transparent !border-none text-white [&_h1]:text-white [&_nav]:text-blue-200 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-white [&_svg]:text-blue-300"
              container={false}
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              We&apos;ve helped 50+ SaaS companies scale from MVP to IPO. From multi-tenancy to
              usage-based billing, we speak your language.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">50+</p>
                <p className="text-gray-600">SaaS Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">$500M+</p>
                <p className="text-gray-600">Combined ARR</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 mb-2">10B+</p>
                <p className="text-gray-600">API Calls Daily</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600 mb-2">99.9%</p>
                <p className="text-gray-600">Average Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Nuances */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                We Understand SaaS Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building SaaS is different. Every decision impacts scalability, security, and unit
                economics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domainNuances.map((nuance, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardBody className="p-6">
                      <div className="text-4xl mb-4">{nuance.icon}</div>
                      <h3 className="text-lg font-bold text-navy-900 mb-2">{nuance.title}</h3>
                      <p className="text-gray-600">{nuance.description}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Typical SaaS Integration Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationMap.map((category, index) => (
                <Card key={index} className="bg-white">
                  <CardBody className="p-6">
                    <h3 className="font-bold text-navy-900 mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <Chip key={idx} size="sm" variant="flat" color="primary">
                          {tool}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Risks & Mitigations */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Common Risks & Our Mitigations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {risksAndMitigations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="bg-red-100 text-red-600 rounded-full p-2 mr-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-navy-900 mb-2">{item.risk}</h3>
                          <p className="text-gray-600">{item.mitigation}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              SaaS Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardBody className="p-8">
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <div className="space-y-2 mb-6">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <svg
                              className="w-4 h-4 text-green-600 mr-2 flex-shrink-0"
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
                            {metric}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, idx) => (
                          <Chip key={idx} size="sm" variant="flat">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="max-w-4xl mx-auto">
              <TestimonialCard
                testimonial={{
                  quote:
                    "Drexus understands SaaS at a deep level. They didn't just build features—they helped us architect for scale, optimize our unit economics, and create a platform that developers love to integrate with.",
                  author: "Michael Chen",
                  title: "CTO",
                  company: "DataSync (Series B SaaS)",
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Scale Your SaaS Platform?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re pre-seed or Series C, we have the expertise to accelerate your
              growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Discuss Your SaaS Project
              </Button>
              <Button
                as={Link}
                href="/case-studies"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white/10 font-semibold px-12"
              >
                View More Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
