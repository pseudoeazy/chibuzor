import React from "react";
import { raleway, source_Sans_3 } from "@/styles/font";
import Container from "@/components/container";

export default function BlogHero() {
  return (
    <Container className="px-36 mt-36">
      <div className="max-w-[33rem]">
        <h2
          className={`font-bold text-5xl uppercase mb-12 ${raleway.className}`}
        >
          Catch up on the latest in web development
        </h2>
        <p className={`font-light text-xl ${source_Sans_3.className}`}>
          My blog is filled with exciting information about web development
        </p>
      </div>
    </Container>
  );
}
