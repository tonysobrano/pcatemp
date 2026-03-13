import React from "react";
import { Metadata } from "next";
import BlogDetailsTwoMain from "@/page-views/blog/blog-details-2";

export const metadata: Metadata = {
  title: "Prime Creative - Blog Details page",
};
const BlogDetailsTwoPage = () => {
  return (
    <BlogDetailsTwoMain />
  );
};

export default BlogDetailsTwoPage;
