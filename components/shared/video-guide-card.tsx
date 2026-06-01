// components/shared/video-guide-card.tsx

"use client";

/**
 * Reusable guide block part.
 * Can render either media or text content.
 */

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { VideoLightbox } from "@/components/shared/video-lightbox";

type VideoGuideCardProps =
  | {
      variant: "media";
      title: string;
      image: string;
      video: string;
    }
  | {
      variant: "text";
      titleTop: string;
      titleBottom: string;
      description: string;
      buttonTextTop: string;
      buttonTextBottom: string;
      href: string;
    };

export function VideoGuideCard(props: VideoGuideCardProps) {
  if (props.variant === "media") {
    return (
      <VideoLightbox
        image={props.image}
        video={props.video}
        alt={props.title}
        title={`نمایش ویدئو: ${props.title}`}
        playSize="md"
        className="h-[23rem] w-full overflow-hidden md:h-[26rem] lg:h-[25rem]"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-end justify-start text-right [direction:rtl] lg:items-start lg:text-left lg:[direction:ltr]">
      <h2 className="w-full text-right text-2xl font-black leading-9 text-foreground lg:text-left">
        <span className="block">{props.titleTop}</span>
        <span className="block">{props.titleBottom}</span>
      </h2>

      <p className="mt-4 w-full text-justify text-sm leading-7 text-muted-foreground lg:text-left">
        {props.description}
      </p>

      <Button
        asChild
        variant="outline"
        className="mt-7 h-auto self-end rounded-full border-industrial-blue px-8 py-2.5 text-xs font-bold leading-5 text-industrial-blue hover:bg-industrial-blue hover:text-white lg:mt-auto lg:self-start"
      >
        <Link
          href={props.href}
          className="flex flex-col items-center justify-center text-center"
        >
          <span>{props.buttonTextTop}</span>
          <span>{props.buttonTextBottom}</span>
        </Link>
      </Button>
    </div>
  );
}