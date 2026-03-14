import React from "react";
import { Metadata } from "next";
import BlogClassicMain from "@/page-views/blog/blog-classic";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.blog.title,
  description: siteSettings.metadata.blog.description,
};

const BlogClassicPage = () => {
  return (
    <BlogClassicMain/>
  );
};

export default BlogClassicPage;
