import Link from "next/link";
import React from "react";
import { getAdjacentBlogPosts, orderedBlogPosts } from "@/content/blog";

type BlogDetailsNavigationProps = {
  slug?: string;
};

export default function BlogDetailsNavigation({
  slug,
}: BlogDetailsNavigationProps) {
  const resolvedSlug = slug ?? orderedBlogPosts[0].slug;
  const { previous, next } = getAdjacentBlogPosts(resolvedSlug);

  return (
    <div className="blog-details-navigation-style mb-120">
      <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
        {previous ? (
          <Link className="project-details-1-prev" href={`/blog/${previous.slug}`}>
            <i className="fa-sharp fa-regular fa-arrow-left"></i>
            <span>Prev</span>
          </Link>
        ) : (
          <span className="project-details-1-prev opacity-0">
            <i className="fa-sharp fa-regular fa-arrow-left"></i>
            <span>Prev</span>
          </span>
        )}
        <Link href="/blog-list">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="3" r="3" fill="#19191A" />
              <circle cx="3" cy="3" r="3" fill="#19191A" />
              <circle cx="3" cy="17" r="3" fill="#19191A" />
              <circle cx="17" cy="17" r="3" fill="#19191A" />
            </svg>
          </span>
        </Link>
        {next ? (
          <Link className="project-details-1-next" href={`/blog/${next.slug}`}>
            <span>Next</span>
            <i className="fa-sharp fa-regular fa-arrow-right"></i>
          </Link>
        ) : (
          <span className="project-details-1-next opacity-0">
            <span>Next</span>
            <i className="fa-sharp fa-regular fa-arrow-right"></i>
          </span>
        )}
      </div>
    </div>
  );
}
