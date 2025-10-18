"use client";

import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@heroui/react";

import { useBookingModal } from "@/hooks/useBookingModal";

export function SimplifiedHeader() {
  const { openModal } = useBookingModal();

  return (
    <Navbar
      maxWidth="xl"
      className="bg-white border-b border-gray-200"
      classNames={{
        wrapper: "px-6",
      }}
    >
      <NavbarBrand>
        <Link href="/" className="font-bold text-xl text-navy-900">
          Drexus
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/" variant="light" className="text-gray-600 hover:text-navy-900">
            Back to Main Site
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            className="bg-navy-900 text-white hover:bg-navy-800"
            onPress={openModal}
          >
            Book a Call
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
