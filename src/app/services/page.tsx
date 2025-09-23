"use client";

import React from "react";

import { Button, Card, CardBody, CardFooter, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Script from "next/script";

import { FooterMega, NavMega } from "@/components/layout";
import { PageHeader } from "@/components/ui";

const services = [
  {
    slug: "discovery-scope",
    title: "Discovery & Scope",
    description: "Define your product vision and technical roadmap with clarity",
    category: "Strategy",
    duration: "1-2 weeks",
    icon: "🔍",
  },
  {
    slug: "product-strategy",
    title: "Product Strategy",
    description: "Transform ideas into actionable product plans and features",
    category: "Strategy",
    duration: "2-4 weeks",
    icon: "🎯",
  },
  {
    slug: "ux-ui",
    title: "UX/UI Design",
    description: "Create intuitive, beautiful interfaces that users love",
    category: "Design",
    duration: "3-6 weeks",
    icon: "🎨",
  },
  {
    slug: "frontend-react",
    title: "React Frontend",
    description: "Build blazing-fast, accessible React applications",
    category: "Development",
    duration: "4-8 weeks",
    icon: "⚛️",
  },
  {
    slug: "backend-node",
    title: "Node.js Backend",
    description: "Scalable, secure APIs and backend infrastructure",
    category: "Development",
    duration: "4-8 weeks",
    icon: "🔧",
  },
  {
    slug: "mobile-react-native",
    title: "React Native Mobile",
    description: "Cross-platform mobile apps that feel truly native",
    category: "Development",
    duration: "6-12 weeks",
    icon: "📱",
  },
  {
    slug: "devops-sre",
    title: "DevOps & SRE",
    description: "Automate deployments and ensure 99.99% uptime",
    category: "Infrastructure",
    duration: "2-4 weeks",
    icon: "🚀",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    description: "Turn data into insights with modern analytics stacks",
    category: "Data",
    duration: "3-6 weeks",
    icon: "📊",
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    description: "SOC2, HIPAA, PCI compliance and security audits",
    category: "Security",
    duration: "4-8 weeks",
    icon: "🔒",
  },
  {
    slug: "experimentation-growth",
    title: "Experimentation & Growth",
    description: "A/B testing and growth engineering for scale",
    category: "Growth",
    duration: "Ongoing",
    icon: "🚀",
  },
  {
    slug: "marketing-ops-hubspot",
    title: "Marketing Ops & HubSpot",
    description: "Marketing automation and CRM optimization",
    category: "Marketing",
    duration: "2-4 weeks",
    icon: "📧",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description: "Paid acquisition that actually converts",
    category: "Marketing",
    duration: "Ongoing",
    icon: "📈",
  },
  {
    slug: "content-brand-motion",
    title: "Content, Brand & Motion",
    description: "Brand identity, content strategy, and motion design",
    category: "Creative",
    duration: "4-8 weeks",
    icon: "✨",
  },
  {
    slug: "support-maintenance",
    title: "Support & Maintenance",
    description: "Keep your systems running smoothly 24/7",
    category: "Support",
    duration: "Ongoing",
    icon: "🛠️",
  },
];

const categories = [
  { name: "All", count: services.length },
  { name: "Strategy", count: services.filter((s) => s.category === "Strategy").length },
  { name: "Design", count: services.filter((s) => s.category === "Design").length },
  { name: "Development", count: services.filter((s) => s.category === "Development").length },
  { name: "Infrastructure", count: services.filter((s) => s.category === "Infrastructure").length },
  { name: "Data", count: services.filter((s) => s.category === "Data").length },
  { name: "Security", count: services.filter((s) => s.category === "Security").length },
  { name: "Growth", count: services.filter((s) => s.category === "Growth").length },
  { name: "Marketing", count: services.filter((s) => s.category === "Marketing").length },
  { name: "Creative", count: services.filter((s) => s.category === "Creative").length },
  { name: "Support", count: services.filter((s) => s.category === "Support").length },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredServices =
    selectedCategory === "All" ? services : services.filter((s) => s.category === selectedCategory);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Drexus Services",
    description: "Complete range of software development and digital transformation services",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Drexus",
        },
        url: `https://drexus.com/services/${service.slug}`,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="json-ld-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavMega />

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 py-16 max-w-screen-xl">
            <PageHeader
              title="Our Services"
              breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
              className="text-white [&_a]:text-blue-300 [&_a:hover]:text-blue-200"
            />
            <p className="text-xl text-blue-100 max-w-3xl mt-4">
              From strategy to execution, we offer comprehensive services to transform your digital
              presence. Every engagement starts with understanding your unique challenges.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Chip
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`cursor-pointer ${
                    selectedCategory === category.name
                      ? "bg-navy-900 text-white"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  variant={selectedCategory === category.name ? "solid" : "bordered"}
                >
                  {category.name} ({category.count})
                </Chip>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardBody className="p-8">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <Chip size="sm" variant="flat" color="primary" className="mb-3">
                        {service.category}
                      </Chip>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Typical duration: {service.duration}
                      </div>
                    </CardBody>
                    <CardFooter className="px-8 pb-8">
                      <Button
                        as={Link}
                        href={`/services/${service.slug}`}
                        color="primary"
                        variant="flat"
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              How We Work With You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardBody className="p-8 text-center">
                  <div className="text-4xl mb-4">⏱️</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Sprint-Based</h3>
                  <p className="text-gray-600 mb-4">
                    Fixed-duration sprints with clear deliverables. Perfect for defined projects
                    with specific outcomes.
                  </p>
                  <p className="text-2xl font-bold text-blue-600">6-12 weeks</p>
                  <p className="text-sm text-gray-500">Most common</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="p-8 text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Dedicated Team</h3>
                  <p className="text-gray-600 mb-4">
                    Full-time engineers embedded with your team. Ideal for ongoing development and
                    maintenance.
                  </p>
                  <p className="text-2xl font-bold text-green-600">$100-150/hour</p>
                  <p className="text-sm text-gray-500">Flexible commitment</p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="p-8 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Outcome-Based</h3>
                  <p className="text-gray-600 mb-4">
                    We commit to specific business outcomes. Best for transformation projects with
                    clear goals.
                  </p>
                  <p className="text-2xl font-bold text-purple-600">Custom pricing</p>
                  <p className="text-sm text-gray-500">Shared risk/reward</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="container mx-auto px-6 max-w-screen-xl text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s start with a conversation about your challenges and goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact/book-a-call"
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-12"
              >
                Book a Discovery Call
              </Button>
              <Button
                as={Link}
                href="/solutions/pilot-2-week"
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white/10 font-semibold px-12"
              >
                Try a 2-Week Pilot
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterMega />
    </div>
  );
}
