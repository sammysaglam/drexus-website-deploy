"use client";

import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Input,
  Progress,
  Select,
  SelectItem,
  Slider,
  useDisclosure,
} from "@heroui/react";

import { EmailCaptureModal } from "@/components/tools/EmailCaptureModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { track } from "@/lib/analytics";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface LatencyComponent {
  name: string;
  current: number;
  budget: number;
  category: "frontend" | "backend" | "network" | "database";
}

const defaultComponents: LatencyComponent[] = [
  { name: "DNS Lookup", current: 20, budget: 30, category: "network" },
  { name: "TCP Connection", current: 50, budget: 60, category: "network" },
  { name: "TLS Handshake", current: 80, budget: 100, category: "network" },
  { name: "Server Processing", current: 200, budget: 150, category: "backend" },
  { name: "Database Query", current: 150, budget: 100, category: "database" },
  { name: "API Response", current: 50, budget: 50, category: "backend" },
  { name: "Content Download", current: 300, budget: 200, category: "network" },
  { name: "JS Parse & Execute", current: 400, budget: 300, category: "frontend" },
  { name: "Render & Paint", current: 200, budget: 150, category: "frontend" },
];

type Percentile = "p50" | "p95" | "p99";

const flowTypes = [
  { value: "auth", label: "Authentication Flow", targetP95: 1500 },
  { value: "search", label: "Search Results", targetP95: 800 },
  { value: "checkout", label: "Checkout Process", targetP95: 2000 },
  { value: "dashboard", label: "Dashboard Load", targetP95: 1200 },
  { value: "api", label: "API Endpoint", targetP95: 500 },
  { value: "custom", label: "Custom Flow", targetP95: 1000 },
];

// Use standardized constants
const roles = ROLE_OPTIONS;
const companySizes = COMPANY_SIZE_OPTIONS;
const industries = INDUSTRY_OPTIONS;

export default function LatencyBudgetCalculatorPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Latency Budget Calculator", href: "/tools/latency-budget-calculator" },
  ];

  const [flowType, setFlowType] = useState("auth");
  const [trafficVolume, setTrafficVolume] = useState("10000");
  const [targetPercentile, setTargetPercentile] = useState<Percentile>("p95");
  const [components, setComponents] = useState<LatencyComponent[]>(defaultComponents);
  const [showResults, setShowResults] = useState(false);
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [role, setRole] = useState("");

  const emailModal = useDisclosure();

  const updateComponent = (index: number, field: "current" | "budget", value: number) => {
    const newComponents = [...components];
    newComponents[index] = { ...newComponents[index], [field]: value };
    setComponents(newComponents);
  };

  const getTotalCurrent = () => components.reduce((sum, c) => sum + c.current, 0);
  const getTotalBudget = () => components.reduce((sum, c) => sum + c.budget, 0);

  const getTargetLatency = () => {
    const flow = flowTypes.find((f) => f.value === flowType);
    return flow?.targetP95 || 1000;
  };

  const getCategoryTotals = () => {
    const totals = {
      frontend: { current: 0, budget: 0 },
      backend: { current: 0, budget: 0 },
      network: { current: 0, budget: 0 },
      database: { current: 0, budget: 0 },
    };

    components.forEach((c) => {
      totals[c.category].current += c.current;
      totals[c.category].budget += c.budget;
    });

    return totals;
  };

  const getPercentileMultiplier = (percentile: Percentile) => {
    switch (percentile) {
      case "p50":
        return 1.0;
      case "p95":
        return 1.5;
      case "p99":
        return 2.0;
    }
  };

  const getRecommendations = () => {
    const overBudget = components.filter((c) => c.current > c.budget);
    const totalCurrent = getTotalCurrent();
    const targetLatency = getTargetLatency();

    const recommendations = [];

    if (totalCurrent > targetLatency) {
      recommendations.push({
        type: "critical",
        message: `Total latency (${totalCurrent}ms) exceeds target (${targetLatency}ms). Immediate optimization required.`,
      });
    }

    overBudget.forEach((c) => {
      const excess = c.current - c.budget;
      const percentage = Math.round((excess / c.budget) * 100);
      recommendations.push({
        type: "warning",
        message: `${c.name} is ${percentage}% over budget (+${excess}ms)`,
      });
    });

    const categoryTotals = getCategoryTotals();
    Object.entries(categoryTotals).forEach(([category, totals]) => {
      if (totals.current > totals.budget * 1.2) {
        recommendations.push({
          type: "info",
          message: `${category} layer needs optimization (${totals.current}ms vs ${totals.budget}ms budget)`,
        });
      }
    });

    return recommendations;
  };

  const calculateResults = () => {
    if (!trafficVolume) {
      alert("Please enter traffic volume");
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
      location: "/tools/latency-budget-calculator",
      toolName: "Latency Budget Calculator",
      industry: selectedIndustry.value,
      companySize: selectedCompanySize.value,
      role: selectedRole.value,
    });

    setShowResults(true);
  };

  const _handleDownload = () => {
    // Show email capture modal after results view
    emailModal.onOpen();
  };

  if (showResults) {
    const totalCurrent = getTotalCurrent();
    const targetLatency = getTargetLatency();
    const multiplier = getPercentileMultiplier(targetPercentile);
    const adjustedCurrent = Math.round(totalCurrent * multiplier);
    const adjustedTarget = Math.round(targetLatency * multiplier);
    const categoryTotals = getCategoryTotals();
    const recommendations = getRecommendations();

    const isOnTarget = adjustedCurrent <= adjustedTarget;
    const performance = isOnTarget ? "Good" : "Needs Improvement";
    const performanceColor = isOnTarget ? "text-green-600" : "text-red-600";

    return (
      <>
        <PageHeader
          title="Latency Budget Analysis"
          subtitle="Your performance budget breakdown and recommendations"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-lg">
            <Card className="mb-8">
              <CardBody className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-navy-900 mb-4">
                    {flowTypes.find((f) => f.value === flowType)?.label} Performance
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-navy-800">{adjustedCurrent}ms</div>
                      <div className="text-sm text-gray-600">
                        Current {targetPercentile.toUpperCase()}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">{adjustedTarget}ms</div>
                      <div className="text-sm text-gray-600">
                        Target {targetPercentile.toUpperCase()}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${performanceColor}`}>{performance}</div>
                      <div className="text-sm text-gray-600">
                        {isOnTarget
                          ? "Within budget"
                          : `${adjustedCurrent - adjustedTarget}ms over`}
                      </div>
                    </div>
                  </div>

                  <Progress
                    value={Math.min((adjustedTarget / adjustedCurrent) * 100, 100)}
                    color={isOnTarget ? "success" : "danger"}
                    className="mb-8"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-4">Layer Breakdown</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(categoryTotals).map(([category, totals]) => {
                        const isOver = totals.current > totals.budget;
                        return (
                          <Card
                            key={category}
                            className={`border ${isOver ? "border-red-200" : "border-gray-200"}`}
                          >
                            <CardBody className="p-4">
                              <h4 className="font-medium capitalize mb-2">{category}</h4>
                              <div
                                className={`text-2xl font-bold ${isOver ? "text-red-600" : "text-green-600"}`}
                              >
                                {totals.current}ms
                              </div>
                              <div className="text-sm text-gray-500">Budget: {totals.budget}ms</div>
                              <Progress
                                value={Math.min((totals.budget / totals.current) * 100, 100)}
                                size="sm"
                                color={isOver ? "danger" : "success"}
                                className="mt-2"
                              />
                            </CardBody>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-4">Component Details</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Component</th>
                            <th className="text-center py-2">Current</th>
                            <th className="text-center py-2">Budget</th>
                            <th className="text-center py-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {components.map((component, idx) => {
                            const isOver = component.current > component.budget;
                            return (
                              <tr key={idx} className="border-b">
                                <td className="py-2">{component.name}</td>
                                <td className="text-center">{component.current}ms</td>
                                <td className="text-center">{component.budget}ms</td>
                                <td className="text-center">
                                  <span
                                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                      isOver
                                        ? "bg-red-100 text-red-700"
                                        : "bg-green-100 text-green-700"
                                    }`}
                                  >
                                    {isOver ? `+${component.current - component.budget}ms` : "OK"}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {recommendations.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800 mb-4">
                        Optimization Recommendations
                      </h3>
                      <div className="space-y-3">
                        {recommendations.map((rec, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-lg ${
                              rec.type === "critical"
                                ? "bg-red-50 text-red-800"
                                : rec.type === "warning"
                                  ? "bg-yellow-50 text-yellow-800"
                                  : "bg-blue-50 text-blue-800"
                            }`}
                          >
                            <div className="flex items-start">
                              <span className="mr-2">
                                {rec.type === "critical"
                                  ? "⚠️"
                                  : rec.type === "warning"
                                    ? "⚡"
                                    : "💡"}
                              </span>
                              <span>{rec.message}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-4">
                      Traffic Impact Analysis
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">
                        With {parseInt(trafficVolume).toLocaleString()} requests/day:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>
                          • Users experiencing &gt;{adjustedTarget}ms: ~
                          {Math.round(parseInt(trafficVolume) * 0.05).toLocaleString()}
                        </li>
                        <li>• Potential bounce rate increase: {isOnTarget ? "< 2%" : "5-15%"}</li>
                        <li>
                          • Estimated conversion impact:{" "}
                          {isOnTarget ? "Minimal" : "-7% per 100ms over target"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  {/* <Button color="primary" size="lg" onPress={handleDownload}>
                    Get Optimization Guide
                  </Button> */}
                  <Button variant="bordered" size="lg" onPress={() => setShowResults(false)}>
                    Adjust Budgets
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <EmailCaptureModal
          isOpen={emailModal.isOpen}
          onClose={emailModal.onClose}
          toolName="Latency Budget"
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Latency Budget Calculator"
        subtitle="Calculate P95/P99 latency budgets based on your traffic profile"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <Card className="mb-8">
            <CardBody className="p-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-6">Traffic Profile</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Select
                  isRequired
                  label="Flow Type"
                  selectedKeys={[flowType]}
                  onChange={(e) => setFlowType(e.target.value)}
                  items={flowTypes}
                >
                  {(item: { value: string; label: string }) => (
                    <SelectItem className="text-black" key={item.value}>
                      {item.label}
                    </SelectItem>
                  )}
                </Select>

                <Input
                  label="Daily Traffic Volume"
                  placeholder="e.g., 10000"
                  value={trafficVolume}
                  onChange={(e) => setTrafficVolume(e.target.value)}
                  type="number"
                  isRequired
                  endContent={<span className="text-sm text-gray-500">requests/day</span>}
                />

                <Select
                  label="Target Percentile"
                  selectedKeys={[targetPercentile]}
                  onChange={(e) => setTargetPercentile(e.target.value as Percentile)}
                  isRequired
                  items={[
                    { key: "p50", label: "P50 (Median)" },
                    { key: "p95", label: "P95 (Recommended)" },
                    { key: "p99", label: "P99 (Strict)" },
                  ]}
                >
                  {(item: { key: string; label: string }) => (
                    <SelectItem className="text-black" key={item.key}>
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

          <Card>
            <CardBody className="p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-navy-900 mb-2">Component Latencies</h2>
                <p className="text-gray-600">
                  Set current latencies and target budgets for each component (in milliseconds).
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>
                      Target for {flowTypes.find((f) => f.value === flowType)?.label}:
                    </strong>{" "}
                    {getTargetLatency()}ms at P95
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {components.map((component, index) => (
                  <Card key={index} className="border">
                    <CardBody className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-navy-800">{component.name}</h3>
                        <span className="text-sm text-gray-500 capitalize">
                          {component.category}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-600 mb-1 block">
                            Current Latency: {component.current}ms
                          </label>
                          <Slider
                            size="sm"
                            step={10}
                            minValue={0}
                            maxValue={1000}
                            value={component.current}
                            onChange={(value) => updateComponent(index, "current", value as number)}
                            color={component.current > component.budget ? "danger" : "primary"}
                          />
                        </div>

                        <div>
                          <label className="text-sm text-gray-600 mb-1 block">
                            Budget: {component.budget}ms
                          </label>
                          <Slider
                            size="sm"
                            step={10}
                            minValue={0}
                            maxValue={1000}
                            value={component.budget}
                            onChange={(value) => updateComponent(index, "budget", value as number)}
                            color="success"
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Current Latency:</span>
                  <span
                    className={`text-2xl font-bold ${getTotalCurrent() > getTargetLatency() ? "text-red-600" : "text-green-600"}`}
                  >
                    {getTotalCurrent()}ms
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-medium">Total Budget:</span>
                  <span className="text-2xl font-bold text-blue-600">{getTotalBudget()}ms</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button color="primary" size="lg" onPress={calculateResults}>
                  Calculate Latency Budget
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}
