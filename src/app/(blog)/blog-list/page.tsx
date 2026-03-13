import React from "react";
import { Metadata } from "next";
import BlogListMain from "@/page-views/blog/blog-list";

export const metadata: Metadata = {
  title: "Prime Creative - Blog List page",
};

const BlogListPage = () => {
  return (
    <BlogListMain/>
  );
};

export default BlogListPage;
