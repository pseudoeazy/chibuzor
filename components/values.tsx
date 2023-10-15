"use client";

import React from "react";
import Container from "@/components/container";
import { raleway } from "@/styles/font";
import { Brush, Trophy, Users2 } from "lucide-react";

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
    <Container className="flex justify-center  mt-8 mb-36 lg:my-36 min-h-[22rem]">
      <section className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
        <div className="flex-1 w-full  pt-36">
          <h2
            className={`text-2xl font-bold uppercase  lg:rotate-[270deg] ${raleway.className}`}
          >
            Values
          </h2>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 self-end ">
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
