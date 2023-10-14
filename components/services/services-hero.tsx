import React from "react";
import { raleway, source_Sans_3 } from "@/styles/font";
import Container from "@/components/container";

export default function ServicesHero() {
  return (
    <Container className="px-36 mt-36">
      <div className="max-w-[33rem]">
        <h2
          className={`font-bold text-5xl uppercase mb-12 ${raleway.className}`}
        >
          I OFFER A VARIETY OF SERVICES
        </h2>
        <p className={`font-light text-xl ${source_Sans_3.className}`}>
          That will bring your vision to life through the appropriate use of web
          technologies
        </p>
      </div>
    </Container>
  );
}