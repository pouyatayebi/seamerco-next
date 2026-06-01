// content/fa/home/about.ts

export const faHomeAboutContent = {
  title: "درباره سیمرکو",
  introStrong: "گروه صنعتی سیمرکو،",
  paragraphs: [
    "مجموعه ای فنی مهندسی در حوزه طراحی، ساخت ماشین آلات صنایع غذایی و راه اندازی خطوط تولید کنسروی می باشد.",
    "این شرکت با بیش از 25 سال سابقه فعالیت در حوزه طراحی و ساخت انواع ماشین آلات صنایع غذایی کنسروی تا کنون بیش از 200 پروژه داخلی و 40 پروژه خارجی را به بهره برداری رسانده است.",
    "ساخت ماشین آلات خطوط تولید در 110 مدل متنوع و 8 نوع خط تولید صنایع غذایی از اصلی ترین فعالیت این شرکت می باشد، و همچنین راه اندازی و اجرای یک کارخانه و همچنین راه اندازی و اجرای یک کارخانه صنایع غذایی است.",
  ],
  readMore: {
    label: "مشاهده صفحه درباره سیمرکو",
    href: "/about-us",
  },
  media: {
    main: {
      image: "/images/about/about-main.jpg",
      video: "/videos/about.mp4",
      alt: "کارخانه و تجهیزات صنعتی سیمرکو",
    },
    items: [
      {
        image: "/images/about/about-1.jpg",
        video: "/videos/about-1.mp4",
        alt: "خط تولید محصولات کنسروی",
      },
      {
        image: "/images/about/about-2.jpg",
        video: "/videos/about-2.mp4",
        alt: "ماشین‌آلات صنعتی سیمرکو",
      },
      {
        image: "/images/about/about-3.jpg",
        video: "/videos/about-3.mp4",
        alt: "تجهیزات پخت و استریلیزاسیون",
      },
    ],
  },
} as const;