import React from 'react';
import Container from '@/components/container';
import Link from 'next/link';
import { raleway } from '@/styles/font';
import SocialMedia from './social-media';
const menus = [
  {
    label: 'services',
    path: '/services',
  },
  {
    label: 'projects',
    path: '/projects',
  },
  {
    label: 'blog',
    path: '/blog',
  },
  {
    label: 'about',
    path: '/about',
  },
  {
    label: 'contact',
    path: '/contact',
  },
];

const year = new Date().getFullYear();
export default function Footer() {
  return (
    <Container className="lg:p-36 p-4 pb-8">
      <footer className="flex md:space-x-36 justify-between md:justify-start">
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
          <div className=" mt-auto">©Copyrights {year} Chibuz</div>
        </div>
        <div>
          <h2 className="my-10 text-xl font-bold text-black dark:text-white">
            Quick Links
          </h2>
          <ul className="space-y-4">
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
