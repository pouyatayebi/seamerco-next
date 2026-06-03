// components/shared/hero.tsx

import { Fragment, type ReactNode } from "react";
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
import { ChevronLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { getSafePoster } from "@/lib/get-safe-poster";

type HeroConfig = {
  defaultPoster?: string;
  badge?: {
    src?: string;
    alt?: string;
  };
};

const heroConfig = (siteConfig as { hero?: HeroConfig }).hero;

type HeroImageAsset = {
  src?: string;
  alt?: string;
};

type HeroBreadcrumbItem = {
  title?: string;
  href?: string;
};

type HeroFeatureLink = {
  title?: string;
  subtitle?: string;
  description?: string;
  href?: string;
  image?: HeroImageAsset;
  icon?: ReactNode;
};

type HeroFeatureLinks = {
  variant?: "home" | "compact";
  titleTop?: string;
  titleBottom?: string;
  items?: readonly HeroFeatureLink[];
};

type HeroProps = {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  videoPoster?: string;
  logoType?: HeroImageAsset;
  heroBadge?: boolean | HeroImageAsset;
  breadcrumbs?: readonly HeroBreadcrumbItem[];
  showBreadcrumbs?: boolean;
  featureLinks?: HeroFeatureLinks;
  variant?: "home" | "page";
  className?: string;
  contentClassName?: string;
};

function getPosterSrc(videoPoster?: string) {
  return videoPoster || heroConfig?.defaultPoster || "/images/hero-default.jpg";
}

function getHeroBadgeAsset(heroBadge?: boolean | HeroImageAsset) {
  if (!heroBadge) return null;
  if (heroBadge === true) return heroConfig?.badge ?? null;
  return heroBadge;
}

function HeroBreadcrumbs({ items }: { items?: readonly HeroBreadcrumbItem[] }) {
  const safeItems = items?.filter((item) => item.title) ?? [];

  if (!safeItems.length) {
    return null;
  }

  return (
    <div className="mb-8 flex justify-center">
      <div
        className="
          inline-flex
          flex-wrap
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-white/15
          bg-black/20
          px-5
          py-2.5
          text-base
          backdrop-blur-md
        "
      >
        {safeItems.map((item, index) => {
          const isLast = index === safeItems.length - 1;

          return (
            <Fragment key={`${item.title}-${index}`}>
              {isLast || !item.href ? (
                <span className="font-bold text-white">{item.title}</span>
              ) : (
                <Link
                  href={item.href}
                  className="
                    text-white/55
                    transition-colors
                    duration-200
                    hover:text-industrial-orange
                  "
                >
                  {item.title}
                </Link>
              )}

              {!isLast && (
                <span
                  aria-hidden="true"
                  className="
                    text-white/35
                    select-none
                  "
                >
                  |
                </span>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function HeroHomeFeaturePanel({
  featureLinks,
  className,
}: {
  featureLinks: HeroFeatureLinks;
  className?: string;
}) {
  const items = featureLinks.items ?? [];
  if (!items.length) return null;

  return (
    <div
      className={cn(
        "rounded-2xl bg-background/95 p-4 text-foreground shadow-xl shadow-foreground/20 backdrop-blur",
        "lg:flex lg:items-center lg:gap-6",
        className,
      )}
    >
      {featureLinks.titleTop || featureLinks.titleBottom ? (
        <div className="mb-4 flex min-w-60 items-center lg:mb-0 lg:min-w-72">
          <div>
            {featureLinks.titleTop ? (
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1 w-10 bg-industrial-orange md:w-14 lg:w-24" />
                <span className="text-base font-medium text-primary md:text-lg lg:text-2xl">
                  {featureLinks.titleTop}
                </span>
              </div>
            ) : null}

            {featureLinks.titleBottom ? (
              <p className="text-xl font-black leading-8 text-primary md:text-2xl lg:text-3xl">
                {featureLinks.titleBottom}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Link
            key={item.href ?? `${item.title}-${index}`}
            href={item.href ?? "#"}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-right shadow-sm transition hover:border-primary/70 hover:shadow-md"
          >
            {item.icon ? (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-industrial-orange">
                {item.icon}
              </div>
            ) : item.image?.src ? (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Image
                  src={item.image.src}
                  alt={item.image.alt ?? item.title ?? ""}
                  width={32}
                  height={32}
                  className="h-7 w-7 object-contain"
                />
              </div>
            ) : null}

            <div className="flex min-w-0 flex-col">
              {item.title ? (
                <span className="truncate text-xs font-semibold text-foreground md:text-sm">
                  {item.title}
                </span>
              ) : null}

              {item.description ? (
                <span className="truncate text-[11px] text-muted-foreground">
                  {item.description}
                </span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function HeroCompactFeaturePanel({
  featureLinks,
}: {
  featureLinks: HeroFeatureLinks;
}) {
  const items = featureLinks.items ?? [];
  if (!items.length) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#03223e] via-[#04345e] to-[#02162b] px-4 py-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-industrial-orange/50 to-transparent" />
    <div className="absolute inset-y-0 right-0 w-1 bg-industrial-orange/70" />
    <div className="absolute left-0 top-0 h-full w-32 -skew-x-12 bg-white/[0.04]" /> */}

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {featureLinks.titleTop ? (
          <p className="text-sm font-bold text-industrial-orange">
            {featureLinks.titleTop}
          </p>
        ) : null}

        {featureLinks.titleBottom ? (
          <h2 className="mt-1 text-xl font-semibold md:text-2xl">
            {featureLinks.titleBottom}
          </h2>
        ) : null}

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {items.map((item, index) => (
            <Link
              key={item.href ?? `${item.title}-${index}`}
              href={item.href ?? "#"}
              className=" w-full
        sm:w-[260px]
        lg:w-[250px] rounded-lg border border-white/20 bg-white/[0.035] px-3 py-4 text-center transition duration-300 hover:border-industrial-orange/70 hover:bg-white/[0.07]"
            >
              {item.image?.src ? (
                <Image
                  src={item.image.src}
                  alt={item.image.alt ?? item.title ?? ""}
                  width={72}
                  height={72}
                  className="mx-auto h-14 w-14 object-contain transition duration-300 group-hover:scale-105"
                />
              ) : item.icon ? (
                <div className="mx-auto flex h-8 w-8 items-center justify-center text-industrial-orange md:h-10 md:w-10 lg:h-12 lg:w-12">
                  {item.icon}
                </div>
              ) : null}

              {item.title ? (
                <p className="mt-3 text-sm font-bold text-white">
                  {item.title}
                </p>
              ) : null}

              {item.subtitle ? (
                <p className="mt-1 text-xs text-white/65">{item.subtitle}</p>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero({
  title,
  subtitle,
  videoSrc,
  videoPoster,
  logoType,
  heroBadge,
  breadcrumbs,
  showBreadcrumbs = true,
  featureLinks,
  variant = "page",
  className,
  contentClassName,
}: HeroProps) {
  const posterSrc = getPosterSrc(videoPoster);
  const badgeAsset = getHeroBadgeAsset(heroBadge);
  const hasFeatureLinks = Boolean(featureLinks?.items?.length);
  const featureVariant = featureLinks?.variant ?? "home";
  const isCompactFeature = featureVariant === "compact";
  const isHomeHero = variant === "home";
  const safeFeatureLinks: HeroFeatureLinks = featureLinks ?? {
    items: [],
  };
  return (
    <section className={cn("bg-background", className)}>
      <div
        className={cn(
          "relative overflow-hidden bg-industrial-navy text-white",
          "min-h-[calc(100svh-4.25rem)]",
        )}
      >
        {videoSrc ? (
          <video
            className="pointer-events-none absolute inset-0 size-full object-cover"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <Image
            src={getSafePoster(posterSrc)}
            alt=""
            fill
            priority
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-industrial-navy/80" />

        <div className="relative z-10 flex min-h-[inherit] flex-col">
          {badgeAsset?.src ? (
            <div className="absolute left-8 top-10 hidden md:block">
              <Image
                src={badgeAsset.src}
                alt={badgeAsset.alt ?? ""}
                width={190}
                height={95}
                priority
                className="h-auto w-36 object-contain opacity-95 lg:w-44"
              />
            </div>
          ) : null}

          <div className="flex flex-1 items-center justify-center px-4 pt-16 text-center md:px-8">
            <div
              className={cn(
                "mx-auto max-w-3xl space-y-3",
                isHomeHero
                  ? "-translate-y-8 md:-translate-y-14 lg:-translate-y-16"
                  : "-translate-y-2 md:-translate-y-4",
                contentClassName,
              )}
            >
              {logoType?.src ? (
                <Image
                  src={logoType.src}
                  alt={logoType.alt ?? ""}
                  width={430}
                  height={120}
                  priority
                  className="mx-auto h-auto w-56 object-contain sm:w-64 md:w-[22rem] lg:w-[38rem]"
                />
              ) : null}

              {subtitle ? (
                <div
                  className={cn(
                    "mx-auto flex w-full max-w-xl items-center gap-3 font-normal text-background/90",
                    isHomeHero
                      ? "text-sm sm:text-xs md:text-lg lg:text-2xl"
                      : "text-sm md:text-base",
                  )}
                >
                  <span className="h-px flex-1 bg-white/45" />
                  <span className="shrink-0">{subtitle}</span>
                  <span className="h-px flex-1 bg-white/45" />
                </div>
              ) : null}

              {title ? (
                <h1
                  className={cn(
                    "text-balance font-semibold tracking-tight text-background",
                    isHomeHero
                      ? "text-2xl sm:text-3xl md:text-4xl lg:text-[52px]"
                      : "text-3xl leading-[1.5] md:text-5xl",
                  )}
                >
                  {title}
                </h1>
              ) : null}
              {showBreadcrumbs ? <HeroBreadcrumbs items={breadcrumbs} /> : null}
            </div>
          </div>
          {hasFeatureLinks ? (
            <div
              className={cn(
                "w-full px-4 pb-6 sm:px-6 lg:px-8",
                isCompactFeature && "hidden lg:block",
              )}
            >
              <div className="mx-auto max-w-6xl">
                {isCompactFeature ? (
                  <HeroCompactFeaturePanel featureLinks={safeFeatureLinks} />
                ) : (
                  <HeroHomeFeaturePanel featureLinks={safeFeatureLinks} />
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {hasFeatureLinks && isCompactFeature ? (
        <div className="px-4 py-5 sm:px-6 md:py-6 lg:hidden">
          <HeroCompactFeaturePanel featureLinks={safeFeatureLinks} />
        </div>
      ) : null}
    </section>
  );
}
