import { Card, CardBody } from "@heroui/card";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";

const sdlcPhases = [
  {
    phase: "Design",
    icon: "📐",
    practices: [
      "Threat modeling for all new features",
      "Security architecture review",
      "Privacy by design principles",
      "Risk assessment documentation",
    ],
  },
  {
    phase: "Development",
    icon: "💻",
    practices: [
      "Secure coding guidelines",
      "Mandatory security training",
      "Pre-commit security hooks",
      "Dependency vulnerability scanning",
    ],
  },
  {
    phase: "Testing",
    icon: "🧪",
    practices: [
      "Automated security testing",
      "SAST/DAST integration",
      "Penetration testing",
      "Security regression tests",
    ],
  },
  {
    phase: "Deployment",
    icon: "🚀",
    practices: [
      "Infrastructure as code security",
      "Secrets management",
      "Zero-trust networking",
      "Compliance validation",
    ],
  },
  {
    phase: "Monitoring",
    icon: "📊",
    practices: [
      "Real-time threat detection",
      "Security incident alerting",
      "Log aggregation and analysis",
      "Vulnerability management",
    ],
  },
];

const securityMeasures = [
  {
    category: "Access Control",
    measures: [
      "Multi-factor authentication (MFA) required",
      "Principle of least privilege",
      "Regular access reviews",
      "Session management",
    ],
  },
  {
    category: "Data Protection",
    measures: [
      "Encryption at rest (AES-256)",
      "Encryption in transit (TLS 1.3)",
      "Key management (HSM)",
      "Data loss prevention",
    ],
  },
  {
    category: "Network Security",
    measures: [
      "Web application firewall",
      "DDoS protection",
      "Network segmentation",
      "VPN for remote access",
    ],
  },
  {
    category: "Application Security",
    measures: ["Input validation", "Output encoding", "Authentication tokens", "Rate limiting"],
  },
];

export default function SecurityPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Security", href: "/security" },
  ];

  return (
    <>
      <PageHeader
        title="Security at Drexus"
        subtitle="How we protect your data and intellectual property"
        breadcrumbs={breadcrumbs}
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Security isn't an afterthought at Drexus—it's woven into everything we do. From our
              development practices to our infrastructure, we maintain the highest standards to
              protect your data and ensure the integrity of our systems.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900">0</div>
                <p className="text-gray-600">Security breaches</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900">100%</div>
                <p className="text-gray-600">Audit compliance</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-900">24/7</div>
                <p className="text-gray-600">Security monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Development Lifecycle */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Secure Development Lifecycle (SDLC)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdlcPhases.map((phase, index) => (
              <Card key={index}>
                <CardBody className="p-6">
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.practices.map((practice, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm text-gray-700">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Technical Security Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{category.category}</h3>
                <Card>
                  <CardBody className="p-6">
                    <ul className="space-y-3">
                      {category.measures.map((measure, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-navy-600 mr-3">•</span>
                          <span className="text-gray-700">{measure}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penetration Testing */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Penetration Testing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">Quarterly</div>
                <p className="text-blue-100">External penetration tests</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">Monthly</div>
                <p className="text-blue-100">Automated vulnerability scans</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">Continuous</div>
                <p className="text-blue-100">Bug bounty program</p>
              </div>
            </div>
            <p className="text-center text-blue-100">
              We work with leading security firms to continuously test and improve our security
              posture. All findings are addressed within SLA timelines based on severity.
            </p>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Incident Response Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Detection",
                  time: "< 5 minutes",
                  desc: "Automated alerts trigger immediate investigation",
                },
                {
                  step: 2,
                  title: "Assessment",
                  time: "< 30 minutes",
                  desc: "Security team evaluates severity and scope",
                },
                {
                  step: 3,
                  title: "Containment",
                  time: "< 1 hour",
                  desc: "Isolate affected systems to prevent spread",
                },
                {
                  step: 4,
                  title: "Remediation",
                  time: "< 4 hours",
                  desc: "Fix vulnerabilities and restore normal operations",
                },
                {
                  step: 5,
                  title: "Communication",
                  time: "< 4 hours",
                  desc: "Notify affected parties per compliance requirements",
                },
                {
                  step: 6,
                  title: "Review",
                  time: "< 48 hours",
                  desc: "Post-mortem analysis and process improvements",
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-navy-600">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-navy-900">{step.title}</h3>
                      <span className="text-sm text-gray-500">{step.time}</span>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Compliance & Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "ISO 27001", status: "Certified", year: "2023" },
              { name: "SOC 2 Type II", status: "In Progress", year: "2024" },
              { name: "GDPR", status: "Compliant", year: "2022" },
              { name: "CCPA", status: "Compliant", year: "2022" },
            ].map((cert, index) => (
              <Card key={index}>
                <CardBody className="p-6 text-center">
                  <h3 className="font-semibold text-navy-900">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{cert.status}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Resources */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Security Resources</h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn more about our security practices and policies.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/security/whitepaper"
              className="inline-block px-8 py-3 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
            >
              Security Whitepaper
            </Link>
            <Link
              href="/procurement"
              className="inline-block px-8 py-3 border-2 border-navy-600 text-navy-600 font-semibold rounded hover:bg-navy-50 transition-colors"
            >
              Procurement Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
