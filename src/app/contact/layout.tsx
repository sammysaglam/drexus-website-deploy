import { Metadata } from "next";

import { NavMega, FooterMega } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact Us | Drexus",
  description:
    "Get in touch with Drexus for general inquiries, consultations, and project proposals. We're here to help with your technology needs.",
  openGraph: {
    title: "Contact Us | Drexus",
    description:
      "Get in touch with Drexus for general inquiries, consultations, and project proposals. We're here to help with your technology needs.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMega />
      <main id="main-content">{children}</main>
      <FooterMega />
    </>
  );
}
