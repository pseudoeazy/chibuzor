"use client";

import React from "react";
import Container from "@/components/container";
import { raleway } from "@/styles/font";
import { Brush, Trophy, Users2 } from "lucide-react";
import SideTitle from "./side-title";

const myValues = [
  {
    label: "Teamwork",
    icon: Users2,
  },
  {
    label: "Excellence",
    icon: Trophy,
  },
  {
    label: "Creativity",
    icon: Brush,
  },
];
export default function MyValues() {
  return (
    <Container className="flex justify-center  my-36 min-h-[22rem]">
      <section className="flex ">
        <SideTitle />
        <div className="flex-1 flex space-x-4 self-end">
          {myValues.map((myValue) => (
            <div
              key={myValue.label}
              className="relative w-[22rem] h-[20rem] flex items-center justify-center border dark:border-white border-black"
            >
              <div
                className={`text-center uppercase leading-6 font-semibold text-lg  ${raleway.className}`}
              >
                {myValue.label}
              </div>
              <myValue.icon className="h-16 w-16 absolute right-5 bottom-5 text-tetiary-100" />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
