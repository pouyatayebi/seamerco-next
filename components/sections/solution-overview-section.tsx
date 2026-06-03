// components/sections/solution-overview-section.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CatalogDocumentIcon } from "@/components/svg/catalog-document-icon";
import { ProformaInvoiceIcon } from "@/components/svg/proforma-invoice-icon";

import { AppSection } from "@/components/shared/app-section";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { siteConfig } from "@/config/site";
import type { MdOverview } from "@/lib/content";
import { mediaUrl } from "@/lib/media-url";

type SolutionOverviewSectionProps = {
  overview?: MdOverview;
};

export function SolutionOverviewSection({
  overview,
}: SolutionOverviewSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateActiveSlide = () => {
      setActiveSlide(api.selectedScrollSnap());
    };

    updateActiveSlide();
    api.on("select", updateActiveSlide);

    return () => {
      api.off("select", updateActiveSlide);
    };
  }, [api]);

  if (!overview) return null;

  const slides = overview.slides?.filter((slide) => slide.src) ?? [];

  const safeSlides = slides.length
    ? slides
    : [
        {
          src: siteConfig.defaults.solution.featuredImage,
          alt: overview.title ?? "خط تولید سیمرکو",
        },
      ];

  return (
    <AppSection>
      <div className="mx-auto grid max-w-6xl gap-8 [direction:ltr] lg:grid-cols-[1fr_22rem] lg:items-center lg:gap-12">
        <div className="[direction:rtl]">
          {overview.title ? (
<h3 className="text-right text-2xl font-black leading-9 text-[#17243a] md:text-[1.7rem]">
              {overview.title}
            </h3>
          ) : null}

<div className="mt-4 space-y-2 text-justify text-[13px] leading-6 text-[#111827]">
            {overview.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
  {overview.specs?.length ? (
    <ul className="list-disc space-y-1 pr-5 text-sm leading-6 text-[#111827]">
      {overview.specs.map((spec) => (
        <li key={spec}>{spec}</li>
      ))}
    </ul>
  ) : null}

  
</div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] [direction:rtl]">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              direction: "rtl",
            }}
            className="w-full"
          >
            <CarouselContent>
              {safeSlides.map((slide, index) => (
                <CarouselItem
                  key={`${slide.src}-${index}`}
                  className="basis-full"
                >
                  <div className="relative aspect-[0.82/1] overflow-hidden rounded-[2rem]">
                    <Image
                      src={mediaUrl(
                        slide.src || siteConfig.defaults.solution.featuredImage
                      )}
                      alt={slide.alt ?? overview.title ?? "خط تولید سیمرکو"}
                      fill
                      sizes="(min-width: 1024px) 352px, 100vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/15 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {safeSlides.length > 1 ? (
              <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
                {safeSlides.map((slide, index) => (
                  <button
                    key={`${slide.src}-dot-${index}`}
                    type="button"
                    aria-label={`نمایش تصویر ${index + 1}`}
                    onClick={() => api?.scrollTo(index)}
                    className={
                      activeSlide === index
                        ? "size-2 rounded-full bg-industrial-orange"
                        : "size-2 rounded-full bg-white/85 transition hover:bg-white"
                    }
                  />
                ))}
              </div>
            ) : null}
          </Carousel>
        </div>
      </div>
    </AppSection>
  );
}