import React from "react";
import type { Metadata } from "next";
import Contact from "@/components/forms/contact";
import Projects from "@/components/projects";

export const metadata: Metadata = {
  title: "Chibuzor | Projects",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <>
      <Projects />
      <Contact />
    </>
  );
}
