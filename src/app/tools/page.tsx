import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";

const tools = [
  {
    id: "mvp-scope-builder",
    title: "MVP Scope Builder",
    description:
      "Generate a concise scope document with features, cut-lines, and acceptance criteria",
    icon: "📋",
    output: "Markdown file",
    timeToComplete: "5-10 min",
    href: "/tools/mvp-scope-builder",
  },
  {
    id: "vendor-diligence-scorecard",
    title: "Vendor Diligence Scorecard",
    description:
      "Evaluate vendors with weighted criteria and generate a comprehensive score report",
    icon: "✓",
    output: "PDF report",
    timeToComplete: "10-15 min",
    href: "/tools/vendor-diligence-scorecard",
  },
  {
    id: "risk-ledger",
    title: "Risk Ledger",
    description: "Track project risks with likelihood, impact, and mitigation strategies",
    icon: "⚠️",
    output: "CSV export",
    timeToComplete: "5-10 min",
    href: "/tools/risk-ledger",
  },
  {
    id: "experiment-planner",
    title: "Experiment Planner",
    description: "Plan your 4-experiments-per-month with structured hypothesis fields",
    icon: "🧪",
    output: "Markdown/PDF",
    timeToComplete: "10 min",
    href: "/tools/experiment-planner",
  },
  {
    id: "conversion-audit",
    title: "Conversion Audit",
    description: "Audit your conversion funnel with prioritized recommendations",
    icon: "📈",
    output: "Results summary",
    timeToComplete: "15 min",
    href: "/tools/conversion-audit",
  },
  {
    id: "latency-budget-calculator",
    title: "Latency Budget Calculator",
    description: "Calculate P95/P99 latency budgets based on your traffic profile",
    icon: "⏱️",
    output: "Budget breakdown",
    timeToComplete: "5 min",
    href: "/tools/latency-budget-calculator",
  },
  {
    id: "roi-calculator",
    title: "ROI Calculator",
    description: "Estimate payback period based on costs vs. throughput improvements",
    icon: "💰",
    output: "Payback analysis",
    timeToComplete: "5 min",
    href: "/tools/roi-calculator",
  },
  {
    id: "ai-marketing-plan",
    title: "AI Marketing Plan Generator",
    description: "Generate a structured marketing plan with AI assistance",
    icon: "🤖",
    output: "Shareable plan",
    timeToComplete: "10 min",
    href: "/tools/ai-marketing-plan",
  },
  {
    id: "project-feedback-loop",
    title: "Project Feedback Loop",
    description:
      "Design a continuous feedback process with collection, analysis, implementation, and follow-up phases",
    icon: "🔄",
    output: "Interactive loop plan",
    timeToComplete: "10-15 min",
    href: "/tools/project-feedback-loop",
  },
];

export default function ToolsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
  ];

  return (
    <>
      <PageHeader
        title="Free Tools & Calculators"
        subtitle="Practical tools to accelerate your planning and decision-making"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="prose prose-lg max-w-3xl mx-auto mb-12 text-center">
            <p className="text-gray-600">
              No email required. Get instant results and downloadable artifacts. These tools encode
              our practical experience into interactive formats you can use immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card
                key={tool.id}
                className="hover:shadow-lg transition-shadow duration-200"
                isPressable
                as={Link}
                href={tool.href}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label={tool.title}>
                        {tool.icon}
                      </span>
                      <h3 className="text-lg font-semibold text-navy-900">{tool.title}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="py-2">
                  <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      {tool.output}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {tool.timeToComplete}
                    </span>
                  </div>
                </CardBody>
                <CardFooter className="pt-2">
                  <span className="text-sm font-medium text-navy-600 hover:text-navy-700">
                    Use this tool →
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">Why We Built These Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              After hundreds of engagements, we've identified patterns in what works. These tools
              encode that experience into practical formats. Use them to shortcut common planning
              tasks and avoid predictable mistakes.
            </p>
            <p className="text-sm text-gray-500">
              All tools are free. Optional email capture only appears after you've seen the value.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
