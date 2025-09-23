import pressData from "../../data/press-releases.json";

export interface PressRelease {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  category: string;
  featured: boolean;
  summary: string;
  body: Array<{
    type: "paragraph" | "quote" | "heading" | "list";
    content?: string;
    items?: string[];
    author?: string;
    title?: string;
  }>;
  boilerplate: string;
  contacts: Array<{
    name: string;
    title: string;
    email: string;
    phone: string;
  }>;
  resources?: Array<{
    title: string;
    type: string;
    url: string;
  }>;
}

export interface MediaContact {
  name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
  photo: string;
  regions: string[];
}

export function getAllPressReleases(): PressRelease[] {
  return pressData.pressReleases as PressRelease[];
}

export function getPressReleaseBySlug(slug: string): PressRelease | undefined {
  return pressData.pressReleases.find((pr) => pr.slug === slug) as PressRelease | undefined;
}

export function getFeaturedPressReleases(): PressRelease[] {
  return pressData.pressReleases.filter((pr) => pr.featured) as PressRelease[];
}

export function getPressReleasesByCategory(category: string): PressRelease[] {
  return pressData.pressReleases.filter(
    (pr) => pr.category.toLowerCase() === category.toLowerCase()
  ) as PressRelease[];
}

export function getPressReleasesByYear(year: number): PressRelease[] {
  return pressData.pressReleases.filter(
    (pr) => new Date(pr.date).getFullYear() === year
  ) as PressRelease[];
}

export function getMediaContacts(): MediaContact[] {
  return pressData.mediaContacts as MediaContact[];
}

export function getMediaContactsByRegion(region: string): MediaContact[] {
  return pressData.mediaContacts.filter((contact) =>
    contact.regions.includes(region)
  ) as MediaContact[];
}

export function formatPressReleaseDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPressReleaseSchema(pr: PressRelease, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pr.title,
    alternativeHeadline: pr.subtitle,
    datePublished: pr.date,
    dateModified: pr.date,
    description: pr.summary,
    articleBody: pr.body
      .map((section) => {
        if (section.type === "paragraph" || section.type === "heading") {
          return section.content;
        } else if (section.type === "list" && section.items) {
          return section.items.join(" ");
        } else if (section.type === "quote") {
          return `"${section.content}" - ${section.author}, ${section.title}`;
        }
        return "";
      })
      .join(" "),
    author: {
      "@type": "Organization",
      name: "Drexus",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Drexus",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/newsroom/press-releases/${pr.slug}`,
    },
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };
}
