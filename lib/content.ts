// lib/content.ts

import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

export type GalleryItem = {
  type?: "image" | "video";
  src?: string;
  poster?: string;
  alt?: string;
};

export type SeoMeta = {
  title?: string;
  description?: string;
};

export type MdFeatureLinkItem = {
  title?: string;
  subtitle?: string;
  description?: string;
  href?: string;
  icon?: string;
  image?: {
    src?: string;
    alt?: string;
  };
};

export type MdFeatureLinks = {
  variant?: "home" | "compact";
  titleTop?: string;
  titleBottom?: string;
  items?: MdFeatureLinkItem[];
};


export type MdOverview = {
  title?: string;
  paragraphs?: string[];
  specs?: string[];
  slides?: {
    src?: string;
    alt?: string;
  }[];
  catalogHref?: string;
};


export type MdLineLayoutItem = {
  id?: string;
  title?: string;
  summary?: string;
  image?: string;
  points?: string[];
  hotspot?: {
    x?: number;
    y?: number;
  };
};

export type MdLineLayout = {
  title?: string;
  subtitle?: string;
  image?: {
    src?: string;
    alt?: string;
  };
  items?: MdLineLayoutItem[];
};

export type MdPage = {
  type?: string;
  slug?: string;
  categorySlug?: string;
  title?: string;
  subtitle?: string;
  excerpt?: string;
  cover?: string;
  featuredImage?: string;
  video?: string;
  featureLinks?: MdFeatureLinks;
  capacity?: string;
  application?: string;
  overview?: MdOverview;
lineLayout?: MdLineLayout;
  gallery?: GalleryItem[];
  seo?: SeoMeta;
  content?: string;
};

function readMdFile(filePath: string): MdPage | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    ...(data as Omit<MdPage, "content">),
    content,
  };
}

export function getContentPage(relativePath: string): MdPage | null {
  const fullPath = path.join(process.cwd(), "content/fa", relativePath);
  return readMdFile(fullPath);
}

export function getDirectoryMdItems(relativeDir: string): MdPage[] {
  const fullDir = path.join(process.cwd(), "content/fa", relativeDir);

  if (!fs.existsSync(fullDir)) {
    return [];
  }

  return fs
    .readdirSync(fullDir)
    .filter((fileName) => fileName.endsWith(".md") && fileName !== "index.md")
    .map((fileName) => {
      const page = readMdFile(path.join(fullDir, fileName));

      return {
        ...page,
        slug: page?.slug ?? fileName.replace(".md", ""),
      } as MdPage;
    })
    .filter(Boolean);
}
