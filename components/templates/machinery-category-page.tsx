// components/templates/machinery-category-page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AppSection, AppSectionHeader } from "@/components/shared/app-section";
import { Hero } from "@/components/shared/hero";

type MachineryCardItem = {
  title: string;
  description: string;
  href: string;
  image: string;
};

type MachineryCategoryPageProps = {
  title: string;
  subtitle: string;
  slug: string;
  machines: MachineryCardItem[];
};

export function MachineryCategoryPage({
  title,
  subtitle,
  machines,
}: MachineryCategoryPageProps) {
  return (
    <main>
      <Hero
        title={title}
        subtitle={subtitle}
        showBreadcrumbs
        breadcrumbs={[
          { title: "خانه", href: "/" },
          { title: "ماشین‌آلات", href: "/machinery" },
          { title },
        ]}
      />

      <AppSection>
        <AppSectionHeader
          title={`محصولات ${title}`}
          description="در این بخش می‌توانید ماشین‌آلات مرتبط با این دسته را مشاهده کنید."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine) => (
            <Link
              key={machine.href}
              href={machine.href}
              className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:border-industrial-orange/40 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-industrial-surface">
                <Image
                  src={machine.image}
                  alt={machine.title}
                  fill
                  sizes="(min-width:1024px) 360px, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-right">
                <h2 className="text-lg font-black text-foreground">
                  {machine.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                  {machine.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-industrial-orange">
                  مشاهده ماشین
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