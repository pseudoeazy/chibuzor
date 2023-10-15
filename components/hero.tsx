"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { raleway, source_Sans_3 } from "@/styles/font";
import Container from "@/components/container";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  return (
    <Container className="px-4 lg:pr-0 lg:pl-36 mt-20 mb-36 ">
      <section className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="lg:max-w-[26.75rem] pt-8 space-y-12">
            <h1
              className={`text-5xl leading-[130%] font-normal uppercase ${raleway.className}`}
            >
              I will build your vision.
            </h1>
            <p
              className={`${source_Sans_3.className} text-xl font-light leading-[140%] `}
            >
              Determined to help you translate your ideas into professional and
              useable platforms
            </p>
            <Button
              type="button"
              onClick={() => router.push("/#contact")}
              className="w-[18rem] font-bold uppercase text-base p-5 text-center bg-tetiary-100 text-black hover:text-tetiary-100"
            >
              Say Hello
            </Button>
          </div>
        </div>
        <div className="hidden lg:block flex-1 relative">
          <Image src="/images/banner.jpg" fill alt="banner" priority={true} />
        </div>
      </section>
    </Container>
  );
}
