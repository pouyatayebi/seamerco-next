// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { iranSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/layout/site-footer";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${iranSans.variable} bg-background font-sans`}>
        {/* <RestoreOnBack /> */}
        <SiteHeader />
        {children}
        <SiteFooter/>
      </body>
    </html>
  );
}