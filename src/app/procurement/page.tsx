"use client";

import { Card, CardBody, Button, Accordion, AccordionItem } from "@heroui/react";
import Link from "next/link";

import { useBookingModal } from "@/components/ui";
import { PageHeader } from "@/components/ui/PageHeader";

interface SecurityItem {
  category: string;
  items: Array<{
    requirement: string;
    status: "compliant" | "in-progress" | "n/a";
    details: string;
  }>;
}

const securityChecklist: SecurityItem[] = [
  {
    category: "Data Protection",
    items: [
      {
        requirement: "Encryption at rest",
        status: "compliant",
        details: "AES-256 encryption for all stored data",
      },
      {
        requirement: "Encryption in transit",
        status: "compliant",
        details: "TLS 1.3 for all API communications",
      },
      {
        requirement: "Data residency controls",
        status: "compliant",
        details: "Client-specified region deployment available",
      },
      {
        requirement: "Right to deletion",
        status: "compliant",
        details: "Complete data purge within 30 days of request",
      },
    ],
  },
  {
    category: "Access Control",
    items: [
      {
        requirement: "Multi-factor authentication",
        status: "compliant",
        details: "Mandatory 2FA for all team members",
      },
      {
        requirement: "Role-based access control",
        status: "compliant",
        details: "Principle of least privilege enforced",
      },
      {
        requirement: "Access logs and audit trails",
        status: "compliant",
        details: "90-day retention of all access logs",
      },
      {
        requirement: "Background checks",
        status: "compliant",
        details: "All team members undergo verification",
      },
    ],
  },
  {
    category: "Development Security",
    items: [
      {
        requirement: "Secure SDLC",
        status: "compliant",
        details: "Security integrated at every phase",
      },
      {
        requirement: "Code reviews",
        status: "compliant",
        details: "Mandatory peer review for all changes",
      },
      {
        requirement: "Dependency scanning",
        status: "compliant",
        details: "Automated vulnerability scanning",
      },
      {
        requirement: "Security testing",
        status: "compliant",
        details: "SAST/DAST in CI/CD pipeline",
      },
    ],
  },
  {
    category: "Compliance",
    items: [
      {
        requirement: "SOC 2 Type II",
        status: "in-progress",
        details: "Audit scheduled Q2 2024",
      },
      {
        requirement: "GDPR compliance",
        status: "compliant",
        details: "Full compliance with EU regulations",
      },
      {
        requirement: "CCPA compliance",
        status: "compliant",
        details: "California privacy rights supported",
      },
      {
        requirement: "HIPAA capability",
        status: "compliant",
        details: "BAA available for healthcare clients",
      },
    ],
  },
];

const policies = [
  {
    title: "Code Ownership Policy",
    content: `All code, documentation, and intellectual property created during our engagement belongs to the client from day one. We maintain no rights to your proprietary information or custom code.

Key points:
• Immediate transfer of all work products
• No license-back requirements
• Clear IP assignment in all contracts
• Open-source contributions clearly marked`,
  },
  {
    title: "Data Handling Policy",
    content: `We follow strict data minimization principles and handle client data with maximum security.

Our commitments:
• Access only data necessary for project completion
• No data retention beyond project timeline
• Encrypted storage and transmission
• Regular security training for all team members
• Incident response plan with 4-hour notification`,
  },
  {
    title: "Confidentiality & NDA",
    content: `We sign mutual NDAs before any detailed discussions and maintain strict confidentiality throughout and after our engagement.

Coverage includes:
• All business information and strategies
• Technical architectures and code
• Customer lists and pricing
• Proprietary processes and methods
• Perpetual confidentiality obligations`,
  },
  {
    title: "Insurance & Liability",
    content: `We maintain comprehensive insurance coverage to protect our clients.

Current coverage:
• Professional Liability: $5M per occurrence
• General Liability: $2M per occurrence
• Cyber Liability: $3M per occurrence
• Workers Compensation: As required by law
• Certificates available upon request`,
  },
];

export default function ProcurementPage() {
  const { openModal } = useBookingModal();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Procurement", href: "/procurement" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "compliant":
        return "text-green-600";
      case "in-progress":
        return "text-yellow-600";
      case "n/a":
        return "text-gray-400";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "compliant":
        return "✓";
      case "in-progress":
        return "◐";
      case "n/a":
        return "—";
      default:
        return "○";
    }
  };

  return (
    <>
      <PageHeader
        title="Security & Procurement"
        subtitle="Everything your procurement team needs to evaluate us"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Security Checklist */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Security Checklist</h2>

                <div className="space-y-6">
                  {securityChecklist.map((section, index) => (
                    <Card key={index}>
                      <CardBody className="p-6">
                        <h3 className="text-lg font-semibold text-navy-800 mb-4">
                          {section.category}
                        </h3>

                        <div className="space-y-3">
                          {section.items.map((item, idx) => (
                            <div key={idx} className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-gray-800">{item.requirement}</p>
                                <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                              </div>
                              <div
                                className={`flex items-center gap-2 ml-4 ${getStatusColor(item.status)}`}
                              >
                                <span className="text-lg">{getStatusIcon(item.status)}</span>
                                <span className="text-sm capitalize">
                                  {item.status.replace("-", " ")}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Key Policies</h2>

                <Accordion>
                  {policies.map((policy, index) => (
                    <AccordionItem
                      key={index}
                      aria-label={policy.title}
                      title={policy.title}
                      className="mb-2"
                    >
                      <div className="pb-4 text-gray-700 whitespace-pre-line">{policy.content}</div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Certifications & Audits</h2>

                <Card>
                  <CardBody className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-navy-800 mb-3">Current</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>ISO 27001:2013 (Information Security)</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>GDPR Compliant</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>CCPA Compliant</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-navy-800 mb-3">In Progress</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-yellow-600 mr-2">◐</span>
                            <span>SOC 2 Type II (Q2 2024)</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-yellow-600 mr-2">◐</span>
                            <span>ISO 9001:2015 (Q3 2024)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book a Call */}
              <Card className="sticky top-4">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">
                    Schedule a Procurement Call
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Book a consultation with our team to discuss your procurement requirements,
                    security questions, and get personalized answers to your evaluation process.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-navy-900">Free Consultation</h4>
                        <p className="text-gray-600 text-sm">
                          No cost, no obligation - just expert procurement guidance
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-navy-900">30-45 Minutes</h4>
                        <p className="text-gray-600 text-sm">
                          Focused discussion on your specific requirements
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <h4 className="font-medium text-navy-900">Expert Team</h4>
                        <p className="text-gray-600 text-sm">
                          Meet with our security and procurement specialists
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onPress={openModal}
                    size="lg"
                    className="w-full px-8 py-4 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
                  >
                    Book Procurement Call
                  </Button>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium text-navy-800 mb-3">Need Documents Instead?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      We can provide specific documentation or answer detailed security questions
                      during our call.
                    </p>
                    <Button as={Link} href="/contact" variant="bordered" className="w-full">
                      Contact Procurement Team
                    </Button>
                  </div>
                </CardBody>
              </Card>

              {/* Quick Evaluation */}
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Quick Evaluation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Use our vendor scorecard tool to evaluate us against your requirements.
                  </p>
                  <Button
                    as={Link}
                    href="/tools/vendor-diligence-scorecard"
                    variant="bordered"
                    className="w-full"
                  >
                    Evaluate Drexus
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Procurement Teams Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardBody className="p-6 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="font-semibold text-navy-900 mb-2">Fortune 500 Ready</h3>
                <p className="text-sm text-gray-600">
                  Successfully passed procurement reviews at 15+ enterprise companies
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-navy-900 mb-2">Security First</h3>
                <p className="text-sm text-gray-600">
                  Zero security incidents in 8 years of operation
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-semibold text-navy-900 mb-2">Transparent Process</h3>
                <p className="text-sm text-gray-600">
                  Clear contracts, no hidden terms, flexible engagement models
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
