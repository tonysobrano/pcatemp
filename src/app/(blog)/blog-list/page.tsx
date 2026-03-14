import React from "react";
import { Metadata } from "next";
import BlogListMain from "@/page-views/blog/blog-list";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.blog.title,
  description: siteSettings.metadata.blog.description,
};

const BlogListPage = () => {
  return (
    <BlogListMain/>
  );
};

export default BlogListPage;
