// components/sections/home-latest-blog-section.tsx

/**
 * Homepage latest blog section.
 * Shows the latest three blog posts with an industrial visual frame.
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpenText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { faHomeLatestBlogContent } from "@/content/fa/home/latest-blog";
import { getAllBlogPosts } from "@/lib/blog";
import { AppSection } from "../shared/app-section";
import { mediaUrl } from "@/lib/media-url";

export function HomeLatestBlogSection() {
  const posts = getAllBlogPosts().slice(0, 3);

  const {
    eyebrow,
    title,
    description,
    allPostsLabel,
    allPostsHref,
    readMoreLabel,
  } = faHomeLatestBlogContent;

  return (
<AppSection className="pb-10 pt-20 md:pb-12 md:pt-24">
  <div
    className="absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage: `
        linear-gradient(to right, #03223e 1px, transparent 1px),
        linear-gradient(to bottom, #03223e 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  />

  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-industrial-orange/30 to-transparent" />
  <div className="absolute inset-y-0 left-0 w-px bg-industrial-navy/10" />
  <div className="absolute inset-y-0 right-0 w-px bg-industrial-navy/10" />

  <div className="relative overflow-hidden rounded-[2rem] border border-industrial-navy/10 bg-white shadow-[0_20px_60px_rgba(3,34,62,0.08)]">
    <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-industrial-orange/35" />
    <div className="absolute left-6 bottom-6 h-8 w-8 border-l-2 border-b-2 border-industrial-orange/35" />

    <div className="relative border-b border-industrial-navy/10 px-5 py-7 text-right md:px-8 md:py-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-industrial-orange/20 bg-industrial-orange/5 px-3 py-1 text-xs font-bold text-industrial-orange">
        <BookOpenText className="size-4" />
        {eyebrow}
      </div>

      <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-black leading-10 text-foreground md:text-3xl">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-8 text-muted-foreground">
            {description}
          </p>
        </div>

        <Link
          href={allPostsHref}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-industrial-navy px-5 py-2.5 text-sm font-bold text-industrial-navy transition hover:bg-industrial-navy hover:text-white"
        >
          {allPostsLabel}
          <ArrowLeft className="size-4" />
        </Link>
      </div>
    </div>

    <div className="relative grid gap-5 p-5 md:grid-cols-3 md:p-8">
      {posts.map((post, index) => (
        <Card
          key={post.slug}
          className="group overflow-hidden rounded-3xl border border-industrial-navy/10 bg-background p-0 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-industrial-orange/35 hover:shadow-[0_14px_34px_rgba(3,34,62,0.12)]"
        >
          <Link href={`/blog/${post.slug}`} className="block h-full">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={mediaUrl(post.image)}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/20 to-transparent" />

              {index === 0 ? (
                <span className="absolute right-3 top-3 rounded-full bg-industrial-orange px-3 py-1 text-[11px] font-bold text-white">
                  تازه‌ترین مقاله
                </span>
              ) : null}
            </div>

            <CardContent className="p-5 text-right">
              <Badge variant="secondary">{post.category}</Badge>

              <h3 className="mt-4 line-clamp-2 text-lg font-extrabold leading-8 text-foreground">
                {post.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                {post.excerpt}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-industrial-orange">
                {readMoreLabel}
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  </div>
</AppSection>
  );
}