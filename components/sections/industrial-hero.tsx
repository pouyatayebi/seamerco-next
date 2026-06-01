// components/sections/industrial-hero.tsx

/**
 * Reusable industrial hero section.
 * Desktop: shortcut panel overlays the video.
 * Mobile/tablet: shortcut panel appears below the video for better usability.
 */

import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CannedBeansLineIcon } from "@/components/svg/CannedBeansLineIcon";
import { CannedJamFruitLineIcon } from "@/components/svg/CannedJamFruitLineIcon";
import { CannedOlivePickledLineIcon } from "@/components/svg/CannedOlivePickledLineIcon";
import { CannedTunaLineIcon } from "@/components/svg/CannedTunaLineIcon";
import { TomatoPackagingLineIcon } from "@/components/svg/TomatoPackagingLineIcon";
import { TomatoProcessingLineIcon } from "@/components/svg/TomatoProcessingLineIcon";
import { cn } from "@/lib/utils";

const shortcutIcons = {
  "tomato-processing": TomatoProcessingLineIcon,
  "canned-beans": CannedBeansLineIcon,
  "canned-tuna": CannedTunaLineIcon,
  "tomato-packaging": TomatoPackagingLineIcon,
  "canned-jam-fruit": CannedJamFruitLineIcon,
  "canned-olive-pickled": CannedOlivePickledLineIcon,
} as const;

type ShortcutIconKey = keyof typeof shortcutIcons;

type HeroShortcut = {
  slug: string;
  title: string;
  description: string;
  icon: ShortcutIconKey;
};

type HeroShortcuts = {
  titleTop: string;
  titleBottom: string;
  items: readonly HeroShortcut[];
};

type HeroBreadcrumbItem = {
  title: string;
  href?: string;
};

type IndustrialHeroProps = {
  videoSrc: string;
  videoPoster?: string;
  title: string;
  eyebrow?: string;
  logoType?: {
    src: string;
    alt: string;
  };
  yearsBadge?: {
    src: string;
    alt: string;
  };
  shortcuts?: HeroShortcuts;
  breadcrumbs?: readonly HeroBreadcrumbItem[];
  className?: string;
};

type ShortcutPanelProps = {
  shortcuts: HeroShortcuts;
  className?: string;
};

function ShortcutPanel({ shortcuts, className }: ShortcutPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-background/95 p-4 text-foreground shadow-xl shadow-foreground/20 backdrop-blur",
        "lg:flex lg:items-center lg:gap-6",
        className
      )}
    >
      <div className="mb-4 flex min-w-70 items-center lg:mb-0">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1 w-10 bg-industrial-orange md:w-14 lg:w-28" />
            <span className="font-[350] lg:text-[32px] text-primary">
              {shortcuts.titleTop}
            </span>
          </div>

          <p className="mb-2 text-2xl font-bold leading-9 text-primary lg:text-4xl">
            {shortcuts.titleBottom}
          </p>
        </div>
      </div>

      <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {shortcuts.items.map((line) => {
          const Icon = shortcutIcons[line.icon];

          return (
            <Link
              key={line.slug}
              href={`/production-lines/${line.slug}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-right shadow-sm transition hover:border-primary/70 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Icon className="h-7 w-7 text-industrial-orange" />
              </div>

              <div className="flex min-w-0 flex-col">
                <span className="truncate text-xs font-semibold text-foreground md:text-sm">
                  {line.title}
                </span>

                <span className="truncate text-[11px] text-muted-foreground">
                  {line.description}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function IndustrialHero({
  videoSrc,
  videoPoster,
  title,
  eyebrow,
  logoType,
  yearsBadge,
  shortcuts,
  breadcrumbs,
  className,
}: IndustrialHeroProps) {
  const hasBreadcrumbs = Boolean(breadcrumbs?.length);

  return (
    <section className={cn("bg-background", className)}>
      <div className="relative h-[calc(100svh-4.25rem)] overflow-hidden bg-industrial-navy text-white">
        <video
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={videoSrc}
          poster={videoPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="absolute inset-0 bg-industrial-navy/80" />

        <div className="relative z-10 flex h-full flex-col items-center pt-16">
          {yearsBadge ? (
            <div className="absolute left-8 top-10 hidden md:block">
              <Image
                src={yearsBadge.src}
                alt={yearsBadge.alt}
                width={190}
                height={95}
                priority
                className="h-auto w-36 object-contain opacity-95 lg:w-82"
              />
            </div>
          ) : null}

          <div className="flex flex-1 items-center justify-center px-4 text-center md:px-8">
            <div className="mx-auto max-w-3xl -translate-y-8 space-y-3 md:-translate-y-14 lg:-translate-y-16">
              {hasBreadcrumbs ? (
                <Breadcrumb className="mb-5 justify-center text-white/70">
                  <BreadcrumbList>
                    {breadcrumbs?.map((item, index) => {
                      const isLast = index === breadcrumbs.length - 1;

                      return (
                        <BreadcrumbItem key={item.title}>
                          {isLast || !item.href ? (
                            <BreadcrumbPage className="text-white">
                              {item.title}
                            </BreadcrumbPage>
                          ) : (
                            <>
                              <BreadcrumbLink asChild>
                                <Link href={item.href}>{item.title}</Link>
                              </BreadcrumbLink>
                              <BreadcrumbSeparator />
                            </>
                          )}
                        </BreadcrumbItem>
                      );
                    })}
                  </BreadcrumbList>
                </Breadcrumb>
              ) : null}

              {logoType ? (
                <Image
                  src={logoType.src}
                  alt={logoType.alt}
                  width={430}
                  height={120}
                  priority
                  className="mx-auto h-auto w-56 object-contain sm:w-64 md:w-[22rem] lg:w-[38rem]"
                />
              ) : null}

              {eyebrow ? (
                <div className="mx-auto flex w-full max-w-xl items-center gap-3 text-sm font-[400] text-background/90 sm:text-xs md:text-lg lg:text-2xl">
                  <span className="h-px flex-1 bg-white/45" />
                  <span className="shrink-0">{eyebrow}</span>
                  <span className="h-px flex-1 bg-white/45" />
                </div>
              ) : null}

              <h1 className="text-balance text-2xl font-semibold tracking-tight text-background sm:text-3xl md:text-4xl lg:text-[52px]">
                {title}
              </h1>
            </div>
          </div>

          {shortcuts ? (
            <div className="pointer-events-auto absolute bottom-6 left-1/2 hidden w-full max-w-6xl -translate-x-1/2 px-8 lg:block">
              <ShortcutPanel shortcuts={shortcuts} />
            </div>
          ) : null}
        </div>
      </div>

      {shortcuts ? (
        <div className="px-4 py-5 sm:px-6 md:py-6 lg:hidden">
          <ShortcutPanel shortcuts={shortcuts} className="shadow-lg" />
        </div>
      ) : null}
    </section>
  );
}