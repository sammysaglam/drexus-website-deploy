import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: {
    template: "%s | Events | Drexus",
    default: "Events & Webinars | Drexus",
  },
  description:
    "Join us for workshops, webinars, and exclusive roundtables designed for founders, CTOs, and product leaders",
  openGraph: {
    title: "Events & Webinars | Drexus",
    description:
      "Join us for workshops, webinars, and exclusive roundtables designed for founders, CTOs, and product leaders",
    type: "website",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
