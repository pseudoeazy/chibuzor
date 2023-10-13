"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { raleway } from "@/styles/font";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Figma,
  Presentation,
  ToyBrick,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const myServices = [
  {
    icon: Code,
    imageUrl: "web.jpg",
    title: "web development",
    path: "/service#web-dev",
  },
  {
    icon: ToyBrick,
    imageUrl: "chrome.jpg",
    title: "chrome extension",
    path: "/service#chrome",
  },
  {
    icon: Figma,
    imageUrl: "chrome.jpg",
    title: "Figma To HTML",
    path: "/service#chrome",
  },
  {
    icon: Presentation,
    imageUrl: "chrome.jpg",
    title: "WordPress Plugin",
    path: "/service#chrome",
  },
];

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2); // Number of items to display per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myServices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(myServices.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((page) => page + 1);
  };
  const handlePrevious = () => {
    setCurrentPage((page) => page - 1);
  };
  return (
    <Container className="px-36">
      <section>
        <h2
          className={`mb-12 text-2xl font-bold uppercase ${raleway.className}`}
        >
          services
        </h2>
        <div className="grid grid-cols-2 gap-5 mb-16">
          {currentItems.map((service, idx) => (
            <div
              key={idx}
              className="relative w-[35rem] h-[25rem] flex flex-col justify-center items-center space-y-8 bg-black/80"
            >
              <Image
                src={`/images/${service.imageUrl}`}
                alt={`${service.title} image`}
                fill={true}
              />
              <service.icon className="relative z-10 w-20 h-20 text-tetiary-100" />
              <div
                className={`relative z-10 text-base font-normal leading-8 uppercase text-white ${raleway.className}`}
              >
                {service.title}
              </div>
              <Link
                href={`${service.path}`}
                className="relative z-10 block w-64 p-5 bg-tetiary-100 text-center text-black uppercase transition  hover:bg-black hover:text-tetiary-100"
              >
                read more
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-16">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            disabled={currentPage <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>{" "}
          <div className="w-full border h-1 bg-black mx-1"></div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </Container>
  );
}
