"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { raleway, source_Sans_3 } from "@/styles/font";
import Container from "@/components/container";
import Image from "next/image";
import { Badge } from "./ui/badge";

export default function AboutHero() {
  const router = useRouter();
  return (
    <Container className="pl-36 mt-20 mb-36">
      <section className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <div className="lg:max-w-[26.75rem] pt-8 space-y-12">
            <h1
              className={`text-5xl leading-[130%] font-normal uppercase ${raleway.className}`}
            >
              I want to <br />
              build for you.
            </h1>
            <p
              className={`${source_Sans_3.className} text-xl font-light leading-[140%] mb-12`}
            >
              As an Experienced Frontend Developer, I am passionate about
              crafting exceptional user experiences. With in-depth knowledge of
              React and a focus on performance, I excel at creating high-quality
              websites using HTML, CSS, and JavaScript. <br /> I am determined
              to help you translate your ideas into professional and useable
              platforms.
            </p>
            <p
              className={`${source_Sans_3.className} text-xl font-light leading-[140%] mb-12`}
            >
              I deliver pixel-perfect UIs that captivate users, secure, and
              responsive sites using the latest technology.My clean and
              maintainable code ensures easy scalability and efficient
              maintenance.
            </p>

            <div
              className={`${source_Sans_3.className} text-xl font-light leading-[140%] mb-12`}
            >
              My Webstack includes <br />
              <div className="flex flex-wrap gap-1">
                <Badge>React.js</Badge>
                <Badge>Next.js</Badge>
                <Badge>Sass</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Nest.js</Badge>
                <Badge>Firebase</Badge>
                <Badge>Postgres</Badge>
                <Badge>WordPress</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image src="/images/banner.jpg" fill alt="banner" priority={true} />
        </div>
      </section>
    </Container>
  );
}
