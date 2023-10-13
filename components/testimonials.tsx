"use client";
import React, { useState } from "react";
import Container from "@/components/container";
import { raleway } from "@/styles/font";
import { ChevronLeft, ChevronRight, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonies = [
  {
    id: 1,
    testimony: `
  Chibuzor is a highly skilled JS developer. 
  I hired 2 people prior to him from various countries and they could not solve my JavaScript problem. 
  Chibuzor took a look at the files before accepting the job, confirmed he could complete the task and solved it all in around 10 minutes. Highly Recommended to others wanting someone honest in their skillset who actually delivers.`,
    user: "Upwork Client",
  },
  {
    id: 2,
    testimony: `
  I wanted to rebuild a modern web application that was fast
  Chibuzor suggested we used Next.js rather than PHP and now my website loads like a charm.`,
    user: "CEO Gosheny",
  },
  {
    id: 3,
    testimony: `Israel you can build anything.`,
    user: "Owner Airport-Limo Ancaster",
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2); // Number of items to display per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimonies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(testimonies.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((page) => page + 1);
  };
  const handlePrevious = () => {
    setCurrentPage((page) => page - 1);
  };
  return (
    <Container className="px-36 my-36">
      <section>
        <h2
          className={`mb-12 text-2xl font-bold uppercase ${raleway.className}`}
        >
          Testimonials
        </h2>
        <div className="flex lg:space-x-20">
          {currentItems.map((testimony) => (
            <div key={testimony.id} className="max-w-[33rem] flex">
              <div className="h-24 w-24 flex items-center justify-center p-8 border border-black mr-12">
                <User2 className="text-tetiary-100 h-8 w-8 " />
              </div>
              <div className="flex flex-col">
                <div className="border-b-4 pb-5">
                  <div className="uppercase font-bold leading-5 text-xl">
                    {testimony.user}
                  </div>
                </div>
                <div className="pt-10">
                  <p className="text-lg font-light">{testimony.testimony}</p>
                </div>
              </div>
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
