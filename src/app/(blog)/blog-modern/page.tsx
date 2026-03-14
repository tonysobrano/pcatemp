import React from "react";
import { Metadata } from "next";
import BlogModernMain from "@/page-views/blog/blog-modern";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.blog.title,
  description: siteSettings.metadata.blog.description,
};

const BlogModernPage = () => {
  return (
    <BlogModernMain/>
  );
};

export default BlogModernPage;
