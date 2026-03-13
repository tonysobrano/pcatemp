import React from "react";
import { Metadata } from "next";
import BlogDetailsMain from "@/components/blog/blog-details-main";

export const metadata: Metadata = {
  title: "Prime Creative - Blog Classic page",
};

const BlogDetailsPage = () => {
  return (
    <BlogDetailsMain id={1} />
  );
};

export default BlogDetailsPage;
