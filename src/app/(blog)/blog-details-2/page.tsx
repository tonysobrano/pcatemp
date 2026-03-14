import React from "react";
import { Metadata } from "next";
import BlogDetailsTwoMain from "@/page-views/blog/blog-details-2";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.blog.title,
  description: siteSettings.metadata.blog.description,
};
const BlogDetailsTwoPage = () => {
  return (
    <BlogDetailsTwoMain />
  );
};

export default BlogDetailsTwoPage;
