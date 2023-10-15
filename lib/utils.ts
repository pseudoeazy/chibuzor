import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type isMobileType = () => boolean;

export const isMobile: isMobileType = () => {
  const breakpointWidth = 768;
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return screenWidth < breakpointWidth;
};
