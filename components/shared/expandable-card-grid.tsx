// components/shared/expandable-card-grid.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, CircleGauge, Hash } from "lucide-react";

import { AppSection, AppSectionHeader } from "@/components/shared/app-section";
import { Button } from "@/components/ui/button";
import type { MdCardGridItem } from "@/lib/content";
import { mediaUrl } from "@/lib/media-url";
import { cn } from "@/lib/utils";

type ExpandableCardGridProps = {
  title?: string;
  items?: MdCardGridItem[];
  detailButtonLabel?: string;
};

type ExpandableCardProps = {
  item: MdCardGridItem;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  detailButtonLabel?: string;
};

function ExpandableCard({
  item,
  isOpen,
  onOpenChange,
  detailButtonLabel = "جزئیات بیشتر",
}: ExpandableCardProps) {
  const imageSrc = mediaUrl(
    item.cardImage ?? "/images/defaults/machinery-featured.jpg",
  );

  return (
    <article
      data-expandable-card
      className="group relative flex h-full min-h-[25.5rem] flex-col overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={item.cardTitle ?? ""}
          width={520}
          height={320}
          className="size-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 text-right">
        {item.cardTitle ? (
          <h3 className="text-base font-black text-foreground">
            {item.cardTitle}
          </h3>
        ) : null}

        {item.cardSubtitle ? (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <span className="size-1.5 shrink-0 rounded-full bg-industrial-orange" />
            {item.cardSubtitle}
          </p>
        ) : null}

        {item.cardExcerpt ? (
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-foreground/80">
            {item.cardExcerpt}
          </p>
        ) : null}

        <div className="mt-auto space-y-2 pt-4">
          {item.cardCapacity ? (
            <div className="inline-flex w-full min-w-0 items-center gap-1.5 text-xs text-foreground">
              <CircleGauge className="size-4 shrink-0 text-industrial-orange" />
              <span className="shrink-0">ظرفیت:</span>
              <span className="truncate">{item.cardCapacity}</span>
            </div>
          ) : null}

          {item.cardCode ? (
            <div className="inline-flex w-full min-w-0 items-center gap-1.5 text-xs text-foreground">
              <Hash className="size-4 shrink-0 text-industrial-orange" />
              <span className="shrink-0">کد دستگاه:</span>
              <span className="truncate">{item.cardCode}</span>
            </div>
          ) : null}

          {item.cardHref ? (
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="h-7 w-fit rounded-md px-3 text-[11px] font-bold"
            >
              <Link href={item.cardHref}>{detailButtonLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>

      <button
        type="button"
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
        className={cn(
          "absolute inset-x-0 bottom-7 top-0 z-20 overflow-hidden rounded-t-2xl shadow-2xl transition-all duration-300",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0",
        )}
      >
        <Image
          src={imageSrc}
          alt={item.cardTitle ?? ""}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy via-industrial-navy/82 to-industrial-navy/45" />

        <div className="relative z-10 flex h-full flex-col overflow-y-auto p-4 text-white">
          <h4 className="text-base font-black text-white">{item.cardTitle}</h4>

          {item.cardDescription ? (
            <p className="mt-3 text-justify text-sm leading-7 text-white/85">
              {item.cardDescription}
            </p>
          ) : null}

          {item.cardHref ? (
            <Button
              asChild
              size="sm"
              className="mt-auto h-8 w-fit rounded-md bg-industrial-orange px-3 text-xs font-bold text-white hover:bg-industrial-orange/90"
            >
              <Link href={item.cardHref}>{detailButtonLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ExpandableCardGrid({
  title,
  items,
  detailButtonLabel,
}: ExpandableCardGridProps) {
  const [openCardKey, setOpenCardKey] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const safeItems = items?.filter((item) => item.cardTitle) ?? [];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as HTMLElement;

      if (target.closest("[data-expandable-card]")) return;

      setOpenCardKey(null);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenCardKey(null);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!safeItems.length) return null;

  return (
    <AppSection>
      <div ref={sectionRef}>
        {title ? <AppSectionHeader title={title} /> : null}

        <div className="grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {safeItems.map((item, index) => {
            const key = item.cardHref ?? `${item.cardTitle}-${index}`;

            return (
              <ExpandableCard
                key={key}
                item={item}
                isOpen={openCardKey === key}
                detailButtonLabel={detailButtonLabel}
                onOpenChange={(nextIsOpen) =>
                  setOpenCardKey(nextIsOpen ? key : null)
                }
              />
            );
          })}
        </div>
      </div>
    </AppSection>
  );
}