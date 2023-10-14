import React from "react";
import Header from "@/components/header";
import SiteLayout from "@/components/site-layout";
import type { Metadata } from "next";
import Footer from "@/components/footer";
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
    <SiteLayout>
      <Header />
      <section className="mt-36"></section>
      <Contact bgColor="bg-purple-400" />
      <Container className="p-36 flex justify-center items-center">
        <section className=" w-full h-screen relative">
          <Image alt="contact us" src="/images/contact-bg.jpg" fill={true} />
        </section>
      </Container>
      <Footer />
    </SiteLayout>
  );
}
