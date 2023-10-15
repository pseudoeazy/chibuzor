import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import { raleway, source_Sans_3 } from "@/styles/font";
import myServices from "@/constants/my-services";

export default function MyServices() {
  return (
    <Container className="px-4 md:px-36 my-36">
      <section className="w-full space-y-24">
        {myServices.map((service, idx) => (
          <div
            key={idx}
            className="w-full flex flex-col lg:flex-row  lg:justify-between"
            id={service.id}
          >
            <div className="relative lg:w-[34rem] h-[24rem]">
              <Image
                src={`/images/${service.imageUrl}`}
                alt={`${service.title}`}
                fill={true}
              />
            </div>
            <div className="max-w-[28rem]">
              <h3
                className={`relative mb-12 text-2xl font-semibold uppercase dark:text-white text-black ${raleway.className}`}
              >
                {service.title}
              </h3>
              <p className={`font-light text-lg ${source_Sans_3.className}`}>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}
