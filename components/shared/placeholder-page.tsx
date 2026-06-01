// components/shared/placeholder-page.tsx

/**
 * Reusable placeholder page.
 * Used temporarily to prevent 404 while real page designs are being built.
 */

import { AppSection } from "@/components/shared/app-section";

type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main>
      <AppSection>
        <div className="min-h-[22rem] text-right">
          <p className="text-sm font-bold text-industrial-orange">
            صفحه در حال آماده‌سازی
          </p>

          <h1 className="mt-3 text-3xl font-black text-foreground md:text-4xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-4 max-w-3xl text-sm leading-8 text-muted-foreground md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </AppSection>
    </main>
  );
}