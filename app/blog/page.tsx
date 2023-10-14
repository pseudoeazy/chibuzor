import React from "react";
import type { Metadata } from "next";
import RecentBlogPost from "@/components/recent-blog-post";
import BlogHero from "@/components/blog-hero";

export const metadata: Metadata = {
  title: "Chibuzor | Latest Blog Post",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <>
      <BlogHero />
      <RecentBlogPost />
    </>
  );
}
