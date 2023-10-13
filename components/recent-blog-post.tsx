"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import { raleway } from "@/styles/font";
import { ArticleLoader } from "@/components/article-loader";
import { Blog } from "@/types/blog";
import BlogError from "@/components/blog-error";
import BlogData from "@/components/blog-data";

enum BlogDataState {
  LOADING = "LOADING",
  READY = "READY",
  ERROR = "ERROR",
}

export default function RecentBlogPost() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogState, setBlogState] = useState<BlogDataState>(
    BlogDataState.ERROR
  );

  useEffect(() => {
    const mediumApiURL = process.env.MEDIUM_API as string;
    fetch(mediumApiURL)
      .then((res) => res.json())
      .then(
        (data: { items: Blog[] }) => {
          setBlogs(data.items);
          setBlogState(BlogDataState.READY);
        },
        (error: any) => {
          console.log({ error: error.message });
          setBlogState(BlogDataState.ERROR);
        }
      );
  }, []);

  if (blogState === BlogDataState.ERROR) {
    return <BlogError />;
  }

  return (
    <Container className="flex justify-center  min-h-[22rem] px-36">
      <section className="flex flex-col ">
        <div className=" w-full  my-36">
          <h2 className={`text-2xl font-bold uppercase ${raleway.className}`}>
            recent blog post
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {blogState === BlogDataState.LOADING ? (
            <>
              <ArticleLoader />
              <ArticleLoader />
              <ArticleLoader />
            </>
          ) : (
            <BlogData blogs={blogs} />
          )}
        </div>
      </section>
    </Container>
  );
}
