// config/fonts.ts

/**
 * Centralized font configuration.
 * IRANSansX FaNum variable font family.
 */

import localFont from "next/font/local";

export const iranSans = localFont({
  variable: "--font-iransans",

  src: [
    {
      path: "../fonts/iransans/IRANSansXFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },

    // Special weights

    {
      path: "../fonts/iransans/IRANSansXFaNum-Heavy.woff2",
      weight: "950",
      style: "normal",
    },
    {
      path: "../fonts/iransans/IRANSansXFaNum-ExtraBlack.woff2",
      weight: "1000",
      style: "normal",
    },
  ],

  display: "swap",
  preload: true,
  fallback: ["Tahoma", "sans-serif"],
});