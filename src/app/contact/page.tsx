"use client";

import React, { useState } from "react";

import { Card, CardBody, Button, Input, Textarea, Select, SelectItem } from "@heroui/react";
import { motion } from "framer-motion";

import { useBookingModal } from "@/components/ui";
import { PageHeader } from "@/components/ui/PageHeader";

function GeneralInquiriesPage() {
  const { openModal } = useBookingModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ];

  const inquiryTypes = [
    { key: "general", label: "General Inquiry" },
    { key: "partnership", label: "Partnership Opportunity" },
    { key: "support", label: "Technical Support" },
    { key: "media", label: "Media Inquiry" },
    { key: "careers", label: "Career Opportunity" },
    { key: "other", label: "Other" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit form:", result.message);
        // You could add error state handling here
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      // You could add error state handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <PageHeader
          title="Thank You"
          subtitle="We've received your inquiry and will get back to you soon"
          breadcrumbs={breadcrumbs}
        />

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-bold text-navy-900 mb-4"
              >
                Message Sent Successfully
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8"
              >
                Thank you for reaching out to Drexus. We've received your inquiry and our team will
                review it carefully. We typically respond within 24 hours during business days.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button onPress={openModal} color="primary" size="lg" className="px-8 py-3">
                  Book a Call
                </Button>
                <Button
                  onPress={() => (window.location.href = "/")}
                  variant="bordered"
                  size="lg"
                  className="px-8 py-3"
                >
                  Return Home
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="General Inquiries"
        subtitle="Get in touch with our team for any questions or opportunities"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="shadow-lg">
                <CardBody className="p-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-2xl font-bold text-navy-900 mb-6"
                  >
                    Send us a Message
                  </motion.h2>

                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <Input
                          label="Full Name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          isRequired
                          variant="bordered"
                          classNames={{
                            input: "text-gray-900",
                            inputWrapper:
                              "border-gray-300 hover:border-navy-500 focus-within:border-navy-500",
                          }}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Input
                          label="Email Address"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          isRequired
                          variant="bordered"
                          classNames={{
                            input: "text-gray-900",
                            inputWrapper:
                              "border-gray-300 hover:border-navy-500 focus-within:border-navy-500",
                          }}
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <Input
                          label="Company"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          variant="bordered"
                          classNames={{
                            input: "text-gray-900",
                            inputWrapper:
                              "border-gray-300 hover:border-navy-500 focus-within:border-navy-500",
                          }}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <Input
                          label="Phone Number"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          variant="bordered"
                          classNames={{
                            input: "text-gray-900",
                            inputWrapper:
                              "border-gray-300 hover:border-navy-500 focus-within:border-navy-500",
                          }}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <Select
                        label="Type of Inquiry"
                        placeholder="Select inquiry type"
                        selectedKeys={formData.inquiryType ? [formData.inquiryType] : []}
                        onSelectionChange={(keys) => {
                          const selected = Array.from(keys)[0] as string;
                          handleInputChange("inquiryType", selected);
                        }}
                        isRequired
                        variant="bordered"
                        classNames={{
                          trigger:
                            "border-gray-300 hover:border-navy-500 focus-within:border-navy-500",
                        }}
                      >
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.key}>{type.label}</SelectItem>
                        ))}
                      </Select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <Input
                        label="Subject"
                        placeholder="Brief subject of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        isRequired
                        variant="bordered"
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper:
                            "border-gray-300 hover:border-navy-500 focus-within:border-navy-500",
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <Textarea
                        label="Message"
                        placeholder="Please provide details about your inquiry..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        minRows={6}
                        isRequired
                        variant="bordered"
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper:
                            "border-gray-300 hover:border-navy-500 focus-within:border-navy-500",
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <Button
                        type="submit"
                        isLoading={isSubmitting}
                        color="primary"
                        size="lg"
                        className="w-full"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardBody>
              </Card>
            </motion.div>

            {/* Contact Information & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <Card className="shadow-lg">
                <CardBody className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl font-semibold text-navy-900 mb-4"
                  >
                    Contact Information
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a
                          href="mailto:hello@drexus.com"
                          className="text-navy-600 hover:text-navy-700 transition-colors"
                        >
                          hello@drexus.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a
                          href="tel:+41-79-608-82-44"
                          className="text-navy-600 hover:text-navy-700 transition-colors"
                        >
                          +41 79 608 82 44
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Office</p>
                        <p className="text-gray-600">
                          8834 Schindellegi
                          <br />
                          Schwyz, Switzerland
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </CardBody>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-lg">
                <CardBody className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xl font-semibold text-navy-900 mb-4"
                  >
                    Quick Actions
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="space-y-4"
                  >
                    <Button onPress={openModal} color="primary" size="lg" className="w-full">
                      Book a Call
                    </Button>
                  </motion.div>
                </CardBody>
              </Card>

              {/* Response Time */}
              <Card className="shadow-lg">
                <CardBody className="p-6 text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="text-lg font-semibold text-navy-900 mb-2"
                  >
                    Response Time
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="text-gray-600 text-sm"
                  >
                    We aim to respond to all inquiries within 24 hours during business days. For
                    urgent matters, please call us directly.
                  </motion.p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GeneralInquiriesPage;
