"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/container";
import menus from "@/constants/menus";
import MobileMenu from "@/components/mobile/mobile-menu";

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleToggleMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <Container className="flex justify-center">
      <header className="w-full flex justify-center">
        <nav className="w-full hidden lg:flex justify-center items-center md:pt-20">
          <ul className="md:flex md:px-20 space-x-16 bg-zinc-950 dark:bg-white">
            {menus.map((menu) => (
              <li key={menu.path} className="flex items-center">
                <Link
                  className={cn(
                    "py-8 inline-block uppercase text-primary-foreground hover:text-text-tetiary-100 hover:border-b-2 border-b-2 hover:border-b-text-tetiary-100 border-transparent transition duration-500",
                    pathname === menu.path
                      ? "dark:text-tetiary-100 border-b-2 border-b-tetiary-100"
                      : ""
                  )}
                  href={menu.path}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center">
              <span className="py-8">
                {isMounted && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleToggleMode}
                  >
                    {theme === "light" ? (
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    ) : (
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    )}
                  </Button>
                )}
              </span>
            </li>
          </ul>
        </nav>
        <MobileMenu />
      </header>
    </Container>
  );
}
