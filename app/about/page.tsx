import React from "react";
import Header from "@/components/header";
import SiteLayout from "@/components/site-layout";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import MyValues from "@/components/values";
import AboutHero from "@/components/about-hero";

export const metadata: Metadata = {
  title: "Chibuzor | About ",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <SiteLayout>
      <Header />
      <AboutHero />

      <MyValues />
      <Footer />
    </SiteLayout>
  );
}
