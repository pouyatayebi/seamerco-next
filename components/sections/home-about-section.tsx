// components/sections/home-about-section.tsx

/**
 * Homepage about section.
 * Mobile-first layout with responsive media grid and video lightboxes.
 */

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { VideoLightbox } from "@/components/shared/video-lightbox";
import { faHomeAboutContent } from "@/content/fa/home/about";
import { AppSection } from "../shared/app-section";

export function HomeAboutSection() {
  const { title, introStrong, paragraphs, readMore, media } =
    faHomeAboutContent;

  return (
<AppSection>
  <div className="lg:grid lg:h-[29rem] lg:grid-cols-[28rem_1fr] lg:items-stretch lg:gap-8 [direction:ltr]">
    {/* Desktop main video - left column */}
    <div className="hidden [direction:rtl] lg:block">
      <VideoLightbox
        image={media.main.image}
        video={media.main.video}
        alt={media.main.alt}
        playSize="md"
        className="h-full w-full rounded-2xl shadow-md"
      />
    </div>

    {/* Text and thumbnails - right column */}
    <div className="[direction:rtl]">
      <div className="flex h-full w-full flex-col text-right">
        <h2 className="text-2xl font-black text-foreground md:text-[1.7rem]">
          {title}
        </h2>

        <div className="mt-4 text-justify text-sm leading-7 text-muted-foreground">
          <p>
            <strong className="font-black text-foreground">
              {introStrong}
            </strong>{" "}
            {paragraphs[0]}
          </p>

          <p className="mt-3">
            {paragraphs[1]}
            <br />
            <span>{paragraphs[2].replace("صنایع غذایی است.", "")}</span>
            <span className="text-muted-foreground/35">صنایع غذایی</span>
            <span className="mx-1 text-muted-foreground/60">...</span>

            <Link
              href={readMore.href}
              aria-label={readMore.label}
              className="inline-flex align-middle text-industrial-orange hover:text-primary"
            >
              <MoveLeft className="inline-block size-6 align-middle stroke-[3.4]" />
            </Link>
          </p>
        </div>

        {/* Mobile media: main video first, then three small videos */}
        <div className="mt-6 space-y-4 lg:hidden">
          <VideoLightbox
            image={media.main.image}
            video={media.main.video}
            alt={media.main.alt}
            playSize="sm"
            className="h-[22rem] w-full rounded-2xl shadow-md md:h-[27rem]"
          />

          <div className="grid grid-cols-3 gap-3">
            {media.items.map((item) => (
              <VideoLightbox
                key={item.video}
                image={item.image}
                video={item.video}
                alt={item.alt}
                playSize="sm"
                className="aspect-[0.82/1] rounded-xl shadow-sm"
                imageClassName="rounded-xl"
              />
            ))}
          </div>
        </div>

        {/* Desktop thumbnails aligned to bottom of main image */}
        <div className="mt-auto hidden grid-cols-3 gap-3 lg:grid">
          {media.items.map((item) => (
            <VideoLightbox
              key={item.video}
              image={item.image}
              video={item.video}
              alt={item.alt}
              playSize="sm"
              className="aspect-[0.82/1] rounded-xl shadow-sm"
              imageClassName="rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</AppSection>
  );
}