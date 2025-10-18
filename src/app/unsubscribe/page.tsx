"use client";

import { useState, useEffect, Suspense } from "react";

import { Button, Input } from "@heroui/react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { PageHeader } from "@/components/ui/PageHeader";

function UnsubscribeContent() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();

  // Pre-fill email from URL parameter if available and handle one-click unsubscribe
  useEffect(() => {
    const emailParam = searchParams.get("email");
    const successParam = searchParams.get("success");
    const alreadyParam = searchParams.get("already");
    const errorParam = searchParams.get("error");

    if (emailParam) {
      setEmail(emailParam);
    }

    // Handle one-click unsubscribe success
    if (successParam === "true" && emailParam) {
      setSubmitStatus("success");
    }

    // Handle already unsubscribed
    if (alreadyParam === "true" && emailParam) {
      setSubmitStatus("success");
    }

    // Handle errors
    if (errorParam) {
      setSubmitStatus("error");
      switch (errorParam) {
        case "invalid-email":
          setErrorMessage("Invalid email address provided.");
          break;
        case "server-error":
          setErrorMessage("Server error occurred. Please try again.");
          break;
        default:
          setErrorMessage("An error occurred. Please try again.");
      }
    }
  }, [searchParams]);

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
        }),
      });

      // The API returns a blank page with 200 status for one-click unsubscribe compliance
      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
        setErrorMessage("Failed to unsubscribe. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      console.error("Unsubscribe error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Unsubscribe", href: "/unsubscribe" },
  ];

  return (
    <>
      <PageHeader
        title="Unsubscribe"
        subtitle="We're sorry to see you go"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center py-16 px-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                  Successfully Unsubscribed
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  You have been removed from our mailing list. You will no longer receive emails
                  from Drexus.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What you'll miss:</h3>
                    <ul className="text-sm text-gray-600 space-y-2 text-left max-w-sm mx-auto">
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-400 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Strategic technology insights
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-400 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Market intelligence updates
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-400 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Engineering best practices
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-400 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Growth framework content
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-400 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Exclusive tool access
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500">
                    If you change your mind, you can always resubscribe by visiting our website.
                  </p>
                  <Button
                    as="a"
                    href="/"
                    color="primary"
                    size="lg"
                    className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8"
                  >
                    Return to Homepage
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="py-16 px-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                    Unsubscribe from Drexus
                  </h2>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">
                    We'll remove you from our mailing list immediately. We're sorry to see you go.
                  </p>
                </div>

                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onSubmit={handleUnsubscribe}
                  className="space-y-6 max-w-md mx-auto"
                >
                  <div>
                    <Input
                      type="email"
                      label="Email Address"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                      isRequired
                      isInvalid={submitStatus === "error"}
                      errorMessage={submitStatus === "error" ? errorMessage : undefined}
                      size="lg"
                      classNames={{
                        label: "text-gray-700 font-medium",
                        input: "text-gray-900",
                        inputWrapper:
                          "border-gray-300 hover:border-gray-400 focus-within:border-navy-600",
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    color="danger"
                    size="lg"
                    className="w-full font-semibold"
                    isLoading={isSubmitting}
                    isDisabled={!email || isSubmitting}
                  >
                    {isSubmitting ? "Unsubscribing..." : "Unsubscribe"}
                  </Button>
                </motion.form>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-12 bg-gray-50 rounded-lg p-6 max-w-md mx-auto"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    What you'll no longer receive:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Strategic technology insights and market intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Engineering best practices and growth frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Exclusive access to our proprietary tools</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Early access to new features and updates</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            )}

            <div className="bg-gray-50 border-t border-gray-200 px-8 py-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Having trouble unsubscribing?</p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Contact our support team
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnsubscribeContent />
    </Suspense>
  );
}
