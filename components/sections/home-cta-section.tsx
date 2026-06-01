// components/sections/home-cta-section.tsx

/**
 * Homepage CTA section.
 * Light industrial CTA block before the footer.
 */

import Link from "next/link";
import { ArrowLeft, Factory, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { faHomeCtaContent } from "@/content/fa/home/cta";
import { AppSection } from "../shared/app-section";

export function HomeCtaSection() {
  const { eyebrow, title, description, primaryAction, secondaryAction } =
    faHomeCtaContent;

return (
  <AppSection className="pb-20 pt-2 md:pb-24 md:pt-4">
    <div className="relative overflow-hidden rounded-[2rem] border border-industrial-navy/12 bg-white/80 px-6 py-8 shadow-[0_18px_60px_rgba(3,34,62,0.10)] backdrop-blur md:px-10 md:py-10">
      <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-industrial-orange/40" />
      <div className="absolute left-6 bottom-6 h-8 w-8 border-l-2 border-b-2 border-industrial-orange/40" />

      <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="max-w-3xl text-right">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-industrial-orange/10 px-3 py-1 text-xs font-bold text-industrial-orange">
            <Factory className="size-4" />
            {eyebrow}
          </div>

          <h2 className="text-2xl font-black leading-10 text-foreground md:text-3xl">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-8 text-muted-foreground md:text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Button
            asChild
            className="h-12 rounded-full bg-industrial-orange px-6 text-sm font-bold text-white shadow-lg shadow-industrial-orange/20 hover:bg-industrial-orange/90"
          >
            <Link href={primaryAction.href}>
              <PhoneCall className="size-4" />
              {primaryAction.label}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-industrial-navy/25 bg-white px-6 text-sm font-bold text-industrial-navy hover:bg-industrial-navy hover:text-white"
          >
            <Link href={secondaryAction.href}>
              {secondaryAction.label}
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </AppSection>
);
}
