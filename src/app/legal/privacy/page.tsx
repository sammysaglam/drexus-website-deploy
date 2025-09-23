import { PageHeader } from "@/components/ui/PageHeader";

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Legal", href: "/legal" },
    { label: "Privacy Policy", href: "/legal/privacy" },
  ];

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: April 1, 2024"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-md">
          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Drexus ("we," "our," or "us") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you
              use our website and services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Contact information (name, email, phone number, company)</li>
              <li>Account credentials</li>
              <li>Payment information (processed by secure third-party providers)</li>
              <li>Communications with us</li>
              <li>Job application materials</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Usage analytics (via privacy-focused tools)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about projects and updates</li>
              <li>Process payments and maintain records</li>
              <li>Send marketing communications (with consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and abuse</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <h3>4.1 We Do Not Sell Your Data</h3>
            <p>
              We never sell, rent, or trade your personal information to third parties for their
              marketing purposes.
            </p>

            <h3>4.2 Service Providers</h3>
            <p>
              We may share information with trusted service providers who assist us in operating our
              business, such as:
            </p>
            <ul>
              <li>Cloud infrastructure providers</li>
              <li>Payment processors</li>
              <li>Email service providers</li>
              <li>Analytics providers</li>
            </ul>

            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose information if required by law or in response to valid legal requests.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              information, including:
            </p>
            <ul>
              <li>Encryption in transit and at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your data
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a portable format
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing activities
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
              </li>
            </ul>

            <h2>7. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place for such transfers, including Standard
              Contractual Clauses approved by the European Commission.
            </p>

            <h2>8. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes
              outlined in this policy, unless a longer retention period is required by law. Typical
              retention periods:
            </p>
            <ul>
              <li>Client data: Duration of relationship plus 7 years</li>
              <li>Marketing data: Until consent withdrawn</li>
              <li>Job applications: 2 years</li>
              <li>Website analytics: 26 months</li>
            </ul>

            <h2>9. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. You can control
              cookie settings through your browser. Essential cookies required for site
              functionality cannot be disabled.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect
              personal information from children.
            </p>

            <h2>11. California Privacy Rights</h2>
            <p>
              California residents have additional rights under the CCPA, including the right to
              know what personal information we collect and how it's used, the right to delete
              personal information, and the right to opt-out of the sale of personal information
              (which we do not do).
            </p>

            <h2>12. European Privacy Rights</h2>
            <p>
              If you are in the European Economic Area, you have rights under the GDPR. Our legal
              bases for processing include consent, contract performance, legal obligations, and
              legitimate interests.
            </p>

            <h2>13. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or to exercise your rights, contact us at:
            </p>
            <p>
              <strong>Data Protection Officer</strong>
              <br />
              Email: privacy@drexus.com
              <br />
              Address: Hardturmstrasse 161, 8005 Zürich, Switzerland
              <br />
              Phone: +41 44 123 4567
            </p>

            <p>
              You also have the right to lodge a complaint with your local data protection
              authority.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
