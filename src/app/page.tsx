"use client";

import React, { useState } from "react";

import { Button, Link, Card, CardBody, CardHeader, CardFooter, Chip, Input } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { NavMega, FooterMega } from "@/components/layout";
import { ResourceCard, EventCard } from "@/components/ui";

import eventsData from "../../data/events.json";

const trustLogos = [
  { name: "Fortune 500 Company", placeholder: "CLIENT_LOGO_1" },
  { name: "Global Bank", placeholder: "CLIENT_LOGO_2" },
  { name: "Tech Unicorn", placeholder: "CLIENT_LOGO_3" },
  { name: "Healthcare Leader", placeholder: "CLIENT_LOGO_4" },
  { name: "Retail Giant", placeholder: "CLIENT_LOGO_5" },
  { name: "SaaS Platform", placeholder: "CLIENT_LOGO_6" },
];

const testimonials = [
  {
    quote:
      "Drexus delivered our MVP in 5 weeks. Their Friday updates kept our board confident throughout.",
    author: "CTO, Series B SaaS",
  },
  {
    quote: "They fixed our conversion funnel in 2 sprints. Revenue up 34% in 60 days.",
    author: "VP Product, E-commerce Platform",
  },
];

const featuredInsights = [
  {
    title: "The Hidden Cost of Technical Debt in Fast-Growing Startups",
    description:
      "Analysis of 50+ startups reveals the true impact of shortcuts on growth velocity.",
    type: "article" as const,
    link: "/insights/articles/technical-debt-startups",
    date: "Jan 18, 2024",
    readTime: "8 min read",
    tags: ["Technical Strategy", "Growth"],
  },
  {
    title: "Building vs. Buying: The 2024 Decision Framework",
    description: "When to develop in-house versus leveraging external expertise for maximum ROI.",
    type: "article" as const,
    link: "/insights/articles/build-vs-buy-2024",
    date: "Jan 15, 2024",
    readTime: "12 min read",
    tags: ["Strategy", "Operations"],
  },
  {
    title: "AI Integration Playbook for Enterprise Products",
    description: "Practical guide to embedding AI capabilities without disrupting core operations.",
    type: "article" as const,
    link: "/insights/articles/ai-integration-enterprise",
    date: "Jan 12, 2024",
    readTime: "15 min read",
    tags: ["AI", "Enterprise", "Product"],
  },
];

const featuredTools = [
  {
    id: "mvp-scope-builder",
    title: "MVP Scope Builder",
    description:
      "Define your minimum viable product with precision. Get timeline and cost estimates.",
    icon: "🎯",
    link: "/tools/mvp-scope-builder",
  },
  {
    id: "vendor-diligence-scorecard",
    title: "Vendor Diligence Scorecard",
    description: "Evaluate development partners objectively. Compare capabilities and risks.",
    icon: "📊",
    link: "/tools/vendor-diligence-scorecard",
  },
  {
    id: "risk-ledger",
    title: "Risk Ledger",
    description: "Track and mitigate project risks in real-time. Stay ahead of potential issues.",
    icon: "⚡",
    link: "/tools/risk-ledger",
  },
];

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://drexus.com/#organization",
      name: "Drexus",
      url: "https://drexus.com",
      logo: {
        "@type": "ImageObject",
        url: "https://drexus.com/logo.png",
        width: 600,
        height: 60,
      },
      sameAs: [
        "https://linkedin.com/company/drexus",
        "https://twitter.com/drexustech",
        "https://github.com/drexus",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "548 Market St #62802",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94104",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://drexus.com/#website",
      url: "https://drexus.com",
      name: "Drexus",
      description: "Software Development as a Service. Enterprise discipline, startup speed.",
      publisher: {
        "@id": "https://drexus.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://drexus.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function HomePage() {
  const [email, setEmail] = useState("");
  const upcomingEvents = eventsData.events.slice(0, 3);

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <NavMega />

        <main id="main-content">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800">
            {/* Abstract background pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-600/20 via-transparent to-transparent" />

            {/* Animated abstract shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
              <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-6 py-24 lg:py-32 relative">
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl lg:text-6xl font-serif font-bold !text-white mb-6"
                >
                  Software Development as a Service.
                  <br />
                  <span className="text-3xl lg:text-5xl text-blue-100">
                    Enterprise discipline, startup speed.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-xl text-blue-100 mb-8 max-w-2xl"
                >
                  Scale your product and engineering capacity with senior-level expertise. No
                  recruiting delays. No ramp-up time. Just results.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    color="primary"
                    className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8"
                    as={Link}
                    href="/contact/book-a-call"
                  >
                    Book a Call
                  </Button>
                  <Button
                    size="lg"
                    variant="bordered"
                    className="border-white !text-white hover:bg-white/10 font-semibold px-8"
                    as={Link}
                    href="/solutions"
                  >
                    Explore Solutions
                  </Button>
                </motion.div>
              </div>

              {/* Visual accent element */}
              <div className="absolute bottom-0 right-0 w-1/3 h-full pointer-events-none hidden lg:block">
                <svg
                  viewBox="0 0 400 600"
                  className="absolute bottom-0 right-0 text-blue-600/10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,200 Q100,100 200,200 T400,200 L400,600 L0,600 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </section>

          {/* Trust Strip */}
          <section className="bg-gray-50 py-16 border-y border-gray-200">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Client Logos */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-600 uppercase tracking-wider mb-6">
                    Trusted by category leaders
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    {trustLogos.map((logo, index) => (
                      <div
                        key={index}
                        className="h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500"
                      >
                        {logo.placeholder}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="border-l-2 border-blue-600 pl-4">
                      <p className="text-sm text-gray-700 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <footer className="text-xs text-gray-600 mt-2">— {testimonial.author}</footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Three On-Ramps */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-4">
                  Start Where You Are
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Whether you need to launch fast, fix what&apos;s broken, or validate before
                  committing — we have a proven path forward.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* MVP in 6 Weeks */}
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Chip color="primary" variant="flat" size="sm">
                      For Founders
                    </Chip>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <h3 className="text-2xl font-bold text-navy-900">MVP in 6 Weeks</h3>
                    <p className="text-gray-600">
                      Launch your product with a senior team that&apos;s shipped 50+ MVPs. Fixed
                      scope, fixed price, no surprises.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">Full-stack implementation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">
                          Production-ready infrastructure
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">Weekly progress updates</span>
                      </li>
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button
                      as={Link}
                      href="/solutions/mvp-fast"
                      color="primary"
                      variant="flat"
                      className="w-full"
                    >
                      Learn More →
                    </Button>
                  </CardFooter>
                </Card>

                {/* Conversion Fix */}
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Chip color="secondary" variant="flat" size="sm">
                      For Growth Teams
                    </Chip>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <h3 className="text-2xl font-bold text-navy-900">Conversion Fix</h3>
                    <p className="text-gray-600">
                      Identify and fix the bottlenecks killing your funnel. Data-driven improvements
                      with measurable ROI.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">Full funnel analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">A/B testing framework</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">Performance optimization</span>
                      </li>
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button
                      as={Link}
                      href="/solutions/ops-conversion"
                      color="primary"
                      variant="flat"
                      className="w-full"
                    >
                      Learn More →
                    </Button>
                  </CardFooter>
                </Card>

                {/* 2-Week Pilot */}
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <Chip color="success" variant="flat" size="sm">
                      For Enterprises
                    </Chip>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <h3 className="text-2xl font-bold text-navy-900">2-Week Pilot</h3>
                    <p className="text-gray-600">
                      Test our capabilities on your toughest challenge. Low risk, high insight,
                      clear next steps.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">Senior architect review</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">Proof of concept delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">Roadmap & recommendations</span>
                      </li>
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button
                      as={Link}
                      href="/solutions/pilot-2-week"
                      color="primary"
                      variant="flat"
                      className="w-full"
                    >
                      Learn More →
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          {/* Friday Progress Receipts */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-6">
                    Friday Progress Receipts
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Every Friday at 5pm, you get a comprehensive update. No surprises, no excuses,
                    just transparent progress tracking.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">1</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">What we shipped</h3>
                        <p className="text-sm text-gray-600">
                          Completed features, fixes, and improvements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">2</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">What&apos;s in progress</h3>
                        <p className="text-sm text-gray-600">
                          Current sprint work and expected completion
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">3</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">What&apos;s next</h3>
                        <p className="text-sm text-gray-600">
                          Upcoming priorities and dependencies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample Report Card */}
                <div className="relative">
                  <Card className="shadow-xl">
                    <CardHeader className="bg-navy-900 text-white p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm opacity-80">Weekly Progress Report</p>
                          <h3 className="text-xl font-bold">Project Alpha - Week 4</h3>
                        </div>
                        <Chip
                          color="success"
                          variant="flat"
                          className="bg-green-100 text-green-800"
                        >
                          On Track
                        </Chip>
                      </div>
                    </CardHeader>
                    <CardBody className="p-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">✅ Shipped This Week</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• User authentication flow (OAuth + email)</li>
                          <li>• Dashboard analytics integration</li>
                          <li>• Mobile responsive layouts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🚧 In Progress</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Payment processing (75% complete)</li>
                          <li>• Admin panel (50% complete)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">📅 Next Week</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Complete payment integration</li>
                          <li>• Begin QA testing phase</li>
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Sprint Velocity</span>
                          <span className="font-semibold text-green-600">↑ 12% vs last week</span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                    FRI
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Insights */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-2">
                    Featured Insights
                  </h2>
                  <p className="text-gray-600">Strategic perspectives on technology and growth</p>
                </div>
                <Link href="/insights" className="text-blue-600 hover:text-blue-700 font-medium">
                  View all insights →
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Article Cards */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredInsights.map((insight, index) => (
                    <ResourceCard key={index} {...insight} />
                  ))}
                </div>

                {/* Special Report Billboard */}
                <div className="lg:col-span-1">
                  <Card className="h-full bg-gradient-to-br from-navy-900 to-navy-800 text-white">
                    <CardBody className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Chip color="warning" variant="flat" size="sm" className="mb-4">
                          Special Report
                        </Chip>
                        <h3 className="text-xl font-bold mb-3">2024 State of DevOps Excellence</h3>
                        <p className="text-sm text-gray-300 mb-6">
                          Comprehensive analysis of high-performing engineering teams. Based on data
                          from 200+ organizations.
                        </p>
                      </div>
                      <Button
                        as={Link}
                        href="/insights/special-reports/devops-excellence-2024"
                        variant="flat"
                        className="w-full bg-white/10 text-white hover:bg-white/20"
                      >
                        Download Report
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-2">
                    Upcoming Events
                  </h2>
                  <p className="text-gray-600">Join us for insights, networking, and learning</p>
                </div>
                <Link href="/events" className="text-blue-600 hover:text-blue-700 font-medium">
                  View all events →
                </Link>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="relative">
                    <EventCard
                      title={event.title}
                      description={event.description}
                      date={{
                        day: new Date(event.date.start).getDate().toString().padStart(2, "0"),
                        month: new Date(event.date.start)
                          .toLocaleDateString("en-US", { month: "short" })
                          .toUpperCase(),
                        year: new Date(event.date.start).getFullYear().toString(),
                        time: new Date(event.date.start).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                          timeZoneName: "short",
                        }),
                      }}
                      location={{
                        city: event.location.city || "Virtual",
                        venue: event.location.venue,
                        isVirtual: event.location.type === "virtual",
                      }}
                      type={
                        event.type as
                          | "conference"
                          | "webinar"
                          | "workshop"
                          | "summit"
                          | "office-hours"
                          | "roundtable"
                      }
                      link={`/events/${event.slug}`}
                      featured={event.featured}
                      attendees={event.registration?.registered}
                    />
                    <Button
                      size="sm"
                      variant="flat"
                      className="absolute top-6 right-6"
                      startContent={
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      }
                    >
                      Add to Calendar
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools Carousel */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-4">
                  Tools to Accelerate Your Decisions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Free resources to help you plan, evaluate, and execute with confidence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredTools.map((tool) => (
                  <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                    <CardBody className="p-8 text-center">
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">{tool.title}</h3>
                      <p className="text-gray-600 mb-6">{tool.description}</p>
                      <Button
                        as={Link}
                        href={tool.link}
                        color="primary"
                        variant="bordered"
                        className="font-medium"
                      >
                        Launch Tool
                      </Button>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-900 mb-4">
                  Strategic Insights, Weekly
                </h2>
                <p className="text-gray-600 mb-8">
                  Get one actionable insight every Tuesday. No fluff, no sales pitches. Just proven
                  strategies from our work with 100+ companies.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="lg"
                    className="flex-1"
                  />
                  <Button color="primary" size="lg" className="bg-navy-900 font-medium">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  Join 8,000+ technology leaders. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </section>

          {/* Secondary CTA Band */}
          <section className="py-20 bg-navy-900 text-white">
            <div className="container mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                  How Does Your Process Compare?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  See how your development practices stack up against the Drexus Way. Get
                  personalized recommendations in 5 minutes.
                </p>
                <Button
                  as={Link}
                  href="/tools/compare-your-process"
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8"
                >
                  Compare Your Process →
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <FooterMega />
      </div>
    </>
  );
}
