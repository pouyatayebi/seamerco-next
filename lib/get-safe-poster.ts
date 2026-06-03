// lib/get-safe-poster.ts

import { siteConfig } from "@/config/site";

export function getSafePoster(src?: string) {
  if (!src) {
    return siteConfig.hero.defaultPoster;
  }

  return src;
}