// config/site.ts

import { completeHardNavigation } from "next/dist/client/components/segment-cache/navigation";

/**
 * Global site configuration.
 * Keep business identity, contact information, social links, and global metadata here.
 */

export const siteConfig = {
  name: "سیمرکو",
  completeName:"گروه صنعتی سیمرکو",
  englishName: "Seamerco",
  url: "https://www.seamerco-group.com",
  defaultLocale: "fa",
  supportedLocales: ["fa", "en"],
  description:
    "طراحی، ساخت و راه‌اندازی ماشین‌آلات و خطوط تولید صنایع غذایی کنسروی",

  contact: {
    email: {
      label: "info@seamerco-group.com",
      href: "mailto:info@seamerco-group.com",
    },
    officeAddress: {
      label:
        "دفتر مرکزی: تهران، بزرگراه شهید لشگری",
      mapUrl: "https://maps.google.com",
    },
    workshopAddress: {
      label: "کارخانه: شهرک صنعتی زاگروس، خیابان صنایع، صنعت یکم",
      mapUrl: "https://maps.google.com",
    },
    officePhone: {
      label: "۰۲۱-۵۶۸۵۸۵۰۰",
      href: "tel:+982146858500",
    },
    mobile: {
      label: "۹۱۲-۴۱۰۰۵۷۱",
      href: "tel:+989124105711",
    },
    whatsapp: {
      label: "۹۱۲-۴۱۰۰۵۷۱",
      href: "https://wa.me/989124105711",
    },
    consultation: {
      label: "مشاوره فنی",
      mobileLabel: "۰۹۱۲۴۱۰۰۵۷۱۱",
      mobileHref: "tel:+989124105711",
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

  brand: {
    fa: {
      top: "گروه صنعتی",
      bottom: "سیــــمرکو",
    },
    en: {
      top: "Industrial Group",
      bottom: "Seamerco",
    },
  },
} as const;

export type SiteLocale = (typeof siteConfig.supportedLocales)[number];