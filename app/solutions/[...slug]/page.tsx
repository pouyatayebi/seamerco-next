// app/solutions/[[...slug]]/page.tsx

import { AppSection } from "@/components/shared/app-section";
import { Hero } from "@/components/shared/hero";
import { siteConfig } from "@/config/site";
import { getContentPage } from "@/lib/content";
import { mediaUrl } from "@/lib/media-url";
import { heroIconMap, type HeroIconKey } from "@/components/shared/hero-icon-map";
import { SolutionOverviewSection } from "@/components/sections/solution-overview-section";
import { SolutionLineLayoutSection } from "@/components/sections/solution-line-layout-section";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

function getMdPath(slug: string[]) {
  return `solutions/${slug.join("/")}/index.md`;
}

function getFallbackTitle(slug: string[]) {
  return slug
    .at(-1)
    ?.split("-")
    .join(" ") ?? siteConfig.defaults.solution.title;
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getContentPage(getMdPath(slug));

  const title = page?.title ?? getFallbackTitle(slug);
  const subtitle = page?.subtitle ?? siteConfig.defaults.solution.subtitle;
  const excerpt = page?.excerpt ?? siteConfig.defaults.solution.excerpt;
  const cover = page?.cover ?? siteConfig.defaults.solution.cover;

  const featureLinks = page?.featureLinks?.items?.length
  ? {
      variant: page.featureLinks.variant ?? "compact",
      titleTop: page.featureLinks.titleTop,
      titleBottom: page.featureLinks.titleBottom,
      items: page.featureLinks.items.map((item) => ({
        title: item.title,
        subtitle: item.subtitle,
        description: item.description,
        href: item.href,
        icon:
          item.icon && item.icon in heroIconMap
            ? heroIconMap[item.icon as HeroIconKey]
            : undefined,
        image: item.image,
      })),
    }
  : undefined;

  return (
    <main>
      <Hero
        title={title}
        subtitle={subtitle}
        videoSrc={ mediaUrl(page?.video || "")}
        videoPoster={mediaUrl(cover)}
        showBreadcrumbs
        breadcrumbs={[
          { title: "خانه", href: "/" },
          { title: "خطوط تولید", href: "/solutions" },
          { title },
        ]}
        featureLinks={featureLinks}
      />
<SolutionOverviewSection overview={page?.overview} />
<SolutionLineLayoutSection lineLayout={page?.lineLayout} />
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
              <div className="prose prose-neutral mt-8 max-w-none text-right leading-9 dark:prose-invert">
                {page.content}
              </div>
            ) : null}
          </div>
        </article>
      </AppSection>
    </main>
  );
}