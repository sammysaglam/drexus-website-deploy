export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Drexus",
    url: "https://drexus.com",
    logo: "https://drexus.com/logo.png",
    description:
      "Enterprise software development consultancy helping companies build better software faster",
    sameAs: [
      "https://linkedin.com/company/drexus",
      "https://twitter.com/drexus",
      "https://github.com/drexus",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hardturmstrasse 161",
      addressLocality: "Zürich",
      postalCode: "8005",
      addressCountry: "CH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+41-44-123-4567",
      contactType: "sales",
      email: "hello@drexus.com",
      availableLanguage: ["English", "German"],
    },
    founders: [
      {
        "@type": "Person",
        name: "Thomas Müller",
        jobTitle: "CEO & Co-founder",
      },
      {
        "@type": "Person",
        name: "Sarah Chen",
        jobTitle: "COO & Co-founder",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 100,
    },
    foundingDate: "2020",
    slogan: "Build Better Software Faster",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Drexus",
    url: "https://drexus.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://drexus.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ label: string; href: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://drexus.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
