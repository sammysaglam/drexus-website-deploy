"use client";

import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Slider,
  useDisclosure,
} from "@heroui/react";

import { EmailCaptureModal } from "@/components/tools/EmailCaptureModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { track } from "@/lib/analytics";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface Criterion {
  category: string;
  name: string;
  weight: number;
  score: number;
  notes: string;
}

const defaultCriteria: Criterion[] = [
  { category: "Technical", name: "API Quality & Documentation", weight: 15, score: 0, notes: "" },
  { category: "Technical", name: "Performance & Scalability", weight: 15, score: 0, notes: "" },
  { category: "Technical", name: "Security & Compliance", weight: 10, score: 0, notes: "" },
  {
    category: "Reliability",
    name: "Uptime History (Last 12 months)",
    weight: 20,
    score: 0,
    notes: "",
  },
  {
    category: "Reliability",
    name: "Disaster Recovery & Redundancy",
    weight: 10,
    score: 0,
    notes: "",
  },
  { category: "Support", name: "Response Times & SLAs", weight: 10, score: 0, notes: "" },
  { category: "Support", name: "Support Quality & Expertise", weight: 10, score: 0, notes: "" },
  { category: "Commercial", name: "Pricing Model & Flexibility", weight: 5, score: 0, notes: "" },
  {
    category: "Company",
    name: "Financial Stability & Track Record",
    weight: 5,
    score: 0,
    notes: "",
  },
];

const scoreLabels: Record<number, string> = {
  0: "Not Evaluated",
  1: "Poor",
  2: "Below Average",
  3: "Average",
  4: "Good",
  5: "Excellent",
};

const scoreColors: Record<number, string> = {
  0: "text-gray-500",
  1: "text-red-600",
  2: "text-orange-600",
  3: "text-yellow-600",
  4: "text-green-600",
  5: "text-emerald-600",
};

// Use standardized constants
const roles = ROLE_OPTIONS;
const companySizes = COMPANY_SIZE_OPTIONS;
const industries = INDUSTRY_OPTIONS;

export default function VendorDiligenceScorecardPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Vendor Diligence Scorecard", href: "/tools/vendor-diligence-scorecard" },
  ];

  const [vendorName, setVendorName] = useState("");
  const [evaluatorName, setEvaluatorName] = useState("");
  const [vendorCategory, setVendorCategory] = useState("");
  const [criteria, setCriteria] = useState<Criterion[]>(defaultCriteria);
  const [showResults, setShowResults] = useState(false);
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [role, setRole] = useState("");

  const emailModal = useDisclosure();

  const updateCriterion = (index: number, updates: Partial<Criterion>) => {
    const newCriteria = [...criteria];
    newCriteria[index] = { ...newCriteria[index], ...updates };
    setCriteria(newCriteria);
  };

  const calculateTotalScore = (): number => {
    const totalWeight = criteria.reduce((sum, c) => sum + c.weight, 0);
    const weightedScore = criteria.reduce((sum, c) => sum + c.score * c.weight, 0);
    return totalWeight > 0 ? Math.round((weightedScore / totalWeight) * 20) : 0;
  };

  const getCategoryScore = (category: string): number => {
    const categoryItems = criteria.filter((c) => c.category === category);
    const totalWeight = categoryItems.reduce((sum, c) => sum + c.weight, 0);
    const weightedScore = categoryItems.reduce((sum, c) => sum + c.score * c.weight, 0);
    return totalWeight > 0 ? (weightedScore / totalWeight) * 20 : 0;
  };

  const getScoreInterpretation = (
    score: number
  ): { label: string; color: string; recommendation: string } => {
    if (score >= 80)
      return {
        label: "Excellent",
        color: "text-emerald-600",
        recommendation: "Strong vendor - proceed with confidence",
      };
    if (score >= 70)
      return {
        label: "Good",
        color: "text-green-600",
        recommendation: "Solid choice with minor concerns to address",
      };
    if (score >= 60)
      return {
        label: "Acceptable",
        color: "text-yellow-600",
        recommendation: "Proceed with caution - negotiate improvements",
      };
    if (score >= 50)
      return {
        label: "Below Average",
        color: "text-orange-600",
        recommendation: "Significant concerns - consider alternatives",
      };
    return {
      label: "Poor",
      color: "text-red-600",
      recommendation: "High risk - strongly consider other options",
    };
  };

  const generateReport = () => {
    if (!vendorName || !evaluatorName || !vendorCategory) {
      alert("Please fill in all vendor details");
      return;
    }

    const unevaluated = criteria.filter((c) => c.score === 0);
    if (unevaluated.length > 0) {
      const proceed = confirm(`${unevaluated.length} criteria are not evaluated. Continue anyway?`);
      if (!proceed) return;
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
      location: "/tools/vendor-diligence-scorecard",
      toolName: "Vendor Diligence Scorecard",
      industry: selectedIndustry.value,
      companySize: selectedCompanySize.value,
      role: selectedRole.value,
    });

    setShowResults(true);
  };

  const _generatePDFContent = () => {
    const totalScore = calculateTotalScore();
    const interpretation = getScoreInterpretation(totalScore);
    const categories = ["Technical", "Reliability", "Support", "Commercial", "Company"];

    const html = `
      <div class="header">
        <h1>Vendor Diligence Scorecard</h1>
        <p><strong>Vendor:</strong> ${vendorName}</p>
        <p><strong>Category:</strong> ${vendorCategory}</p>
        <p><strong>Evaluator:</strong> ${evaluatorName}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>

      <h2>Overall Score: ${totalScore}/100</h2>
      <p style="font-size: 18px; color: ${interpretation.color};">
        <strong>${interpretation.label}</strong> - ${interpretation.recommendation}
      </p>

      <h2>Category Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Score</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          ${categories
            .map((cat) => {
              const score = getCategoryScore(cat);
              const weight = criteria
                .filter((c) => c.category === cat)
                .reduce((sum, c) => sum + c.weight, 0);
              return `
                <tr>
                  <td>${cat}</td>
                  <td>${score.toFixed(1)}/20</td>
                  <td>${weight}%</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>

      <h2>Detailed Evaluation</h2>
      ${categories
        .map((cat) => {
          const items = criteria.filter((c) => c.category === cat);
          return `
            <h3>${cat}</h3>
            <table>
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th>Score</th>
                  <th>Weight</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                ${items
                  .map(
                    (item) => `
                      <tr>
                        <td>${item.name}</td>
                        <td>${item.score}/5 (${scoreLabels[item.score]})</td>
                        <td>${item.weight}%</td>
                        <td>${item.notes || "No notes"}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          `;
        })
        .join("")}

      <h2>Key Strengths</h2>
      <ul>
        ${criteria
          .filter((c) => c.score >= 4)
          .map((c) => `<li>${c.name}: ${c.notes || scoreLabels[c.score]}</li>`)
          .join("")}
      </ul>

      <h2>Areas of Concern</h2>
      <ul>
        ${criteria
          .filter((c) => c.score > 0 && c.score <= 2)
          .map((c) => `<li>${c.name}: ${c.notes || scoreLabels[c.score]}</li>`)
          .join("")}
      </ul>

      <h2>Recommendation</h2>
      <p>${interpretation.recommendation}</p>
    `;

    return html;
  };

  const _handleDownload = () => {
    // Show email capture modal instead of downloading
    emailModal.onOpen();
  };

  if (showResults) {
    const totalScore = calculateTotalScore();
    const interpretation = getScoreInterpretation(totalScore);
    const categories = ["Technical", "Reliability", "Support", "Commercial", "Company"];

    return (
      <>
        <PageHeader
          title="Vendor Diligence Results"
          subtitle="Review your vendor evaluation and get access to more tools"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-lg">
            <Card className="mb-8">
              <CardBody className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-2">{vendorName}</h2>
                  <p className="text-gray-600">{vendorCategory}</p>

                  <div className="mt-6">
                    <div
                      className="text-6xl font-bold mb-2"
                      style={{ color: interpretation.color.replace("text-", "#") }}
                    >
                      {totalScore}
                    </div>
                    <div className="text-lg text-gray-500">out of 100</div>
                    <div className={`text-xl font-semibold mt-2 ${interpretation.color}`}>
                      {interpretation.label}
                    </div>
                    <p className="text-gray-600 mt-2 max-w-md mx-auto">
                      {interpretation.recommendation}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {categories.map((category) => {
                    const score = getCategoryScore(category);
                    const color =
                      score >= 16
                        ? "bg-green-50 text-green-700"
                        : score >= 12
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-red-50 text-red-700";

                    return (
                      <div key={category} className={`rounded-lg p-4 ${color}`}>
                        <div className="font-semibold">{category}</div>
                        <div className="text-2xl font-bold">{score.toFixed(1)}/20</div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">Key Strengths</h3>
                    <ul className="space-y-2">
                      {criteria
                        .filter((c) => c.score >= 4)
                        .map((c, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>
                              <strong>{c.name}:</strong> {c.notes || scoreLabels[c.score]}
                            </span>
                          </li>
                        ))}
                    </ul>
                    {criteria.filter((c) => c.score >= 4).length === 0 && (
                      <p className="text-gray-500 italic">No standout strengths identified</p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">Areas of Concern</h3>
                    <ul className="space-y-2">
                      {criteria
                        .filter((c) => c.score > 0 && c.score <= 2)
                        .map((c, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-600 mr-2">⚠</span>
                            <span>
                              <strong>{c.name}:</strong> {c.notes || scoreLabels[c.score]}
                            </span>
                          </li>
                        ))}
                    </ul>
                    {criteria.filter((c) => c.score > 0 && c.score <= 2).length === 0 && (
                      <p className="text-gray-500 italic">No major concerns identified</p>
                    )}
                  </div>
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
                    Edit Evaluation
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h3>Next Steps</h3>
              <ol>
                <li>Share this report with your procurement team</li>
                <li>Schedule deep-dive sessions on areas of concern</li>
                <li>Request references for similar implementations</li>
                <li>Negotiate improvements on weak areas before signing</li>
                <li>Document any vendor commitments in the contract</li>
              </ol>
            </div>
          </div>
        </section>

        <EmailCaptureModal
          isOpen={emailModal.isOpen}
          onClose={emailModal.onClose}
          toolName="Vendor Scorecard"
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Vendor Diligence Scorecard"
        subtitle="Evaluate vendors with weighted criteria and generate a comprehensive score report"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <Card className="mb-8">
            <CardBody className="p-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-6">Vendor Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  label="Vendor Name"
                  placeholder="e.g., Acme Cloud Services"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  isRequired
                />

                <Input
                  label="Vendor Category"
                  placeholder="e.g., Infrastructure Provider"
                  value={vendorCategory}
                  onChange={(e) => setVendorCategory(e.target.value)}
                  isRequired
                />

                <Input
                  label="Evaluator Name"
                  placeholder="Your name"
                  value={evaluatorName}
                  onChange={(e) => setEvaluatorName(e.target.value)}
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
              <h2 className="text-xl font-semibold text-navy-900 mb-2">Evaluation Criteria</h2>
              <p className="text-gray-600 mb-6">
                Score each criterion from 1 (Poor) to 5 (Excellent). Weights determine relative
                importance.
              </p>

              <div className="space-y-8">
                {["Technical", "Reliability", "Support", "Commercial", "Company"].map(
                  (category) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-navy-800 mb-4">{category}</h3>
                      <div className="space-y-6">
                        {criteria
                          .map((criterion, index) => ({ criterion, index }))
                          .filter(({ criterion }) => criterion.category === category)
                          .map(({ criterion, index }) => (
                            <Card key={index} className="border">
                              <CardBody className="p-4">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                  <div className="md:col-span-5">
                                    <div className="font-medium text-navy-800">
                                      {criterion.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      Weight: {criterion.weight}%
                                    </div>
                                  </div>

                                  <div className="md:col-span-4">
                                    <Slider
                                      label="Score"
                                      step={1}
                                      minValue={0}
                                      maxValue={5}
                                      value={criterion.score}
                                      onChange={(value) =>
                                        updateCriterion(index, { score: value as number })
                                      }
                                      className="max-w-md"
                                      getValue={(value) => {
                                        const score = Array.isArray(value) ? value[0] : value;
                                        return `${score} - ${scoreLabels[score]}`;
                                      }}
                                      classNames={{
                                        value:
                                          criterion.score === 0
                                            ? scoreColors[0]
                                            : criterion.score <= 2
                                              ? scoreColors[1]
                                              : criterion.score === 3
                                                ? scoreColors[3]
                                                : scoreColors[4],
                                      }}
                                    />
                                  </div>

                                  <div className="md:col-span-3">
                                    <Input
                                      placeholder="Notes (optional)"
                                      value={criterion.notes}
                                      onChange={(e) =>
                                        updateCriterion(index, { notes: e.target.value })
                                      }
                                      size="sm"
                                    />
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="mt-8 flex justify-center">
                <Button color="primary" size="lg" onPress={generateReport}>
                  Generate Scorecard
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}
