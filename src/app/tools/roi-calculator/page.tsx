"use client";

import React, { useState } from "react";

import { Button, Card, CardBody, Input, Select, SelectItem, useDisclosure } from "@heroui/react";

import { EmailCaptureModal } from "@/components/tools/EmailCaptureModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { track } from "@/lib/analytics";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface ROIInputs {
  // Current State
  currentMonthlyRevenue: number;
  currentConversionRate: number;
  currentAverageOrderValue: number;
  currentMonthlyTraffic: number;
  currentDevVelocity: number; // features per month
  currentTimeToMarket: number; // days

  // Investment
  implementationCost: number;
  monthlyOperatingCost: number;
  implementationTime: number; // months

  // Expected Improvements
  conversionImprovement: number; // percentage
  aovImprovement: number; // percentage
  trafficImprovement: number; // percentage
  velocityImprovement: number; // percentage
  timeToMarketReduction: number; // percentage
}

const improvementCategories = [
  { value: "conversion", label: "Conversion Optimization", typicalRange: "10-30%" },
  { value: "infrastructure", label: "Infrastructure Upgrade", typicalRange: "20-50% velocity" },
  { value: "automation", label: "Process Automation", typicalRange: "30-60% time savings" },
  { value: "platform", label: "Platform Migration", typicalRange: "15-40% overall" },
  { value: "custom", label: "Custom Project", typicalRange: "Varies" },
];

// Use standardized constants
const roles = ROLE_OPTIONS;
const companySizes = COMPANY_SIZE_OPTIONS;
const industries = INDUSTRY_OPTIONS;

export default function ROICalculatorPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "ROI Calculator", href: "/tools/roi-calculator" },
  ];

  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("conversion");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [role, setRole] = useState("");
  const [inputs, setInputs] = useState<ROIInputs>({
    currentMonthlyRevenue: 100000,
    currentConversionRate: 2.5,
    currentAverageOrderValue: 200,
    currentMonthlyTraffic: 20000,
    currentDevVelocity: 4,
    currentTimeToMarket: 30,
    implementationCost: 50000,
    monthlyOperatingCost: 5000,
    implementationTime: 3,
    conversionImprovement: 20,
    aovImprovement: 10,
    trafficImprovement: 0,
    velocityImprovement: 50,
    timeToMarketReduction: 40,
  });
  const [showResults, setShowResults] = useState(false);

  const emailModal = useDisclosure();

  const updateInput = (field: keyof ROIInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs({ ...inputs, [field]: numValue });
  };

  const calculateROI = () => {
    const {
      currentMonthlyRevenue,
      currentConversionRate,
      currentAverageOrderValue,
      currentMonthlyTraffic,
      implementationCost,
      monthlyOperatingCost,
      implementationTime,
      conversionImprovement,
      aovImprovement,
      trafficImprovement,
    } = inputs;

    // Calculate new metrics
    const newConversionRate = currentConversionRate * (1 + conversionImprovement / 100);
    const newAOV = currentAverageOrderValue * (1 + aovImprovement / 100);
    const newTraffic = currentMonthlyTraffic * (1 + trafficImprovement / 100);

    // Calculate revenue impact
    const newMonthlyOrders = (newTraffic * newConversionRate) / 100;
    const newMonthlyRevenue = newMonthlyOrders * newAOV;
    const monthlyRevenueIncrease = newMonthlyRevenue - currentMonthlyRevenue;

    // Calculate payback and ROI
    const totalInvestment = implementationCost + monthlyOperatingCost * implementationTime;
    const monthlyProfit = monthlyRevenueIncrease - monthlyOperatingCost;
    const paybackMonths = totalInvestment / monthlyProfit;
    const firstYearProfit = monthlyProfit * (12 - implementationTime) - implementationCost;
    const firstYearROI = (firstYearProfit / totalInvestment) * 100;
    const threeYearProfit = monthlyProfit * 36 - totalInvestment;
    const threeYearROI = (threeYearProfit / totalInvestment) * 100;

    return {
      newMonthlyRevenue,
      monthlyRevenueIncrease,
      monthlyProfit,
      paybackMonths,
      firstYearROI,
      threeYearROI,
      totalInvestment,
      breakEvenMonth: Math.ceil(paybackMonths),
    };
  };

  const generateReport = () => {
    if (!projectName) {
      alert("Please enter a project name");
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
      location: "/tools/roi-calculator",
      toolName: "ROI Calculator",
      industry: selectedIndustry.value,
      companySize: selectedCompanySize.value,
      role: selectedRole.value,
    });

    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const _handleDownload = () => {
    // Show email capture modal
    emailModal.onOpen();
  };

  if (showResults) {
    const roi = calculateROI();
    const isPositiveROI = roi.firstYearROI > 0;
    const roiColor = isPositiveROI ? "text-green-600" : "text-red-600";

    return (
      <>
        <PageHeader
          title="ROI Analysis Complete"
          subtitle="Your investment payback and return projections"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-lg">
            <Card className="mb-8">
              <CardBody className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-navy-900 mb-2">{projectName}</h2>
                  <p className="text-gray-600">
                    {improvementCategories.find((c) => c.value === projectType)?.label}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="border">
                    <CardBody className="p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">Payback Period</div>
                      <div className="text-3xl font-bold text-navy-800">
                        {roi.paybackMonths.toFixed(1)}
                      </div>
                      <div className="text-sm text-gray-500">months</div>
                    </CardBody>
                  </Card>

                  <Card className="border">
                    <CardBody className="p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">Monthly Profit</div>
                      <div className="text-3xl font-bold text-green-600">
                        {formatCurrency(roi.monthlyProfit)}
                      </div>
                      <div className="text-sm text-gray-500">after costs</div>
                    </CardBody>
                  </Card>

                  <Card className="border">
                    <CardBody className="p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">Year 1 ROI</div>
                      <div className={`text-3xl font-bold ${roiColor}`}>
                        {formatPercentage(roi.firstYearROI)}
                      </div>
                      <div className="text-sm text-gray-500">return</div>
                    </CardBody>
                  </Card>

                  <Card className="border">
                    <CardBody className="p-4 text-center">
                      <div className="text-sm text-gray-600 mb-1">3-Year ROI</div>
                      <div className="text-3xl font-bold text-green-600">
                        {formatPercentage(roi.threeYearROI)}
                      </div>
                      <div className="text-sm text-gray-500">return</div>
                    </CardBody>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-4">Financial Summary</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Investment</h4>
                          <dl className="space-y-2">
                            <div className="flex justify-between">
                              <dt className="text-gray-600">Implementation Cost:</dt>
                              <dd className="font-medium">
                                {formatCurrency(inputs.implementationCost)}
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-gray-600">Setup Period Costs:</dt>
                              <dd className="font-medium">
                                {formatCurrency(
                                  inputs.monthlyOperatingCost * inputs.implementationTime
                                )}
                              </dd>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <dt className="text-gray-700 font-medium">Total Investment:</dt>
                              <dd className="font-bold">{formatCurrency(roi.totalInvestment)}</dd>
                            </div>
                          </dl>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Returns</h4>
                          <dl className="space-y-2">
                            <div className="flex justify-between">
                              <dt className="text-gray-600">Revenue Increase:</dt>
                              <dd className="font-medium text-green-600">
                                +{formatCurrency(roi.monthlyRevenueIncrease)}/mo
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-gray-600">Operating Costs:</dt>
                              <dd className="font-medium text-red-600">
                                -{formatCurrency(inputs.monthlyOperatingCost)}/mo
                              </dd>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <dt className="text-gray-700 font-medium">Net Profit:</dt>
                              <dd className="font-bold text-green-600">
                                +{formatCurrency(roi.monthlyProfit)}/mo
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-4">
                      Break-Even Timeline
                    </h3>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span>Month 0</span>
                        <span>Month {roi.breakEvenMonth}</span>
                        <span>Month 12</span>
                      </div>
                      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="absolute h-full bg-gradient-to-r from-red-500 to-green-500"
                          style={{ width: `${Math.min((roi.breakEvenMonth / 12) * 100, 100)}%` }}
                        />
                        <div
                          className="absolute h-full w-1 bg-navy-800"
                          style={{ left: `${Math.min((roi.breakEvenMonth / 12) * 100, 100)}%` }}
                        />
                      </div>
                      <p className="text-center mt-4 text-sm text-gray-700">
                        Break-even at month {roi.breakEvenMonth} • Full payback in{" "}
                        {roi.paybackMonths.toFixed(1)} months
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-4">Key Assumptions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-700 mb-2">Conversion</h4>
                        <p className="text-sm text-gray-600">
                          {inputs.currentConversionRate}% →{" "}
                          {(
                            inputs.currentConversionRate *
                            (1 + inputs.conversionImprovement / 100)
                          ).toFixed(2)}
                          %
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          +{inputs.conversionImprovement}% improvement
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-700 mb-2">Average Order</h4>
                        <p className="text-sm text-gray-600">
                          {formatCurrency(inputs.currentAverageOrderValue)} →{" "}
                          {formatCurrency(
                            inputs.currentAverageOrderValue * (1 + inputs.aovImprovement / 100)
                          )}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          +{inputs.aovImprovement}% improvement
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-700 mb-2">Traffic</h4>
                        <p className="text-sm text-gray-600">
                          {inputs.currentMonthlyTraffic.toLocaleString()} →{" "}
                          {(
                            inputs.currentMonthlyTraffic *
                            (1 + inputs.trafficImprovement / 100)
                          ).toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {inputs.trafficImprovement > 0
                            ? `+${inputs.trafficImprovement}%`
                            : "No change"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  {/* <Button color="primary" size="lg" onPress={handleDownload}>
                    Download Full Analysis
                  </Button> */}
                  <Button variant="bordered" size="lg" onPress={() => setShowResults(false)}>
                    Adjust Assumptions
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h3>Investment Recommendation</h3>
              {isPositiveROI ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-green-800 mb-0">
                    <strong>Proceed with confidence.</strong> This investment shows positive returns
                    within the first year with a payback period of {roi.paybackMonths.toFixed(1)}{" "}
                    months. The {formatPercentage(roi.threeYearROI)} three-year ROI significantly
                    exceeds typical investment thresholds.
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-yellow-800 mb-0">
                    <strong>Review assumptions carefully.</strong> The current projections show
                    negative first-year returns. Consider phasing the implementation, negotiating
                    lower costs, or validating higher improvement estimates before proceeding.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <EmailCaptureModal
          isOpen={emailModal.isOpen}
          onClose={emailModal.onClose}
          toolName="ROI Analysis"
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="ROI Calculator"
        subtitle="Estimate payback period based on costs vs. throughput improvements"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <Card className="mb-8">
            <CardBody className="p-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-6">Project Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Project Name"
                  placeholder="e.g., Conversion Optimization Phase 2"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  isRequired
                />

                <Select
                  label="Project Type"
                  selectedKeys={[projectType]}
                  onChange={(e) => setProjectType(e.target.value)}
                  isRequired
                  items={improvementCategories}
                >
                  {(item: { value: string; label: string }) => (
                    <SelectItem className="text-black" key={item.value}>
                      {item.label}
                    </SelectItem>
                  )}
                </Select>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card>
                <CardBody className="p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-6">Current State</h3>

                  <div className="space-y-4">
                    <Input
                      label="Monthly Revenue"
                      type="number"
                      value={inputs.currentMonthlyRevenue.toString()}
                      onChange={(e) => updateInput("currentMonthlyRevenue", e.target.value)}
                      startContent="$"
                      isRequired
                    />

                    <Input
                      label="Conversion Rate"
                      type="number"
                      value={inputs.currentConversionRate.toString()}
                      onChange={(e) => updateInput("currentConversionRate", e.target.value)}
                      endContent="%"
                      isRequired
                    />

                    <Input
                      label="Average Order Value"
                      type="number"
                      value={inputs.currentAverageOrderValue.toString()}
                      onChange={(e) => updateInput("currentAverageOrderValue", e.target.value)}
                      startContent="$"
                      isRequired
                    />

                    <Input
                      label="Monthly Traffic"
                      type="number"
                      value={inputs.currentMonthlyTraffic.toString()}
                      onChange={(e) => updateInput("currentMonthlyTraffic", e.target.value)}
                      endContent="visitors"
                      isRequired
                    />
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-6">Investment Required</h3>

                  <div className="space-y-4">
                    <Input
                      label="Implementation Cost"
                      type="number"
                      value={inputs.implementationCost.toString()}
                      onChange={(e) => updateInput("implementationCost", e.target.value)}
                      startContent="$"
                      description="One-time setup and development costs"
                      isRequired
                    />

                    <Input
                      label="Monthly Operating Cost"
                      type="number"
                      value={inputs.monthlyOperatingCost.toString()}
                      onChange={(e) => updateInput("monthlyOperatingCost", e.target.value)}
                      startContent="$"
                      description="Ongoing monthly costs (tools, services, etc.)"
                      isRequired
                    />

                    <Input
                      label="Implementation Time"
                      type="number"
                      value={inputs.implementationTime.toString()}
                      onChange={(e) => updateInput("implementationTime", e.target.value)}
                      endContent="months"
                      description="Time until improvements take effect"
                      isRequired
                    />
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardBody className="p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-6">
                    Expected Improvements
                  </h3>

                  <div className="space-y-4">
                    <Input
                      label="Conversion Rate Improvement"
                      type="number"
                      value={inputs.conversionImprovement.toString()}
                      onChange={(e) => updateInput("conversionImprovement", e.target.value)}
                      endContent="%"
                      description="Expected lift in conversion rate"
                      isRequired
                    />

                    <Input
                      label="Average Order Value Improvement"
                      type="number"
                      value={inputs.aovImprovement.toString()}
                      onChange={(e) => updateInput("aovImprovement", e.target.value)}
                      endContent="%"
                      description="Expected increase in order value"
                    />

                    <Input
                      label="Traffic Growth"
                      type="number"
                      value={inputs.trafficImprovement.toString()}
                      onChange={(e) => updateInput("trafficImprovement", e.target.value)}
                      endContent="%"
                      description="Expected traffic increase (if any)"
                    />
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Typical Improvements</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Conversion optimization: 10-30% lift</li>
                      <li>• UX improvements: 15-25% conversion</li>
                      <li>• Speed optimization: 7% per 100ms</li>
                      <li>• Personalization: 20-40% AOV increase</li>
                    </ul>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-8">
                  <h3 className="text-lg font-semibold text-navy-900 mb-6">Quick Preview</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">New Monthly Revenue:</span>
                      <span className="font-semibold text-lg">
                        {formatCurrency(
                          inputs.currentMonthlyTraffic *
                            (1 + inputs.trafficImprovement / 100) *
                            ((inputs.currentConversionRate *
                              (1 + inputs.conversionImprovement / 100)) /
                              100) *
                            (inputs.currentAverageOrderValue * (1 + inputs.aovImprovement / 100))
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenue Increase:</span>
                      <span className="font-semibold text-lg text-green-600">
                        +
                        {formatCurrency(
                          inputs.currentMonthlyTraffic *
                            (1 + inputs.trafficImprovement / 100) *
                            ((inputs.currentConversionRate *
                              (1 + inputs.conversionImprovement / 100)) /
                              100) *
                            (inputs.currentAverageOrderValue * (1 + inputs.aovImprovement / 100)) -
                            inputs.currentMonthlyRevenue
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-gray-600">Est. Payback:</span>
                      <span className="font-semibold text-lg">
                        ~
                        {Math.ceil(
                          inputs.implementationCost /
                            (inputs.currentMonthlyTraffic *
                              (1 + inputs.trafficImprovement / 100) *
                              ((inputs.currentConversionRate *
                                (1 + inputs.conversionImprovement / 100)) /
                                100) *
                              (inputs.currentAverageOrderValue *
                                (1 + inputs.aovImprovement / 100)) -
                              inputs.currentMonthlyRevenue -
                              inputs.monthlyOperatingCost)
                        )}{" "}
                        months
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button color="primary" size="lg" onPress={generateReport}>
              Calculate Full ROI
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
