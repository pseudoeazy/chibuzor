"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import { raleway } from "@/styles/font";
import { ChevronLeft, ChevronRight, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isMobile } from "@/lib/utils";

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
    We enjoyed working with him and will likely have additional jobs for him in the future`,
    user: "Upwork Client",
  },
  {
    id: 3,
    testimony: `Eazy you can build anything. Thank you for the help on my websites.`,
    user: "Owner Airport-Limo Ancaster",
  },
  {
    id: 4,
    testimony: `Thank you for your help on our project :-)`,
    user: "Upwork Client",
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Number of items to display per page
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

  useEffect(() => {
    setIsMounted(true);
    setItemsPerPage(isMobile() ? 1 : 2);
  }, []);
  return (
    <Container className="px-4 lg:px-36 my-36">
      <section>
        <h2
          className={`mb-12 text-2xl font-bold uppercase ${raleway.className}`}
        >
          Testimonials
        </h2>
        <div className="flex md:space-x-20">
          {currentItems.map((testimony) => (
            <div key={testimony.id} className="lg:max-w-[33rem] flex">
              <div className="hidden  h-24 w-24 lg:flex items-center justify-center p-8 border border-black mr-12">
                <User2 className="text-tetiary-100 h-8 w-8 " />
              </div>
              <div className="flex flex-col">
                <div className="border-b-4 pb-5">
                  <div className="uppercase font-bold leading-5 text-xl">
                    {testimony.user}
                  </div>
                </div>
                <div className="pt-10">
                  <p className="text-lg font-light h-44 overflow-y-scroll scrollbar">
                    {testimony.testimony}
                  </p>
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
