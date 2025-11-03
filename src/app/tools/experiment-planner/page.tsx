"use client";

import React, { useState, useRef } from "react";

import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@heroui/react";

import { EmailCaptureModal } from "@/components/tools/EmailCaptureModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { track } from "@/lib/analytics";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface Experiment {
  id: string;
  name: string;
  hypothesis: string;
  metric: string;
  successCriteria: string;
  audience: string;
  duration: string;
  effort: "small" | "medium" | "large";
  impact: "low" | "medium" | "high";
  status: "planned" | "running" | "complete";
}

const effortLabels = {
  small: "Small (< 1 week)",
  medium: "Medium (1-2 weeks)",
  large: "Large (> 2 weeks)",
};

const impactLabels = {
  low: "Low (< 5% improvement)",
  medium: "Medium (5-15% improvement)",
  high: "High (> 15% improvement)",
};

const statusLabels = {
  planned: "Planned",
  running: "Running",
  complete: "Complete",
};

// Use standardized constants
const roles = ROLE_OPTIONS;
const companySizes = COMPANY_SIZE_OPTIONS;
const industries = INDUSTRY_OPTIONS;

export default function ExperimentPlannerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Experiment Planner", href: "/tools/experiment-planner" },
  ];

  const [teamName, setTeamName] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [showResults, setShowResults] = useState(false);
  const experimentIdCounter = useRef(0);
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [role, setRole] = useState("");

  const emailModal = useDisclosure();

  const formatMonthYear = (monthYearValue: string) => {
    if (!monthYearValue) return "";
    const [year, month] = monthYearValue.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const addExperiment = () => {
    if (experiments.length >= 4) {
      alert("Stick to 4 experiments per month for focus!");
      return;
    }

    const newExperiment: Experiment = {
      id: `experiment-${experimentIdCounter.current++}`,
      name: "",
      hypothesis: "",
      metric: "",
      successCriteria: "",
      audience: "",
      duration: "",
      effort: "medium",
      impact: "medium",
      status: "planned",
    };
    setExperiments([...experiments, newExperiment]);
  };

  const updateExperiment = (id: string, updates: Partial<Experiment>) => {
    setExperiments(experiments.map((e) => (e.id === id ? { ...e, ...updates } : e)));
  };

  const removeExperiment = (id: string) => {
    setExperiments(experiments.filter((e) => e.id !== id));
  };

  const calculateICEScore = (impact: string, confidence: number, effort: string): number => {
    const impactScores: Record<string, number> = { low: 1, medium: 5, high: 10 };
    const effortScores: Record<string, number> = { small: 3, medium: 2, large: 1 };
    const impactValue = impactScores[impact] || 5;
    const effortValue = effortScores[effort] || 2;
    return (impactValue * confidence * effortValue) / 10;
  };

  const generatePlan = () => {
    if (!teamName || !monthYear) {
      alert("Please fill in team details");
      return;
    }
    if (experiments.length === 0) {
      alert("Please add at least one experiment");
      return;
    }

    // Find the descriptive values for analytics
    const selectedRole = roles.find((r) => r.key === role);
    const selectedCompanySize = companySizes.find((s) => s.key === companySize);
    const selectedIndustry = industries.find((i) => i.key === industry);

    // Ensure all required values are present
    if (!selectedRole || !selectedCompanySize || !selectedIndustry) {
      console.error("Missing required field data");
      return;
    }

    // Track the generate button click with analytics data
    track("Executed Marketing Tool", {
      location: "/tools/experiment-planner",
      toolName: "Experiment Planner",
      industry: selectedIndustry.value,
      companySize: selectedCompanySize.value,
      role: selectedRole.value,
    });

    setShowResults(true);
  };

  const _generateMarkdown = () => {
    const markdown = `# ${formatMonthYear(monthYear)} Experiment Plan
**Team:** ${teamName}
**Generated:** ${new Date().toLocaleDateString()}

## Executive Summary

This month we're running ${experiments.length} experiments focused on improving key metrics through systematic testing.

## Experiments

${experiments
  .map(
    (exp, index) => `### Experiment ${index + 1}: ${exp.name}

**Hypothesis:** ${exp.hypothesis}

**Key Details:**
- **Primary Metric:** ${exp.metric}
- **Success Criteria:** ${exp.successCriteria}
- **Target Audience:** ${exp.audience}
- **Duration:** ${exp.duration}
- **Effort:** ${effortLabels[exp.effort]}
- **Expected Impact:** ${impactLabels[exp.impact]}
- **Status:** ${statusLabels[exp.status]}

**ICE Score:** ${calculateICEScore(exp.impact, 7, exp.effort).toFixed(1)} / 10

---
`
  )
  .join("\n")}

## Experiment Calendar

| Week | Experiment | Status | Owner |
|------|------------|--------|-------|
| Week 1 | ${experiments[0]?.name || "TBD"} | Setup & Launch | TBD |
| Week 2 | ${experiments[1]?.name || "TBD"} | Setup & Launch | TBD |
| Week 3 | ${experiments[2]?.name || "TBD"} | Monitor & Iterate | TBD |
| Week 4 | ${experiments[3]?.name || "TBD"} | Analyze & Report | TBD |

## Success Metrics

- Run all ${experiments.length} planned experiments
- Achieve statistical significance on ${Math.ceil(experiments.length * 0.75)} experiments
- Document learnings from all experiments
- Implement winning variations

## Resources Needed

- Engineering: ${experiments.filter((e) => e.effort !== "small").length} experiments need dev support
- Design: Visual changes needed for user-facing experiments
- Analytics: Tracking setup and analysis support
- Product: Hypothesis validation and success criteria

## Next Steps

1. **Week 1:** Finalize experiment designs and success criteria
2. **Week 2:** Set up tracking and randomization
3. **Week 3:** Launch experiments in sequence
4. **Week 4:** Monitor results and prepare reports

---
*Generated by Drexus Experiment Planner*
`;

    return markdown;
  };

  const _generatePDFContent = () => {
    const html = `
      <div class="header">
        <h1>${formatMonthYear(monthYear)} Experiment Plan</h1>
        <p><strong>Team:</strong> ${teamName}</p>
        <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
      </div>

      <h2>Planned Experiments (${experiments.length}/4)</h2>

      ${experiments
        .map(
          (exp, index) => `
          <div style="margin-bottom: 30px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
            <h3>Experiment ${index + 1}: ${exp.name}</h3>
            <p><strong>Hypothesis:</strong> ${exp.hypothesis}</p>

            <table style="margin: 10px 0;">
              <tr>
                <td style="padding-right: 20px;"><strong>Metric:</strong></td>
                <td>${exp.metric}</td>
              </tr>
              <tr>
                <td style="padding-right: 20px;"><strong>Success:</strong></td>
                <td>${exp.successCriteria}</td>
              </tr>
              <tr>
                <td style="padding-right: 20px;"><strong>Audience:</strong></td>
                <td>${exp.audience}</td>
              </tr>
              <tr>
                <td style="padding-right: 20px;"><strong>Duration:</strong></td>
                <td>${exp.duration}</td>
              </tr>
              <tr>
                <td style="padding-right: 20px;"><strong>Effort:</strong></td>
                <td>${effortLabels[exp.effort]}</td>
              </tr>
              <tr>
                <td style="padding-right: 20px;"><strong>Impact:</strong></td>
                <td>${impactLabels[exp.impact]}</td>
              </tr>
              <tr>
                <td style="padding-right: 20px;"><strong>ICE Score:</strong></td>
                <td>${calculateICEScore(exp.impact, 7, exp.effort).toFixed(1)} / 10</td>
              </tr>
            </table>
          </div>
        `
        )
        .join("")}

      <h2>Implementation Timeline</h2>
      <p>Follow the 4-experiments-per-month framework for systematic learning.</p>
    `;

    return html;
  };

  const _handleDownload = () => {
    // Show email capture modal instead of downloading
    emailModal.onOpen();
  };

  if (showResults) {
    const totalICEScore = experiments.reduce(
      (sum, exp) => sum + calculateICEScore(exp.impact, 7, exp.effort),
      0
    );
    const avgICEScore = totalICEScore / experiments.length;

    return (
      <>
        <PageHeader
          title="Your Experiment Plan is Ready"
          subtitle="Review your monthly experiment roadmap"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-lg">
            <Card className="mb-8">
              <CardBody className="p-8">
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">
                  {formatMonthYear(monthYear)} Experiments - {teamName}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-700">{experiments.length}/4</div>
                    <div className="text-sm text-blue-600">Experiments Planned</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-700">
                      {avgICEScore.toFixed(1)}
                    </div>
                    <div className="text-sm text-green-600">Avg ICE Score</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-purple-700">
                      {experiments.filter((e) => e.impact === "high").length}
                    </div>
                    <div className="text-sm text-purple-600">High Impact</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {experiments.map((exp, index) => {
                    const iceScore = calculateICEScore(exp.impact, 7, exp.effort);
                    return (
                      <Card key={exp.id} className="border">
                        <CardBody className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-navy-800">
                                #{index + 1}: {exp.name}
                              </h3>
                              <p className="text-gray-600 mt-1">{exp.hypothesis}</p>
                              <div className="flex items-center gap-4 mt-3 text-sm">
                                <span className="text-gray-500">
                                  <strong>Metric:</strong> {exp.metric}
                                </span>
                                <span className="text-gray-500">
                                  <strong>Duration:</strong> {exp.duration}
                                </span>
                                <span
                                  className={`font-semibold ${
                                    iceScore >= 7
                                      ? "text-green-600"
                                      : iceScore >= 5
                                        ? "text-yellow-600"
                                        : "text-red-600"
                                  }`}
                                >
                                  ICE: {iceScore.toFixed(1)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    );
                  })}
                </div>

                <div className="mt-8">
                  {/* <Button
                    color="primary"
                    size="lg"
                    onPress={handleDownload}
                    startContent={
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    }
                  >
                    Get Your Results
                  </Button> */}

                  <Button variant="bordered" size="lg" onPress={() => setShowResults(false)}>
                    Edit Experiments
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h3>How to Execute This Plan</h3>
              <ol>
                <li>Week 1: Design and set up tracking for all experiments</li>
                <li>Week 2: Launch experiments in sequence (not all at once)</li>
                <li>Week 3: Monitor results daily, make minor adjustments</li>
                <li>Week 4: Analyze results and prepare recommendations</li>
              </ol>

              <p>
                Remember: The goal is learning, not just winning. Document everything, including
                failed experiments—they often teach us the most.
              </p>
            </div>
          </div>
        </section>

        <EmailCaptureModal
          isOpen={emailModal.isOpen}
          onClose={emailModal.onClose}
          toolName="Experiment Plan"
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Experiment Planner"
        subtitle="Plan your 4-experiments-per-month with structured hypothesis fields"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <Card className="mb-8">
            <CardBody className="p-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-6">Planning Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Team Name"
                  placeholder="e.g., Growth Team"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  isRequired
                />

                <Input
                  label="Month & Year"
                  type="month"
                  placeholder="2024-04"
                  value={monthYear}
                  onChange={(e) => setMonthYear(e.target.value)}
                  isRequired
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Select
                  isRequired
                  label="Industry"
                  className="text-black"
                  placeholder="Select your industry"
                  selectedKeys={industry ? [industry] : []}
                  onChange={(e) => setIndustry(e.target.value)}
                  items={industries.map((industry) => ({
                    key: industry.key,
                    label: industry.label,
                  }))}
                >
                  {(item: { key: string; label: string }) => (
                    <SelectItem className="text-black" key={item.key}>
                      {item.label}
                    </SelectItem>
                  )}
                </Select>

                <Select
                  isRequired
                  label="Company Size"
                  className="text-black"
                  placeholder="Select company size"
                  selectedKeys={companySize ? [companySize] : []}
                  onChange={(e) => setCompanySize(e.target.value)}
                  items={companySizes.map((size) => ({ key: size.key, label: size.label }))}
                >
                  {(item: { key: string; label: string }) => (
                    <SelectItem className="text-black" key={item.key}>
                      {item.label}
                    </SelectItem>
                  )}
                </Select>
              </div>

              <div className="mt-4">
                <Select
                  isRequired
                  label="Your Role"
                  className="text-black"
                  placeholder="Select your role"
                  selectedKeys={role ? [role] : []}
                  onChange={(e) => setRole(e.target.value)}
                  items={roles.map((role) => ({ key: role.key, label: role.label }))}
                >
                  {(item: { key: string; label: string }) => (
                    <SelectItem className="text-black" key={item.key}>
                      {item.label}
                    </SelectItem>
                  )}
                </Select>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-navy-900">Monthly Experiments</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Add up to 4 experiments. Focus beats volume.
                  </p>
                </div>
                <Button
                  color="primary"
                  variant="flat"
                  size="sm"
                  onPress={addExperiment}
                  startContent={<span>+</span>}
                  isDisabled={experiments.length >= 4}
                >
                  Add Experiment
                </Button>
              </div>

              {experiments.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="mb-4">No experiments planned yet</p>
                  <Button color="primary" onPress={addExperiment}>
                    Add Your First Experiment
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {experiments.map((experiment, index) => (
                    <Card key={experiment.id} className="border">
                      <CardBody className="p-4">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-medium text-navy-800">
                            Experiment #{index + 1}
                            {index === 0 && " (Week 1)"}
                            {index === 1 && " (Week 2)"}
                            {index === 2 && " (Week 3)"}
                            {index === 3 && " (Week 4)"}
                          </h3>
                          <Button
                            size="sm"
                            variant="light"
                            color="danger"
                            onPress={() => removeExperiment(experiment.id)}
                          >
                            Remove
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <Input
                            label="Experiment Name"
                            placeholder="e.g., Simplified Onboarding Flow"
                            value={experiment.name}
                            onChange={(e) =>
                              updateExperiment(experiment.id, { name: e.target.value })
                            }
                            isRequired
                          />

                          <Textarea
                            label="Hypothesis"
                            placeholder="If we [change], then [metric] will [increase/decrease] because [reasoning]"
                            value={experiment.hypothesis}
                            onChange={(e) =>
                              updateExperiment(experiment.id, { hypothesis: e.target.value })
                            }
                            isRequired
                            minRows={2}
                            description="Use the if-then-because format"
                          />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                              label="Primary Metric"
                              placeholder="e.g., Trial-to-paid conversion"
                              value={experiment.metric}
                              onChange={(e) =>
                                updateExperiment(experiment.id, { metric: e.target.value })
                              }
                              isRequired
                            />

                            <Input
                              label="Success Criteria"
                              placeholder="e.g., 10% increase in conversion"
                              value={experiment.successCriteria}
                              onChange={(e) =>
                                updateExperiment(experiment.id, { successCriteria: e.target.value })
                              }
                              isRequired
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                              label="Target Audience"
                              placeholder="e.g., New users in first 7 days"
                              value={experiment.audience}
                              onChange={(e) =>
                                updateExperiment(experiment.id, { audience: e.target.value })
                              }
                              isRequired
                            />

                            <Input
                              label="Duration"
                              placeholder="e.g., 2 weeks"
                              value={experiment.duration}
                              onChange={(e) =>
                                updateExperiment(experiment.id, { duration: e.target.value })
                              }
                              isRequired
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Select
                              label="Effort"
                              selectedKeys={[experiment.effort]}
                              onChange={(e) =>
                                updateExperiment(experiment.id, {
                                  effort: e.target.value as Experiment["effort"],
                                })
                              }
                              isRequired
                              items={Object.entries(effortLabels).map(([value, label]) => ({
                                key: value,
                                label,
                              }))}
                            >
                              {(item: { key: string; label: string }) => (
                                <SelectItem className="text-black" key={item.key}>
                                  {item.label}
                                </SelectItem>
                              )}
                            </Select>

                            <Select
                              label="Expected Impact"
                              selectedKeys={[experiment.impact]}
                              onChange={(e) =>
                                updateExperiment(experiment.id, {
                                  impact: e.target.value as Experiment["impact"],
                                })
                              }
                              isRequired
                              items={Object.entries(impactLabels).map(([value, label]) => ({
                                key: value,
                                label,
                              }))}
                            >
                              {(item: { key: string; label: string }) => (
                                <SelectItem className="text-black" key={item.key}>
                                  {item.label}
                                </SelectItem>
                              )}
                            </Select>

                            <Select
                              label="Status"
                              selectedKeys={[experiment.status]}
                              onChange={(e) =>
                                updateExperiment(experiment.id, {
                                  status: e.target.value as Experiment["status"],
                                })
                              }
                              items={Object.entries(statusLabels).map(([value, label]) => ({
                                key: value,
                                label,
                              }))}
                            >
                              {(item: { key: string; label: string }) => (
                                <SelectItem className="text-black" key={item.key}>
                                  {item.label}
                                </SelectItem>
                              )}
                            </Select>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <Button
                  color="primary"
                  size="lg"
                  onPress={generatePlan}
                  isDisabled={experiments.length === 0}
                >
                  Generate Experiment Plan
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}
