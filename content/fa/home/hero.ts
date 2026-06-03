// content/fa/home/hero.ts

import { mediaUrl } from "@/lib/media-url";

/**
 * Persian homepage hero content.
 * Keep all hero text, media paths, and feature link data outside components.
 */

export const faHomeHeroContent = {
  video: {
    src: mediaUrl("/videos/home-hero.mp4"),
    poster: mediaUrl("/images/home-hero-poster.jpg"),
  },

  heroBadge: {
    src: mediaUrl("/images/26-years.png"),
    alt: "۲۶ سال تجربه سیمرکو",
  },

  logoType: {
    src: mediaUrl("/images/seamerco-logo-type-white.png"),
    alt: "Seamerco",
  },

  eyebrow: "تکنولوژی برتر در تولید محصولات غذایی کنسروی",
  title: "گروه صنعتی سیمرکو",

  featureLinks: {
    titleTop: "خطوط تولید",
    titleBottom: "محصولات کنسروی",
    items: [
      {
        title: "خط تولید رب گوجه",
        description: "فرآوری گوجه تازه تا رب تغلیظ‌شده",
        href: "/solutions/tomato",
        icon: "tomato-processing",
      },
      {
        title: "خط تولید کنسرو حبوبات",
        description: "خیساندن، بلانچینگ، سس‌زنی، پرکنی و رتورت",
        href: "/solutions/beans",
        icon: "canned-beans",
      },
      {
        title: "خط تولید کنسرو ماهی تون",
        description: "دیفراست، پخت اولیه، پرکنی و رتورت",
        href: "/solutions/canned-tuna-line",
        icon: "canned-tuna",
      },
      {
        title: "خط بسته‌بندی رب گوجه",
        description: "پرکنی، دربندی و بسته‌بندی محصولات گوجه",
        href: "/solutions/packaging-tomato-paste-line",
        icon: "tomato-packaging",
      },
      {
        title: "خط تولید مربا و کمپوت",
        description: "فرآوری کامل مربا و کمپوت میوه",
        href: "/solutions/jam",
        icon: "canned-jam-fruit",
      },
      {
        title: "خط تولید کنسرو زیتون",
        description: "فرآوری و کنسروسازی زیتون و محصولات شور",
        href: "/solutions/canned-olive-line",
        icon: "canned-olive-pickled",
      },
    ],
  },
} as const;