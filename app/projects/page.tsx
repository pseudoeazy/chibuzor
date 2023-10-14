import React from "react";
import Header from "@/components/header";
import SiteLayout from "@/components/site-layout";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Contact from "@/components/forms/contact";
import Projects from "@/components/projects";

export const metadata: Metadata = {
  title: "Chibuzor | Projects",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <SiteLayout>
      <Header />
      <Projects />

      <Contact />
      <Footer />
    </SiteLayout>
  );
}
