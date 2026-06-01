// components/shared/video-lightbox.tsx

"use client";

/**
 * Reusable video thumbnail with dialog lightbox.
 * Supports configurable thumbnail size, image styling, and play button size.
 */

import Image from "next/image";
import { Play } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type PlayButtonSize = "sm" | "md" | "lg";

type VideoLightboxProps = {
  image: string;
  video: string;
  alt: string;
  title?: string;
  playSize?: PlayButtonSize;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  dialogClassName?: string;
};

const playButtonClasses: Record<PlayButtonSize, string> = {
  sm: "size-9",
  md: "size-12",
  lg: "size-14",
};

const playIconClasses: Record<PlayButtonSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const pulseClasses: Record<PlayButtonSize, string> = {
  sm: "size-10",
  md: "size-14",
  lg: "size-16",
};

export function VideoLightbox({
  image,
  video,
  alt,
  title = "ویدئوی معرفی سیمرکو",
  playSize = "md",
  className,
  imageClassName,
  overlayClassName,
  dialogClassName,
}: VideoLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={title}
          className={cn(
            "group relative block overflow-hidden",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            className
          )}
        >
          <Image
            src={image}
            alt={alt}
            width={900}
            height={700}
            className={cn(
              "h-full w-full object-cover transition duration-500 group-hover:scale-105",
              imageClassName
            )}
          />

          <span
            className={cn(
              "absolute inset-0 bg-industrial-navy/10 transition group-hover:bg-industrial-navy/25",
              overlayClassName
            )}
          />

          <span
            className={cn(
              "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-industrial-orange shadow-md",
              playButtonClasses[playSize]
            )}
          >
            <span
              className={cn(
                "absolute animate-pulse rounded-full bg-white/25",
                pulseClasses[playSize]
              )}
            />
            <Play
              className={cn(
                "relative mr-0.5 fill-current",
                playIconClasses[playSize]
              )}
            />
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className={cn("max-w-4xl p-2", dialogClassName)}>
        <DialogHeader>
          <DialogTitle className="sr-only">{title}</DialogTitle>
        </DialogHeader>

        <video
          src={video}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full rounded-xl bg-black"
        />
      </DialogContent>
    </Dialog>
  );
}