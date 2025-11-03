import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Hours | Events | Drexus",
  description:
    "Get direct access to our experts for personalized advice, quick wins, and strategic guidance. Join our intimate Q&A sessions designed for founders, CTOs, and product leaders.",
  openGraph: {
    title: "Office Hours | Drexus",
    description:
      "Get direct access to our experts for personalized advice, quick wins, and strategic guidance. Join our intimate Q&A sessions designed for founders, CTOs, and product leaders.",
    type: "website",
  },
  keywords: [
    "office hours",
    "expert advice",
    "Q&A sessions",
    "personalized guidance",
    "founders",
    "CTOs",
    "product leaders",
    "consulting",
    "mentoring",
    "Drexus",
  ],
  alternates: {
    canonical: "https://drexus.com/events/office-hours",
  },
};

export default function OfficeHoursLayout({ children }: { children: React.ReactNode }) {
  return children;
}
