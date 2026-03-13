import React from "react";
import { Metadata } from "next";
import BlogModernMain from "@/page-views/blog/blog-modern";

export const metadata: Metadata = {
  title: "Prime Creative - Blog Modern page",
};

const BlogModernPage = () => {
  return (
    <BlogModernMain/>
  );
};

export default BlogModernPage;
