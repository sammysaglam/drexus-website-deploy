import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops | Events | Drexus",
  description:
    "Hands-on learning experiences designed to accelerate your product development and business growth. Join our expert-led workshops for founders, CTOs, and product leaders.",
  openGraph: {
    title: "Workshops | Drexus",
    description:
      "Hands-on learning experiences designed to accelerate your product development and business growth. Join our expert-led workshops for founders, CTOs, and product leaders.",
    type: "website",
  },
  keywords: [
    "workshops",
    "hands-on learning",
    "product development",
    "business growth",
    "founders",
    "CTOs",
    "product leaders",
    "training",
    "professional development",
    "Drexus",
  ],
  alternates: {
    canonical: "https://drexus.com/events/workshops",
  },
};

export default function WorkshopsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
