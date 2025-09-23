"use client";

import { Card, CardBody, CardHeader, Button, Chip } from "@heroui/react";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  hours: number;
  price: string;
  pricePerHour: string;
  duration: string;
  popular?: boolean;
  features: string[];
  included: {
    label: string;
    items: string[];
  }[];
  sla: {
    responseTime: string;
    availability: string;
    escalation: string;
  };
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Sprint",
    description: "Perfect for MVPs and focused features",
    hours: 65,
    price: "$19,500",
    pricePerHour: "$300/hour",
    duration: "4-6 weeks",
    features: [
      "Dedicated 2-person team",
      "Daily standups",
      "Weekly progress reports",
      "Direct Slack access",
      "Code ownership transfer",
    ],
    included: [
      {
        label: "Planning & Architecture",
        items: ["Technical discovery", "Architecture design", "Sprint planning"],
      },
      {
        label: "Development",
        items: ["Full-stack implementation", "API development", "Database design"],
      },
      {
        label: "Quality & Delivery",
        items: ["Code reviews", "Testing setup", "Deployment pipeline"],
      },
    ],
    sla: {
      responseTime: "< 4 hours",
      availability: "Business hours",
      escalation: "Next business day",
    },
  },
  {
    id: "growth",
    name: "Build",
    description: "For comprehensive product development",
    hours: 120,
    price: "$34,800",
    pricePerHour: "$290/hour",
    duration: "8-10 weeks",
    popular: true,
    features: [
      "Dedicated 3-person team",
      "Daily standups",
      "Friday progress receipts",
      "Direct Slack access",
      "30-day post-launch support",
      "Knowledge transfer sessions",
    ],
    included: [
      {
        label: "Discovery & Planning",
        items: ["User research", "Technical architecture", "Risk assessment", "Roadmap planning"],
      },
      {
        label: "Development & Design",
        items: [
          "UI/UX design",
          "Full-stack development",
          "Third-party integrations",
          "Performance optimization",
        ],
      },
      {
        label: "Launch & Support",
        items: ["Production deployment", "Monitoring setup", "Team training", "Documentation"],
      },
    ],
    sla: {
      responseTime: "< 2 hours",
      availability: "Extended hours",
      escalation: "Same day",
    },
  },
  {
    id: "scale",
    name: "Transform",
    description: "For platform rebuilds and major initiatives",
    hours: 200,
    price: "$56,000",
    pricePerHour: "$280/hour",
    duration: "12-16 weeks",
    features: [
      "Dedicated 4+ person team",
      "Daily standups",
      "Friday progress receipts",
      "Dedicated Slack channel",
      "60-day post-launch support",
      "Quarterly check-ins",
      "Architecture review board",
    ],
    included: [
      {
        label: "Strategic Planning",
        items: [
          "Current state audit",
          "Future state design",
          "Migration strategy",
          "Risk mitigation plan",
        ],
      },
      {
        label: "Execution",
        items: [
          "Phased development",
          "Legacy system integration",
          "Data migration",
          "Performance engineering",
        ],
      },
      {
        label: "Enablement",
        items: [
          "Team augmentation",
          "Process improvement",
          "Playbook creation",
          "Ongoing advisory",
        ],
      },
    ],
    sla: {
      responseTime: "< 1 hour",
      availability: "24/7 for critical",
      escalation: "Within 4 hours",
    },
  },
];

export default function PricingPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
  ];

  // JSON-LD Product structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Drexus Development Services",
    description: "Expert software development and consulting services",
    brand: {
      "@type": "Brand",
      name: "Drexus",
    },
    offers: pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      price: plan.price.replace("$", "").replace(",", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        .toISOString()
        .split("T")[0],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Transparent, Hour-Based Pricing"
        subtitle="No surprises, no lock-in. Pay for what you need."
        breadcrumbs={breadcrumbs}
      />

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${plan.popular ? "border-2 border-navy-600" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Chip color="primary" variant="solid">
                      Most Popular
                    </Chip>
                  </div>
                )}

                <CardHeader className="p-6 pb-0">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900">{plan.name}</h3>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                </CardHeader>

                <CardBody className="p-6">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-navy-900">{plan.price}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {plan.hours} hours • {plan.pricePerHour}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Typical duration: {plan.duration}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    as={Link}
                    href="/contact"
                    color={plan.popular ? "primary" : "default"}
                    variant={plan.popular ? "solid" : "bordered"}
                    className="w-full"
                  >
                    Get Started
                  </Button>

                  <div className="mt-6 pt-6 border-t space-y-4">
                    {plan.included.map((section, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-navy-800 text-sm mb-2">
                          {section.label}
                        </h4>
                        <ul className="space-y-1">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="text-xs text-gray-600">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold text-navy-800 text-sm mb-2">SLA</h4>
                    <dl className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Response:</dt>
                        <dd className="text-gray-800">{plan.sla.responseTime}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Availability:</dt>
                        <dd className="text-gray-800">{plan.sla.availability}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Escalation:</dt>
                        <dd className="text-gray-800">{plan.sla.escalation}</dd>
                      </div>
                    </dl>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Every Engagement Includes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Friday Progress Receipts</h3>
              <p className="text-sm text-gray-600">
                Weekly summary of work completed, blockers resolved, and next week's plan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Code Ownership</h3>
              <p className="text-sm text-gray-600">
                You own all code, documentation, and IP from day one
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Post-Launch Support</h3>
              <p className="text-sm text-gray-600">
                30-60 days of support included to ensure smooth transition
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Knowledge Transfer</h3>
              <p className="text-sm text-gray-600">
                Comprehensive documentation and training for your team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Common Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-navy-900 mb-2">What if we need more hours?</h3>
              <p className="text-gray-600">
                Additional hours can be added at the same hourly rate. We'll always communicate
                before exceeding the budget.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-900 mb-2">Can we pause the engagement?</h3>
              <p className="text-gray-600">
                Yes, with 1 week notice. Unused hours remain valid for 6 months.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-900 mb-2">Do you offer retainers?</h3>
              <p className="text-gray-600">
                Yes, we offer monthly retainers starting at 20 hours/month for ongoing support and
                development.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy-900 mb-2">What about equity-based pricing?</h3>
              <p className="text-gray-600">
                We occasionally consider equity partnerships for exceptional early-stage startups.
                Let's discuss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your project and find the right engagement model.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-navy-900 font-semibold rounded hover:bg-gray-100 transition-colors"
            >
              Schedule a Call
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-navy-900 transition-colors"
            >
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
