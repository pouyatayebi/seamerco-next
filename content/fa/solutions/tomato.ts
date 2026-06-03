import { mediaUrl } from "@/lib/media-url";
import type { HeroIconKey } from "@/components/shared/hero-icon-map";

export const tomatoLineContent = {
  slug: "tomato",

  hero: {
    title: "خط تولید رب گوجه فرنگی",
    subtitle: "طراحی و اجرای خط کامل فرآوری و بسته‌بندی رب گوجه",

    videoSrc: mediaUrl("/videos/solutions/tomato-line.mp4"),

    videoPoster: mediaUrl(
      "/images/home-hero-poster.jpg"
    ),

    featureLinks: {
      titleTop: "خط تولید رب گوجه",
      titleBottom: "انواع بهره‌برداری",

      items: [
        {
          title: "رب قوطی",
          description: "بسته‌بندی در قوطی فلزی",
          href: "/solutions/tomato/can",

          icon: "tomato-processing" satisfies HeroIconKey,
        },

        {
          title: "رب شیشه‌ای",
          description: "بسته‌بندی در ظروف شیشه‌ای",
          href: "/solutions/tomato/jar",

          icon: "tomato-packaging" satisfies HeroIconKey,
        },
      ],
    },
  },
} as const;