// components/templates/machinery-product-page.tsx

import { Hero } from "@/components/shared/hero";

type MachineryProductPageProps = {
  title: string;
  subtitle?: string;

  categoryTitle: string;
  categoryHref: string;

  heroPoster?: string;
  heroVideo?: string;
};

export function MachineryProductPage({
  title,
  subtitle,
  categoryTitle,
  categoryHref,
  heroPoster,
  heroVideo,
}: MachineryProductPageProps) {
  return (
    <main>
      <Hero
        title={title}
        subtitle={subtitle}
        videoSrc={heroVideo}
        videoPoster={heroPoster}
        showBreadcrumbs
        breadcrumbs={[
          {
            title: "خانه",
            href: "/",
          },
          {
            title: "ماشین‌آلات",
            href: "/machinery",
          },
          {
            title: categoryTitle,
            href: categoryHref,
          },
          {
            title,
          },
        ]}
      />

      {/* Product Content Placeholder */}
      <section className="py-16">
        <div className="container mx-auto">
          <p className="text-center text-muted-foreground">
            محتوای این ماشین در مراحل بعدی تکمیل خواهد شد.
          </p>
        </div>
      </section>
    </main>
  );
}