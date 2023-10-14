import React from "react";
import Header from "@/components/header";
import SiteLayout from "@/components/site-layout";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import RecentBlogPost from "@/components/recent-blog-post";
import BlogHero from "@/components/blog-hero";

export const metadata: Metadata = {
  title: "Chibuzor | Latest Blog Post",
  description:
    "Chibuzor is a Web Developer with Focus on Frontend Technologies ",
};

export default function Page() {
  return (
    <SiteLayout>
      <Header />
      <BlogHero />
      <RecentBlogPost />

      <Footer />
    </SiteLayout>
  );
}
