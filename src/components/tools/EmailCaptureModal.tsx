"use client";

import React, { useState } from "react";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
  onSubmit?: (email: string) => void;
}

export function EmailCaptureModal({ isOpen, onClose, toolName, onSubmit }: EmailCaptureModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // In a real implementation, this would submit to your email service
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSubmit?.(email);
      onClose();
    } catch (error) {
      console.error("Failed to submit email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      classNames={{
        base: "mx-4 sm:mx-0",
        backdrop: "bg-black/60 backdrop-blur-sm",
      }}
      placement="center"
    >
      <ModalContent className="p-0">
        <form onSubmit={handleSubmit}>
          <ModalHeader className="flex flex-col gap-2 px-6 pt-6 pb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-navy-900 leading-tight">
              Get Your {toolName} Results
            </h3>
            <p className="text-sm sm:text-base font-normal text-gray-600 leading-relaxed">
              We'll send you your results and next steps via email
            </p>
          </ModalHeader>
          <ModalBody className="px-6 py-4">
            <div className="space-y-6">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Enter your email address and we'll send you your {toolName} results along with
                personalized next steps to help you move forward.
              </p>
              <Input
                type="email"
                label="Email address"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
                classNames={{
                  base: "w-full",
                  label: "text-gray-700 font-medium",
                  input: "text-gray-900",
                  inputWrapper:
                    "border-gray-300 hover:border-gray-400 focus-within:border-blue-500",
                }}
              />
              <div className="text-xs text-gray-500 leading-relaxed">
                We respect your privacy. Unsubscribe anytime. No spam, ever.
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="px-6 pb-6 pt-4">
            <div className="flex gap-3 justify-between sm:justify-end">
              <Button
                variant="light"
                onPress={onClose}
                isDisabled={isSubmitting}
                className="cursor-pointer font-medium"
              >
                Skip for now
              </Button>
              <Button
                color="primary"
                type="submit"
                isLoading={isSubmitting}
                isDisabled={!email || isSubmitting}
                className="cursor-pointer font-medium"
              >
                Send My Results
              </Button>
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
