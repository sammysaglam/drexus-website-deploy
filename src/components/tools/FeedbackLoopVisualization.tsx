"use client";

import React, { useState } from "react";

import { Card, CardBody, Chip } from "@heroui/react";

interface FeedbackLoopVisualizationProps {
  plan: {
    feedbackSources: {
      internal: { enabled: boolean; methods: string[]; frequency: string; owner: string };
      external: { enabled: boolean; methods: string[]; frequency: string; owner: string };
      analytics: {
        enabled: boolean;
        tools: string[];
        metrics: string[];
        monitoringFrequency: string;
      };
    };
    analysisProcess: {
      method: string;
      criteria: string[];
      decisionMakers: string;
      analysisCadence: string;
    };
    implementation: {
      approach: string;
      iterationLength: string;
      releaseStrategy: string;
      experimentsPerCycle: number;
    };
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
    loopCadence: {
      cycleDuration: string;
      reviewFrequency: string;
      adjustmentTriggers: string[];
    };
  };
}

interface PhaseData {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  details: {
    title: string;
    items: string[];
    frequency?: string;
    owner?: string;
  };
}

export default function FeedbackLoopVisualization({ plan }: FeedbackLoopVisualizationProps) {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const phases: PhaseData[] = [
    {
      id: "collection",
      name: "Collection",
      icon: "📥",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      details: {
        title: "Feedback Collection",
        items: [
          ...(plan.feedbackSources.internal.enabled
            ? [
                `Internal: ${plan.feedbackSources.internal.methods.slice(0, 2).join(", ")}${plan.feedbackSources.internal.methods.length > 2 ? "..." : ""}`,
              ]
            : []),
          ...(plan.feedbackSources.external.enabled
            ? [
                `External: ${plan.feedbackSources.external.methods.slice(0, 2).join(", ")}${plan.feedbackSources.external.methods.length > 2 ? "..." : ""}`,
              ]
            : []),
          ...(plan.feedbackSources.analytics.enabled
            ? [
                `Analytics: ${plan.feedbackSources.analytics.tools.slice(0, 2).join(", ")}${plan.feedbackSources.analytics.tools.length > 2 ? "..." : ""}`,
              ]
            : []),
        ],
        frequency: plan.feedbackSources.internal.enabled
          ? plan.feedbackSources.internal.frequency
          : plan.feedbackSources.external.enabled
            ? plan.feedbackSources.external.frequency
            : plan.feedbackSources.analytics.monitoringFrequency,
        owner: plan.feedbackSources.internal.enabled
          ? plan.feedbackSources.internal.owner
          : plan.feedbackSources.external.enabled
            ? plan.feedbackSources.external.owner
            : "Analytics Team",
      },
    },
    {
      id: "analysis",
      name: "Analysis",
      icon: "🔍",
      color: "text-green-700",
      bgColor: "bg-green-50",
      details: {
        title: "Analysis & Prioritization",
        items: [
          `Method: ${plan.analysisProcess.method}`,
          `Criteria: ${plan.analysisProcess.criteria.slice(0, 3).join(", ")}${plan.analysisProcess.criteria.length > 3 ? "..." : ""}`,
          `Decision Makers: ${plan.analysisProcess.decisionMakers}`,
        ],
        frequency: plan.analysisProcess.analysisCadence,
      },
    },
    {
      id: "implementation",
      name: "Implementation",
      icon: "⚡",
      color: "text-purple-700",
      bgColor: "bg-purple-50",
      details: {
        title: "Implementation & Release",
        items: [
          `Approach: ${plan.implementation.approach}`,
          `Iteration: ${plan.implementation.iterationLength}`,
          `Release: ${plan.implementation.releaseStrategy}`,
          `Experiments: ${plan.implementation.experimentsPerCycle} per cycle`,
        ],
      },
    },
    {
      id: "followup",
      name: "Follow-up",
      icon: "📊",
      color: "text-orange-700",
      bgColor: "bg-orange-50",
      details: {
        title: "Measurement & Reporting",
        items: [
          `Metrics: ${plan.followUp.successMetrics.length} success metrics`,
          `Reporting: ${plan.followUp.reportingMethod} (${plan.followUp.reportingFrequency})`,
          `Stakeholders: ${plan.followUp.stakeholders}`,
          ...(plan.followUp.userCommunication
            ? [`User Communication: ${plan.followUp.userCommunicationMethod}`]
            : []),
        ],
        frequency: plan.followUp.reportingFrequency,
      },
    },
  ];

  const centerX = 150;
  const centerY = 150;
  const radius = 120;
  const phaseAngle = (2 * Math.PI) / 4;

  const getPhasePosition = (index: number) => {
    const angle = index * phaseAngle - Math.PI / 2; // Start from top
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y, angle };
  };

  const getArrowPosition = (index: number) => {
    const angle = index * phaseAngle - Math.PI / 2 + phaseAngle / 2;
    const x = centerX + (radius - 20) * Math.cos(angle);
    const y = centerY + (radius - 20) * Math.sin(angle);
    return { x, y, angle };
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* SVG Visualization */}
        <div className="flex justify-center mb-6 sm:mb-8 px-4">
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 300 300"
              className="overflow-visible max-w-full h-auto"
            >
              {/* Background circle */}
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
                strokeDasharray="5,5"
              />

              {/* Phase circles and labels */}
              {phases.map((phase, index) => {
                const position = getPhasePosition(index);
                const isActive = activePhase === phase.id;

                return (
                  <g key={phase.id}>
                    {/* Phase circle */}
                    <circle
                      cx={position.x}
                      cy={position.y}
                      r="25"
                      fill={isActive ? "#3b82f6" : "#f3f4f6"}
                      stroke={isActive ? "#1d4ed8" : "#d1d5db"}
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-200 hover:fill-blue-100 hover:stroke-blue-400"
                      onClick={() => setActivePhase(isActive ? null : phase.id)}
                    />

                    {/* Phase icon */}
                    <text
                      x={position.x}
                      y={position.y + 5}
                      textAnchor="middle"
                      className="text-lg cursor-pointer select-none"
                      onClick={() => setActivePhase(isActive ? null : phase.id)}
                    >
                      {phase.icon}
                    </text>

                    {/* Phase name */}
                    <text
                      x={position.x}
                      y={position.y + 45}
                      textAnchor="middle"
                      className={`text-xs font-medium cursor-pointer select-none ${isActive ? "text-blue-700" : "text-gray-600"}`}
                      onClick={() => setActivePhase(isActive ? null : phase.id)}
                    >
                      {phase.name}
                    </text>
                  </g>
                );
              })}

              {/* Arrows between phases */}
              {phases.map((_, index) => {
                const arrowPos = getArrowPosition(index);
                const nextArrowPos = getArrowPosition((index + 1) % 4);

                return (
                  <g key={`arrow-${index}`}>
                    {/* Arrow line */}
                    <line
                      x1={arrowPos.x}
                      y1={arrowPos.y}
                      x2={nextArrowPos.x}
                      y2={nextArrowPos.y}
                      stroke="#6b7280"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />

                    {/* Arrow head */}
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                      </marker>
                    </defs>
                  </g>
                );
              })}

              {/* Center circle with cycle duration */}
              <circle
                cx={centerX}
                cy={centerY}
                r="40"
                fill="#1e40af"
                stroke="#1e3a8a"
                strokeWidth="2"
              />
              <text
                x={centerX}
                y={centerY - 5}
                textAnchor="middle"
                className="text-white text-xs font-bold"
                fill="white"
              >
                {plan.loopCadence.cycleDuration}
              </text>
              <text
                x={centerX}
                y={centerY + 8}
                textAnchor="middle"
                className="text-white text-xs"
                fill="white"
              >
                cycle
              </text>
            </svg>
          </div>
        </div>

        {/* Phase Details */}
        {activePhase && (
          <Card className="mb-6">
            <CardBody className="p-6">
              {(() => {
                const phase = phases.find((p) => p.id === activePhase);
                if (!phase) return null;

                return (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{phase.icon}</span>
                      <h3 className="text-xl font-semibold text-navy-900">{phase.details.title}</h3>
                    </div>

                    <div className="space-y-3">
                      {phase.details.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-navy-600 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}

                      {phase.details.frequency && (
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <Chip size="sm" color="primary" variant="flat">
                              {phase.details.frequency}
                            </Chip>
                            <span className="text-sm text-gray-600">frequency</span>
                          </div>
                        </div>
                      )}

                      {phase.details.owner && (
                        <div className="mt-2">
                          <div className="flex items-center gap-2">
                            <Chip size="sm" color="secondary" variant="flat">
                              {phase.details.owner}
                            </Chip>
                            <span className="text-sm text-gray-600">owner</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </CardBody>
          </Card>
        )}

        {/* Loop Health Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border border-green-200 bg-green-50">
            <CardBody className="p-4 text-center">
              <div className="text-2xl font-bold text-green-700">
                {
                  [
                    plan.feedbackSources.internal.enabled,
                    plan.feedbackSources.external.enabled,
                    plan.feedbackSources.analytics.enabled,
                  ].filter(Boolean).length
                }
              </div>
              <div className="text-sm text-green-600">Feedback Sources</div>
            </CardBody>
          </Card>

          <Card className="border border-blue-200 bg-blue-50">
            <CardBody className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-700">
                {plan.followUp.successMetrics.length}
              </div>
              <div className="text-sm text-blue-600">Success Metrics</div>
            </CardBody>
          </Card>

          <Card className="border border-purple-200 bg-purple-50">
            <CardBody className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-700">
                {plan.loopCadence.adjustmentTriggers.length}
              </div>
              <div className="text-sm text-purple-600">Adjustment Triggers</div>
            </CardBody>
          </Card>
        </div>

        {/* Loop Calendar */}
        <Card className="mt-6">
          <CardBody className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Loop Calendar</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <strong>Collection:</strong>{" "}
                {plan.feedbackSources.internal.enabled
                  ? plan.feedbackSources.internal.frequency
                  : plan.feedbackSources.external.enabled
                    ? plan.feedbackSources.external.frequency
                    : plan.feedbackSources.analytics.monitoringFrequency}{" "}
                feedback gathering
              </p>
              <p>
                <strong>Analysis:</strong> {plan.analysisProcess.analysisCadence} prioritization and
                decision-making
              </p>
              <p>
                <strong>Implementation:</strong> {plan.implementation.iterationLength} development
                cycles
              </p>
              <p>
                <strong>Follow-up:</strong> {plan.followUp.reportingFrequency} progress reports
              </p>
              <p>
                <strong>Loop Review:</strong> {plan.loopCadence.reviewFrequency} process improvement
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
