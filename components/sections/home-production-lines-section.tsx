// components/sections/home-production-lines-section.tsx

"use client";

/**
 * Homepage production lines section.
 * Cards include an overlay detail panel that opens over the card,
 * closes on outside click, and does not change card height.
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, CircleGauge } from "lucide-react";

import { Button } from "@/components/ui/button";
import { faHomeProductionLinesContent } from "@/content/fa/home/production-lines";
import { cn } from "@/lib/utils";
import { AppSection, AppSectionHeader } from "../shared/app-section";

type ProductionLineItem = (typeof faHomeProductionLinesContent.items)[number];

type ProductionLineCardProps = {
  item: ProductionLineItem;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

function ProductionLineCard({
  item,
  isOpen,
  onOpenChange,
}: ProductionLineCardProps) {
  return (
    <article
      data-production-card
      className="group relative flex h-full min-h-[25.5rem] flex-col overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
      onPointerDown={(event) => {
        const target = event.target as HTMLElement;

        if (
          target.closest("[data-overlay-panel]") ||
          target.closest("[data-overlay-toggle]")
        ) {
          return;
        }

        if (isOpen) {
          onOpenChange(false);
        }
      }}
    >
      <div className="relative h-44 overflow-hidden rounded-2xl">
        <Image
          src={item.image}
          alt={item.title}
          width={520}
          height={320}
          className="size-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 text-right">
        <h3 className="text-base font-black text-foreground">{item.title}</h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="size-1.5 shrink-0 rounded-full bg-industrial-orange" />
          {item.subtitle}
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-foreground/80">
          {item.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div className="inline-flex min-w-0 items-center gap-1.5 text-xs text-foreground">
            <CircleGauge className="size-4 shrink-0 overflow-visible text-industrial-orange" />
            <span className="shrink-0">ظرفیت تولید:</span>
            <span className="truncate">{item.capacity}</span>
          </div>

          <Button
            asChild
            size="sm"
            variant="secondary"
            className="h-7 shrink-0 rounded-md px-3 text-[11px] font-bold"
          >
            <Link href={item.href} onClick={() => onOpenChange(false)}>
              {item.detailButtonLabel}
            </Link>
          </Button>
        </div>
      </div>

      <button
        type="button"
        data-overlay-toggle
        aria-label="نمایش توضیحات بیشتر"
        aria-expanded={isOpen}
        onClick={() => onOpenChange(!isOpen)}
        className="mt-auto flex h-7 w-full items-center justify-center border-t bg-secondary text-muted-foreground transition hover:text-industrial-orange"
      >
        <ChevronDown
          className={cn(
            "size-5 transition-transform duration-300",
            isOpen ? "rotate-180 text-industrial-orange" : null,
          )}
        />
      </button>

      <div
        data-overlay-panel
        className={cn(
          "absolute inset-x-0 bottom-7 top-0 z-20 flex flex-col overflow-y-auto rounded-t-2xl bg-industrial-navy/94 p-4 text-white shadow-2xl backdrop-blur transition-all duration-300",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0",
        )}
      >
        <h4 className="text-base font-black text-white">
          {item.overlay.title}
        </h4>

        <p className="mt-3 line-clamp-4 text-justify text-sm leading-7 text-white/80">
          {item.overlay.description}
        </p>

        <div className="mt-4 grid gap-3">
          <div>
            <h5 className="mb-2 text-xs font-black text-white/90">
              {item.overlay.technologiesTitle}
            </h5>

            <div className="flex flex-wrap gap-2">
              {item.overlay.technologies.map((technology) => (
                <Link
                  key={technology.href}
                  href={technology.href}
                  className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white/80 transition hover:border-white/35 hover:bg-white/15 hover:text-white"
                >
                  {technology.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-2 text-xs font-black text-white/90">
              {item.overlay.equipmentTitle}
            </h5>

            <div className="flex flex-wrap gap-2">
              {item.overlay.equipment.map((equipment) => (
                <Link
                  key={equipment.href}
                  href={equipment.href}
                  className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white/80 transition hover:border-white/35 hover:bg-white/15 hover:text-white"
                >
                  {equipment.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Button
          asChild
          size="sm"
          className="mt-auto h-8 w-fit rounded-md bg-industrial-orange px-3 text-xs font-bold text-white hover:bg-industrial-orange/90"
        >
          <Link href={item.href} onClick={() => onOpenChange(false)}>
            {item.overlay.buttonLabel}
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function HomeProductionLinesSection() {
  const { title, items } = faHomeProductionLinesContent;
  const [openCardHref, setOpenCardHref] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!sectionRef.current) {
        return;
      }

      const target = event.target as HTMLElement;

      if (target.closest("[data-production-card]")) {
        return;
      }

      setOpenCardHref(null);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenCardHref(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

return (
<AppSection>
  <div ref={sectionRef}>
    <AppSectionHeader
      title={title}
    />

    <div className="grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ProductionLineCard
          key={item.href}
          item={item}
          isOpen={openCardHref === item.href}
          onOpenChange={(nextIsOpen) =>
            setOpenCardHref(nextIsOpen ? item.href : null)
          }
        />
      ))}
    </div>
  </div>
</AppSection>
);
}
