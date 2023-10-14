"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { raleway, source_Sans_3 } from "@/styles/font";
import Container from "@/components/container";
import Image from "next/image";

import works from "@/constants/works";
import { usePathname } from "next/navigation";
export default function Projects() {
  const pathname = usePathname();

  let myProjects = works;

  const isHome = pathname === "/";
  if (isHome) {
    myProjects = works.slice(0, 4);
  }

  return (
    <Container className="px-36 my-36">
      <section>
        <div>
          <h2
            className={`mb-12 text-2xl font-bold uppercase ${raleway.className}`}
          >
            projects
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {myProjects.map((work, idx) => (
              <Card className="max-w-[35rem] border-0" key={idx}>
                <CardContent className="grid gap-4 p-0">
                  <div className="relative w-full h-96">
                    <Image
                      src="/images/project-1.jpg"
                      fill={true}
                      alt="project"
                    />
                  </div>
                  <div className="flex flex-col space-y-8 py-8">
                    <div className="uppercase font-bold leading-5 text-xl">
                      {work.title}
                    </div>
                    <p
                      className={`text-lg font-light ${source_Sans_3.className}`}
                    >
                      {work.overview}
                    </p>
                    <Button className="w-[18rem] rounded-none font-bold uppercase text-base p-5 text-center bg-tetiary-100 text-black hover:text-tetiary-100">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
