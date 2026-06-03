// config/site.ts

/**
 * Global site configuration.
 * Keep business identity, contact information, social links,
 * default media assets, and global metadata here.
 */

export const siteConfig = {
  name: "سیمرکو",
  completeName: "گروه صنعتی سیمرکو",
  englishName: "Seamerco",
  englishCompleteName: "Seamerco Industrial Group",

  url: "https://www.seamerco-group.com",

  defaultLocale: "fa",
  supportedLocales: ["fa", "en"],

  description:
    "طراحی، ساخت و راه‌اندازی ماشین‌آلات و خطوط تولید صنایع غذایی کنسروی",

  hero: {
    defaultPoster: "/images/defaults/hero-default.jpg",

    badge: {
      src: "/images/26-years.png",
      alt: "۲۶ سال تجربه سیمرکو",
    },
  },

  defaults: {
    solution: {
      title: "خطوط تولید صنایع غذایی",
      subtitle: "طراحی، ساخت و راه‌اندازی خطوط تولید صنایع غذایی کنسروی",
      cover: "/images/defaults/solutions-cover.webp",
      featuredImage: "/images/defaults/solutions-featured.jpg",
      excerpt:
        "این صفحه برای معرفی خط تولید ایجاد شده و محتوای تخصصی آن به‌زودی تکمیل می‌شود.",
    },

    machinery: {
      title: "ماشین‌آلات صنایع غذایی",
      subtitle: "طراحی و ساخت ماشین‌آلات خطوط تولید صنایع غذایی کنسروی",
      cover: "/images/defaults/machinery-cover.webp",
      featuredImage: "/images/defaults/machinery-featured.webp",
      excerpt:
        "این صفحه برای معرفی ماشین‌آلات ایجاد شده و محتوای تخصصی آن به‌زودی تکمیل می‌شود.",
    },

    machineryCategory: {
      title: "دسته‌بندی ماشین‌آلات",
      subtitle: "معرفی دسته‌بندی ماشین‌آلات صنعتی سیمرکو",
      cover: "/images/defaults/machinery-category-cover.webp",
      featuredImage: "/images/defaults/machinery-category-featured.jpg",
      excerpt:
        "این صفحه برای معرفی دسته ماشین‌آلات ایجاد شده و محتوای تخصصی آن به‌زودی تکمیل می‌شود.",
    },

    machineryProduct: {
      title: "ماشین‌آلات سیمرکو",
      subtitle: "طراحی و ساخت ماشین‌آلات صنعتی صنایع غذایی",
      cover: "/images/defaults/machinery-product-cover.jpg",
      featuredImage: "/images/defaults/machinery-product-featured.jpg",
      excerpt:
        "این صفحه برای معرفی ماشین صنعتی ایجاد شده و محتوای تخصصی آن به‌زودی تکمیل می‌شود.",
    },
  },

  contact: {
    email: {
      label: "info@seamerco-group.com",
      href: "mailto:info@seamerco-group.com",
    },

    officeAddress: {
      label:
        "دفتر مرکزی: تهران، بزرگراه شهید لشگری، بعد از تقاطع فتح، ساختمان ایرانیان، واحد ۲۷۲",
      mapUrl: "https://maps.google.com",
    },

    workshopAddress: {
      label: "کارخانه: شهرک صنعتی زاگروس، خیابان صنایع، صنعت یکم",
      mapUrl: "https://maps.google.com",
    },

    officePhone: {
      label: "۰۲۱ ۴۶ ۸۵ ۸۵ ۰۰",
      href: "tel:+982146858500",
    },

    mobile: {
      label: "۰۹۱۲ ۴۱۰ ۵۷۱۱",
      href: "tel:+989124105711",
    },

    consultation: {
      label: "مشاوره فنی",
      mobileLabel: "۰۹۱۲ ۴۱۰ ۵۷۱۱",
      mobileHref: "tel:+989124105711",
    },

    whatsapp: {
      label: "۰۹۱۲ ۴۱۰ ۵۷۱۱",
      href: "https://wa.me/989124105711?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D9%81%D9%86%DB%8C%20%D8%B3%DB%8C%D9%85%D8%B1%DA%A9%D9%88%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85.",
    },
  },

  socialLinks: [
    {
      label: "Instagram",
      href: "https://instagram.com/seamerco",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/seamerco",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/989124105711",
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
    },
  ],

  actions: {
    fa: {
      catalog: {
        label: "دانلود کاتالوگ خط تولید",
        href: "/contact-us?type=catalog",
      },
      proforma: {
        label: "درخواست پیش فاکتور",
        href: "/contact-us?type=proforma",
      },
    },
  },

  brand: {
    fa: {
      top: "گروه صنعتی",
      bottom: "سیمرکو",
    },

    en: {
      top: "Industrial Group",
      bottom: "Seamerco",
    },
  },
} as const;

export type SiteLocale = (typeof siteConfig.supportedLocales)[number];
