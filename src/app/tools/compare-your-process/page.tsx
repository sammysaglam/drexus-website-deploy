"use client";

import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Progress,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";

import { EmailCaptureModal } from "@/components/tools/EmailCaptureModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { track } from "@/lib/analytics";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface AssessmentScores {
  planning: number;
  decisions: number;
  feedback: number;
  process: number;
  delivery: number;
}

interface AssessmentData {
  teamName: string;
  role: string;
  companySize: string;
  industry: string;
  scores: AssessmentScores;
}

interface Gap {
  name: string;
  description: string;
  impact: "high" | "medium" | "low";
  quickWin: string;
  firstStep: string;
}

interface RoleRecommendations {
  focus: string;
  quickWins: string[];
  priorityGaps: string[];
}

const roles = ROLE_OPTIONS;
const companySizes = COMPANY_SIZE_OPTIONS;
const industries = INDUSTRY_OPTIONS;

const assessmentQuestions = {
  planning: {
    title: "Planning Predictability",
    question: "How often do your sprints ship what was planned?",
    options: [
      { value: 5, label: "90%+ stories completed as planned" },
      { value: 4, label: "75-90% completion rate" },
      { value: 3, label: "50-75% completion rate" },
      { value: 2, label: "25-50% completion rate" },
      { value: 1, label: "<25% or don't track" },
    ],
  },
  decisions: {
    title: "Decision Velocity",
    question: "How long from idea to decision?",
    options: [
      { value: 5, label: "<1 week for most decisions" },
      { value: 4, label: "1-2 weeks typical" },
      { value: 3, label: "2-4 weeks typical" },
      { value: 2, label: "1-2 months typical" },
      { value: 1, label: ">2 months or decisions revisited" },
    ],
  },
  feedback: {
    title: "Feedback Loops",
    question: "How quickly do you learn from users?",
    options: [
      { value: 5, label: "Daily user feedback" },
      { value: 4, label: "Weekly user feedback" },
      { value: 3, label: "Sprint-ly feedback" },
      { value: 2, label: "Monthly feedback" },
      { value: 1, label: "Quarterly or less" },
    ],
  },
  process: {
    title: "Process Clarity",
    question: "Does everyone know the process?",
    options: [
      { value: 5, label: "Written, followed, improved regularly" },
      { value: 4, label: "Written and mostly followed" },
      { value: 3, label: "Known but not written" },
      { value: 2, label: "Varies by team/project" },
      { value: 1, label: "No consistent process" },
    ],
  },
  delivery: {
    title: "Delivery Rhythm",
    question: "How predictable is your shipping?",
    options: [
      { value: 5, label: "Ship every week like clockwork" },
      { value: 4, label: "Ship every sprint reliably" },
      { value: 3, label: "Ship monthly with some delays" },
      { value: 2, label: "Ship quarterly, often late" },
      { value: 1, label: "Ship 'when it's ready'" },
    ],
  },
};

const gaps: Record<string, Gap> = {
  planning: {
    name: "The Planning Theater",
    description: "Elaborate planning that ignores reality",
    impact: "high",
    quickWin: "Cut next sprint scope by 30%",
    firstStep: "Smaller batches, shorter cycles",
  },
  decisions: {
    name: "The Decision Bottleneck",
    description: "Waiting for perfect information",
    impact: "high",
    quickWin: "Set 48-hour decision SLA",
    firstStep: "Time-boxed decisions with clear owners",
  },
  feedback: {
    name: "The Feedback Desert",
    description: "Building in isolation from users",
    impact: "medium",
    quickWin: "Schedule 5 user calls this week",
    firstStep: "Weekly user contact for all roles",
  },
  process: {
    name: "The Process Mystery",
    description: "How do we do X again?",
    impact: "medium",
    quickWin: "Document your worst process",
    firstStep: "Written processes with clear owners",
  },
  delivery: {
    name: "The Random Release",
    description: "Shipping when 'ready'",
    impact: "high",
    quickWin: "Pick a ship day, keep it sacred",
    firstStep: "Fixed cadence regardless of scope",
  },
};

const roleRecommendations: Record<string, RoleRecommendations> = {
  "CEO/Founder": {
    focus: "Speed",
    quickWins: [
      "Cut your next feature scope by 50%. Ship this week instead of next month.",
      "Create 24-hour decision SLA",
      "Start weekly demo days",
    ],
    priorityGaps: ["planning", "decisions", "delivery"],
  },
  CTO: {
    focus: "Systems",
    quickWins: [
      "Automate one manual process this week",
      "Add latency budgets",
      "Run 2-week vendor pilots",
    ],
    priorityGaps: ["delivery", "process", "decisions"],
  },
  "VP Engineering": {
    focus: "Systems",
    quickWins: [
      "Automate one manual process this week",
      "Add latency budgets",
      "Run 2-week vendor pilots",
    ],
    priorityGaps: ["delivery", "process", "decisions"],
  },
  "Engineering Manager": {
    focus: "Process",
    quickWins: [
      "Document one workflow per week",
      "Create deployment schedule",
      "Implement daily standups",
    ],
    priorityGaps: ["process", "delivery", "feedback"],
  },
  "Senior Engineer": {
    focus: "Quality",
    quickWins: [
      "Add automated testing to one feature",
      "Implement code review process",
      "Set up monitoring alerts",
    ],
    priorityGaps: ["process", "delivery", "feedback"],
  },
  Engineer: {
    focus: "Quality",
    quickWins: [
      "Add automated testing to one feature",
      "Implement code review process",
      "Set up monitoring alerts",
    ],
    priorityGaps: ["process", "delivery", "feedback"],
  },
  "Product Manager": {
    focus: "Learning",
    quickWins: [
      "Talk to 5 users this week. Document patterns.",
      "Start 4 experiments monthly",
      "Implement ICE scoring",
    ],
    priorityGaps: ["planning", "feedback", "decisions"],
  },
  "Project Manager": {
    focus: "Process",
    quickWins: [
      "Document one workflow per week",
      "Create deployment schedule",
      "Implement daily standups",
    ],
    priorityGaps: ["process", "delivery", "feedback"],
  },
  "Scrum Master": {
    focus: "Process",
    quickWins: [
      "Document one workflow per week",
      "Create deployment schedule",
      "Implement daily standups",
    ],
    priorityGaps: ["process", "delivery", "feedback"],
  },
  "DevOps Engineer": {
    focus: "Systems",
    quickWins: [
      "Automate one manual process this week",
      "Add latency budgets",
      "Run 2-week vendor pilots",
    ],
    priorityGaps: ["delivery", "process", "decisions"],
  },
  "Data Scientist": {
    focus: "Learning",
    quickWins: [
      "Talk to 5 users this week. Document patterns.",
      "Start 4 experiments monthly",
      "Implement ICE scoring",
    ],
    priorityGaps: ["planning", "feedback", "decisions"],
  },
  "Business Analyst": {
    focus: "Learning",
    quickWins: [
      "Talk to 5 users this week. Document patterns.",
      "Start 4 experiments monthly",
      "Implement ICE scoring",
    ],
    priorityGaps: ["planning", "feedback", "decisions"],
  },
  Consultant: {
    focus: "Improvement",
    quickWins: [
      "Start with your lowest score area",
      "Implement one change at a time",
      "Measure before/after impact",
    ],
    priorityGaps: ["planning", "decisions", "delivery"],
  },
  Other: {
    focus: "Improvement",
    quickWins: [
      "Start with your lowest score area",
      "Implement one change at a time",
      "Measure before/after impact",
    ],
    priorityGaps: ["planning", "decisions", "delivery"],
  },
};

export default function CompareYourProcessPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Compare Your Process", href: "/tools/compare-your-process" },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    teamName: "",
    role: "",
    companySize: "",
    industry: "",
    scores: {
      planning: 0,
      decisions: 0,
      feedback: 0,
      process: 0,
      delivery: 0,
    },
  });
  const [showResults, setShowResults] = useState(false);

  const emailModal = useDisclosure();

  const updateAssessmentData = (field: keyof AssessmentData, value: string) => {
    setAssessmentData({ ...assessmentData, [field]: value });
  };

  const updateScore = (dimension: keyof AssessmentScores, score: number) => {
    setAssessmentData({
      ...assessmentData,
      scores: { ...assessmentData.scores, [dimension]: score },
    });
  };

  const getTotalScore = () => {
    return Object.values(assessmentData.scores).reduce((sum, score) => sum + score, 0);
  };

  const getScoreLevel = (totalScore: number) => {
    if (totalScore >= 20)
      return {
        level: "Excellent",
        color: "success",
        message: "You're already using most Drexus principles!",
      };
    if (totalScore >= 15)
      return {
        level: "Good",
        color: "warning",
        message: "Clear gaps but strong foundation",
      };
    if (totalScore >= 10)
      return {
        level: "Needs Work",
        color: "danger",
        message: "Significant opportunity for improvement",
      };
    return { level: "Start Fresh", color: "danger", message: "Start with one principle at a time" };
  };

  const getGaps = () => {
    const identifiedGaps = [];
    for (const [key, score] of Object.entries(assessmentData.scores)) {
      if (score < 3) {
        identifiedGaps.push({ ...gaps[key], dimension: key });
      }
    }
    return identifiedGaps.sort((a, b) => {
      const impactOrder = { high: 3, medium: 2, low: 1 };
      return impactOrder[b.impact] - impactOrder[a.impact];
    });
  };

  const getRoleRecommendations = () => {
    const selectedRole = roles.find((role) => role.key === assessmentData.role);
    if (!selectedRole) {
      return roleRecommendations["Other"];
    }
    return roleRecommendations[selectedRole.value] || roleRecommendations["Other"];
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      // Find the descriptive values for analytics - these should always be present
      const selectedRole = roles.find((role) => role.key === assessmentData.role);
      const selectedCompanySize = companySizes.find(
        (size) => size.key === assessmentData.companySize
      );
      const selectedIndustry = industries.find(
        (industry) => industry.key === assessmentData.industry
      );

      // Ensure all required values are present
      if (!selectedRole || !selectedCompanySize || !selectedIndustry) {
        console.error("Missing required field data");
        return;
      }

      // Track the tool execution when getting results
      track("Executed Marketing Tool", {
        location: "/tools/compare-your-process",
        toolName: "Compare Your Process",
        industry: selectedIndustry.value,
        companySize: selectedCompanySize.value,
        role: selectedRole.value,
      });

      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const _handleDownload = () => {
    emailModal.onOpen();
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAssessmentData({
      teamName: "",
      role: "",
      companySize: "",
      industry: "",
      scores: {
        planning: 0,
        decisions: 0,
        feedback: 0,
        process: 0,
        delivery: 0,
      },
    });
    setShowResults(false);
  };

  const getProgressPercentage = () => {
    return ((currentStep + 1) / 6) * 100;
  };

  if (showResults) {
    const totalScore = getTotalScore();
    const scoreLevel = getScoreLevel(totalScore);
    const identifiedGaps = getGaps();
    const recommendations = getRoleRecommendations();

    return (
      <>
        <PageHeader
          title="Your Process Assessment Results"
          subtitle="See how your team compares to the Drexus Way"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-lg">
            <Card className="mb-8">
              <CardBody className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-2">
                    {assessmentData.teamName} Process Assessment
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    {assessmentData.role} • {assessmentData.companySize} • {assessmentData.industry}
                  </p>

                  <div className="flex justify-center items-center gap-4 mb-6">
                    <div className="text-center">
                      <div className={`text-4xl font-bold text-${scoreLevel.color}-600`}>
                        {totalScore}/25
                      </div>
                      <div className="text-sm text-gray-600">Total Score</div>
                    </div>
                    <div className="text-center">
                      <Chip
                        color={scoreLevel.color as "success" | "warning" | "danger"}
                        variant="flat"
                        size="lg"
                      >
                        {scoreLevel.level}
                      </Chip>
                    </div>
                  </div>

                  <p className="text-gray-700">{scoreLevel.message}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                  {Object.entries(assessmentData.scores).map(([dimension, score]) => (
                    <div key={dimension} className="text-center">
                      <div className="text-2xl font-bold text-navy-700">{score}/5</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {assessmentQuestions[dimension as keyof typeof assessmentQuestions].title}
                      </div>
                      <Progress
                        value={score * 20}
                        color={score >= 4 ? "success" : score >= 3 ? "warning" : "danger"}
                        className="mt-2"
                      />
                    </div>
                  ))}
                </div>

                {identifiedGaps.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">
                      Priority Gaps to Address
                    </h3>
                    <div className="space-y-3">
                      {identifiedGaps.map((gap, idx) => (
                        <Card key={idx} className="border">
                          <CardBody className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-navy-700">{gap.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{gap.description}</p>
                                <div className="mt-2">
                                  <Chip
                                    size="sm"
                                    color={
                                      gap.impact === "high"
                                        ? "danger"
                                        : gap.impact === "medium"
                                          ? "warning"
                                          : "default"
                                    }
                                    variant="flat"
                                  >
                                    {gap.impact} impact
                                  </Chip>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 pt-3 border-t">
                              <div className="text-sm">
                                <strong>Quick Win:</strong> {gap.quickWin}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                <strong>First Step:</strong> {gap.firstStep}
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-navy-800 mb-4">
                    Recommendations for {assessmentData.role}
                  </h3>
                  <Card className="border">
                    <CardBody className="p-4">
                      <div className="mb-4">
                        <h4 className="font-semibold text-navy-700 mb-2">
                          Focus Area: {recommendations.focus}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Based on your role and current scores, here's where to focus your
                          improvement efforts.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-navy-700 mb-2">Quick Wins This Week:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {recommendations.quickWins.map((win, idx) => (
                            <li key={idx}>• {win}</li>
                          ))}
                        </ul>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div className="flex justify-center gap-4">
                  {/* <Button color="primary" size="lg" onPress={handleDownload}>
                    Download Your Results
                  </Button> */}
                  <Button variant="bordered" size="lg" onPress={resetAssessment}>
                    Retake Assessment
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <EmailCaptureModal
          isOpen={emailModal.isOpen}
          onClose={emailModal.onClose}
          toolName="Process Assessment Results"
        />
      </>
    );
  }

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-navy-900 mb-4">Tell us about your team</h2>
            <p className="text-gray-600">This helps us provide personalized recommendations</p>
          </div>

          <div className="space-y-6">
            <Input
              label="Team/Company Name"
              placeholder="e.g., Acme Software"
              value={assessmentData.teamName}
              onChange={(e) => updateAssessmentData("teamName", e.target.value)}
              isRequired
            />

            <Select
              label="Your Role"
              placeholder="Select your role"
              selectedKeys={assessmentData.role ? [assessmentData.role] : []}
              onChange={(e) => updateAssessmentData("role", e.target.value)}
              isRequired
              items={roles.map((role) => ({ key: role.key, label: role.label }))}
            >
              {(item: { key: string; label: string }) => (
                <SelectItem className="text-black" key={item.key}>
                  {item.label}
                </SelectItem>
              )}
            </Select>

            <Select
              label="Company Size"
              placeholder="Select company size"
              selectedKeys={assessmentData.companySize ? [assessmentData.companySize] : []}
              onChange={(e) => updateAssessmentData("companySize", e.target.value)}
              isRequired
              items={companySizes.map((size) => ({ key: size.key, label: size.label }))}
            >
              {(item: { key: string; label: string }) => (
                <SelectItem className="text-black" key={item.key}>
                  {item.label}
                </SelectItem>
              )}
            </Select>

            <Select
              label="Industry"
              placeholder="Select your industry"
              selectedKeys={assessmentData.industry ? [assessmentData.industry] : []}
              onChange={(e) => updateAssessmentData("industry", e.target.value)}
              isRequired
              items={industries.map((industry) => ({ key: industry.key, label: industry.label }))}
            >
              {(item: { key: string; label: string }) => (
                <SelectItem className="text-black" key={item.key}>
                  {item.label}
                </SelectItem>
              )}
            </Select>
          </div>
        </div>
      );
    }

    const dimension = Object.keys(assessmentQuestions)[
      currentStep - 1
    ] as keyof typeof assessmentQuestions;
    const question = assessmentQuestions[dimension];

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-navy-900 mb-4">{question.title}</h2>
          <p className="text-gray-600">{question.question}</p>
        </div>

        <RadioGroup
          value={assessmentData.scores[dimension].toString()}
          onValueChange={(value) => updateScore(dimension, parseInt(value))}
          className="space-y-4"
        >
          {question.options.map((option) => (
            <Radio key={option.value} value={option.value.toString()}>
              <div className="ml-2">
                <div className="font-medium">{option.label}</div>
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    );
  };

  return (
    <>
      <PageHeader
        title="Compare Your Process to the Drexus Way"
        subtitle="5-minute assessment to identify process gaps and get personalized recommendations"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <Card className="mb-8">
            <CardBody className="p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Step {currentStep + 1} of 6
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round(getProgressPercentage())}% Complete
                  </span>
                </div>
                <Progress value={getProgressPercentage()} className="w-full" />
              </div>

              {renderStep()}

              <div className="flex justify-between mt-8">
                <Button variant="bordered" onPress={prevStep} isDisabled={currentStep === 0}>
                  Previous
                </Button>
                <Button
                  color="primary"
                  onPress={nextStep}
                  isDisabled={
                    (currentStep === 0 &&
                      (!assessmentData.teamName ||
                        !assessmentData.role ||
                        !assessmentData.companySize ||
                        !assessmentData.industry)) ||
                    (currentStep > 0 &&
                      assessmentData.scores[
                        Object.keys(assessmentQuestions)[currentStep - 1] as keyof AssessmentScores
                      ] === 0)
                  }
                >
                  {currentStep === 5 ? "Get Results" : "Next"}
                </Button>
              </div>
            </CardBody>
          </Card>

          <div className="mt-24 relative">
            <div className="relative max-w-6xl mx-auto px-8">
              {/* Header Section */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl mb-8 shadow-lg shadow-blue-500/25">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="space-y-4">
                  <h3 className="text-5xl font-bold text-gray-900 tracking-tight">
                    What is the Drexus Way?
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                    The Drexus Way is built on three core principles that compound into exponential
                    velocity and transform how teams deliver value at scale.
                  </p>
                </div>
              </div>

              {/* Principles Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-20">
                <div className="group">
                  <div className="bg-white backdrop-blur-sm border border-gray-200/60 rounded-3xl p-10 h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-300/50 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative">
                      <div className="flex items-center mb-8">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-blue-500/25">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 leading-tight">
                          Cadence Over Perfection
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg font-medium">
                        Regular delivery beats sporadic excellence. Consistent rhythm creates
                        momentum, learning opportunities, and builds team confidence through
                        predictable outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white backdrop-blur-sm border border-gray-200/60 rounded-3xl p-10 h-full hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:border-green-300/50 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative">
                      <div className="flex items-center mb-8">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-green-500/25">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 leading-tight">
                          Cut-Lines Over Compromise
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg font-medium">
                        Clear decisions about what's in and what's out. Focus beats feature creep
                        every time, enabling teams to ship quality features faster and more
                        reliably.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white backdrop-blur-sm border border-gray-200/60 rounded-3xl p-10 h-full hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-purple-300/50 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50/50 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative">
                      <div className="flex items-center mb-8">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-purple-500/25">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 leading-tight">
                          Receipts Over Meetings
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg font-medium">
                        Written artifacts beat verbal updates. Documentation creates accountability,
                        clarity, and enables asynchronous collaboration across distributed teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-12 text-center border border-navy-200/60 shadow-xl shadow-navy-500/10">
                  <div className="absolute inset-0 bg-white rounded-3xl"></div>
                  <div className="relative max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="px-6 py-3 bg-white/60 rounded-2xl shadow-lg">
                          <span className="text-5xl font-black text-blue-600">3x</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                        <div className="px-6 py-3 bg-white/60 rounded-2xl shadow-lg">
                          <span className="text-5xl font-black text-green-600">4x</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-6">The Compound Effect</h4>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
                      Teams that adopt all three principles don't just ship 3x more - they ship 4x
                      more. The principles multiply, not add. Each principle amplifies the others,
                      creating exponential velocity that compounds over time.
                    </p>
                    <div className="mt-8 inline-flex items-center space-x-2 text-sm font-semibold text-blue-600 bg-blue-100/50 px-4 py-2 rounded-full">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      <span>Proven methodology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
