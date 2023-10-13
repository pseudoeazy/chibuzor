import React from "react";
import Container from "@/components/container";
import Link from "next/link";
import { raleway } from "@/styles/font";
import SocialMedia from "./social-media";
const menus = [
  {
    label: "services",
    path: "/services",
  },
  {
    label: "projects",
    path: "/projects",
  },
  {
    label: "blog",
    path: "/blog",
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "contact",
    path: "/contact",
  },
];

const year = new Date().getFullYear();
export default function Footer() {
  return (
    <Container className="px-36">
      <footer className="flex space-x-36">
        <div className="flex flex-col min-h-[22rem] ">
          <div
            className={`font-bold text-base leading-6 uppercase ${raleway.className}`}
          >
            <Link
              className={`transition duration-500 hover:text-tetiary-100 font-bold text-base leading-6 uppercase ${raleway.className}`}
              href="/"
            >
              Chibuz
            </Link>
          </div>
          <SocialMedia />
          <div className=" mt-auto">©Copyrights {year} Chibuz™</div>
        </div>
        <div>
          <ul className="space-y-10">
            {menus.map((menu) => (
              <li key={menu.path}>
                <Link
                  className={`transition duration-500 hover:text-tetiary-100 font-bold text-base leading-6 uppercase ${raleway.className}`}
                  href={menu.path}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </Container>
  );
}
