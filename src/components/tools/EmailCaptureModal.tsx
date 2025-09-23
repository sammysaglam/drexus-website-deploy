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
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Want More Tools Like This?</h3>
            <p className="text-sm font-normal text-gray-600">
              Get notified when we release new tools and frameworks
            </p>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <p className="text-gray-600">
                You&apos;ve already received your {toolName} results. Enter your email to get early
                access to new tools and exclusive insights.
              </p>
              <Input
                type="email"
                label="Email address"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
                classNames={{
                  label: "text-gray-700",
                  input: "text-gray-900",
                }}
              />
              <div className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe anytime. No spam, ever.
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={onClose} isDisabled={isSubmitting}>
              No thanks, just the download
            </Button>
            <Button
              color="primary"
              type="submit"
              isLoading={isSubmitting}
              isDisabled={!email || isSubmitting}
            >
              Get Updates
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
