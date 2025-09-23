import { Metadata } from "next";

import { FooterMega } from "@/components/layout/FooterMega";
import { NavMega } from "@/components/layout/NavMega";

export const metadata: Metadata = {
  title: {
    template: "%s | Careers | Drexus",
    default: "Careers | Drexus",
  },
  description:
    "Join the Drexus team. Build your career while building the future of software development.",
  openGraph: {
    title: "Careers | Drexus",
    description:
      "Join the Drexus team. Build your career while building the future of software development.",
    type: "website",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
