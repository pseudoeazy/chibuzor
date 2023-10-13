"use client";
import React from "react";
import { raleway } from "@/styles/font";

export default function SideTitle() {
  return (
    <div className="flex-1 w-full  pt-36">
      <h2
        className={`text-2xl font-bold uppercase  rotate-[270deg] ${raleway.className}`}
      >
        Values
      </h2>
    </div>
  );
}
