"use effect";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import fonts from "@/utils/fonts";
import ThemeToggle from "../DarkModeToggle";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const RoutingNavbar = () => {
  const mappableNavbarItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About agenflow",
      href: "/about",
    },
    {
      label: "Services we offer",
      href: "/contact",
    },
    {
      label: "Portfolio",
      href: "/contact",
    },
    {
      label: "Contact us",
      href: "/contact",
    },
    {
      label: "Track your query",
      href: "/contact",
    },
  ];
  return (
    <>
      <Navbar className="dark:bg-darkBackground dark:text-white absolute top-0 left-0 w-full ">
        <NavbarBrand>
          <AcmeLogo />
          <p className={`${fonts.rajdhani.className} font-bold text-lg `}>
            Agenflow.
          </p>
        </NavbarBrand>
        <NavbarContent justify="center" className="max-xl:hidden">
          {mappableNavbarItems.map(({ label, href }) => (
            <NavbarItem key={label}>
              <Link
                color="foreground"
                href={href}
                className={`${fonts.poppins.className} font-medium underline-hovering text-sm`}
              >
                {label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeToggle />
          <Avatar size="sm" />
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default RoutingNavbar;
