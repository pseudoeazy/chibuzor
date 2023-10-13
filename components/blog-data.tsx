import React from "react";
import Image from "next/image";
import { source_Sans_3 } from "@/styles/font";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Blog } from "@/types/blog";

interface Props {
  blogs: Blog[];
}
const BlogData: React.FC<Props> = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog, idx) => (
        <Card className="border" key={idx}>
          <CardContent className="grid gap-4 p-0">
            <div className="relative w-full h-96">
              <Image src={blog.thumbnail} fill={true} alt="project" />
            </div>
            <div className="flex flex-col space-y-8 py-8">
              <div className="uppercase font-bold leading-5 text-xl">
                {blog.title}
              </div>

              <small>{blog?.pubDate}</small>
              <Button className="w-[18rem] rounded-none font-bold uppercase text-base p-5 text-center bg-tetiary-100 text-black hover:text-tetiary-100">
                <Link href={`/blog/${blog.title}`}>Read More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default BlogData;
