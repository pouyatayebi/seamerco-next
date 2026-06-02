// content/fa/home/production-lines.ts

import { mediaUrl } from "@/lib/media-url";

/**
 * Persian homepage production lines content.
 * Keep all card text, image paths, links, and overlay data outside components.
 */

export const faHomeProductionLinesContent = {
  title: "خطوط تولید ساخت گروه صنعتی سیمرکو",
  items: [
    {
      title: "خط تولید و بسته بندی رب گوجه",
      subtitle: "رب گوجه، کنسانتره میوه",
      description:
        "طراحی و اجرای خط کامل فرآوری گوجه تازه، تغلیظ، پاستوریزاسیون و بسته‌بندی محصول نهایی.",
      capacity: "۵۰ تا ۵۰۰ تن",
      href: "/solutions/tomato",
      image: mediaUrl("/images/production-lines/tomato-line.jpg"),
      detailButtonLabel: "جزئیات بیشتر",
      overlay: {
        title: "خط تولید رب گوجه فرنگی",
        description:
          "این خط تولید برای فرآوری گوجه تازه، استخراج آب گوجه، تغلیظ و آماده‌سازی محصول نهایی با کنترل دقیق کیفیت طراحی می‌شود.",
        technologiesTitle: "تکنولوژی",
        technologies: [
          { title: "هات بریک", href: "/machinery/hot-break" },
          { title: "کلدبریک", href: "/machinery/cold-break" },
          { title: "فالینگ فیلم", href: "/machinery/falling-film" },
          {
            title: "چرخش اجباری",
            href: "/machinery/forced-circulation",
          },
        ],
        equipmentTitle: "تجهیزات اصلی",
        equipment: [
          { title: "دستگاه اواپراتور", href: "/machinery/evaporator" },
          {
            title: "تونل پاستور",
            href: "/machinery/pasteurization-tunnel",
          },
        ],
        buttonLabel: "رفتن به صفحه خط تولید",
      },
    },
    {
      title: "خط تولید کنسرو حبوبات",
      subtitle: "لوبیا، نخود، عدسی و خوراک آماده",
      description:
        "طراحی خط کامل تولید کنسرو حبوبات شامل خیساندن، بلانچینگ، سس‌زنی، پرکنی، دربندی و رتورت.",
      capacity: "۳۰۰۰ تا ۲۰۰۰۰ قوطی",
      href: "/solutions/beans",
      image: mediaUrl("/images/production-lines/tomato-line.jpg"),
      detailButtonLabel: "جزئیات بیشتر",
      overlay: {
        title: "خط تولید کنسرو حبوبات",
        description:
          "این خط برای آماده‌سازی، پخت اولیه، پرکنی و استریلیزاسیون انواع حبوبات در قوطی و شیشه طراحی می‌شود.",
        technologiesTitle: "تکنولوژی",
        technologies: [
          { title: "بلانچینگ", href: "/machinery/blancher" },
          { title: "سس‌زنی", href: "/machinery/sauce-preparation" },
          { title: "رتورت", href: "/machinery/retort" },
          { title: "دربندی قوطی", href: "/machinery/can-seamer" },
        ],
        equipmentTitle: "تجهیزات اصلی",
        equipment: [
          { title: "بلانچر", href: "/machinery/blancher" },
          { title: "پرکن حبوبات", href: "/machinery/beans-filler" },
          { title: "دستگاه دربند", href: "/machinery/can-seamer" },
        ],
        buttonLabel: "رفتن به صفحه خط تولید",
      },
    },
    {
      title: "خط تولید کنسرو ماهی تون",
      subtitle: "ماهی تون، ساردین و محصولات دریایی",
      description:
        "راه‌اندازی خط فرآوری و کنسروسازی ماهی شامل دیفراست، پخت اولیه، پرکنی، دربندی و استریلیزاسیون.",
      capacity: "۵۰۰۰ تا ۴۰۰۰۰ قوطی",
      href: "/solutions/canned-tuna-line",
      image: mediaUrl("/images/production-lines/tomato-line.jpg"),
      detailButtonLabel: "جزئیات بیشتر",
      overlay: {
        title: "خط تولید کنسرو ماهی تون",
        description:
          "این خط برای فرآوری ماهی، پخت اولیه، جداسازی، پرکنی روغن یا سس و استریلیزاسیون نهایی محصول استفاده می‌شود.",
        technologiesTitle: "تکنولوژی",
        technologies: [
          { title: "دیفراست", href: "/machinery/defrosting" },
          { title: "پخت اولیه", href: "/machinery/pre-cooker" },
          { title: "دوزینگ روغن", href: "/machinery/oil-dosing" },
          { title: "رتورت", href: "/machinery/retort" },
        ],
        equipmentTitle: "تجهیزات اصلی",
        equipment: [
          { title: "دیفراستر", href: "/machinery/defroster" },
          { title: "تونل پخت ماهی", href: "/machinery/tuna-cooker" },
          { title: "پرکن ماهی", href: "/machinery/tuna-filler" },
        ],
        buttonLabel: "رفتن به صفحه خط تولید",
      },
    },
    {
      title: "خط بسته بندی رب گوجه",
      subtitle: "قوطی، شیشه و بسته‌بندی صنعتی",
      description:
        "طراحی خطوط بسته‌بندی رب گوجه شامل پرکن، دربند، لیبلینگ، شیرینگ و تجهیزات انتهای خط.",
      capacity: "۱۰۰۰ تا ۱۲۰۰۰ بسته",
      href: "/solutions/packaging-tomato-paste-line",
      image: mediaUrl("/images/production-lines/tomato-line.jpg"),
      detailButtonLabel: "جزئیات بیشتر",
      overlay: {
        title: "خط بسته بندی رب گوجه",
        description:
          "این خط برای پرکنی و بسته‌بندی رب در قوطی، شیشه یا بسته‌های صنعتی با کنترل وزن و کیفیت طراحی می‌شود.",
        technologiesTitle: "تکنولوژی",
        technologies: [
          { title: "پرکنی حجمی", href: "/machinery/volumetric-filler" },
          { title: "پرکنی پیستونی", href: "/machinery/piston-filler" },
          { title: "دربندی", href: "/machinery/seaming" },
          { title: "لیبلینگ", href: "/machinery/labeling" },
        ],
        equipmentTitle: "تجهیزات اصلی",
        equipment: [
          { title: "فیلر رب", href: "/machinery/tomato-paste-filler" },
          { title: "دربند قوطی", href: "/machinery/can-seamer" },
          { title: "شیرینگ پک", href: "/machinery/shrink-wrapper" },
        ],
        buttonLabel: "رفتن به صفحه خط تولید",
      },
    },
    {
      title: "خط تولید مربا و کمپوت",
      subtitle: "مربا، کمپوت و فرآورده‌های میوه",
      description:
        "فرآوری میوه، آماده‌سازی، پخت، پرکنی و بسته‌بندی محصولات مربا و کمپوت در ظرفیت‌های مختلف.",
      capacity: "۵۰۰ تا ۵۰۰۰ کیلوگرم",
      href: "/solutions/jam",
      image: mediaUrl("/images/production-lines/tomato-line.jpg"),
      detailButtonLabel: "جزئیات بیشتر",
      overlay: {
        title: "خط تولید مربا و کمپوت",
        description:
          "این خط برای شستشو، آماده‌سازی، پخت، اختلاط شربت و پرکنی انواع مربا و کمپوت میوه طراحی می‌شود.",
        technologiesTitle: "تکنولوژی",
        technologies: [
          { title: "پخت تحت خلأ", href: "/machinery/vacuum-cooking" },
          { title: "اختلاط شربت", href: "/machinery/syrup-mixing" },
          { title: "پرکنی گرم", href: "/machinery/hot-filling" },
          { title: "پاستوریزاسیون", href: "/machinery/pasteurization" },
        ],
        equipmentTitle: "تجهیزات اصلی",
        equipment: [
          { title: "دیگ پخت", href: "/machinery/cooking-kettle" },
          { title: "پرکن شیشه", href: "/machinery/jar-filler" },
          { title: "تونل پاستور", href: "/machinery/pasteurization-tunnel" },
        ],
        buttonLabel: "رفتن به صفحه خط تولید",
      },
    },
    {
      title: "خط تولید کنسرو زیتون",
      subtitle: "زیتون، شورجات و ترشیجات",
      description:
        "طراحی و ساخت ماشین‌آلات آماده‌سازی، فرآوری، پرکنی و دربندی محصولات زیتون و شورجات.",
      capacity: "۵۰۰ تا ۱۰۰۰۰ شیشه",
      href: "/solutions/canned-olive-line",
      image: mediaUrl("/images/production-lines/tomato-line.jpg"),
      detailButtonLabel: "جزئیات بیشتر",
      overlay: {
        title: "خط تولید کنسرو زیتون",
        description:
          "این خط برای آماده‌سازی، شستشو، درجه‌بندی، پرکنی و بسته‌بندی زیتون، شورجات و ترشیجات استفاده می‌شود.",
        technologiesTitle: "تکنولوژی",
        technologies: [
          { title: "درجه‌بندی", href: "/machinery/grading" },
          { title: "شستشو", href: "/machinery/washing" },
          { title: "پرکنی شورابه", href: "/machinery/brine-filling" },
          { title: "دربندی شیشه", href: "/machinery/jar-closing" },
        ],
        equipmentTitle: "تجهیزات اصلی",
        equipment: [
          { title: "دستگاه شستشو", href: "/machinery/washer" },
          { title: "پرکن زیتون", href: "/machinery/olive-filler" },
          { title: "دربند شیشه", href: "/machinery/jar-seamer" },
        ],
        buttonLabel: "رفتن به صفحه خط تولید",
      },
    },
  ],
} as const;