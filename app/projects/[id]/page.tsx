import React from "react";
import type { Metadata } from "next";
import works from "@/constants/works";
import { raleway, source_Sans_3 } from "@/styles/font";
import Container from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function getProjectById(id: string) {
  return works.find((work) => work.id == id);
}

export const metadata: Metadata = {
  title: "Chibuzor | Projects",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = getProjectById(id);
  return (
    <Container className="px-36 mt-36 flex flex-col items-center text-center">
      {project && (
        <div className="max-w-[33rem]">
          <h2
            className={`font-bold text-5xl uppercase mb-12 ${raleway.className}`}
          >
            {project.title}
          </h2>
          <p className={`font-light text-xl ${source_Sans_3.className}`}>
            {project.overview}
          </p>
        </div>
      )}

      {project && (
        <section className="flex flex-col items-center space-y-36 my-36 ">
          <div className="relative w-[640px] h-[400px]">
            <Image src={"/images/banner.jpg"} fill={true} alt="banner" />
          </div>

          <p className={`font-light text-xl ${source_Sans_3.className}`}>
            {project.overview}
          </p>
        </section>
      )}
      {project && (
        <section className="flex flex-col items-center space-y-36 my-36 ">
          <div className="relative w-[640px] h-[400px]">
            <Image src={"/images/banner.jpg"} fill={true} alt="banner" />
          </div>

          <p className={`font-light text-xl ${source_Sans_3.className}`}>
            {project.overview}
          </p>
        </section>
      )}

      {project && (
        <div className="flex justify-center items-center">
          <Button className="w-[18rem]  rounded-none font-bold uppercase text-base p-5 text-center bg-tetiary-100 text-black hover:text-tetiary-100">
            <a href={project.liveURL} target="_blank" rel="noreferrer">
              VISIT THE SITE
            </a>
          </Button>
        </div>
      )}
    </Container>
  );
}
