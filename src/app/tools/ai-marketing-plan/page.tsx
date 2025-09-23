"use client";

import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@heroui/react";

import { EmailCaptureModal } from "@/components/tools/EmailCaptureModal";
import { PageHeader } from "@/components/ui/PageHeader";

interface MarketingPlan {
  id: string;
  businessName: string;
  industry: string;
  targetAudience: string;
  goals: string[];
  budget: string;
  timeline: string;
  channels: string[];
  uniqueValue: string;
  competitors: string;
  constraints: string;
  generatedPlan?: GeneratedPlan;
}

interface GeneratedPlan {
  executiveSummary: string;
  marketAnalysis: string;
  targetPersonas: Persona[];
  positioningStrategy: string;
  channelStrategy: ChannelDetail[];
  contentCalendar: ContentItem[];
  metrics: Metric[];
  budget: BudgetItem[];
  timeline: TimelineItem[];
}

interface Persona {
  name: string;
  description: string;
  painPoints: string[];
  channels: string[];
}

interface ChannelDetail {
  channel: string;
  strategy: string;
  budget: string;
  expectedROI: string;
}

interface ContentItem {
  week: number;
  theme: string;
  channels: string[];
  content: string[];
}

interface Metric {
  name: string;
  target: string;
  measurement: string;
}

interface BudgetItem {
  category: string;
  amount: string;
  percentage: number;
}

interface TimelineItem {
  phase: string;
  duration: string;
  activities: string[];
}

const industries = [
  "SaaS / Software",
  "E-commerce",
  "Healthcare",
  "Financial Services",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Retail",
  "Professional Services",
  "Other",
];

const channelOptions = [
  "Content Marketing",
  "SEO",
  "Social Media",
  "Email Marketing",
  "Paid Search (PPC)",
  "Influencer Marketing",
  "Webinars/Events",
  "Partner Marketing",
  "Direct Sales",
  "PR/Media Relations",
];

const goalOptions = [
  "Increase brand awareness",
  "Generate qualified leads",
  "Drive sales/revenue",
  "Launch new product",
  "Enter new market",
  "Improve customer retention",
  "Build thought leadership",
  "Competitive differentiation",
];

export default function AIMarketingPlanPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "AI Marketing Plan Generator", href: "/tools/ai-marketing-plan" },
  ];

  const [plan, setPlan] = useState<MarketingPlan>({
    id: Date.now().toString(),
    businessName: "",
    industry: "",
    targetAudience: "",
    goals: [],
    budget: "",
    timeline: "3",
    channels: [],
    uniqueValue: "",
    competitors: "",
    constraints: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const emailModal = useDisclosure();

  const updatePlan = (field: keyof MarketingPlan, value: MarketingPlan[keyof MarketingPlan]) => {
    setPlan({ ...plan, [field]: value });
  };

  const generatePlan = async () => {
    if (!plan.businessName || !plan.industry || !plan.targetAudience || plan.goals.length === 0) {
      alert("Please fill in all required fields");
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation with structured content
    setTimeout(() => {
      const generatedPlan: GeneratedPlan = {
        executiveSummary: `${plan.businessName} will leverage a multi-channel marketing strategy to ${plan.goals[0].toLowerCase()} within ${plan.timeline} months. With a budget of ${plan.budget}, we'll focus on ${plan.channels.slice(0, 3).join(", ")} to reach ${plan.targetAudience}. Our unique value proposition—${plan.uniqueValue}—will differentiate us from competitors like ${plan.competitors}.`,

        marketAnalysis: `The ${plan.industry} industry is experiencing rapid digital transformation. Your target audience (${plan.targetAudience}) increasingly relies on digital channels for research and purchasing decisions. Key competitors (${plan.competitors}) are investing heavily in ${plan.channels[0]}, creating both challenges and opportunities for differentiation through ${plan.uniqueValue}.`,

        targetPersonas: [
          {
            name: "Primary Decision Maker",
            description: `Senior-level professional in ${plan.targetAudience} who makes or influences purchasing decisions`,
            painPoints: ["Time constraints", "Need for proven ROI", "Risk aversion"],
            channels: plan.channels.slice(0, 2),
          },
          {
            name: "Technical Evaluator",
            description: `Mid-level professional who evaluates solutions for technical fit`,
            painPoints: ["Integration complexity", "Scalability concerns", "Support quality"],
            channels: plan.channels.slice(1, 3),
          },
        ],

        positioningStrategy: `Position ${plan.businessName} as the ${plan.uniqueValue} in the ${plan.industry} space. Emphasize how we uniquely solve the specific challenges faced by ${plan.targetAudience}, unlike ${plan.competitors} who focus on generic solutions.`,

        channelStrategy: plan.channels.slice(0, 4).map((channel, index) => ({
          channel,
          strategy: getChannelStrategy(channel, plan.industry),
          budget: `${Math.round((100 / plan.channels.length) * (1 + index * 0.1))}%`,
          expectedROI: `${150 + index * 25}%`,
        })),

        contentCalendar: [
          {
            week: 1,
            theme: "Launch & Awareness",
            channels: plan.channels.slice(0, 2),
            content: [
              "Brand story blog post",
              "Social media campaign kickoff",
              "Email announcement",
            ],
          },
          {
            week: 2,
            theme: "Education & Value",
            channels: plan.channels.slice(0, 3),
            content: ["How-to guide", "Webinar announcement", "Case study"],
          },
          {
            week: 3,
            theme: "Social Proof",
            channels: plan.channels.slice(1, 3),
            content: ["Customer testimonials", "Success metrics infographic", "Partner spotlight"],
          },
          {
            week: 4,
            theme: "Conversion Focus",
            channels: plan.channels,
            content: ["Free trial campaign", "Demo videos", "Comparison guide"],
          },
        ],

        metrics: [
          {
            name: "Lead Generation",
            target: "200% increase",
            measurement: "Marketing qualified leads (MQLs) per month",
          },
          {
            name: "Conversion Rate",
            target: "3.5%",
            measurement: "Visitor to lead conversion",
          },
          {
            name: "Customer Acquisition Cost",
            target: "< $500",
            measurement: "Total marketing spend / new customers",
          },
          {
            name: "Brand Awareness",
            target: "40% lift",
            measurement: "Aided brand recall surveys",
          },
        ],

        budget: [
          { category: "Paid Advertising", amount: "40%", percentage: 40 },
          { category: "Content Creation", amount: "25%", percentage: 25 },
          { category: "Tools & Technology", amount: "20%", percentage: 20 },
          { category: "Events & Partnerships", amount: "15%", percentage: 15 },
        ],

        timeline: [
          {
            phase: "Foundation (Month 1)",
            duration: "4 weeks",
            activities: [
              "Brand messaging",
              "Website optimization",
              "Content planning",
              "Tool setup",
            ],
          },
          {
            phase: "Launch (Month 2)",
            duration: "4 weeks",
            activities: [
              "Campaign launch",
              "Content publishing",
              "Paid ads activation",
              "PR outreach",
            ],
          },
          {
            phase: "Scale (Month 3+)",
            duration: "Ongoing",
            activities: [
              "Performance optimization",
              "A/B testing",
              "Channel expansion",
              "ROI analysis",
            ],
          },
        ],
      };

      setPlan({ ...plan, generatedPlan });
      setIsGenerating(false);
      setShowResults(true);
    }, 3000);
  };

  const getChannelStrategy = (channel: string, industry: string): string => {
    const strategies: Record<string, string> = {
      "Content Marketing": `Create in-depth guides and thought leadership content addressing ${industry} challenges`,
      SEO: `Target high-intent keywords specific to ${industry} solutions and pain points`,
      "Social Media": `Build community through educational content and customer success stories`,
      "Email Marketing": `Nurture leads with personalized content based on their stage in the buyer journey`,
      "Paid Search (PPC)": `Target competitor keywords and high-conversion industry terms`,
      "Influencer Marketing": `Partner with ${industry} thought leaders for authentic endorsements`,
      "Webinars/Events": `Host educational sessions demonstrating expertise and product value`,
      "Partner Marketing": `Collaborate with complementary ${industry} vendors for co-marketing`,
    };
    return strategies[channel] || `Develop targeted campaigns for ${channel}`;
  };

  const handleDownload = () => {
    // Show email capture modal
    emailModal.onOpen();
  };

  const getShareableLink = () => {
    // In production, this would save to a database and return a real URL
    return `https://drexus.com/tools/marketing-plan/${plan.id}`;
  };

  if (showResults && plan.generatedPlan) {
    const { generatedPlan } = plan;

    return (
      <>
        <PageHeader
          title="Your Marketing Plan is Ready"
          subtitle="AI-powered strategic marketing roadmap"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <Card className="mb-8">
              <CardBody className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-2">{plan.businessName}</h2>
                  <p className="text-lg text-gray-600">
                    {plan.timeline}-Month Marketing Plan • {plan.budget} Budget
                  </p>
                  <div className="flex justify-center gap-2 mt-4">
                    {plan.goals.slice(0, 3).map((goal, idx) => (
                      <Chip key={idx} color="primary" variant="flat" size="sm">
                        {goal}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Executive Summary</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {generatedPlan.executiveSummary}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Market Analysis</h3>
                    <p className="text-gray-700 leading-relaxed">{generatedPlan.marketAnalysis}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Target Personas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {generatedPlan.targetPersonas.map((persona, idx) => (
                        <Card key={idx} className="border">
                          <CardBody className="p-4">
                            <h4 className="font-semibold text-navy-700 mb-2">{persona.name}</h4>
                            <p className="text-sm text-gray-600 mb-3">{persona.description}</p>
                            <div className="space-y-2">
                              <div>
                                <span className="text-xs font-medium text-gray-500">
                                  Pain Points:
                                </span>
                                <ul className="text-xs text-gray-600 ml-4 list-disc">
                                  {persona.painPoints.map((pain, i) => (
                                    <li key={i}>{pain}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <span className="text-xs font-medium text-gray-500">
                                  Preferred Channels:
                                </span>
                                <div className="flex gap-1 mt-1">
                                  {persona.channels.map((channel, i) => (
                                    <Chip key={i} size="sm" variant="flat">
                                      {channel}
                                    </Chip>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Channel Strategy</h3>
                    <div className="space-y-3">
                      {generatedPlan.channelStrategy.map((channel, idx) => (
                        <Card key={idx} className="border">
                          <CardBody className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-navy-700">{channel.channel}</h4>
                                <p className="text-sm text-gray-600 mt-1">{channel.strategy}</p>
                              </div>
                              <div className="text-right ml-4">
                                <div className="text-sm font-medium text-navy-600">
                                  {channel.budget}
                                </div>
                                <div className="text-xs text-gray-500">
                                  ROI: {channel.expectedROI}
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">Success Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {generatedPlan.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-navy-700">{metric.name}</div>
                            <div className="text-sm text-gray-600">{metric.measurement}</div>
                          </div>
                          <div className="text-2xl font-bold text-green-600">{metric.target}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-4">
                      Implementation Timeline
                    </h3>
                    <div className="space-y-4">
                      {generatedPlan.timeline.map((phase, idx) => (
                        <div key={idx} className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-navy-700">
                            {phase.phase}{" "}
                            <span className="text-sm font-normal text-gray-500">
                              ({phase.duration})
                            </span>
                          </h4>
                          <ul className="text-sm text-gray-600 mt-2 space-y-1">
                            {phase.activities.map((activity, i) => (
                              <li key={i}>• {activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Share this plan:</p>
                    <div className="flex items-center gap-2">
                      <Input value={getShareableLink()} readOnly size="sm" className="max-w-xs" />
                      <Button
                        size="sm"
                        variant="flat"
                        onPress={() => {
                          navigator.clipboard.writeText(getShareableLink());
                          alert("Link copied!");
                        }}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button color="primary" size="lg" onPress={handleDownload}>
                      Download Plan
                    </Button>
                    <Button variant="bordered" size="lg" onPress={() => setShowResults(false)}>
                      Edit Plan
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <EmailCaptureModal
          isOpen={emailModal.isOpen}
          onClose={emailModal.onClose}
          toolName="Marketing Plan"
        />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="AI Marketing Plan Generator"
        subtitle="Generate a structured marketing plan with AI assistance"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <Card>
            <CardBody className="p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-navy-900 mb-6">
                    Tell us about your business
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Business Name"
                      placeholder="e.g., Acme Software"
                      value={plan.businessName}
                      onChange={(e) => updatePlan("businessName", e.target.value)}
                      isRequired
                    />

                    <Select
                      label="Industry"
                      placeholder="Select your industry"
                      selectedKeys={plan.industry ? [plan.industry] : []}
                      onChange={(e) => updatePlan("industry", e.target.value)}
                      isRequired
                      items={industries.map((industry) => ({ key: industry, label: industry }))}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem key={item.key}>{item.label}</SelectItem>
                      )}
                    </Select>
                  </div>

                  <div className="mt-6">
                    <Textarea
                      label="Target Audience"
                      placeholder="Describe your ideal customers (e.g., SMB marketing managers in tech companies with 50-200 employees)"
                      value={plan.targetAudience}
                      onChange={(e) => updatePlan("targetAudience", e.target.value)}
                      minRows={2}
                      isRequired
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Marketing Goals</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Select your primary marketing objectives
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {goalOptions.map((goal) => (
                      <Card
                        key={goal}
                        isPressable
                        className={`border cursor-pointer ${
                          plan.goals.includes(goal) ? "border-primary bg-primary-50" : ""
                        }`}
                        onPress={() => {
                          const newGoals = plan.goals.includes(goal)
                            ? plan.goals.filter((g) => g !== goal)
                            : [...plan.goals, goal];
                          updatePlan("goals", newGoals);
                        }}
                      >
                        <CardBody className="p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{goal}</span>
                            {plan.goals.includes(goal) && <span className="text-primary">✓</span>}
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Budget & Timeline</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Marketing Budget"
                      placeholder="e.g., $10,000/month"
                      value={plan.budget}
                      onChange={(e) => updatePlan("budget", e.target.value)}
                      isRequired
                    />

                    <Select
                      label="Planning Timeline"
                      selectedKeys={[plan.timeline]}
                      onChange={(e) => updatePlan("timeline", e.target.value)}
                      isRequired
                      items={[
                        { key: "3", label: "3 months" },
                        { key: "6", label: "6 months" },
                        { key: "12", label: "12 months" },
                      ]}
                    >
                      {(item: { key: string; label: string }) => (
                        <SelectItem key={item.key}>{item.label}</SelectItem>
                      )}
                    </Select>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Marketing Channels</h3>
                  <p className="text-sm text-gray-600 mb-4">Select channels you want to focus on</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {channelOptions.map((channel) => (
                      <Card
                        key={channel}
                        isPressable
                        className={`border cursor-pointer ${
                          plan.channels.includes(channel) ? "border-primary bg-primary-50" : ""
                        }`}
                        onPress={() => {
                          const newChannels = plan.channels.includes(channel)
                            ? plan.channels.filter((c) => c !== channel)
                            : [...plan.channels, channel];
                          updatePlan("channels", newChannels);
                        }}
                      >
                        <CardBody className="p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{channel}</span>
                            {plan.channels.includes(channel) && (
                              <span className="text-primary">✓</span>
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Additional Context</h3>

                  <div className="space-y-4">
                    <Textarea
                      label="Unique Value Proposition"
                      placeholder="What makes your product/service unique?"
                      value={plan.uniqueValue}
                      onChange={(e) => updatePlan("uniqueValue", e.target.value)}
                      minRows={2}
                    />

                    <Input
                      label="Main Competitors"
                      placeholder="e.g., Competitor A, Competitor B"
                      value={plan.competitors}
                      onChange={(e) => updatePlan("competitors", e.target.value)}
                    />

                    <Textarea
                      label="Constraints or Special Requirements"
                      placeholder="Any limitations, compliance requirements, or special considerations?"
                      value={plan.constraints}
                      onChange={(e) => updatePlan("constraints", e.target.value)}
                      minRows={2}
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    color="primary"
                    size="lg"
                    onPress={generatePlan}
                    isLoading={isGenerating}
                    isDisabled={
                      !plan.businessName ||
                      !plan.industry ||
                      !plan.targetAudience ||
                      plan.goals.length === 0 ||
                      !plan.budget ||
                      plan.channels.length === 0
                    }
                  >
                    {isGenerating ? "Generating Your Plan..." : "Generate Marketing Plan"}
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}
