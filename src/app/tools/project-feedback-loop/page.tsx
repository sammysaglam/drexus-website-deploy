"use client";

import React, { useState, useMemo } from "react";

import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Textarea,
  Progress,
  Checkbox,
  CheckboxGroup,
} from "@heroui/react";

import FeedbackLoopVisualization from "@/components/tools/FeedbackLoopVisualization";
import { PageHeader } from "@/components/ui/PageHeader";
import { track } from "@/lib/analytics";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface FeedbackLoopPlan {
  // Context
  projectName: string;
  focusArea: "product-development" | "ux-design" | "marketing" | "customer-support" | "other";
  customFocusArea?: string;
  description: string;
  currentCadence: string;

  // Collection Phase
  feedbackSources: {
    internal: {
      enabled: boolean;
      methods: string[];
      frequency: string;
      owner: string;
    };
    external: {
      enabled: boolean;
      methods: string[];
      frequency: string;
      owner: string;
    };
    analytics: {
      enabled: boolean;
      tools: string[];
      metrics: string[];
      monitoringFrequency: string;
    };
  };

  // Analysis Phase
  analysisProcess: {
    method: string;
    criteria: string[];
    decisionMakers: string;
    analysisCadence: string;
  };

  // Implementation Phase
  implementation: {
    approach: string;
    iterationLength: string;
    releaseStrategy: string;
    experimentsPerCycle: number;
  };

  // Follow-up Phase
  followUp: {
    successMetrics: Array<{
      name: string;
      baseline: string;
      target: string;
      measurementMethod: string;
    }>;
    reportingFrequency: string;
    reportingMethod: string;
    stakeholders: string;
    userCommunication: boolean;
    userCommunicationMethod?: string;
  };

  // Continuous Improvement
  loopCadence: {
    cycleDuration: string;
    reviewFrequency: string;
    adjustmentTriggers: string[];
  };
}

const focusAreaOptions = [
  { key: "product-development", label: "Product Development" },
  { key: "ux-design", label: "UX Design" },
  { key: "marketing", label: "Marketing" },
  { key: "customer-support", label: "Customer Support" },
  { key: "other", label: "Other" },
];

const cadenceOptions = [
  { key: "none", label: "No current cadence" },
  { key: "daily", label: "Daily" },
  { key: "weekly", label: "Weekly" },
  { key: "bi-weekly", label: "Bi-weekly" },
  { key: "monthly", label: "Monthly" },
];

const frequencyOptions = [
  { key: "daily", label: "Daily" },
  { key: "weekly", label: "Weekly" },
  { key: "bi-weekly", label: "Bi-weekly" },
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
];

const internalMethods = [
  "Sprint retrospectives",
  "Daily standups",
  "Product reviews",
  "Team surveys",
  "Design critiques",
  "Code reviews",
  "1-on-1 meetings",
  "All-hands meetings",
];

const externalMethods = [
  "User interviews",
  "User surveys",
  "Support tickets",
  "Feature requests",
  "User testing sessions",
  "Customer feedback forms",
  "Social media monitoring",
  "App store reviews",
];

const analyticsTools = [
  "Google Analytics",
  "Mixpanel",
  "Amplitude",
  "Hotjar",
  "FullStory",
  "Custom dashboards",
  "Database queries",
  "Error tracking tools",
];

const analysisMethods = [
  "Impact/Effort matrix",
  "Scorecard system",
  "Tagging and categorization",
  "Prioritization matrix",
  "Gut feel and discussion",
  "Voting system",
  "Cost-benefit analysis",
];

const analysisCriteria = [
  "Impact on users",
  "Implementation effort",
  "Alignment with goals",
  "User urgency",
  "Technical debt",
  "Business value",
  "Risk level",
  "Resource availability",
];

const implementationApproaches = [
  "Agile sprints",
  "Kanban workflow",
  "Feature flags",
  "Experimental rollouts",
  "Continuous deployment",
  "Waterfall approach",
];

const iterationLengths = ["1 week", "2 weeks", "3 weeks", "1 month", "Continuous", "Variable"];

const releaseStrategies = [
  "All users at once",
  "Gradual rollout",
  "Beta group testing",
  "A/B testing",
  "Feature flags",
  "Canary releases",
];

const reportingMethods = [
  "Friday Progress Receipt",
  "Dashboard updates",
  "Email reports",
  "Team meetings",
  "Slack updates",
  "Confluence pages",
];

const userCommunicationMethods = [
  "Email newsletter",
  "In-app notifications",
  "Changelog",
  "Blog posts",
  "Social media",
  "Support documentation",
];

const cycleDurations = ["1 week", "2 weeks", "1 month", "6 weeks", "1 quarter"];

const reviewFrequencies = ["After each cycle", "Monthly", "Quarterly", "When issues arise"];

const adjustmentTriggers = [
  "Low response rates",
  "Stakeholder feedback",
  "Resource changes",
  "Poor results",
  "Team feedback",
  "Process bottlenecks",
  "Tool limitations",
];

// Focus area templates
const focusAreaTemplates = {
  "product-development": {
    suggestedSources: {
      internal: ["Sprint retrospectives", "Daily standups", "Product reviews"],
      external: ["User interviews", "Feature requests", "Support tickets"],
      analytics: ["Usage metrics", "Feature adoption", "Error rates"],
    },
    suggestedMetrics: ["User activation rate", "Feature adoption", "Customer satisfaction"],
    suggestedCadence: "2 weeks",
  },
  "ux-design": {
    suggestedSources: {
      internal: ["Design critiques", "Usability testing sessions"],
      external: ["User testing", "Surveys", "Session recordings"],
      analytics: ["Click patterns", "Task completion rates", "Time on task"],
    },
    suggestedMetrics: ["Task success rate", "User satisfaction score", "Time to complete"],
    suggestedCadence: "2 weeks",
  },
  marketing: {
    suggestedSources: {
      internal: ["Campaign reviews", "Performance meetings"],
      external: ["Customer surveys", "Social media feedback", "Email responses"],
      analytics: ["Conversion rates", "Engagement metrics", "ROI tracking"],
    },
    suggestedMetrics: ["Conversion rate", "Engagement rate", "ROI"],
    suggestedCadence: "1 month",
  },
  "customer-support": {
    suggestedSources: {
      internal: ["Support team meetings", "Ticket reviews"],
      external: ["Customer feedback", "Support tickets", "Satisfaction surveys"],
      analytics: ["Response times", "Resolution rates", "Customer satisfaction"],
    },
    suggestedMetrics: ["Response time", "Resolution rate", "Customer satisfaction"],
    suggestedCadence: "1 week",
  },
};

// Use standardized constants
const roles = ROLE_OPTIONS;
const companySizes = COMPANY_SIZE_OPTIONS;
const industries = INDUSTRY_OPTIONS;

// Move breadcrumbs outside component to prevent re-creation
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Project Feedback Loop", href: "/tools/project-feedback-loop" },
];

export default function ProjectFeedbackLoopPage() {
  // Memoize items arrays to prevent re-creation on every render
  const industryItems = useMemo(
    () => industries.map((industry) => ({ key: industry.key, label: industry.label })),
    []
  );

  const companySizeItems = useMemo(
    () => companySizes.map((size) => ({ key: size.key, label: size.label })),
    []
  );

  const roleItems = useMemo(() => roles.map((role) => ({ key: role.key, label: role.label })), []);

  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [newMetricInput, setNewMetricInput] = useState("");

  const [plan, setPlan] = useState<FeedbackLoopPlan>({
    projectName: "",
    focusArea: "product-development",
    customFocusArea: "",
    description: "",
    currentCadence: "none",
    feedbackSources: {
      internal: {
        enabled: false,
        methods: [],
        frequency: "weekly",
        owner: "",
      },
      external: {
        enabled: false,
        methods: [],
        frequency: "bi-weekly",
        owner: "",
      },
      analytics: {
        enabled: false,
        tools: [],
        metrics: [],
        monitoringFrequency: "daily",
      },
    },
    analysisProcess: {
      method: "",
      criteria: [],
      decisionMakers: "",
      analysisCadence: "weekly",
    },
    implementation: {
      approach: "",
      iterationLength: "2 weeks",
      releaseStrategy: "",
      experimentsPerCycle: 2,
    },
    followUp: {
      successMetrics: [
        {
          name: "",
          baseline: "",
          target: "",
          measurementMethod: "",
        },
      ],
      reportingFrequency: "weekly",
      reportingMethod: "",
      stakeholders: "",
      userCommunication: false,
      userCommunicationMethod: "",
    },
    loopCadence: {
      cycleDuration: "2 weeks",
      reviewFrequency: "monthly",
      adjustmentTriggers: [],
    },
  });

  const addSuccessMetric = () => {
    const newMetric = {
      name: "",
      baseline: "",
      target: "",
      measurementMethod: "",
    };
    setPlan((prev) => ({
      ...prev,
      followUp: {
        ...prev.followUp,
        successMetrics: [...prev.followUp.successMetrics, newMetric],
      },
    }));
  };

  const updateSuccessMetric = (
    index: number,
    updates: Partial<FeedbackLoopPlan["followUp"]["successMetrics"][0]>
  ) => {
    setPlan((prev) => ({
      ...prev,
      followUp: {
        ...prev.followUp,
        successMetrics: prev.followUp.successMetrics.map((metric, i) =>
          i === index ? { ...metric, ...updates } : metric
        ),
      },
    }));
  };

  const removeSuccessMetric = (index: number) => {
    // Prevent removal of the first (required) metric
    if (index === 0) {
      return;
    }
    setPlan((prev) => ({
      ...prev,
      followUp: {
        ...prev.followUp,
        successMetrics: prev.followUp.successMetrics.filter((_, i) => i !== index),
      },
    }));
  };

  const addMetric = () => {
    const metric = newMetricInput.trim();
    if (metric && !plan.feedbackSources.analytics.metrics.includes(metric)) {
      setPlan((prev) => ({
        ...prev,
        feedbackSources: {
          ...prev.feedbackSources,
          analytics: {
            ...prev.feedbackSources.analytics,
            metrics: [...prev.feedbackSources.analytics.metrics, metric],
          },
        },
      }));
      setNewMetricInput("");
    }
  };

  const handleStakeholdersChange = (value: string) => {
    setPlan((prev) => ({
      ...prev,
      followUp: { ...prev.followUp, stakeholders: value },
    }));
  };

  const handleDecisionMakersChange = (value: string) => {
    setPlan((prev) => ({
      ...prev,
      analysisProcess: { ...prev.analysisProcess, decisionMakers: value },
    }));
  };

  const validateCurrentStep = () => {
    setErrorMessage("");

    switch (currentStep) {
      case 1:
        if (!plan.projectName.trim() || !plan.focusArea || !plan.description.trim()) {
          setErrorMessage("Please complete all required fields in Step 1: Loop Context & Focus");
          return false;
        }
        if (plan.focusArea === "other" && !plan.customFocusArea?.trim()) {
          setErrorMessage("Please specify your custom focus area");
          return false;
        }
        return true;
      case 2:
        if (
          !plan.feedbackSources.internal.enabled &&
          !plan.feedbackSources.external.enabled &&
          !plan.feedbackSources.analytics.enabled
        ) {
          setErrorMessage("Please enable at least one feedback source in Step 2: Collection");
          return false;
        }
        if (
          plan.feedbackSources.internal.enabled &&
          (plan.feedbackSources.internal.methods.length === 0 ||
            !plan.feedbackSources.internal.owner.trim())
        ) {
          setErrorMessage("Please complete internal feedback configuration");
          return false;
        }
        if (
          plan.feedbackSources.external.enabled &&
          (plan.feedbackSources.external.methods.length === 0 ||
            !plan.feedbackSources.external.owner.trim())
        ) {
          setErrorMessage("Please complete external feedback configuration");
          return false;
        }
        if (
          plan.feedbackSources.analytics.enabled &&
          (plan.feedbackSources.analytics.tools.length === 0 ||
            plan.feedbackSources.analytics.metrics.length === 0)
        ) {
          setErrorMessage("Please complete analytics configuration");
          return false;
        }
        return true;
      case 3:
        if (
          !plan.analysisProcess.method ||
          plan.analysisProcess.criteria.length === 0 ||
          !plan.analysisProcess.decisionMakers.trim()
        ) {
          setErrorMessage("Please complete all required fields in Step 3: Analysis");
          return false;
        }
        return true;
      case 4:
        if (!plan.implementation.approach || !plan.implementation.releaseStrategy) {
          setErrorMessage("Please complete all required fields in Step 4: Implementation");
          return false;
        }
        return true;
      case 5:
        if (
          plan.followUp.successMetrics.length === 0 ||
          !plan.followUp.reportingMethod ||
          !plan.followUp.stakeholders.trim()
        ) {
          setErrorMessage("Please complete all required fields in Step 5: Follow-up");
          return false;
        }
        // Validate that the first (required) success metric is properly filled out
        const firstMetric = plan.followUp.successMetrics[0];
        if (
          !firstMetric.name.trim() ||
          !firstMetric.baseline.trim() ||
          !firstMetric.target.trim() ||
          !firstMetric.measurementMethod.trim()
        ) {
          setErrorMessage("Please complete all fields for the required success metric");
          return false;
        }
        if (plan.followUp.userCommunication && !plan.followUp.userCommunicationMethod) {
          setErrorMessage("Please specify how you'll communicate with users");
          return false;
        }
        return true;
      case 6:
        if (plan.loopCadence.adjustmentTriggers.length === 0) {
          setErrorMessage("Please select at least one adjustment trigger in Step 6: Loop Cadence");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const scrollToForm = () => {
    // Scroll to the form section (after the About You section)
    const formSection = document.getElementById("feedback-loop-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const nextStep = () => {
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < 6) {
      // Apply focus area template when moving from step 1 to step 2
      if (currentStep === 1) {
        if (plan.focusArea && plan.focusArea !== "other" && focusAreaTemplates[plan.focusArea]) {
          const template = focusAreaTemplates[plan.focusArea];
          setPlan((prev) => ({
            ...prev,
            feedbackSources: {
              ...prev.feedbackSources,
              internal: {
                ...prev.feedbackSources.internal,
                methods: template.suggestedSources.internal,
                enabled: true,
              },
              external: {
                ...prev.feedbackSources.external,
                methods: template.suggestedSources.external,
                enabled: true,
              },
              analytics: {
                ...prev.feedbackSources.analytics,
                metrics: template.suggestedMetrics,
                enabled: true,
              },
            },
            loopCadence: {
              ...prev.loopCadence,
              cycleDuration: template.suggestedCadence,
            },
          }));
        }
      }

      setCurrentStep(currentStep + 1);
      // Scroll to form after step change
      setTimeout(scrollToForm, 100);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generatePlan = () => {
    setErrorMessage("");

    // Validate About You section
    if (!industry || !companySize || !role) {
      setErrorMessage("Please complete the 'About You' section at the top of the page");
      return;
    }

    // Validate all steps
    if (!validateCurrentStep()) {
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
      location: "/tools/project-feedback-loop",
      toolName: "Project Feedback Loop",
      industry: selectedIndustry.value,
      companySize: selectedCompanySize.value,
      role: selectedRole.value,
    });

    setShowResults(true);
  };

  if (showResults) {
    return (
      <>
        <PageHeader
          title="Your Feedback Loop is Ready"
          subtitle="Review your complete feedback loop plan"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-screen-lg">
            <Card className="mb-6 sm:mb-8">
              <CardBody className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">
                  Feedback Loop Plan: {plan.projectName}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
                  <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[120px]">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700 break-words">
                      {focusAreaOptions.find((f) => f.key === plan.focusArea)?.label ||
                        plan.customFocusArea}
                    </div>
                    <div className="text-sm text-blue-600 mt-1">Focus Area</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[120px]">
                    <div className="text-3xl font-bold text-green-700">
                      {plan.loopCadence.cycleDuration}
                    </div>
                    <div className="text-sm text-green-600 mt-1">Cycle Duration</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[120px]">
                    <div className="text-3xl font-bold text-purple-700">
                      {
                        [
                          plan.feedbackSources.internal.enabled,
                          plan.feedbackSources.external.enabled,
                          plan.feedbackSources.analytics.enabled,
                        ].filter(Boolean).length
                      }
                    </div>
                    <div className="text-sm text-purple-600 mt-1">Feedback Sources</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[120px]">
                    <div className="text-3xl font-bold text-orange-700">
                      {plan.followUp.successMetrics.length}
                    </div>
                    <div className="text-sm text-orange-600 mt-1">Success Metrics</div>
                  </div>
                </div>

                {/* Interactive Loop Visualization */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">
                    🔄 Your Feedback Loop
                  </h3>
                  <FeedbackLoopVisualization plan={plan} />
                </div>

                {/* Collection Phase */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">📥 Collection Phase</h3>
                  <Card className="border">
                    <CardBody className="p-4">
                      <div className="space-y-4">
                        {plan.feedbackSources.internal.enabled && (
                          <div>
                            <strong>Internal Feedback:</strong>{" "}
                            {plan.feedbackSources.internal.methods.join(", ")}
                            <br />
                            <span className="text-sm text-gray-600">
                              Frequency: {plan.feedbackSources.internal.frequency} | Owner:{" "}
                              {plan.feedbackSources.internal.owner}
                            </span>
                          </div>
                        )}
                        {plan.feedbackSources.external.enabled && (
                          <div>
                            <strong>External Feedback:</strong>{" "}
                            {plan.feedbackSources.external.methods.join(", ")}
                            <br />
                            <span className="text-sm text-gray-600">
                              Frequency: {plan.feedbackSources.external.frequency} | Owner:{" "}
                              {plan.feedbackSources.external.owner}
                            </span>
                          </div>
                        )}
                        {plan.feedbackSources.analytics.enabled && (
                          <div>
                            <strong>Analytics:</strong>{" "}
                            {plan.feedbackSources.analytics.tools.join(", ")}
                            <br />
                            <span className="text-sm text-gray-600">
                              Metrics:{" "}
                              <div className="inline-flex flex-wrap gap-1 mt-1">
                                {plan.feedbackSources.analytics.metrics.map((metric, index) => (
                                  <span
                                    key={index}
                                    className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                                  >
                                    {metric}
                                  </span>
                                ))}
                              </div>
                              <br />
                              Monitoring: {plan.feedbackSources.analytics.monitoringFrequency}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </div>

                {/* Analysis Phase */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">🔍 Analysis Phase</h3>
                  <Card className="border">
                    <CardBody className="p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <strong>Method:</strong> {plan.analysisProcess.method}
                        </div>
                        <div>
                          <strong>Decision Makers:</strong> {plan.analysisProcess.decisionMakers}
                        </div>
                        <div>
                          <strong>Criteria:</strong> {plan.analysisProcess.criteria.join(", ")}
                        </div>
                        <div>
                          <strong>Analysis Cadence:</strong> {plan.analysisProcess.analysisCadence}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                {/* Implementation Phase */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">
                    ⚡ Implementation Phase
                  </h3>
                  <Card className="border">
                    <CardBody className="p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <strong>Approach:</strong> {plan.implementation.approach}
                        </div>
                        <div>
                          <strong>Iteration Length:</strong> {plan.implementation.iterationLength}
                        </div>
                        <div>
                          <strong>Release Strategy:</strong> {plan.implementation.releaseStrategy}
                        </div>
                        <div>
                          <strong>Experiments per Cycle:</strong>{" "}
                          {plan.implementation.experimentsPerCycle}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                {/* Follow-up Phase */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">📊 Follow-up Phase</h3>
                  <Card className="border">
                    <CardBody className="p-4">
                      <div className="space-y-4">
                        <div>
                          <strong>Success Metrics:</strong>
                          <div className="mt-2 space-y-2">
                            {plan.followUp.successMetrics.map((metric, index) => (
                              <div key={index} className="bg-gray-50 p-3 rounded">
                                <div>
                                  <strong>{metric.name}</strong>
                                </div>
                                <div className="text-sm text-gray-600">
                                  Baseline: {metric.baseline} → Target: {metric.target}
                                </div>
                                <div className="text-sm text-gray-600">
                                  Measurement: {metric.measurementMethod}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <strong>Reporting:</strong> {plan.followUp.reportingMethod} (
                            {plan.followUp.reportingFrequency})
                          </div>
                          <div>
                            <strong>Stakeholders:</strong> {plan.followUp.stakeholders}
                          </div>
                        </div>
                        {plan.followUp.userCommunication && (
                          <div>
                            <strong>User Communication:</strong>{" "}
                            {plan.followUp.userCommunicationMethod}
                          </div>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </div>

                {/* Loop Cadence */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">🔄 Loop Cadence</h3>
                  <Card className="border">
                    <CardBody className="p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <strong>Cycle Duration:</strong> {plan.loopCadence.cycleDuration}
                        </div>
                        <div>
                          <strong>Review Frequency:</strong> {plan.loopCadence.reviewFrequency}
                        </div>
                        <div className="sm:col-span-2">
                          <strong>Adjustment Triggers:</strong>{" "}
                          {plan.loopCadence.adjustmentTriggers.join(", ")}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button variant="bordered" size="lg" onPress={() => setShowResults(false)}>
                    Edit Plan
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy-800 mb-4">
                📋 Implementation Checklist
              </h3>
              <Card className="border">
                <CardBody className="p-4">
                  <div className="space-y-3">
                    {[
                      "Set up feedback collection tools and processes",
                      "Schedule first collection activities",
                      "Create analysis scorecard/framework",
                      "Assign owners to each phase",
                      "Set up reporting templates",
                      "Schedule stakeholder review meetings",
                      "Establish success metric tracking",
                      "Plan first cycle review",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded"
                      >
                        <Checkbox className="text-sm">{item}</Checkbox>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Remember:</strong> The goal is creating a sustainable feedback loop
                      that continuously connects your team with users to improve your product over
                      time.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Project Feedback Loop"
        subtitle="Design a continuous feedback process to improve your product over time"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-screen-lg">
          {/* About You Section - First thing users see */}
          <Card className="mb-6 sm:mb-8">
            <CardBody className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-6">About You</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  isRequired
                  label="Industry"
                  className="text-black cursor-pointer"
                  placeholder="Select your industry"
                  selectedKeys={industry ? [industry] : []}
                  onChange={(e) => e.target.value && setIndustry(e.target.value)}
                  items={industryItems}
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
                  className="text-black cursor-pointer"
                  placeholder="Select company size"
                  selectedKeys={companySize ? [companySize] : []}
                  onChange={(e) => e.target.value && setCompanySize(e.target.value)}
                  items={companySizeItems}
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
                  className="text-black cursor-pointer"
                  placeholder="Select your role"
                  selectedKeys={role ? [role] : []}
                  onChange={(e) => e.target.value && setRole(e.target.value)}
                  items={roleItems}
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

          {/* Progress Indicator */}
          <Card id="feedback-loop-form" className="mb-6 sm:mb-8">
            <CardBody className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-navy-900">Progress</h2>
                <span className="text-sm text-gray-600">Step {currentStep} of 6</span>
              </div>
              <Progress value={(currentStep / 6) * 100} className="mb-4" />
              <div className="flex flex-wrap justify-between text-xs sm:text-sm text-gray-600 gap-1 sm:gap-2">
                <span className="whitespace-nowrap">1. Context</span>
                <span className="whitespace-nowrap">2. Collection</span>
                <span className="whitespace-nowrap">3. Analysis</span>
                <span className="whitespace-nowrap">4. Implementation</span>
                <span className="whitespace-nowrap">5. Follow-up</span>
                <span className="whitespace-nowrap">6. Cadence</span>
              </div>
            </CardBody>
          </Card>

          {/* Error Message Display */}
          {errorMessage && (
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardBody className="p-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-red-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-red-800 font-medium">{errorMessage}</p>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Step 1: Loop Context & Focus */}
          {currentStep === 1 && (
            <Card className="mb-6 sm:mb-8">
              <CardBody className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-navy-900 mb-6">
                  Step 1: Loop Context & Focus
                </h2>
                <p className="text-gray-600 mb-6">
                  Define what you want to improve and the context for your feedback loop.
                </p>

                <div className="space-y-6">
                  <Input
                    label="Project Name"
                    placeholder="e.g., Mobile App Redesign, Customer Onboarding"
                    value={plan.projectName}
                    onChange={(e) => setPlan((prev) => ({ ...prev, projectName: e.target.value }))}
                    isRequired
                  />

                  <Select
                    label="Focus Area"
                    placeholder="What area do you want to improve?"
                    selectedKeys={[plan.focusArea]}
                    onChange={(e) =>
                      e.target.value &&
                      setPlan((prev) => ({
                        ...prev,
                        focusArea: e.target.value as FeedbackLoopPlan["focusArea"],
                      }))
                    }
                    isRequired
                    className="cursor-pointer"
                    defaultSelectedKeys={["product-development"]}
                    items={focusAreaOptions}
                  >
                    {(item: { key: string; label: string }) => (
                      <SelectItem className="text-black" key={item.key}>
                        {item.label}
                      </SelectItem>
                    )}
                  </Select>

                  {plan.focusArea === "other" && (
                    <Input
                      label="Custom Focus Area"
                      placeholder="Describe your focus area"
                      value={plan.customFocusArea || ""}
                      onChange={(e) =>
                        setPlan((prev) => ({ ...prev, customFocusArea: e.target.value }))
                      }
                      isRequired
                    />
                  )}

                  <Textarea
                    label="Description"
                    placeholder="Briefly describe what you want to improve and why"
                    value={plan.description}
                    onChange={(e) => setPlan((prev) => ({ ...prev, description: e.target.value }))}
                    isRequired
                    minRows={3}
                    description="Example: Improve user onboarding flow to reduce drop-off rates and increase activation"
                  />

                  <div>
                    <Select
                      label="Current Iteration Cadence"
                      placeholder="Do you have a current process?"
                      selectedKeys={[plan.currentCadence]}
                      onChange={(e) =>
                        e.target.value &&
                        setPlan((prev) => ({ ...prev, currentCadence: e.target.value }))
                      }
                      className="cursor-pointer"
                      defaultSelectedKeys={["none"]}
                      items={cadenceOptions}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem className="text-black" key={item.key}>
                          {item.label}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button color="primary" size="lg" onPress={nextStep}>
                    Next: Collection →
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Step 2: Collection - Define Feedback Sources */}
          {currentStep === 2 && (
            <Card className="mb-6 sm:mb-8">
              <CardBody className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-navy-900 mb-6">
                  Step 2: Collection - Define Feedback Sources
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose how you'll collect feedback from internal teams, external users, and
                  analytics.
                </p>

                <div className="space-y-8">
                  {/* Internal Feedback */}
                  <Card className="border">
                    <CardBody className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Checkbox
                          isSelected={plan.feedbackSources.internal.enabled}
                          onValueChange={(checked) =>
                            setPlan((prev) => ({
                              ...prev,
                              feedbackSources: {
                                ...prev.feedbackSources,
                                internal: { ...prev.feedbackSources.internal, enabled: checked },
                              },
                            }))
                          }
                        />
                        <h3
                          className="text-lg font-medium text-navy-800 cursor-pointer"
                          onClick={() =>
                            setPlan((prev) => ({
                              ...prev,
                              feedbackSources: {
                                ...prev.feedbackSources,
                                internal: {
                                  ...prev.feedbackSources.internal,
                                  enabled: !prev.feedbackSources.internal.enabled,
                                },
                              },
                            }))
                          }
                        >
                          Internal Team Feedback
                        </h3>
                      </div>

                      {plan.feedbackSources.internal.enabled && (
                        <div className="space-y-4 ml-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Collection Methods
                            </label>
                            <CheckboxGroup
                              value={plan.feedbackSources.internal.methods}
                              onValueChange={(methods) =>
                                setPlan((prev) => ({
                                  ...prev,
                                  feedbackSources: {
                                    ...prev.feedbackSources,
                                    internal: {
                                      ...prev.feedbackSources.internal,
                                      methods: methods as string[],
                                    },
                                  },
                                }))
                              }
                              className="grid grid-cols-2 gap-2"
                            >
                              {internalMethods.map((method) => (
                                <Checkbox key={method} value={method} className="text-sm">
                                  {method}
                                </Checkbox>
                              ))}
                            </CheckboxGroup>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Select
                              label="Frequency"
                              selectedKeys={[plan.feedbackSources.internal.frequency]}
                              onChange={(e) =>
                                e.target.value &&
                                setPlan((prev) => ({
                                  ...prev,
                                  feedbackSources: {
                                    ...prev.feedbackSources,
                                    internal: {
                                      ...prev.feedbackSources.internal,
                                      frequency: e.target.value,
                                    },
                                  },
                                }))
                              }
                              className="cursor-pointer"
                              items={frequencyOptions}
                            >
                              {(item: { key: string; label: string }) => (
                                <SelectItem className="text-black" key={item.key}>
                                  {item.label}
                                </SelectItem>
                              )}
                            </Select>

                            <Input
                              label="Owner/Responsible Party"
                              placeholder="e.g., Product Manager, Team Lead"
                              value={plan.feedbackSources.internal.owner}
                              onChange={(e) =>
                                setPlan((prev) => ({
                                  ...prev,
                                  feedbackSources: {
                                    ...prev.feedbackSources,
                                    internal: {
                                      ...prev.feedbackSources.internal,
                                      owner: e.target.value,
                                    },
                                  },
                                }))
                              }
                              isRequired
                            />
                          </div>
                        </div>
                      )}
                    </CardBody>
                  </Card>

                  {/* External Feedback */}
                  <Card className="border">
                    <CardBody className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Checkbox
                          isSelected={plan.feedbackSources.external.enabled}
                          onValueChange={(checked) =>
                            setPlan((prev) => ({
                              ...prev,
                              feedbackSources: {
                                ...prev.feedbackSources,
                                external: { ...prev.feedbackSources.external, enabled: checked },
                              },
                            }))
                          }
                        />
                        <h3
                          className="text-lg font-medium text-navy-800 cursor-pointer"
                          onClick={() =>
                            setPlan((prev) => ({
                              ...prev,
                              feedbackSources: {
                                ...prev.feedbackSources,
                                external: {
                                  ...prev.feedbackSources.external,
                                  enabled: !prev.feedbackSources.external.enabled,
                                },
                              },
                            }))
                          }
                        >
                          External User Feedback
                        </h3>
                      </div>

                      {plan.feedbackSources.external.enabled && (
                        <div className="space-y-4 ml-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Collection Methods
                            </label>
                            <CheckboxGroup
                              value={plan.feedbackSources.external.methods}
                              onValueChange={(methods) =>
                                setPlan((prev) => ({
                                  ...prev,
                                  feedbackSources: {
                                    ...prev.feedbackSources,
                                    external: {
                                      ...prev.feedbackSources.external,
                                      methods: methods as string[],
                                    },
                                  },
                                }))
                              }
                              className="grid grid-cols-2 gap-2"
                            >
                              {externalMethods.map((method) => (
                                <Checkbox key={method} value={method} className="text-sm">
                                  {method}
                                </Checkbox>
                              ))}
                            </CheckboxGroup>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Select
                              label="Frequency"
                              selectedKeys={[plan.feedbackSources.external.frequency]}
                              onChange={(e) =>
                                e.target.value &&
                                setPlan((prev) => ({
                                  ...prev,
                                  feedbackSources: {
                                    ...prev.feedbackSources,
                                    external: {
                                      ...prev.feedbackSources.external,
                                      frequency: e.target.value,
                                    },
                                  },
                                }))
                              }
                              className="cursor-pointer"
                              items={frequencyOptions}
                            >
                              {(item: { key: string; label: string }) => (
                                <SelectItem className="text-black" key={item.key}>
                                  {item.label}
                                </SelectItem>
                              )}
                            </Select>

                            <Input
                              label="Owner/Responsible Party"
                              placeholder="e.g., UX Researcher, Customer Success"
                              value={plan.feedbackSources.external.owner}
                              onChange={(e) =>
                                setPlan((prev) => ({
                                  ...prev,
                                  feedbackSources: {
                                    ...prev.feedbackSources,
                                    external: {
                                      ...prev.feedbackSources.external,
                                      owner: e.target.value,
                                    },
                                  },
                                }))
                              }
                              isRequired
                            />
                          </div>
                        </div>
                      )}
                    </CardBody>
                  </Card>

                  {/* Analytics */}
                  <Card className="border">
                    <CardBody className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Checkbox
                          isSelected={plan.feedbackSources.analytics.enabled}
                          onValueChange={(checked) =>
                            setPlan((prev) => ({
                              ...prev,
                              feedbackSources: {
                                ...prev.feedbackSources,
                                analytics: { ...prev.feedbackSources.analytics, enabled: checked },
                              },
                            }))
                          }
                        />
                        <h3
                          className="text-lg font-medium text-navy-800 cursor-pointer"
                          onClick={() =>
                            setPlan((prev) => ({
                              ...prev,
                              feedbackSources: {
                                ...prev.feedbackSources,
                                analytics: {
                                  ...prev.feedbackSources.analytics,
                                  enabled: !prev.feedbackSources.analytics.enabled,
                                },
                              },
                            }))
                          }
                        >
                          Analytics & Data
                        </h3>
                      </div>

                      {plan.feedbackSources.analytics.enabled && (
                        <div className="space-y-4 ml-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Analytics Tools
                            </label>
                            <CheckboxGroup
                              value={plan.feedbackSources.analytics.tools}
                              onValueChange={(tools) =>
                                setPlan((prev) => ({
                                  ...prev,
                                  feedbackSources: {
                                    ...prev.feedbackSources,
                                    analytics: {
                                      ...prev.feedbackSources.analytics,
                                      tools: tools as string[],
                                    },
                                  },
                                }))
                              }
                              className="grid grid-cols-2 gap-2"
                            >
                              {analyticsTools.map((tool) => (
                                <Checkbox key={tool} value={tool} className="text-sm">
                                  {tool}
                                </Checkbox>
                              ))}
                            </CheckboxGroup>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Key Metrics to Monitor
                            </label>
                            <div className="space-y-3">
                              {/* Display existing metrics as tags */}
                              {plan.feedbackSources.analytics.metrics.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {plan.feedbackSources.analytics.metrics.map((metric, index) => (
                                    <div
                                      key={index}
                                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                    >
                                      <span>{metric}</span>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setPlan((prev) => ({
                                            ...prev,
                                            feedbackSources: {
                                              ...prev.feedbackSources,
                                              analytics: {
                                                ...prev.feedbackSources.analytics,
                                                metrics:
                                                  prev.feedbackSources.analytics.metrics.filter(
                                                    (_, i) => i !== index
                                                  ),
                                              },
                                            },
                                          }));
                                        }}
                                        className="ml-1 text-blue-600 hover:text-blue-800"
                                      >
                                        ×
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Add new metric input */}
                              <div className="flex items-center justify-center gap-2">
                                <Input
                                  placeholder="e.g., User activation rate, Feature adoption, Error rates"
                                  value={newMetricInput}
                                  onChange={(e) => setNewMetricInput(e.target.value)}
                                  onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                      e.preventDefault();
                                      addMetric();
                                    }
                                  }}
                                  className="flex-1"
                                />
                                <Button
                                  color="primary"
                                  variant="flat"
                                  size="sm"
                                  onPress={addMetric}
                                  isDisabled={!newMetricInput.trim()}
                                >
                                  Add
                                </Button>
                              </div>
                            </div>
                          </div>

                          <Select
                            label="Monitoring Frequency"
                            selectedKeys={[plan.feedbackSources.analytics.monitoringFrequency]}
                            onChange={(e) =>
                              e.target.value &&
                              setPlan((prev) => ({
                                ...prev,
                                feedbackSources: {
                                  ...prev.feedbackSources,
                                  analytics: {
                                    ...prev.feedbackSources.analytics,
                                    monitoringFrequency: e.target.value,
                                  },
                                },
                              }))
                            }
                            className="cursor-pointer"
                            items={frequencyOptions}
                          >
                            {(item: { key: string; label: string }) => (
                              <SelectItem className="text-black" key={item.key}>
                                {item.label}
                              </SelectItem>
                            )}
                          </Select>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-between">
                  <Button
                    variant="bordered"
                    size="lg"
                    onPress={prevStep}
                    className="w-full sm:w-auto"
                  >
                    ← Previous
                  </Button>
                  <Button color="primary" size="lg" onPress={nextStep} className="w-full sm:w-auto">
                    Next: Analysis →
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Step 3: Analysis - Prioritization Process */}
          {currentStep === 3 && (
            <Card className="mb-6 sm:mb-8">
              <CardBody className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-navy-900 mb-6">
                  Step 3: Analysis - Prioritization Process
                </h2>
                <p className="text-gray-600 mb-6">
                  Define how you'll analyze and prioritize the feedback you collect.
                </p>

                <div className="space-y-6">
                  <Select
                    label="Analysis Method"
                    placeholder="How will you analyze feedback?"
                    selectedKeys={plan.analysisProcess.method ? [plan.analysisProcess.method] : []}
                    onChange={(e) =>
                      e.target.value &&
                      setPlan((prev) => ({
                        ...prev,
                        analysisProcess: { ...prev.analysisProcess, method: e.target.value },
                      }))
                    }
                    isRequired
                    className="cursor-pointer"
                    items={analysisMethods.map((method) => ({ key: method, label: method }))}
                  >
                    {(item: { key: string; label: string }) => (
                      <SelectItem className="text-black" key={item.key}>
                        {item.label}
                      </SelectItem>
                    )}
                  </Select>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prioritization Criteria
                    </label>
                    <CheckboxGroup
                      value={plan.analysisProcess.criteria}
                      onValueChange={(criteria) =>
                        setPlan((prev) => ({
                          ...prev,
                          analysisProcess: {
                            ...prev.analysisProcess,
                            criteria: criteria as string[],
                          },
                        }))
                      }
                      className="grid grid-cols-2 gap-2"
                    >
                      {analysisCriteria.map((criterion) => (
                        <Checkbox key={criterion} value={criterion} className="text-sm">
                          {criterion}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                    <p className="text-xs text-gray-500 mt-1">
                      Select the criteria that matter most when prioritizing feedback
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Decision Makers"
                      placeholder="e.g., Product Manager, Engineering Lead, CEO"
                      value={plan.analysisProcess.decisionMakers}
                      onChange={(e) => handleDecisionMakersChange(e.target.value)}
                      isRequired
                    />

                    <Select
                      label="Analysis Cadence"
                      placeholder="How often will you analyze feedback?"
                      selectedKeys={[plan.analysisProcess.analysisCadence]}
                      onChange={(e) =>
                        e.target.value &&
                        setPlan((prev) => ({
                          ...prev,
                          analysisProcess: {
                            ...prev.analysisProcess,
                            analysisCadence: e.target.value,
                          },
                        }))
                      }
                      className="cursor-pointer"
                      items={frequencyOptions}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem className="text-black" key={item.key}>
                          {item.label}
                        </SelectItem>
                      )}
                    </Select>
                  </div>

                  <Card className="border border-blue-200 bg-blue-50">
                    <CardBody className="p-4">
                      <h4 className="font-medium text-blue-900 mb-2">
                        Example: Impact/Effort Matrix
                      </h4>
                      <div className="text-sm text-blue-800 space-y-1">
                        <p>• High Impact, Low Effort = Quick Wins (do first)</p>
                        <p>• High Impact, High Effort = Major Projects (plan carefully)</p>
                        <p>• Low Impact, Low Effort = Fill-ins (do when time allows)</p>
                        <p>• Low Impact, High Effort = Avoid (unless strategic)</p>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-between">
                  <Button
                    variant="bordered"
                    size="lg"
                    onPress={prevStep}
                    className="w-full sm:w-auto"
                  >
                    ← Previous
                  </Button>
                  <Button color="primary" size="lg" onPress={nextStep} className="w-full sm:w-auto">
                    Next: Implementation →
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Step 4: Implementation - Execution Strategy */}
          {currentStep === 4 && (
            <Card className="mb-6 sm:mb-8">
              <CardBody className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-navy-900 mb-6">
                  Step 4: Implementation - Execution Strategy
                </h2>
                <p className="text-gray-600 mb-6">
                  Define how you'll implement changes based on your analysis.
                </p>

                <div className="space-y-6">
                  <Select
                    label="Implementation Approach"
                    placeholder="How will you implement changes?"
                    selectedKeys={
                      plan.implementation.approach ? [plan.implementation.approach] : []
                    }
                    onChange={(e) =>
                      e.target.value &&
                      setPlan((prev) => ({
                        ...prev,
                        implementation: { ...prev.implementation, approach: e.target.value },
                      }))
                    }
                    isRequired
                    className="cursor-pointer"
                    items={implementationApproaches.map((approach) => ({
                      key: approach,
                      label: approach,
                    }))}
                  >
                    {(item: { key: string; label: string }) => (
                      <SelectItem className="text-black" key={item.key}>
                        {item.label}
                      </SelectItem>
                    )}
                  </Select>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Iteration Length"
                      placeholder="How long are your iterations?"
                      selectedKeys={[plan.implementation.iterationLength]}
                      onChange={(e) =>
                        e.target.value &&
                        setPlan((prev) => ({
                          ...prev,
                          implementation: {
                            ...prev.implementation,
                            iterationLength: e.target.value,
                          },
                        }))
                      }
                      className="cursor-pointer"
                      items={iterationLengths.map((length) => ({ key: length, label: length }))}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem className="text-black" key={item.key}>
                          {item.label}
                        </SelectItem>
                      )}
                    </Select>

                    <Select
                      label="Release Strategy"
                      placeholder="How will you release changes?"
                      selectedKeys={
                        plan.implementation.releaseStrategy
                          ? [plan.implementation.releaseStrategy]
                          : []
                      }
                      onChange={(e) =>
                        e.target.value &&
                        setPlan((prev) => ({
                          ...prev,
                          implementation: {
                            ...prev.implementation,
                            releaseStrategy: e.target.value,
                          },
                        }))
                      }
                      isRequired
                      className="cursor-pointer"
                      items={releaseStrategies.map((strategy) => ({
                        key: strategy,
                        label: strategy,
                      }))}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem className="text-black" key={item.key}>
                          {item.label}
                        </SelectItem>
                      )}
                    </Select>
                  </div>

                  <Input
                    label="Target Experiments/Changes per Cycle"
                    type="number"
                    min="1"
                    max="10"
                    value={plan.implementation.experimentsPerCycle.toString()}
                    onChange={(e) =>
                      setPlan((prev) => ({
                        ...prev,
                        implementation: {
                          ...prev.implementation,
                          experimentsPerCycle: parseInt(e.target.value) || 1,
                        },
                      }))
                    }
                    description="How many experiments or changes do you want to run per cycle?"
                  />

                  <Card className="border border-green-200 bg-green-50">
                    <CardBody className="p-4">
                      <h4 className="font-medium text-green-900 mb-2">
                        Example: Agile Sprints with Feature Flags
                      </h4>
                      <div className="text-sm text-green-800 space-y-1">
                        <p>• 2-week sprints with clear goals</p>
                        <p>• Use feature flags for gradual rollouts</p>
                        <p>• A/B test changes with small user groups</p>
                        <p>• Monitor metrics before full release</p>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-between">
                  <Button
                    variant="bordered"
                    size="lg"
                    onPress={prevStep}
                    className="w-full sm:w-auto"
                  >
                    ← Previous
                  </Button>
                  <Button color="primary" size="lg" onPress={nextStep} className="w-full sm:w-auto">
                    Next: Follow-up →
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Step 5: Follow-up - Measure & Report */}
          {currentStep === 5 && (
            <Card className="mb-6 sm:mb-8">
              <CardBody className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-navy-900 mb-6">
                  Step 5: Follow-up - Measure & Report
                </h2>
                <p className="text-gray-600 mb-6">
                  Define how you'll measure success and report back to stakeholders and users.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-navy-800">Success Metrics</h3>
                    <Button
                      color="primary"
                      variant="flat"
                      size="sm"
                      onPress={addSuccessMetric}
                      startContent={<span>+</span>}
                    >
                      Add Metric
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {plan.followUp.successMetrics.map((metric, index) => (
                      <Card key={index} className="border">
                        <CardBody className="p-4">
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="text-lg font-medium text-navy-800">
                              Metric #{index + 1}
                            </h4>
                            {index > 0 && (
                              <Button
                                size="sm"
                                variant="light"
                                color="danger"
                                onPress={() => removeSuccessMetric(index)}
                              >
                                Remove
                              </Button>
                            )}
                          </div>

                          <div className="space-y-4">
                            <Input
                              label="Metric Name"
                              placeholder="e.g., User activation rate"
                              value={metric.name}
                              onChange={(e) => updateSuccessMetric(index, { name: e.target.value })}
                              isRequired
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <Input
                                label="Current Baseline"
                                placeholder="e.g., 15% of users activate"
                                value={metric.baseline}
                                onChange={(e) =>
                                  updateSuccessMetric(index, { baseline: e.target.value })
                                }
                                isRequired
                              />

                              <Input
                                label="Target Goal"
                                placeholder="e.g., 25% of users activate"
                                value={metric.target}
                                onChange={(e) =>
                                  updateSuccessMetric(index, { target: e.target.value })
                                }
                                isRequired
                              />
                            </div>

                            <Input
                              label="How will you measure this?"
                              placeholder="e.g., Google Analytics events, database queries, surveys"
                              value={metric.measurementMethod}
                              onChange={(e) =>
                                updateSuccessMetric(index, { measurementMethod: e.target.value })
                              }
                              isRequired
                            />
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Reporting Frequency"
                      selectedKeys={[plan.followUp.reportingFrequency]}
                      onChange={(e) =>
                        e.target.value &&
                        setPlan((prev) => ({
                          ...prev,
                          followUp: { ...prev.followUp, reportingFrequency: e.target.value },
                        }))
                      }
                      className="cursor-pointer"
                      items={frequencyOptions}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem className="text-black" key={item.key}>
                          {item.label}
                        </SelectItem>
                      )}
                    </Select>

                    <Select
                      label="Reporting Method"
                      placeholder="How will you report progress?"
                      selectedKeys={
                        plan.followUp.reportingMethod ? [plan.followUp.reportingMethod] : []
                      }
                      onChange={(e) =>
                        e.target.value &&
                        setPlan((prev) => ({
                          ...prev,
                          followUp: { ...prev.followUp, reportingMethod: e.target.value },
                        }))
                      }
                      isRequired
                      className="cursor-pointer"
                      items={reportingMethods.map((method) => ({ key: method, label: method }))}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem className="text-black" key={item.key}>
                          {item.label}
                        </SelectItem>
                      )}
                    </Select>
                  </div>

                  <Input
                    label="Stakeholders"
                    placeholder="e.g., CEO, Product Manager, Engineering Lead"
                    value={plan.followUp.stakeholders}
                    onChange={(e) => handleStakeholdersChange(e.target.value)}
                    isRequired
                    description="Who should receive progress reports?"
                  />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        isSelected={plan.followUp.userCommunication}
                        onValueChange={(checked) =>
                          setPlan((prev) => ({
                            ...prev,
                            followUp: { ...prev.followUp, userCommunication: checked },
                          }))
                        }
                      />
                      <label
                        className="text-sm font-medium text-gray-700 cursor-pointer"
                        onClick={() =>
                          setPlan((prev) => ({
                            ...prev,
                            followUp: {
                              ...prev.followUp,
                              userCommunication: !prev.followUp.userCommunication,
                            },
                          }))
                        }
                      >
                        Will you communicate changes back to users?
                      </label>
                    </div>

                    {plan.followUp.userCommunication && (
                      <Select
                        label="User Communication Method"
                        placeholder="How will you communicate with users?"
                        selectedKeys={
                          plan.followUp.userCommunicationMethod
                            ? [plan.followUp.userCommunicationMethod]
                            : []
                        }
                        onChange={(e) =>
                          e.target.value &&
                          setPlan((prev) => ({
                            ...prev,
                            followUp: { ...prev.followUp, userCommunicationMethod: e.target.value },
                          }))
                        }
                        className="cursor-pointer"
                        items={userCommunicationMethods.map((method) => ({
                          key: method,
                          label: method,
                        }))}
                      >
                        {(item: { key: string; label: string }) => (
                          <SelectItem className="text-black" key={item.key}>
                            {item.label}
                          </SelectItem>
                        )}
                      </Select>
                    )}
                  </div>

                  <Card className="border border-purple-200 bg-purple-50">
                    <CardBody className="p-4">
                      <h4 className="font-medium text-purple-900 mb-2">
                        Example: Friday Progress Receipt
                      </h4>
                      <div className="text-sm text-purple-800 space-y-1">
                        <p>• Shipped: Features and fixes completed this week</p>
                        <p>• In Progress: Current experiments and development work</p>
                        <p>• Next Week: Planned experiments and priorities</p>
                        <p>• Metrics: Key numbers and trends</p>
                        <p>• Risks: Blockers and concerns</p>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-between">
                  <Button
                    variant="bordered"
                    size="lg"
                    onPress={prevStep}
                    className="w-full sm:w-auto"
                  >
                    ← Previous
                  </Button>
                  <Button color="primary" size="lg" onPress={nextStep} className="w-full sm:w-auto">
                    Next: Loop Cadence →
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Step 6: Loop Cadence - Continuous Improvement */}
          {currentStep === 6 && (
            <Card className="mb-6 sm:mb-8">
              <CardBody className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-navy-900 mb-6">
                  Step 6: Loop Cadence - Continuous Improvement
                </h2>
                <p className="text-gray-600 mb-6">
                  Define the rhythm of your feedback loop and how you'll continuously improve it.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Complete Cycle Duration"
                      placeholder="How long is one complete feedback loop?"
                      selectedKeys={[plan.loopCadence.cycleDuration]}
                      onChange={(e) =>
                        e.target.value &&
                        setPlan((prev) => ({
                          ...prev,
                          loopCadence: { ...prev.loopCadence, cycleDuration: e.target.value },
                        }))
                      }
                      className="cursor-pointer"
                      items={cycleDurations.map((duration) => ({ key: duration, label: duration }))}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem className="text-black" key={item.key}>
                          {item.label}
                        </SelectItem>
                      )}
                    </Select>

                    <Select
                      label="Loop Review Frequency"
                      placeholder="How often will you review the loop itself?"
                      selectedKeys={[plan.loopCadence.reviewFrequency]}
                      onChange={(e) =>
                        e.target.value &&
                        setPlan((prev) => ({
                          ...prev,
                          loopCadence: { ...prev.loopCadence, reviewFrequency: e.target.value },
                        }))
                      }
                      className="cursor-pointer"
                      items={reviewFrequencies.map((frequency) => ({
                        key: frequency,
                        label: frequency,
                      }))}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem className="text-black" key={item.key}>
                          {item.label}
                        </SelectItem>
                      )}
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adjustment Triggers
                    </label>
                    <CheckboxGroup
                      value={plan.loopCadence.adjustmentTriggers}
                      onValueChange={(triggers) =>
                        setPlan((prev) => ({
                          ...prev,
                          loopCadence: {
                            ...prev.loopCadence,
                            adjustmentTriggers: triggers as string[],
                          },
                        }))
                      }
                      className="grid grid-cols-2 gap-2"
                    >
                      {adjustmentTriggers.map((trigger) => (
                        <Checkbox key={trigger} value={trigger} className="text-sm">
                          {trigger}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                    <p className="text-xs text-gray-500 mt-1">
                      What would make you adjust or improve your feedback loop?
                    </p>
                  </div>

                  <Card className="border border-orange-200 bg-orange-50">
                    <CardBody className="p-4">
                      <h4 className="font-medium text-orange-900 mb-2">
                        The Power of Continuous Cycles
                      </h4>
                      <div className="text-sm text-orange-800 space-y-1">
                        <p>• Each cycle feeds the next - learnings become inputs</p>
                        <p>• Short cycles enable faster course correction</p>
                        <p>• Regular reviews prevent the loop from becoming stale</p>
                        <p>• Adjustment triggers help you evolve with changing needs</p>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-between">
                  <Button
                    variant="bordered"
                    size="lg"
                    onPress={prevStep}
                    className="w-full sm:w-auto"
                  >
                    ← Previous
                  </Button>
                  <Button
                    color="primary"
                    size="lg"
                    onPress={generatePlan}
                    className="w-full sm:w-auto"
                  >
                    Generate Feedback Loop Plan
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
