"use client";

import { PageHeader } from "@/components/ui/PageHeader";

export default function CookiePolicyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Legal", href: "/legal" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ];

  return (
    <>
      <PageHeader
        title="Cookie Policy"
        subtitle="Last updated: April 1, 2024"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-md">
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-6">1. Introduction</h2>
            <p className="mb-8">
              This Cookie Policy explains how Drexus ("we," "our," or "us") uses cookies and similar
              technologies when you visit our website. It explains what these technologies are and
              why we use them, as well as your rights to control our use of them.
            </p>

            <h2 className="mb-6">2. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small data files that are placed on your computer or mobile device when
              you visit a website. Cookies are widely used by website owners to make their websites
              work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <p className="mb-8">
              Cookies set by the website owner (in this case, Drexus) are called "first-party
              cookies." Cookies set by parties other than the website owner are called "third-party
              cookies." Third-party cookies enable third-party features or functionality to be
              provided on or through the website (e.g., advertising, interactive content, and
              analytics).
            </p>

            <h2 className="mb-6">3. Why Do We Use Cookies</h2>
            <p className="mb-4">We use first-party and third-party cookies for several reasons:</p>
            <ul className="mb-8 space-y-2">
              <li>
                <strong>Essential cookies:</strong> These cookies are strictly necessary to provide
                you with services available through our website and to use some of its features.
              </li>
              <li>
                <strong>Performance and analytics cookies:</strong> These cookies allow us to count
                visits and traffic sources so we can measure and improve the performance of our
                site.
              </li>
              <li>
                <strong>Functionality cookies:</strong> These cookies enable the website to provide
                enhanced functionality and personalization.
              </li>
              <li>
                <strong>Marketing cookies:</strong> These cookies are used to track visitors across
                websites to display relevant and engaging advertisements.
              </li>
            </ul>

            <h2 className="mb-6">4. Types of Cookies We Use</h2>

            <h3 className="mb-4">4.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function and cannot be switched off in
              our systems. They are usually only set in response to actions made by you which amount
              to a request for services, such as setting your privacy preferences, logging in, or
              filling in forms.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h4 className="mb-3">Examples of Essential Cookies:</h4>
              <ul className="space-y-1">
                <li>
                  <strong>Session cookies:</strong> Maintain your session while browsing our website
                </li>
                <li>
                  <strong>Security cookies:</strong> Protect against cross-site request forgery
                  (CSRF)
                </li>
                <li>
                  <strong>Load balancing cookies:</strong> Distribute traffic across our servers
                </li>
                <li>
                  <strong>Cookie consent cookies:</strong> Remember your cookie preferences
                </li>
              </ul>
            </div>

            <h3 className="mb-4">4.2 Analytics Cookies</h3>
            <p className="mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and
              improve the performance of our site. They help us to know which pages are the most and
              least popular and see how visitors move around the site.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h4 className="mb-3">Examples of Analytics Cookies:</h4>
              <ul className="space-y-1">
                <li>
                  <strong>Google Analytics:</strong> Tracks website usage and performance metrics
                </li>
                <li>
                  <strong>Page view tracking:</strong> Records which pages you visit and how long
                  you spend on them
                </li>
                <li>
                  <strong>User journey tracking:</strong> Understands how users navigate through our
                  website
                </li>
                <li>
                  <strong>Performance monitoring:</strong> Identifies technical issues and
                  optimization opportunities
                </li>
              </ul>
            </div>

            <h3 className="mb-4">4.3 Functionality Cookies</h3>
            <p className="mb-4">
              These cookies enable the website to provide enhanced functionality and
              personalization. They may be set by us or by third-party providers whose services we
              have added to our pages.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h4 className="mb-3">Examples of Functionality Cookies:</h4>
              <ul className="space-y-1">
                <li>
                  <strong>Language preferences:</strong> Remember your preferred language settings
                </li>
                <li>
                  <strong>Form data:</strong> Save partially completed forms to prevent data loss
                </li>
                <li>
                  <strong>User interface preferences:</strong> Remember your display preferences
                </li>
                <li>
                  <strong>Chat widget cookies:</strong> Enable customer support chat functionality
                </li>
              </ul>
            </div>

            <h3 className="mb-4">4.4 Marketing Cookies</h3>
            <p className="mb-4">
              These cookies may be set through our site by our advertising partners to build a
              profile of your interests and show you relevant adverts on other sites. They do not
              store directly personal information, but are based on uniquely identifying your
              browser and internet device.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h4 className="mb-3">Examples of Marketing Cookies:</h4>
              <ul className="space-y-1">
                <li>
                  <strong>Social media cookies:</strong> Enable social sharing and tracking
                </li>
                <li>
                  <strong>Advertising cookies:</strong> Display relevant advertisements
                </li>
                <li>
                  <strong>Retargeting cookies:</strong> Show ads to users who have visited our site
                </li>
                <li>
                  <strong>Conversion tracking:</strong> Measure the effectiveness of our marketing
                  campaigns
                </li>
              </ul>
            </div>

            <h2 className="mb-6">5. Third-Party Cookies</h2>
            <p className="mb-6">
              In addition to our own cookies, we may also use various third-party cookies to report
              usage statistics of the service, deliver advertisements on and through the service,
              and so on.
            </p>

            <h3 className="mb-4">5.1 Google Analytics</h3>
            <p className="mb-6">
              We use Google Analytics to analyze the use of our website. Google Analytics gathers
              information about website use by means of cookies. The information gathered relating
              to our website is used to create reports about the use of our website. Google's
              privacy policy is available at:{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
            </p>

            <h3 className="mb-4">5.2 Social Media Platforms</h3>
            <p className="mb-8">
              Our website may include social media features, such as the Facebook Like button and
              widgets, such as the Share this button or interactive mini-programs that run on our
              site. These features may collect your IP address, which page you are visiting on our
              site, and may set a cookie to enable the feature to function properly.
            </p>

            <h2 className="mb-6">6. How to Control Cookies</h2>
            <p className="mb-6">
              You have the right to decide whether to accept or reject cookies. You can exercise
              your cookie rights by setting your preferences in the Cookie Consent Manager or by
              setting or amending your web browser controls to accept or refuse cookies.
            </p>

            <h3 className="mb-4">6.1 Cookie Consent Manager</h3>
            <p className="mb-4">
              You can manage your cookie preferences through our Cookie Consent Manager, which
              allows you to:
            </p>
            <ul className="mb-6 space-y-2">
              <li>View and manage your cookie preferences</li>
              <li>Opt-out of non-essential cookies</li>
              <li>Withdraw consent at any time</li>
              <li>Update your preferences as needed</li>
            </ul>

            <h3 className="mb-4">6.2 Browser Controls</h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings preferences.
              However, limiting the ability of websites to set cookies may worsen your overall user
              experience.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <h4 className="mb-3">Browser-Specific Instructions:</h4>
              <ul className="space-y-1">
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site
                  data
                </li>
                <li>
                  <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site
                  data
                </li>
              </ul>
            </div>

            <h2 className="mb-6">7. Cookie Retention</h2>
            <p className="mb-4">Cookies have different lifespans depending on their purpose:</p>
            <ul className="mb-8 space-y-2">
              <li>
                <strong>Session cookies:</strong> Deleted when you close your browser
              </li>
              <li>
                <strong>Persistent cookies:</strong> Remain on your device for a set period or until
                you delete them
              </li>
              <li>
                <strong>Essential cookies:</strong> Typically expire after 1 year
              </li>
              <li>
                <strong>Analytics cookies:</strong> Usually expire after 2 years
              </li>
              <li>
                <strong>Marketing cookies:</strong> Generally expire after 1-2 years
              </li>
            </ul>

            <h2 className="mb-6">8. Updates to This Cookie Policy</h2>
            <p className="mb-8">
              We may update this Cookie Policy from time to time in order to reflect, for example,
              changes to the cookies we use or for other operational, legal, or regulatory reasons.
              Please therefore revisit this Cookie Policy regularly to stay informed about our use
              of cookies and related technologies.
            </p>

            <h2 className="mb-6">9. More Information</h2>
            <p className="mb-8">
              If you would like to find out more about cookies and their use, you can visit
              <a
                href="https://www.allaboutcookies.org"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                www.allaboutcookies.org
              </a>{" "}
              or
              <a
                href="https://www.youronlinechoices.eu"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                www.youronlinechoices.eu
              </a>{" "}
              for more information.
            </p>

            <h2 className="mb-6">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or other technologies, please
              contact us at:
            </p>
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
