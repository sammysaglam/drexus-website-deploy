"use client";

import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Textarea,
  useDisclosure,
} from "@heroui/react";

import { EmailCaptureModal } from "@/components/tools/EmailCaptureModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { track } from "@/lib/analytics";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface Risk {
  id: string;
  name: string;
  category: string;
  likelihood: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  mitigation: string;
  owner: string;
  status: "open" | "mitigating" | "resolved";
}

const likelihoodLabels = {
  low: "Low (< 30%)",
  medium: "Medium (30-70%)",
  high: "High (> 70%)",
};

const impactLabels = {
  low: "Low (< 1 week delay)",
  medium: "Medium (1-4 weeks)",
  high: "High (> 4 weeks)",
};

const statusLabels = {
  open: "Open",
  mitigating: "Mitigating",
  resolved: "Resolved",
};

const categoryOptions = [
  "Technical",
  "Resources",
  "Timeline",
  "Budget",
  "Vendor/3rd Party",
  "Regulatory/Compliance",
  "Market/Competition",
  "Other",
];

// Use standardized constants
const roles = ROLE_OPTIONS;
const companySizes = COMPANY_SIZE_OPTIONS;
const industries = INDUSTRY_OPTIONS;

export default function RiskLedgerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Risk Ledger", href: "/tools/risk-ledger" },
  ];

  const [projectName, setProjectName] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [risks, setRisks] = useState<Risk[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [role, setRole] = useState("");

  const emailModal = useDisclosure();

  const addRisk = () => {
    const newRisk: Risk = {
      id: Date.now().toString(),
      name: "",
      category: "Technical",
      likelihood: "medium",
      impact: "medium",
      mitigation: "",
      owner: "",
      status: "open",
    };
    setRisks([...risks, newRisk]);
  };

  const updateRisk = (id: string, updates: Partial<Risk>) => {
    setRisks(risks.map((r) => (r.id === id ? { ...r, ...updates } : r)));
  };

  const removeRisk = (id: string) => {
    setRisks(risks.filter((r) => r.id !== id));
  };

  const calculateRiskScore = (likelihood: string, impact: string): number => {
    const scores: Record<string, number> = { low: 1, medium: 2, high: 3 };
    return scores[likelihood] * scores[impact];
  };

  const getRiskLevel = (score: number): { label: string; color: string } => {
    if (score >= 6) return { label: "Critical", color: "text-red-600" };
    if (score >= 4) return { label: "High", color: "text-orange-600" };
    if (score >= 2) return { label: "Medium", color: "text-yellow-600" };
    return { label: "Low", color: "text-green-600" };
  };

  const generateLedger = () => {
    if (!projectName || !projectManager) {
      alert("Please fill in project details");
      return;
    }
    if (risks.length === 0) {
      alert("Please add at least one risk");
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
      location: "/tools/risk-ledger",
      toolName: "Risk Ledger",
      industry: selectedIndustry.value,
      companySize: selectedCompanySize.value,
      role: selectedRole.value,
    });

    setShowResults(true);
  };

  const _generateCSVData = (): string[][] => {
    const headers = [
      "Risk Name",
      "Category",
      "Likelihood",
      "Impact",
      "Risk Score",
      "Risk Level",
      "Mitigation Strategy",
      "Owner",
      "Status",
    ];

    const rows = risks.map((risk) => {
      const score = calculateRiskScore(risk.likelihood, risk.impact);
      const level = getRiskLevel(score);
      return [
        risk.name,
        risk.category,
        likelihoodLabels[risk.likelihood],
        impactLabels[risk.impact],
        score.toString(),
        level.label,
        risk.mitigation,
        risk.owner,
        statusLabels[risk.status],
      ];
    });

    return [
      [`Project Risk Ledger: ${projectName}`],
      [`Project Manager: ${projectManager}`],
      [`Generated: ${new Date().toLocaleDateString()}`],
      [],
      headers,
      ...rows,
    ];
  };

  const _handleDownload = () => {
    // Show email capture modal instead of downloading
    emailModal.onOpen();
  };

  if (showResults) {
    const criticalRisks = risks.filter((r) => calculateRiskScore(r.likelihood, r.impact) >= 6);
    const highRisks = risks.filter((r) => {
      const score = calculateRiskScore(r.likelihood, r.impact);
      return score >= 4 && score < 6;
    });
    const openRisks = risks.filter((r) => r.status === "open");

    return (
      <>
        <PageHeader
          title="Your Risk Ledger is Ready"
          subtitle="Review your project risks and mitigation strategies"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <Card className="mb-8">
              <CardBody className="p-8">
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">
                  {projectName} Risk Analysis
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-gray-700">{risks.length}</div>
                    <div className="text-sm text-gray-600">Total Risks</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-red-700">{criticalRisks.length}</div>
                    <div className="text-sm text-red-600">Critical Risks</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-orange-700">{highRisks.length}</div>
                    <div className="text-sm text-orange-600">High Risks</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-700">{openRisks.length}</div>
                    <div className="text-sm text-blue-600">Open Items</div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table aria-label="Risk ledger table">
                    <TableHeader>
                      <TableColumn>Risk</TableColumn>
                      <TableColumn>Category</TableColumn>
                      <TableColumn>Likelihood</TableColumn>
                      <TableColumn>Impact</TableColumn>
                      <TableColumn>Level</TableColumn>
                      <TableColumn>Owner</TableColumn>
                      <TableColumn>Status</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {risks
                        .sort((a, b) => {
                          const scoreA = calculateRiskScore(a.likelihood, a.impact);
                          const scoreB = calculateRiskScore(b.likelihood, b.impact);
                          return scoreB - scoreA;
                        })
                        .map((risk) => {
                          const score = calculateRiskScore(risk.likelihood, risk.impact);
                          const level = getRiskLevel(score);
                          return (
                            <TableRow key={risk.id}>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{risk.name}</div>
                                  <div className="text-xs text-gray-500">{risk.mitigation}</div>
                                </div>
                              </TableCell>
                              <TableCell>{risk.category}</TableCell>
                              <TableCell>{risk.likelihood}</TableCell>
                              <TableCell>{risk.impact}</TableCell>
                              <TableCell>
                                <span className={`font-semibold ${level.color}`}>
                                  {level.label}
                                </span>
                              </TableCell>
                              <TableCell>{risk.owner}</TableCell>
                              <TableCell>
                                <span
                                  className={`text-sm ${
                                    risk.status === "resolved"
                                      ? "text-green-600"
                                      : risk.status === "mitigating"
                                        ? "text-blue-600"
                                        : "text-gray-600"
                                  }`}
                                >
                                  {statusLabels[risk.status]}
                                </span>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-8 flex gap-4">
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
                    Edit Risks
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h3>Risk Management Next Steps</h3>
              <ol>
                <li>Review critical risks with your team immediately</li>
                <li>Assign clear owners to all open risks</li>
                <li>Schedule weekly risk review meetings</li>
                <li>Update mitigation strategies as you learn more</li>
                <li>Track risk status changes over time</li>
              </ol>
            </div>
          </div>
        </section>

        <EmailCaptureModal
          isOpen={emailModal.isOpen}
          onClose={emailModal.onClose}
          toolName="Risk Ledger"
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Risk Ledger"
        subtitle="Track project risks with likelihood, impact, and mitigation strategies"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <Card className="mb-8">
            <CardBody className="p-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-6">Project Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Project Name"
                  placeholder="e.g., Q1 Platform Migration"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  isRequired
                />

                <Input
                  label="Project Manager"
                  placeholder="Your name"
                  value={projectManager}
                  onChange={(e) => setProjectManager(e.target.value)}
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
                <h2 className="text-xl font-semibold text-navy-900">Project Risks</h2>
                <Button
                  color="primary"
                  variant="flat"
                  size="sm"
                  onPress={addRisk}
                  startContent={<span>+</span>}
                >
                  Add Risk
                </Button>
              </div>

              {risks.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="mb-4">No risks added yet</p>
                  <Button color="primary" onPress={addRisk}>
                    Add Your First Risk
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {risks.map((risk, index) => {
                    const score = calculateRiskScore(risk.likelihood, risk.impact);
                    const level = getRiskLevel(score);

                    return (
                      <Card key={risk.id} className="border">
                        <CardBody className="p-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-medium text-navy-800">
                                Risk #{index + 1}
                              </h3>
                              <span className={`text-sm font-semibold ${level.color}`}>
                                {level.label} Risk
                              </span>
                            </div>
                            <Button
                              size="sm"
                              variant="light"
                              color="danger"
                              onPress={() => removeRisk(risk.id)}
                            >
                              Remove
                            </Button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <Input
                              label="Risk Name"
                              placeholder="e.g., Key vendor dependency"
                              value={risk.name}
                              onChange={(e) => updateRisk(risk.id, { name: e.target.value })}
                              isRequired
                            />

                            <Select
                              label="Category"
                              selectedKeys={[risk.category]}
                              onChange={(e) => updateRisk(risk.id, { category: e.target.value })}
                              isRequired
                              items={categoryOptions.map((cat) => ({ key: cat, label: cat }))}
                            >
                              {(item: { key: string; label: string }) => (
                                <SelectItem className="text-black" key={item.key}>
                                  {item.label}
                                </SelectItem>
                              )}
                            </Select>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <Select
                              label="Likelihood"
                              selectedKeys={[risk.likelihood]}
                              onChange={(e) =>
                                updateRisk(risk.id, {
                                  likelihood: e.target.value as Risk["likelihood"],
                                })
                              }
                              isRequired
                              items={Object.entries(likelihoodLabels).map(([value, label]) => ({
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
                              label="Impact"
                              selectedKeys={[risk.impact]}
                              onChange={(e) =>
                                updateRisk(risk.id, { impact: e.target.value as Risk["impact"] })
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

                            <Input
                              label="Owner"
                              placeholder="Responsible person"
                              value={risk.owner}
                              onChange={(e) => updateRisk(risk.id, { owner: e.target.value })}
                              isRequired
                            />

                            <Select
                              label="Status"
                              selectedKeys={[risk.status]}
                              onChange={(e) =>
                                updateRisk(risk.id, { status: e.target.value as Risk["status"] })
                              }
                              isRequired
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

                          <Textarea
                            label="Mitigation Strategy"
                            placeholder="How will you reduce or eliminate this risk?"
                            value={risk.mitigation}
                            onChange={(e) => updateRisk(risk.id, { mitigation: e.target.value })}
                            isRequired
                            minRows={2}
                          />
                        </CardBody>
                      </Card>
                    );
                  })}
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <Button
                  color="primary"
                  size="lg"
                  onPress={generateLedger}
                  isDisabled={risks.length === 0}
                >
                  Generate Risk Ledger
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}
