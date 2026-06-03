import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { AppSection, AppSectionHeader } from "@/components/shared/app-section";
import { Hero } from "@/components/shared/hero";
import { getContentPage, getDirectoryMdItems } from "@/lib/content";
import { mediaUrl } from "@/lib/media-url";
import { siteConfig } from "@/config/site";

export default function SolutionsIndexPage() {
  const page = getContentPage("solutions/index.md");
  const items = getDirectoryMdItems("solutions").filter(
    (item) => item.slug !== "index",
  );

  return (
    <main>
      <Hero
        title={page?.title}
        subtitle={page?.subtitle}
        videoSrc={page?.video}
        videoPoster={ mediaUrl(page?.cover || siteConfig.defaults.solution.cover)  }
        showBreadcrumbs
        breadcrumbs={[
          {
            title: "خانه",
            href: "/",
          },
          {
            title: "خطوط تولید",
          },
        ]}
      />

      <AppSection>
        <AppSectionHeader title="همه خطوط تولید" description={page?.excerpt} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/solutions/${item.slug}`}
              className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:border-industrial-orange/40 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-industrial-surface">
                <Image
                  src={
                    item.featuredImage ||
                    item.cover ||
                    mediaUrl(siteConfig.defaults.solution.featuredImage)
                  }
                  alt={item.title || "خط تولید سیمرکو"}
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
                  مشاهده خط تولید
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
