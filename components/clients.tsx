import React from "react";
import Container from "@/components/container";
import { raleway } from "@/styles/font";
import Image from "next/image";

export default function Clients() {
  return (
    <Container className="px-36 my-36">
      <section>
        <h2
          className={`mb-12 text-2xl font-bold uppercase ${raleway.className}`}
        >
          clients
        </h2>
        <div className="grid grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5].map((client, idx) => (
            <div
              key={idx}
              className="relative w-48 h-48 flex justify-center items-center border shadow-lg bg-white"
            >
              <Image
                src="/images/airbnb.png"
                width={126}
                height={40}
                alt="airbnb"
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
