import React from "react";
import type { Metadata } from "next";
import Contact from "@/components/forms/contact";
import Image from "next/image";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Chibuzor | Contact",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <>
      <section className="mt-36"></section>
      <Contact bgColor="bg-purple-400" />
      <Container className="lg:p-36  mt-8 lg:mt-0 flex justify-center items-center">
        <section className="w-full h-[400px] lg:h-screen relative">
          <Image alt="contact us" src="/images/contact-bg.jpg" fill={true} />
        </section>
      </Container>
    </>
  );
}
