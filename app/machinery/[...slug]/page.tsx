import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { AppSection, AppSectionHeader } from "@/components/shared/app-section";
import { Hero } from "@/components/shared/hero";
import { siteConfig } from "@/config/site";
import { getContentPage, getDirectoryMdItems } from "@/lib/content";
import { mediaUrl } from "@/lib/media-url";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

function getMdPath(slug: string[]) {
  if (slug.length === 1) {
    return `machinery/${slug[0]}/index.md`;
  }

  return `machinery/${slug[0]}/${slug[1]}.md`;
}

function getFallbackTitle(slug: string[]) {
  return (
    slug
      .at(-1)
      ?.split("-")
      .join(" ") || siteConfig.defaults.machineryProduct.title
  );
}

export default async function MachineryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getContentPage(getMdPath(slug));

  const isCategoryPage = slug.length === 1;

  const defaults = isCategoryPage
    ? siteConfig.defaults.machineryCategory
    : siteConfig.defaults.machineryProduct;

  const title = page?.title ?? getFallbackTitle(slug);
  const subtitle = page?.subtitle ?? defaults.subtitle;
  const excerpt = page?.excerpt ?? defaults.excerpt;
  const cover = page?.cover ?? defaults.cover;
  const featuredImage = defaults.featuredImage;

  const categoryItems = isCategoryPage
    ? getDirectoryMdItems(`machinery/${slug[0]}`)
    : [];

  const breadcrumbs = [
    {
      title: "خانه",
      href: "/",
    },
    {
      title: "ماشین‌آلات",
      href: "/machinery",
    },
  ];

  if (isCategoryPage) {
    breadcrumbs.push({
      title,
      href: "",
    });
  }

  if (slug.length === 2) {
    const categoryPage = getContentPage(`machinery/${slug[0]}/index.md`);

    breadcrumbs.push({
      title: categoryPage?.title ?? siteConfig.defaults.machineryCategory.title,
      href: `/machinery/${slug[0]}`,
    });

    breadcrumbs.push({
      title,
      href: "",
    });
  }

  return (
    <main>
      <Hero
        title={title}
        subtitle={subtitle}
        videoSrc={page?.video}
        videoPoster={mediaUrl(cover)}
        showBreadcrumbs
        breadcrumbs={breadcrumbs}
      />

      {isCategoryPage ? (
        <AppSection>
          <AppSectionHeader
            title={`محصولات ${title}`}
            description={excerpt}
          />

          {categoryItems.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/machinery/${slug[0]}/${item.slug}`}
                  className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:border-industrial-orange/40 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden bg-industrial-surface">
                    <Image
                      src={mediaUrl(
                        item.featuredImage ||
                          item.cover ||
                          siteConfig.defaults.machineryProduct.featuredImage
                      )}
                      alt={item.title || "ماشین‌آلات سیمرکو"}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 text-right">
                    <h2 className="text-lg font-black text-foreground">
                      {item.title}
                    </h2>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {item.excerpt}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-industrial-orange">
                      مشاهده ماشین
                      <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border bg-card p-6 text-right shadow-sm">
              <h2 className="text-xl font-black text-foreground">{title}</h2>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                ماشین‌آلات این دسته به‌زودی اضافه می‌شوند.
              </p>
            </div>
          )}
        </AppSection>
      ) : (
        <AppSection>
          <article className="mx-auto max-w-4xl text-right">
            <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
              <h1 className="text-2xl font-black text-foreground md:text-3xl">
                {title}
              </h1>

              <p className="mt-5 text-base leading-9 text-muted-foreground">
                {excerpt}
              </p>

              {page?.content ? (
                <div className="mt-8 whitespace-pre-line text-base leading-9 text-foreground">
                  {page.content}
                </div>
              ) : null}
            </div>
          </article>
        </AppSection>
      )}
    </main>
  );
}