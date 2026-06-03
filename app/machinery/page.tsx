import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

import { ArrowLeft } from "lucide-react";

import { AppSection, AppSectionHeader } from "@/components/shared/app-section";
import { Hero } from "@/components/shared/hero";
import { getContentPage } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { mediaUrl } from "@/lib/media-url";

function getMachineryCategories() {
  const rootDir = path.join(process.cwd(), "content/fa/machinery");

  return fs
    .readdirSync(rootDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const page = getContentPage(
        `machinery/${entry.name}/index.md`
      );

      return {
        slug: entry.name,
        ...page,
      };
    });
}

export default function MachineryIndexPage() {
  const page = getContentPage("machinery/index.md");
  const categories = getMachineryCategories();

  return (
    <main>
      <Hero
        title={page?.title}
        subtitle={page?.subtitle}
        videoSrc={page?.video}
        videoPoster={mediaUrl(page?.cover ||siteConfig.defaults.machinery.cover)}
        showBreadcrumbs
        breadcrumbs={[
          {
            title: "خانه",
            href: "/",
          },
          {
            title: "ماشین‌آلات",
          },
        ]}
      />

      <AppSection>
        <AppSectionHeader
          title="دسته‌بندی ماشین‌آلات"
          description={page?.excerpt}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <Link
              key={item.slug}
              href={`/machinery/${item.slug}`}
              className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:border-industrial-orange/40 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-industrial-surface">
                <Image
                  src={
                    item?.featuredImage ||
                    item?.cover || mediaUrl(siteConfig.defaults.machineryCategory.featuredImage)
              
                  }
                  alt={item?.title || "دسته ماشین‌آلات"}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-right">
                <h2 className="text-lg font-black">
                  {item?.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                  {item?.excerpt}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-industrial-orange">
                  مشاهده دسته
                  <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </AppSection>
    </main>
  );
}