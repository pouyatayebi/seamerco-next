// content/fa/home/hero.ts

/**
 * Persian homepage hero content.
 * Keep all hero text, media paths, and shortcut data outside components.
 */

export const faHomeHeroContent = {
  video: {
    src: "/videos/home-hero.mp4",
    poster: "/images/home-hero-poster.jpg",
  },

  yearsBadge: {
    src: "/images/26-years.png",
    alt: "۲۶ سال تجربه سیمرکو",
  },

  logoType: {
    src: "/images/seamerco-logo-type-white.png",
    alt: "Seamerco",
  },

  eyebrow: "تکنولوژی برتر در تولید محصولات غذایی کنسروی",
  title: "گروه صنعتی سیمرکو",

  shortcuts: {
    titleTop: "خطوط تولید",
    titleBottom: "محصولات کنسروی",
    items: [
      {
        slug: "complete-tomato-processing-line",
        title: "خط تولید رب گوجه",
        description: "فرآوری گوجه تازه تا رب تغلیظ‌شده",
        icon: "tomato-processing",
      },
      {
        slug: "canned-beans-production-line",
        title: "خط تولید کنسرو حبوبات",
        description: "خیساندن، بلانچینگ، سس‌زنی، پرکنی و رتورت",
        icon: "canned-beans",
      },
      {
        slug: "canned-tuna-production-line",
        title: "خط تولید کنسرو ماهی تون",
        description: "دیفراست، پخت اولیه، پرکنی و رتورت",
        icon: "canned-tuna",
      },
      {
        slug: "tomato-packaging-line",
        title: "خط بسته‌بندی رب گوجه",
        description: "پرکنی، دربندی و بسته‌بندی محصولات گوجه",
        icon: "tomato-packaging",
      },
      {
        slug: "canned-jam-fruit-line",
        title: "خط تولید مربا و کمپوت",
        description: "فرآوری کامل مربا و کمپوت میوه",
        icon: "canned-jam-fruit",
      },
      {
        slug: "canned-olive-pickled-line",
        title: "خط تولید کنسرو زیتون",
        description: "فرآوری و کنسروسازی زیتون و محصولات شور",
        icon: "canned-olive-pickled",
      },
    ],
  },
} as const;