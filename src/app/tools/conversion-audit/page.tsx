"use client";

import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Chip,
  Input,
  Progress,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";

import { EmailCaptureModal } from "@/components/tools/EmailCaptureModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { track } from "@/lib/analytics";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface AuditItem {
  id: string;
  category: string;
  item: string;
  priority: "high" | "medium" | "low";
  impact: string;
  checked: boolean;
}

const auditCategories = [
  {
    name: "Landing Page",
    items: [
      {
        item: "Value proposition clear within 5 seconds",
        priority: "high",
        impact: "20-30% conversion lift",
      },
      {
        item: "Single, prominent CTA above fold",
        priority: "high",
        impact: "15-25% conversion lift",
      },
      {
        item: "Social proof visible (testimonials/logos)",
        priority: "medium",
        impact: "10-15% conversion lift",
      },
      { item: "Mobile-optimized layout", priority: "high", impact: "Prevents 40% drop-off" },
      { item: "Page loads under 3 seconds", priority: "high", impact: "7% loss per second delay" },
    ],
  },
  {
    name: "Forms & Signup",
    items: [
      {
        item: "Form fields minimized (< 5 fields)",
        priority: "high",
        impact: "25% better completion",
      },
      { item: "Clear error messages inline", priority: "medium", impact: "30% fewer abandonments" },
      {
        item: "Progress indicators for multi-step",
        priority: "medium",
        impact: "15-20% completion boost",
      },
      { item: "Social login options available", priority: "low", impact: "20% faster signups" },
      { item: "Trust badges near form", priority: "medium", impact: "11% conversion increase" },
    ],
  },
  {
    name: "Copy & Messaging",
    items: [
      {
        item: "Benefits-focused headlines (not features)",
        priority: "high",
        impact: "Up to 90% improvement",
      },
      {
        item: "Urgency/scarcity used appropriately",
        priority: "low",
        impact: "10-15% conversion boost",
      },
      {
        item: "Microcopy guides users at each step",
        priority: "medium",
        impact: "20% friction reduction",
      },
      { item: "FAQs address top objections", priority: "medium", impact: "15% objection handling" },
      { item: "CTA text is action-oriented", priority: "high", impact: "20-30% click improvement" },
    ],
  },
  {
    name: "Trust & Credibility",
    items: [
      { item: "Security badges visible", priority: "medium", impact: "15% trust increase" },
      { item: "Money-back guarantee prominent", priority: "medium", impact: "20% risk reduction" },
      {
        item: "Customer testimonials with photos",
        priority: "medium",
        impact: "15-20% credibility",
      },
      { item: "Case studies or success metrics", priority: "low", impact: "B2B: 30% influence" },
      { item: "Clear contact information", priority: "high", impact: "25% trust factor" },
    ],
  },
  {
    name: "Checkout & Payment",
    items: [
      { item: "Guest checkout option", priority: "high", impact: "35% less abandonment" },
      { item: "Multiple payment methods", priority: "medium", impact: "15% completion increase" },
      {
        item: "Order summary always visible",
        priority: "medium",
        impact: "20% clarity improvement",
      },
      { item: "Shipping costs shown early", priority: "high", impact: "Prevents 60% of abandons" },
      { item: "Save cart functionality", priority: "low", impact: "10% recovery rate" },
    ],
  },
];

const priorityColors = {
  high: "danger",
  medium: "warning",
  low: "secondary",
} as const;

// Use standardized constants
const roles = ROLE_OPTIONS;
const companySizes = COMPANY_SIZE_OPTIONS;
const industries = INDUSTRY_OPTIONS;

export default function ConversionAuditPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Conversion Audit", href: "/tools/conversion-audit" },
  ];

  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [auditItems, setAuditItems] = useState<AuditItem[]>(() => {
    const items: AuditItem[] = [];
    auditCategories.forEach((category) => {
      category.items.forEach((item) => {
        items.push({
          id: `${category.name}-${item.item}`,
          category: category.name,
          ...item,
          priority: item.priority as "high" | "medium" | "low",
          checked: false,
        });
      });
    });
    return items;
  });
  const [showResults, setShowResults] = useState(false);
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [role, setRole] = useState("");

  const emailModal = useDisclosure();

  const toggleItem = (id: string) => {
    setAuditItems((items) =>
      items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const getScore = () => {
    const checkedItems = auditItems.filter((item) => item.checked);
    return Math.round((checkedItems.length / auditItems.length) * 100);
  };

  const getCategoryScore = (category: string) => {
    const categoryItems = auditItems.filter((item) => item.category === category);
    const checkedItems = categoryItems.filter((item) => item.checked);
    return Math.round((checkedItems.length / categoryItems.length) * 100);
  };

  const getPriorityItems = (priority: string) => {
    return auditItems.filter((item) => item.priority === priority && !item.checked);
  };

  const generateAudit = () => {
    if (!businessName || !websiteUrl) {
      alert("Please fill in business details");
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
      location: "/tools/conversion-audit",
      toolName: "Conversion Audit",
      industry: selectedIndustry.value,
      companySize: selectedCompanySize.value,
      role: selectedRole.value,
    });

    setShowResults(true);
  };

  const _handleDownload = () => {
    // Since this is a results summary, we'll trigger the email modal
    // The actual implementation would generate a PDF or detailed report
    emailModal.onOpen();
  };

  if (showResults) {
    const overallScore = getScore();
    const highPriorityMissing = getPriorityItems("high");
    const mediumPriorityMissing = getPriorityItems("medium");
    const scoreInterpretation =
      overallScore >= 80
        ? {
            label: "Excellent",
            color: "text-green-600",
            message: "Your conversion funnel is well-optimized",
          }
        : overallScore >= 60
          ? {
              label: "Good",
              color: "text-blue-600",
              message: "Solid foundation with room for improvement",
            }
          : overallScore >= 40
            ? {
                label: "Fair",
                color: "text-yellow-600",
                message: "Significant optimization opportunities exist",
              }
            : {
                label: "Needs Work",
                color: "text-red-600",
                message: "Major improvements needed across the funnel",
              };

    return (
      <>
        <PageHeader
          title="Conversion Audit Results"
          subtitle="Your personalized conversion optimization roadmap"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-lg">
            <Card className="mb-8">
              <CardBody className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-navy-900 mb-2">{businessName}</h2>
                  <p className="text-gray-600">{websiteUrl}</p>

                  <div className="mt-6">
                    <div
                      className="text-6xl font-bold mb-2"
                      style={{ color: scoreInterpretation.color.replace("text-", "#") }}
                    >
                      {overallScore}%
                    </div>
                    <div className={`text-xl font-semibold ${scoreInterpretation.color}`}>
                      {scoreInterpretation.label}
                    </div>
                    <p className="text-gray-600 mt-2">{scoreInterpretation.message}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-4">Category Breakdown</h3>
                    <div className="space-y-3">
                      {auditCategories.map((category) => {
                        const score = getCategoryScore(category.name);
                        return (
                          <div key={category.name}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">{category.name}</span>
                              <span className="text-sm text-gray-600">{score}%</span>
                            </div>
                            <Progress
                              value={score}
                              color={score >= 80 ? "success" : score >= 60 ? "primary" : "warning"}
                              size="sm"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {highPriorityMissing.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800 mb-3 flex items-center gap-2">
                        <Chip color="danger" size="sm">
                          High Priority
                        </Chip>
                        Quick Wins
                      </h3>
                      <div className="bg-red-50 rounded-lg p-4">
                        <ul className="space-y-3">
                          {highPriorityMissing.slice(0, 5).map((item) => (
                            <li key={item.id} className="flex items-start">
                              <span className="text-red-600 mr-2 mt-1">!</span>
                              <div>
                                <div className="font-medium text-navy-800">{item.item}</div>
                                <div className="text-sm text-gray-600">
                                  Potential impact: {item.impact}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {mediumPriorityMissing.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800 mb-3 flex items-center gap-2">
                        <Chip color="warning" size="sm">
                          Medium Priority
                        </Chip>
                        Growth Opportunities
                      </h3>
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <ul className="space-y-3">
                          {mediumPriorityMissing.slice(0, 3).map((item) => (
                            <li key={item.id} className="flex items-start">
                              <span className="text-yellow-600 mr-2 mt-1">→</span>
                              <div>
                                <div className="font-medium text-navy-800">{item.item}</div>
                                <div className="text-sm text-gray-600">
                                  Potential impact: {item.impact}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      Implementation Roadmap
                    </h3>
                    <ol className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-semibold text-navy-600 mr-2">Week 1:</span>
                        <span>
                          Fix high-priority items (estimated {highPriorityMissing.length * 10}%
                          conversion lift)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold text-navy-600 mr-2">Week 2-3:</span>
                        <span>A/B test copy and form optimizations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold text-navy-600 mr-2">Week 4:</span>
                        <span>Implement trust signals and social proof</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold text-navy-600 mr-2">Ongoing:</span>
                        <span>Monitor analytics and iterate based on data</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  {/* <Button color="primary" size="lg" onPress={handleDownload}>
                    Get Detailed Report
                  </Button> */}
                  <Button variant="bordered" size="lg" onPress={() => setShowResults(false)}>
                    Review Checklist
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h3>What&apos;s Next?</h3>
              <p>
                Based on your audit score of {overallScore}%, we recommend focusing on the
                high-priority items first. Each optimization can be tested independently to measure
                actual impact on your conversion rate.
              </p>
              <p>
                Remember: Small improvements compound. A series of 5% gains can double your
                conversion rate over time.
              </p>
            </div>
          </div>
        </section>

        <EmailCaptureModal
          isOpen={emailModal.isOpen}
          onClose={emailModal.onClose}
          toolName="Conversion Audit"
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Conversion Audit"
        subtitle="Audit your conversion funnel with prioritized recommendations"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <Card className="mb-8">
            <CardBody className="p-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-6">Business Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Business Name"
                  placeholder="e.g., Acme SaaS"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  isRequired
                />

                <Input
                  label="Website URL"
                  placeholder="e.g., acme.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
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
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-navy-900 mb-2">Conversion Checklist</h2>
                <p className="text-gray-600">
                  Check off the items you currently have implemented. We&apos;ll prioritize
                  what&apos;s missing.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Chip size="sm" color={priorityColors.high}>
                    High Priority
                  </Chip>
                  <Chip size="sm" color={priorityColors.medium}>
                    Medium Priority
                  </Chip>
                  <Chip size="sm" color={priorityColors.low}>
                    Low Priority
                  </Chip>
                </div>
              </div>

              <div className="space-y-8">
                {auditCategories.map((category) => (
                  <div key={category.name}>
                    <h3 className="text-lg font-semibold text-navy-800 mb-4">{category.name}</h3>
                    <div className="space-y-3">
                      {auditItems
                        .filter((item) => item.category === category.name)
                        .map((item) => (
                          <Card key={item.id} className="border">
                            <CardBody className="p-4">
                              <div
                                className="flex items-start gap-4 cursor-pointer hover:bg-gray-50 rounded-md p-2 -m-2"
                                onClick={() => toggleItem(item.id)}
                              >
                                <Checkbox
                                  isSelected={item.checked}
                                  onValueChange={() => toggleItem(item.id)}
                                  size="lg"
                                  onClick={(e) => e.stopPropagation()}
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className="font-medium text-navy-800 break-words">
                                      {item.item}
                                    </span>
                                    <Chip
                                      size="sm"
                                      color={priorityColors[item.priority]}
                                      variant="flat"
                                      className="flex-shrink-0"
                                    >
                                      {item.priority}
                                    </Chip>
                                  </div>
                                  <p className="text-sm text-gray-600 break-words">
                                    Impact: {item.impact}
                                  </p>
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button color="primary" size="lg" onPress={generateAudit}>
                  Generate Audit Results
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}
