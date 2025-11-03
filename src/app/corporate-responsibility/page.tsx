import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";

const commitments = [
  {
    area: "Privacy & Data Protection",
    icon: "🔒",
    description: "We treat client and user data with the utmost respect and security.",
    actions: [
      "GDPR and CCPA compliant practices",
      "Data minimization principles",
      "Regular security audits",
      "Transparent data handling policies",
    ],
  },
  {
    area: "Environmental Sustainability",
    icon: "🌱",
    description: "Minimizing our environmental impact through conscious choices.",
    actions: [
      "Carbon-neutral operations by 2025",
      "Remote-first to reduce commuting",
      "Paperless office environment",
      "Sustainable vendor selection",
    ],
  },
  {
    area: "Community Investment",
    icon: "🤝",
    description: "Giving back to the communities where we live and work.",
    actions: [
      "1% of revenue to tech education",
      "Pro bono work for nonprofits",
      "Mentorship programs for students",
      "Open source contributions",
    ],
  },
  {
    area: "Ethical Business Practices",
    icon: "⚖️",
    description: "Operating with integrity in all our business dealings.",
    actions: [
      "Fair and transparent pricing",
      "Responsible AI development",
      "Anti-corruption policies",
      "Ethical supply chain",
    ],
  },
];

const initiatives = [
  {
    title: "Drexus Academy",
    description: "Free coding bootcamp for underrepresented groups in tech",
    impact: "150+ graduates placed in tech roles",
    status: "Ongoing",
  },
  {
    title: "Green Code Initiative",
    description: "Optimizing code for energy efficiency across all projects",
    impact: "30% reduction in compute resources",
    status: "Active",
  },
  {
    title: "Tech for Good",
    description: "Pro bono development for social impact organizations",
    impact: "10 nonprofits served annually",
    status: "Ongoing",
  },
];

export default function CorporateResponsibilityPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Corporate Responsibility", href: "/corporate-responsibility" },
  ];

  return (
    <>
      <PageHeader
        title="Corporate Responsibility"
        subtitle="Building a sustainable and ethical future for technology"
        breadcrumbs={breadcrumbs}
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              At Drexus, we believe that with great technological capability comes great
              responsibility. Our commitment extends beyond building excellent software to ensuring
              we're building a better world for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Our Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <Card key={index}>
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{commitment.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">
                        {commitment.area}
                      </h3>
                      <p className="text-gray-600 mb-4">{commitment.description}</p>
                      <ul className="space-y-2">
                        {commitment.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-sm text-gray-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-navy-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600 mb-3">{initiative.description}</p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm font-semibold text-navy-700">{initiative.impact}</p>
                  <p className="text-xs text-gray-600 mt-1">Status: {initiative.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Report */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">2023 Impact Report</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">€500K</div>
                <p className="text-blue-100">Invested in community programs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                <p className="text-blue-100">Reduction in carbon footprint</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">1,000+</div>
                <p className="text-blue-100">Students mentored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in building a more responsible tech industry.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded hover:bg-navy-50 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
