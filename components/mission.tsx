import React from "react";
import Container from "@/components/container";
import { raleway, source_Sans_3 } from "@/styles/font";
import Image from "next/image";

export default function Mission() {
  return (
    <Container className="flex justify-center lg:px-36 px-4">
      <section className="w-full flex flex-col lg:flex-row lg:justify-between">
        <div className="flex-1 flex items-center">
          <div className="w-full lg:max-w-[28rem] ">
            <h2
              className={`mb-12 text-2xl font-bold uppercase ${raleway.className}`}
            >
              Mission
            </h2>
            <p
              className={`text-lg font-light leading-6 ${source_Sans_3.className} mb-4`}
            >
              I am determined to help you translate your ideas into professional
              and useable platforms. With extensive experience in web
              development and conceptual thinking, I specialize in user-focused
              solutions.{" "}
            </p>
            <p
              className={`text-lg font-light leading-6 ${source_Sans_3.className}`}
            >
              Utilizing the best-known practices, I offer dedicated product
              consultancy, high-fidelity digital platform designs, and optimized
              content creation support.{" "}
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <Image
            src="/images/mission.jpg"
            alt="mission"
            width={536}
            height={337}
          />
        </div>
      </section>
    </Container>
  );
}
