import React from "react";
import Header from "@/components/header";
import SiteLayout from "@/components/site-layout";
import ServicesHero from "@/components/services/services-hero";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import MyServices from "@/components/services/my-services";

export const metadata: Metadata = {
  title: "Chibuzor | Services",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <SiteLayout>
      <Header />
      <ServicesHero />
      <MyServices />
      <Footer />
    </SiteLayout>
  );
}
