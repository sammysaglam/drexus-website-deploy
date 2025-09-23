"use client";

import { Card, CardBody, Avatar } from "@heroui/react";

import { PageHeader } from "@/components/ui/PageHeader";
import { getMediaContacts } from "@/lib/press-releases";

export default function MediaContactsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Media Contacts", href: "/newsroom/media-contacts" },
  ];

  const contacts = getMediaContacts();

  return (
    <>
      <PageHeader
        title="Media Contacts"
        subtitle="Get in touch with our communications team"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-700">
                For press inquiries, interviews, or additional information about Drexus, please
                contact our media relations team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contacts.map((contact, index) => (
                <Card key={index}>
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar
                        src={contact.photo}
                        name={contact.name}
                        size="lg"
                        className="flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-navy-900">{contact.name}</h3>
                        <p className="text-navy-600 font-medium mb-3">{contact.title}</p>
                        <p className="text-gray-600 text-sm mb-4">{contact.bio}</p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-400"
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
                            <a
                              href={`mailto:${contact.email}`}
                              className="text-sm text-navy-600 hover:text-navy-700"
                            >
                              {contact.email}
                            </a>
                          </div>

                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-400"
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
                            <span className="text-sm text-gray-600">{contact.phone}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                            </svg>
                            <span className="text-sm text-gray-600">
                              Regions: {contact.regions.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Response Time */}
            <Card className="mt-8">
              <CardBody className="p-6 text-center">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Response Time</h3>
                <p className="text-gray-600">
                  We aim to respond to all media inquiries within 24 hours during business days. For
                  urgent requests, please call directly.
                </p>
              </CardBody>
            </Card>

            {/* Press Kit */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Need More Resources?</h2>
              <p className="text-gray-600 mb-6">
                Download our press kit for logos, executive photos, and company information.
              </p>
              <a
                href="/newsroom/press-kit"
                className="inline-block px-8 py-3 bg-navy-600 text-white font-semibold rounded hover:bg-navy-700 transition-colors"
              >
                Download Press Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
