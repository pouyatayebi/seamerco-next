// lib/blog.ts

/**
 * Blog content utilities.
 * Reads markdown files from content/fa/blog and returns typed blog data.
 */

import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "content/fa/blog");

export type BlogPostMeta = {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  category: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function getBlogFileNames() {
  return fs.readdirSync(blogDirectory).filter((fileName) => {
    return fileName.endsWith(".md");
  });
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const posts = getBlogFileNames().map((fileName) => {
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return data as BlogPostMeta;
  });

  return posts.sort((a, b) => {
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const fileName = `${slug}.md`;
  const fullPath = path.join(blogDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...(data as BlogPostMeta),
    contentHtml,
  };
}