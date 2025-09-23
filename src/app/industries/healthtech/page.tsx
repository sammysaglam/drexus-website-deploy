"use client";

import React from "react";

import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader, TestimonialCard } from "@/components/ui";

const domainNuances = [
  {
    title: "HIPAA Compliance",
    description: "Protect patient data with enterprise-grade security and privacy",
    icon: "🔒",
  },
  {
    title: "Clinical Integration",
    description: "EHR/EMR systems, HL7/FHIR standards, and interoperability",
    icon: "🏥",
  },
  {
    title: "Telemedicine",
    description: "Real-time video, secure messaging, and remote monitoring",
    icon: "💻",
  },
  {
    title: "FDA Regulations",
    description: "Navigate medical device software classifications and approvals",
    icon: "📋",
  },
  {
    title: "Patient Experience",
    description: "Accessible interfaces for all ages and technical abilities",
    icon: "❤️",
  },
  {
    title: "Provider Workflows",
    description: "Tools that fit seamlessly into clinical practice",
    icon: "👨‍⚕️",
  },
];

const integrationMap = [
  { category: "EHR Systems", tools: ["Epic", "Cerner", "Allscripts", "AthenaHealth"] },
  { category: "Standards", tools: ["HL7 FHIR", "DICOM", "ICD-10", "CPT"] },
  { category: "Telehealth", tools: ["Twilio", "Zoom Healthcare", "Doxy.me", "Amwell"] },
  { category: "Payments", tools: ["Stripe Healthcare", "Square Health", "Waystar", "InstaMed"] },
  { category: "Identity", tools: ["ID.me", "Jumio Health", "Clear", "Socure"] },
  { category: "Monitoring", tools: ["Apple HealthKit", "Google Fit", "Fitbit", "Withings"] },
];

const risksAndMitigations = [
  {
    risk: "Data Breaches",
    mitigation: "End-to-end encryption and continuous security monitoring",
  },
  {
    risk: "Regulatory Changes",
    mitigation: "Modular architecture for rapid compliance updates",
  },
  {
    risk: "Integration Complexity",
    mitigation: "Standardized APIs and proven integration patterns",
  },
  {
    risk: "User Adoption",
    mitigation: "Human-centered design and extensive user testing",
  },
];

const caseStudies = [
  {
    title: "Telemedicine Platform",
    description: "HIPAA-compliant video platform serving 500K+ patients",
    metrics: ["10M+ consultations", "99.9% uptime", "4.8/5 patient rating"],
    tags: ["Telehealth", "HIPAA", "Scale"],
  },
  {
    title: "Clinical Trial Management",
    description: "Digital platform for decentralized clinical trials",
    metrics: ["50+ active trials", "100K participants", "FDA 21 CFR Part 11"],
    tags: ["Clinical", "Compliance", "Data"],
  },
  {
    title: "Mental Health App",
    description: "AI-powered therapy companion with provider dashboard",
    metrics: ["1M+ users", "73% engagement rate", "Measurable outcomes"],
    tags: ["Mental Health", "AI", "Mobile"],
  },
];

export default function HealthTechIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "HealthTech Industry Expertise - Drexus",
    description: "Deep expertise in building HIPAA-compliant digital health solutions",
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
          item: { "@id": "https://drexus.com/industries/healthtech", name: "HealthTech" },
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
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="HealthTech Industry Expertise"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "HealthTech" },
              ]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              Building the future of healthcare with secure, compliant, and patient-centered
              technology. From telemedicine to clinical trials, we understand what it takes to
              innovate in healthcare.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600 mb-2">15+</p>
                <p className="text-gray-600">HealthTech Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-pink-600 mb-2">5M+</p>
                <p className="text-gray-600">Patients Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-rose-600 mb-2">100%</p>
                <p className="text-gray-600">HIPAA Compliant</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600 mb-2">0</p>
                <p className="text-gray-600">Data Breaches</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Nuances */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Healthcare Technology Is Different
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lives depend on what we build. That&apos;s why we prioritize security, compliance,
                and reliability in every line of code.
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
              HealthTech Integration Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationMap.map((category, index) => (
                <Card key={index} className="bg-white">
                  <CardBody className="p-6">
                    <h3 className="font-bold text-navy-900 mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <Chip key={idx} size="sm" variant="flat" color="danger">
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
              Risk Management in HealthTech
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
              HealthTech Success Stories
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
                quote="Drexus didn't just build us a telemedicine platform—they understood our clinical workflows, navigated HIPAA complexities, and delivered a solution that doctors actually want to use."
                author={{
                  name: "Dr. Emily Watson",
                  title: "Chief Medical Officer",
                  company: "VirtualCare",
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s build technology that improves patient outcomes and provider experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact/book-a-call"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Discuss Your HealthTech Project
              </Button>
              <Button
                as={Link}
                href="/tools/vendor-diligence-scorecard"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white/10 font-semibold px-12"
              >
                HIPAA Readiness Check
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
