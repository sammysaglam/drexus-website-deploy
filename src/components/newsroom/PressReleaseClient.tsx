"use client";

import { Card, CardBody, Button } from "@heroui/react";

interface MediaContact {
  name: string;
  title: string;
  email: string;
  phone: string;
}

interface Resource {
  title: string;
  type: string;
  url: string;
}

export function MediaContactsCard({ contacts }: { contacts: MediaContact[] }) {
  return (
    <Card>
      <CardBody className="p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Media Contacts</h3>
        {contacts.map((contact, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <p className="font-medium text-navy-800">{contact.name}</p>
            <p className="text-sm text-gray-600">{contact.title}</p>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-navy-600 hover:text-navy-700"
            >
              {contact.email}
            </a>
            <p className="text-sm text-gray-600">{contact.phone}</p>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

export function ResourcesCard({ resources }: { resources: Resource[] }) {
  return (
    <Card>
      <CardBody className="p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Resources</h3>
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              className="flex items-center justify-between p-3 border rounded hover:border-navy-300 transition-colors"
            >
              <div>
                <p className="font-medium text-navy-800">{resource.title}</p>
                <p className="text-xs text-gray-500">{resource.type}</p>
              </div>
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export function ShareCard({ slug, title }: { slug: string; title: string }) {
  return (
    <Card>
      <CardBody className="p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Share</h3>
        <div className="flex gap-3">
          <Button
            size="sm"
            variant="bordered"
            as="a"
            href={`https://twitter.com/intent/tweet?url=https://drexus.com/newsroom/press-releases/${slug}&text=${encodeURIComponent(title)}`}
            target="_blank"
          >
            Twitter
          </Button>
          <Button
            size="sm"
            variant="bordered"
            as="a"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://drexus.com/newsroom/press-releases/${slug}`}
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            size="sm"
            variant="bordered"
            onClick={() => {
              navigator.clipboard.writeText(`https://drexus.com/newsroom/press-releases/${slug}`);
            }}
          >
            Copy Link
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
