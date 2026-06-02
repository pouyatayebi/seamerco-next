// app/blog/[slug]/page.tsx

/**
 * Blog post detail page.
 */

import Image from "next/image";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { mediaUrl } from "@/lib/media-url";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background py-12 md:py-16">
      <article className="container-page max-w-3xl text-right">
        <Badge variant="secondary">{post.category}</Badge>

        <h1 className="mt-4 text-3xl font-black leading-[1.7] text-foreground md:text-4xl">
          {post.title}
        </h1>

        <p className="mt-4 text-sm leading-8 text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="relative mt-8 h-[22rem] overflow-hidden rounded-2xl md:h-[28rem]">
          <Image src={mediaUrl(post.image)} alt={post.title} fill className="object-cover" />
        </div>

        <div
          className="prose prose-neutral mt-8 max-w-none text-right leading-8 prose-p:leading-8"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}