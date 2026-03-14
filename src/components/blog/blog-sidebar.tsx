import React from "react";
import Image from "next/image";
import banner from "@/assets/img/inner-blog/blog-sidebar/banner/banner.jpg";
import { Search } from "../svg";
import Link from "next/link";
import {
  blogCategories,
  blogTags,
  formatBlogDate,
  orderedBlogPosts,
  recentBlogPosts,
} from "@/content/blog";
import { siteSettings } from "@/content/site-settings";

export default function BlogSidebar() {
  const author = orderedBlogPosts[0].author;

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-45">
        <div className="sidebar__author text-center">
          <div className="sidebar__author-thumb">
            <Image src={author.avatar} alt={author.name} style={{ height: "auto" }} />
          </div>
          <div className="sidebar__author-content">
            <h4 className="sidebar__author-title">{author.name}</h4>
            <p>{author.bio}</p>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form action="#">
              <div className="sidebar__search-input-2">
                <input type="text" placeholder="Search articles" />
                <button type="submit">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            {blogCategories.map((category) => (
              <li key={category}>
                <Link href="/blog-list">{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recentBlogPosts.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-30 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog/${item.slug}`}>
                    <Image
                      style={{ width: "auto", height: "auto" }}
                      src={item.coverImage}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta d-flex align-items-center">
                    <span>{formatBlogDate(item.publishedAt)}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {blogTags.map((tag) => (
              <Link href="/blog-list" key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__banner-img">
            <Image src={banner} alt="banner" style={{ height: "auto" }} />
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Follow Us</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__social">
            {siteSettings.footerSocialLinks
              .filter((link) =>
                ["facebook", "instagram", "linkedin"].includes(link.label)
              )
              .map((link) => (
                <Link href={link.href} key={link.label} target="_blank">
                  <i
                    className={`fa-brands fa-${
                      link.label === "linkedin" ? "linkedin-in" : link.label
                    }`}
                  ></i>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
