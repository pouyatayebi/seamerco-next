// content/fa/navigation.ts

/**
 * Persian main navigation content.
 * Keep labels separate from components for easier localization.
 */

import type { NavigationItem } from "@/content/types";

export const faNavigation = [
//   {
//     title: "خانه",
//     href: "/",
//   },
  {
    title: "خطوط تولید",
    href: "/solutions",
    links: [
      { title: "خط تولید رب گوجه فرنگی", href: "/solutions/tomato" },
      {
        title: "خط بسته بندی رب گوجه فرنگی",
        href: "/solutions/packaging-tomato-paste-line",
      },
      {
        title: "خط تولید کنسرو لوبیا و حبوبات",
        href: "/solutions/beans",
      },
      {
        title: "خط تولید کنسرو ماهی تون",
        href: "/solutions/canned-tuna-line",
      },
      {
        title: "خط تولید مربا و کمپوت میوه",
        href: "/solutions/jam",
      },
      {
        title: "خط تولید کنسرو زیتون",
        href: "/solutions/canned-olive-line",
      },
      {
        title: "خط تولید کنسرو غذای حیوانات خانگی",
        href: "/solutions/canned-pet-food-line",
      },
    ],
  },
  {
    title: "ماشین‌آلات",
    href: "/machinery",
    links: [
      { title: "ماشین‌آلات دربندی", href: "/machinery/seamer" },
      { title: "ماشین‌آلات پرکن", href: "/machinery/filler" },
      {
        title: "ماشین‌آلات پخت و تغلیظ",
        href: "/machinery/cooking-concentrating-machines",
      },
      {
        title: "ماشین‌آلات استرلیزاسیون",
        href: "/machinery/sterilization-machines",
      },
      {
        title: "ماشین‌آلات آماده‌سازی",
        href: "/machinery/processing-machines",
      },
    ],
  },
  {
    title: "راه‌اندازی کارخانه",
    href: "/factory-setup",
    links: [
      { title: "مشاوره و طراحی", href: "/factory-setup/expert-advice" },
      { title: "اجرا و ساخت", href: "/factory-setup/implementation" },
      {
        title: "توسعه و پشتیبانی",
        href: "/factory-setup/support",
      },
      {
        title: "بازاریابی و فروش",
        href: "/factory-setup/marketing",
      },
    ],
  },
  {
    title: "پروژه‌ها",
    href: "/projects",
  },
  {
    title: "رویدادها",
    href: "/events",
  },
  {
    title: "درباره ما",
    href: "/about-us",
  },
  {
    title: "تماس با ما",
    href: "/contact-us",
  },
] satisfies NavigationItem[];