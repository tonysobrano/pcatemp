import {
  blogClassicHeroPosts,
  blogClassicPosts,
  blogListPosts,
  blogModernPosts,
  homeBlogPosts,
  orderedBlogPosts,
  formatBlogDate,
  type BlogPost,
} from "@/content/blog";
import { IBlogDT } from "@/types/blog-d-t";

function toLegacyBlogPreview(post: BlogPost): IBlogDT {
  return {
    id: post.id,
    slug: post.slug,
    img: post.coverImage,
    title: post.title,
    date: formatBlogDate(post.publishedAt).toUpperCase(),
    category: post.category,
    author: post.author.name,
    avatar: post.author.avatar,
    desc: post.excerpt,
  };
}

export const blog_home_five: IBlogDT[] = homeBlogPosts.map(toLegacyBlogPreview);
export const blog_modern: IBlogDT[] = blogModernPosts.map(toLegacyBlogPreview);
export const blog_classic: IBlogDT[] = [
  ...blogClassicHeroPosts.map((post) => ({
    ...toLegacyBlogPreview(post),
    blogHeroSlider: true,
  })),
  ...blogClassicPosts.map(toLegacyBlogPreview),
];
export const blog_lists: IBlogDT[] = blogListPosts.map(toLegacyBlogPreview);
export const blog_data: IBlogDT[] = orderedBlogPosts.map(toLegacyBlogPreview);
