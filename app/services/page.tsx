import React from "react";
import ServicesHero from "@/components/services/services-hero";
import type { Metadata } from "next";
import MyServices from "@/components/services/my-services";

export const metadata: Metadata = {
  title: "Chibuzor | Services",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <>
      <ServicesHero />
      <MyServices />
    </>
  );
}
