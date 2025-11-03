"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";

import { Event } from "@/lib/events";

interface EventSubscriptionFormProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

export function EventSubscriptionForm({ event, isOpen, onClose }: EventSubscriptionFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email address" });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/event-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          eventTitle: event.title,
          eventId: event.id,
          eventDate: event.date.start,
          userAgent: navigator.userAgent,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "Successfully registered! We'll send you event details and reminders.",
        });
        setEmail(""); // Clear the form
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
          setMessage(null);
        }, 2000);
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to register. Please try again.",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setMessage(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="md"
      classNames={{
        base: "bg-white",
        backdrop: "bg-black/50",
        header: "border-b border-gray-200",
        body: "py-6",
        footer: "border-t border-gray-200",
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 pb-4">
          <h2 className="text-lg font-semibold text-navy-900">Register for Event</h2>
          <p className="text-base text-gray-600 font-normal">
            Get notified about this event and receive event details
          </p>
        </ModalHeader>

        <form onSubmit={handleSubmit}>
          <ModalBody>
            <div className="space-y-4">
              {/* Event Info */}
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                  <span className="font-medium text-navy-900 text-base">{event.title}</span>
                </div>
                <div className="ml-5 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-base">
                      {new Date(event.date.start).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: event.date.timezone,
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <span className="text-base">
                      {event.location.type === "virtual"
                        ? `Virtual Event - ${event.location.platform || "Online"}`
                        : `${event.location.venue}, ${event.location.city}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isDisabled={isLoading}
                  size="lg"
                  variant="bordered"
                  isRequired
                  classNames={{
                    input: "text-base",
                    inputWrapper: "border-gray-300 focus-within:border-navy-500",
                  }}
                />
              </div>

              {/* Message */}
              {message && (
                <div
                  className={`p-3 rounded-lg text-base border ${
                    message.type === "success"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-red-50 text-red-700 border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              {/* Benefits */}
              <div className="bg-navy-50 border border-navy-200 p-4 rounded-lg">
                <h3 className="font-medium text-navy-900 mb-3 text-base">What you'll receive:</h3>
                <ul className="text-base text-navy-800 space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-navy-600"
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
                    Event details and agenda
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-navy-600"
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
                    Reminder notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-navy-600"
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
                    Access to event resources
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-navy-600"
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
                    Updates about future events
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-500">
                By registering, you agree to receive event-related communications. You can
                unsubscribe at any time.
              </p>
            </div>
          </ModalBody>

          <ModalFooter className="pt-4">
            <Button
              variant="bordered"
              onPress={handleClose}
              isDisabled={isLoading}
              size="lg"
              className="text-base font-medium"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
              isLoading={isLoading}
              isDisabled={!email.trim()}
              size="lg"
              className="text-base font-medium bg-navy-600 hover:bg-navy-700"
            >
              Register Now
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
