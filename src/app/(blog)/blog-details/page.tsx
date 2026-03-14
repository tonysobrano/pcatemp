import React from "react";
import { Metadata } from "next";
import BlogDetailsMain from "@/components/blog/blog-details-main";
import { orderedBlogPosts } from "@/content/blog";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: siteSettings.metadata.blog.title,
  description: siteSettings.metadata.blog.description,
};

const BlogDetailsPage = () => {
  return (
    <BlogDetailsMain post={orderedBlogPosts[0]} />
  );
};

export default BlogDetailsPage;
