"use client";

import React, { useState } from "react";

import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@heroui/react";

import { BookingModal } from "@/components/ui/BookingModal";
import { ROLE_OPTIONS, COMPANY_SIZE_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/constants";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  industry: string;
  companySize: string;
  role: string;
  budget: string;
  projectType: string;
  timeline: string;
  projectDescription: string;
  currentChallenges: string;
}

export default function PricingPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    companySize: "",
    role: "",
    budget: "",
    projectType: "",
    timeline: "",
    projectDescription: "",
    currentChallenges: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/pricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit pricing request:", result.message);
        // You could add error state handling here
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // You could add error state handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-16 max-w-screen-xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-navy-900 mb-4">
                Thank You for Your Interest!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We've received your pricing request and will get back to you within 48 hours with a
                detailed proposal.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-navy-900 mb-4">What Happens Next?</h2>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Our team will review your project requirements within 48 hours
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  We'll prepare a detailed proposal tailored to your needs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  We'll schedule a discovery call to discuss your project in detail
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You'll receive a comprehensive proposal with timeline and pricing
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                color="primary"
                size="lg"
                onPress={() => setShowBookingModal(true)}
                className="px-8"
              >
                Schedule a Call Now
              </Button>
              <Button
                variant="bordered"
                size="lg"
                onPress={() => (window.location.href = "/")}
                className="px-8"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const projectTypes = [
    "MVP Development",
    "Platform Modernization",
    "Digital Transformation",
    "Product Strategy & Design",
    "Technical Due Diligence",
    "Team Augmentation",
    "DevOps & Infrastructure",
    "Data & Analytics Platform",
    "Mobile Application",
    "E-commerce Solution",
    "Other",
  ];

  const timelineOptions = [
    "ASAP (Rush project)",
    "1-2 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Ongoing partnership",
  ];

  const industries = INDUSTRY_OPTIONS.map((option) => option.label);
  const companySizes = COMPANY_SIZE_OPTIONS;
  const roles = ROLE_OPTIONS;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Share your project details and budget range. We'll provide a tailored proposal and
              schedule a strategy call to discuss your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No commitment required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Custom pricing
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Response within 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gray-50 border-b">
                <div className="w-full">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-2">
                    Project Information
                  </h2>
                  <p className="text-gray-600">
                    Help us understand your project so we can provide the most accurate proposal.
                  </p>
                </div>
              </CardHeader>

              <CardBody className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        placeholder=""
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                        }}
                      />
                      <Input
                        label="Last Name"
                        placeholder=""
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                        }}
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder=""
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                        }}
                      />
                      <Input
                        label="Company"
                        placeholder=""
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                        }}
                      />
                      <Select
                        label="Industry"
                        placeholder="Select your industry"
                        selectedKeys={formData.industry ? [formData.industry] : []}
                        onSelectionChange={(keys) =>
                          handleInputChange("industry", Array.from(keys)[0] as string)
                        }
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                          trigger: "border-gray-300 cursor-pointer",
                          value: "text-gray-900",
                          listbox: "bg-white",
                        }}
                      >
                        {industries.map((industry) => (
                          <SelectItem
                            key={industry}
                            classNames={{
                              base: "text-gray-900 hover:bg-gray-100",
                            }}
                          >
                            {industry}
                          </SelectItem>
                        ))}
                      </Select>
                      <Select
                        label="Company Size"
                        placeholder="Select company size"
                        selectedKeys={formData.companySize ? [formData.companySize] : []}
                        onSelectionChange={(keys) =>
                          handleInputChange("companySize", Array.from(keys)[0] as string)
                        }
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                          trigger: "border-gray-300 cursor-pointer",
                          value: "text-gray-900",
                          listbox: "bg-white",
                        }}
                      >
                        {companySizes.map((size) => (
                          <SelectItem
                            key={size.key}
                            classNames={{
                              base: "text-gray-900 hover:bg-gray-100",
                            }}
                          >
                            {size.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <Select
                        label="Your Role"
                        placeholder="Select your role"
                        selectedKeys={formData.role ? [formData.role] : []}
                        onSelectionChange={(keys) =>
                          handleInputChange("role", Array.from(keys)[0] as string)
                        }
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                          trigger: "border-gray-300 cursor-pointer",
                          value: "text-gray-900",
                          listbox: "bg-white",
                        }}
                      >
                        {roles.map((role) => (
                          <SelectItem
                            key={role.key}
                            classNames={{
                              base: "text-gray-900 hover:bg-gray-100",
                            }}
                          >
                            {role.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <Divider />

                  {/* Budget Input */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4">Project Budget</h3>
                    <p className="text-gray-600 mb-6">
                      What's your realistic budget for this project? This helps us provide the most
                      appropriate solution and timeline.
                    </p>
                    <div className="max-w-md">
                      <Input
                        label="Budget"
                        placeholder="e.g., $400, $2,500, $5,000..."
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        isRequired
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                          </div>
                        }
                        classNames={{
                          label: "text-gray-700 font-medium",
                        }}
                      />
                    </div>
                  </div>

                  <Divider />

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4">Project Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Select
                        label="Project Type"
                        placeholder="What type of project?"
                        selectedKeys={formData.projectType ? [formData.projectType] : []}
                        onSelectionChange={(keys) =>
                          handleInputChange("projectType", Array.from(keys)[0] as string)
                        }
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                          trigger: "bg-white border-gray-300",
                          value: "text-gray-900",
                          listbox: "bg-white",
                        }}
                      >
                        {projectTypes.map((type) => (
                          <SelectItem
                            key={type}
                            classNames={{
                              base: "text-gray-900 hover:bg-gray-100",
                            }}
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </Select>
                      <Select
                        label="Timeline"
                        placeholder="When do you need this?"
                        selectedKeys={formData.timeline ? [formData.timeline] : []}
                        onSelectionChange={(keys) =>
                          handleInputChange("timeline", Array.from(keys)[0] as string)
                        }
                        isRequired
                        classNames={{
                          label: "text-gray-700 font-medium",
                          trigger: "bg-white border-gray-300",
                          value: "text-gray-900",
                          listbox: "bg-white",
                        }}
                      >
                        {timelineOptions.map((timeline) => (
                          <SelectItem
                            key={timeline}
                            classNames={{
                              base: "text-gray-900 hover:bg-gray-100",
                            }}
                          >
                            {timeline}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>

                    <Textarea
                      label="Project Description"
                      placeholder="Tell us about your project goals, key features, and any specific requirements..."
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                      minRows={4}
                      classNames={{
                        label: "text-gray-700 font-medium",
                      }}
                    />
                  </div>

                  <Divider />

                  {/* Current Challenges */}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4">Current Challenges</h3>
                    <Textarea
                      label="What challenges are you facing?"
                      placeholder="Describe any technical debt, performance issues, team constraints, or business challenges you're looking to solve..."
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                      minRows={3}
                      classNames={{
                        label: "text-gray-700 font-medium",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      isDisabled={
                        !formData.firstName ||
                        !formData.email ||
                        !formData.company ||
                        !formData.industry ||
                        !formData.companySize ||
                        !formData.role ||
                        !formData.budget
                      }
                      className="bg-navy-900 hover:bg-navy-800 font-semibold w-full sm:w-auto sm:min-w-[240px] h-12 sm:h-12 text-base"
                    >
                      {isSubmitting ? "Submitting..." : "Get Custom Proposal"}
                    </Button>

                    <Button
                      type="button"
                      variant="bordered"
                      size="lg"
                      onPress={() => setShowBookingModal(true)}
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold w-full sm:w-auto sm:min-w-[240px] h-12 sm:h-12 text-base"
                    >
                      Book a Call Instead
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy. We'll never share your
                    information.
                  </p>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">100+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">$50M+</div>
                <div className="text-sm text-gray-600">Value Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">24hr</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </div>
  );
}
