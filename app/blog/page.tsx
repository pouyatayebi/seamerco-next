// app/blog/page.tsx

/**
 * Blog listing page.
 */

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="bg-background py-12 md:py-16">
      <section className="container-page">
        <div className="max-w-2xl text-right">
          <p className="text-sm font-bold text-industrial-orange">
            مقالات تخصصی سیمرکو
          </p>

          <h1 className="mt-2 text-3xl font-black text-foreground">
            بلاگ سیمرکو
          </h1>

          <p className="mt-3 text-sm leading-8 text-muted-foreground">
            مطالب آموزشی و فنی درباره راه‌اندازی کارخانه، خطوط تولید و
            ماشین‌آلات صنایع غذایی کنسروی.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden rounded-2xl transition hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <CardContent className="p-5 text-right">
                  <Badge variant="secondary">{post.category}</Badge>

                  <h2 className="mt-4 text-lg font-black leading-8 text-foreground">
                    {post.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}