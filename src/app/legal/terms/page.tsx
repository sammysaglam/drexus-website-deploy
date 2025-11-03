"use client";

import { PageHeader } from "@/components/ui/PageHeader";

export default function TermsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Legal", href: "/legal" },
    { label: "Terms of Service", href: "/legal/terms" },
  ];

  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: April 1, 2024"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-md">
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-6">1. Agreement to Terms</h2>
            <p className="mb-8">
              By accessing or using Drexus's services ("Services"), you agree to be bound by these
              Terms of Service ("Terms"). If you disagree with any part of these terms, you may not
              access our Services.
            </p>

            <h2 className="mb-6">2. Use of Services</h2>
            <h3 className="mb-4">2.1 Eligibility</h3>
            <p className="mb-6">
              You must be at least 18 years old and have the legal authority to enter into these
              Terms on behalf of yourself or the organization you represent.
            </p>

            <h3 className="mb-4">2.2 Account Registration</h3>
            <p className="mb-8">
              You agree to provide accurate, current, and complete information during registration
              and to update such information to keep it accurate, current, and complete.
            </p>

            <h2 className="mb-6">3. Intellectual Property</h2>
            <h3 className="mb-4">3.1 Client Ownership</h3>
            <p className="mb-6">
              All deliverables, code, documentation, and other work product created specifically for
              you under a Statement of Work remain your exclusive property upon payment in full.
            </p>

            <h3 className="mb-4">3.2 Drexus Property</h3>
            <p className="mb-8">
              Our pre-existing intellectual property, methodologies, frameworks, and general
              know-how remain our property. We grant you a perpetual, non-exclusive license to use
              these as incorporated in your deliverables.
            </p>

            <h2 className="mb-6">4. Confidentiality</h2>
            <p className="mb-8">
              Both parties agree to maintain the confidentiality of any proprietary information
              received from the other party. This obligation survives termination of these Terms.
            </p>

            <h2 className="mb-6">5. Payment Terms</h2>
            <h3 className="mb-4">5.1 Fees</h3>
            <p className="mb-6">
              You agree to pay all fees specified in your Statement of Work according to the payment
              schedule outlined therein.
            </p>

            <h3 className="mb-4">5.2 Late Payments</h3>
            <p className="mb-8">
              Late payments may incur interest at 1.5% per month or the maximum rate permitted by
              law, whichever is lower.
            </p>

            <h2 className="mb-6">6. Warranties and Disclaimers</h2>
            <h3 className="mb-4">6.1 Service Warranty</h3>
            <p className="mb-6">
              We warrant that our Services will be performed in a professional and workmanlike
              manner consistent with industry standards.
            </p>

            <h3 className="mb-4">6.2 Disclaimer</h3>
            <p className="mb-8">
              EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY
              KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A
              PARTICULAR PURPOSE.
            </p>

            <h2 className="mb-6">7. Limitation of Liability</h2>
            <p className="mb-8">
              IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR
              CONSEQUENTIAL DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID UNDER THE
              APPLICABLE STATEMENT OF WORK.
            </p>

            <h2 className="mb-6">8. Indemnification</h2>
            <p className="mb-8">
              Each party agrees to indemnify and hold harmless the other party from claims arising
              from their breach of these Terms or violation of applicable laws.
            </p>

            <h2 className="mb-6">9. Term and Termination</h2>
            <h3 className="mb-4">9.1 Term</h3>
            <p className="mb-6">
              These Terms commence upon your first use of our Services and continue until
              terminated.
            </p>

            <h3 className="mb-4">9.2 Termination</h3>
            <p className="mb-8">
              Either party may terminate for convenience with 30 days written notice or immediately
              for material breach that remains uncured after 10 days notice.
            </p>

            <h2 className="mb-6">10. General Provisions</h2>
            <h3 className="mb-4">10.1 Governing Law</h3>
            <p className="mb-6">
              These Terms are governed by the laws of Switzerland, without regard to conflict of law
              principles.
            </p>

            <h3 className="mb-4">10.2 Entire Agreement</h3>
            <p className="mb-6">
              These Terms, together with any applicable Statement of Work, constitute the entire
              agreement between the parties.
            </p>

            <h3 className="mb-4">10.3 Amendments</h3>
            <p className="mb-8">
              We may update these Terms from time to time. Continued use of our Services after
              changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="mb-6">Contact Information</h2>
            <p className="mb-4">For questions about these Terms, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-0">
                <br />
                Email: hello@drexus.com
                <br />
                Address: 8834 Schindellegi Schwyz, Switzerland
                <br />
                Phone: +41 79 608 82 44
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
