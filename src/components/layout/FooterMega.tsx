"use client";

import React, { useState } from "react";

import { Link, Input, Button } from "@heroui/react";

import { useBookingModal } from "../ui";

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const footerSections: FooterSection[] = [
  {
    title: "Solutions",
    links: [
      { label: "MVP Fast-Track", href: "/solutions/mvp-fast" },
      { label: "Ops Conversion Boost", href: "/solutions/ops-conversion" },
      { label: "Roadmap Unblock", href: "/solutions/roadmap-unblock" },
      { label: "Vendor Diligence", href: "/solutions/vendor-diligence" },
      { label: "2-Week Pilot", href: "/solutions/pilot-2-week" },
      { label: "Scale Without Hiring", href: "/solutions/scale-up-without-hiring" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Discovery & Scoping", href: "/services/discovery-scope" },
      { label: "Product Strategy", href: "/services/product-strategy" },
      { label: "UX/UI Design", href: "/services/ux-ui" },
      { label: "Frontend (React)", href: "/services/frontend-react" },
      { label: "Backend (Node)", href: "/services/backend-node" },
      { label: "Mobile (React Native)", href: "/services/mobile-react-native" },
      { label: "DevOps & SRE", href: "/services/devops-sre" },
      { label: "Data & Analytics", href: "/services/data-analytics" },
      { label: "Security & Compliance", href: "/services/security-compliance" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "SaaS", href: "/industries/saas" },
      { label: "Fintech", href: "/industries/fintech" },
      { label: "Ecommerce", href: "/industries/ecommerce" },
      { label: "Marketplaces", href: "/industries/marketplaces" },
      { label: "Healthtech", href: "/industries/healthtech" },
      { label: "Media", href: "/industries/media" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Insights Hub", href: "/insights?type=all" },
      { label: "Articles", href: "/insights?type=article" },
      { label: "Special Reports", href: "/insights?type=special-report" },
      { label: "Trends", href: "/insights?type=trend" },
      { label: "Benchmarks", href: "/insights?type=benchmark" },
      { label: "Playbooks", href: "/insights?type=playbook" },
      { label: "Newsletter", href: "/insights/newsletter" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "MVP Scope Builder", href: "/tools/mvp-scope-builder" },
      { label: "Vendor Diligence Scorecard", href: "/tools/vendor-diligence-scorecard" },
      { label: "Risk Ledger", href: "/tools/risk-ledger" },
      { label: "Experiment Planner", href: "/tools/experiment-planner" },
      { label: "Conversion Audit", href: "/tools/conversion-audit" },
      { label: "ROI Calculator", href: "/tools/roi-calculator" },
      { label: "Project Feedback Loop", href: "/tools/project-feedback-loop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Corporate Responsibility", href: "/corporate-responsibility" },
      { label: "Security", href: "/security" },
    ],
  },
];

const additionalLinks = {
  events: [
    { label: "All Events", href: "/events" },
    { label: "Webinars", href: "/events/webinars" },
    { label: "Workshops", href: "/events/workshops" },
    { label: "Office Hours", href: "/events/office-hours" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Procurement", href: "/procurement" },
    { label: "Pricing", href: "/pricing" },
  ],
  contact: [
    { label: "Book a Call", href: "/contact" },
    { label: "Request Proposal", href: "/contact/rfp" },
    { label: "General Inquiries", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export const FooterMega = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { openModal } = useBookingModal();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          toolName: "Newsletter Subscription",
          userAgent: navigator.userAgent,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setEmail("");
        // Reset success state after 3 seconds
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        console.error("Failed to subscribe:", result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to subscribe:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          {/* Newsletter Section */}
          <div className="border-b border-gray-800 pb-12 mb-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Stay ahead with strategic insights</h3>
              <p className="text-gray-400 mb-6">
                Get weekly analysis on emerging technologies, market trends, and strategic
                opportunities delivered to your inbox.
              </p>

              {submitStatus === "success" ? (
                <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-green-400 text-lg">✓</div>
                    <p className="text-green-400 font-medium">
                      Thanks for subscribing! You'll receive our weekly insights soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    isInvalid={submitStatus === "error"}
                    errorMessage={
                      submitStatus === "error"
                        ? "Failed to subscribe. Please try again."
                        : undefined
                    }
                    classNames={{
                      base: "flex-1",
                      input: "bg-navy-800 text-white placeholder:text-gray-500",
                      inputWrapper: "bg-navy-800 border-gray-700 hover:border-gray-600",
                    }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    isLoading={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 font-medium min-w-[120px]"
                  >
                    Subscribe
                  </Button>
                </form>
              )}

              <p className="text-xs text-gray-500 mt-3">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.slice(0, 6).map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {section.links.length > 6 && (
                    <li>
                      <Link
                        href={`/${section.title.toLowerCase()}`}
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      >
                        View all →
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-800 pt-12">
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
                Events
              </h4>
              <ul className="space-y-2">
                {additionalLinks.events.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
                Resources
              </h4>
              <ul className="space-y-2">
                {additionalLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
                Contact
              </h4>
              <ul className="space-y-2">
                {additionalLinks.contact.map((link) => (
                  <li key={link.label}>
                    {link.label === "Book a Call" || link.label === "Request Proposal" ? (
                      <button
                        onClick={openModal}
                        className="text-gray-400 hover:text-white text-sm transition-colors text-left cursor-pointer outline-none"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
                Legal
              </h4>
              <ul className="space-y-2">
                {additionalLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Company Info */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2 font-sans">DREXUS</h2>
                <p className="text-gray-400 text-sm max-w-md">
                  Strategic technology partnerships for ambitious companies. We accelerate growth
                  through expert engineering and data-driven insights.
                </p>
              </div>

              {/* Address */}
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-gray-300">Headquarters</p>
                <p>8834 Schindellegi</p>
                <p>Schwyz, Switzerland</p>
                <p className="mt-2">
                  <a href="tel:+41796088244" className="hover:text-white transition-colors">
                    +41 79 608 82 44
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@drexus.com" className="hover:text-white transition-colors">
                    hello@drexus.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links & Copyright */}
            <div className="flex flex-col items-start lg:items-end gap-4 mt-auto">
              {/* <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/drexus"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/drexustech"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/drexus"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@drexustech"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div> */}

              <div className="text-sm text-gray-400 text-right">
                <p>© {new Date().getFullYear()} Drexus, Inc. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
