import React from "react";
import type { Metadata } from "next";
import MyValues from "@/components/values";
import AboutHero from "@/components/about-hero";

export const metadata: Metadata = {
  title: "Chibuzor | About ",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <>
      <AboutHero />
      <MyValues />
    </>
  );
}
