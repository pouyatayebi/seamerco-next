// components/layout/site-footer.tsx

/**
 * Main site footer.
 * Uses global site configuration for contact details and social links.
 */

import Link from "next/link";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import { Logo } from "@/components/svg/logo";
import { siteConfig } from "@/config/site";

const socialIcons = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
  Facebook: FaFacebookF,
} as const;

export function SiteFooter() {
  const { contact, socialLinks } = siteConfig;

  return (
    <footer className="bg-industrial-navy text-white">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start [direction:ltr]">
          {/* Brand & Socials - Left */}
          <div className="text-center [direction:ltr] md:text-left">
            <Link
              href={`mailto:${contact.email.label}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-industrial-orange"
            >
              <Mail className="size-4 text-industrial-orange" />
              {contact.email.label}
            </Link>

            <div className="mt-5 flex justify-center gap-2 md:justify-start">
              {socialLinks.map((item) => {
                const Icon =
                  socialIcons[item.label as keyof typeof socialIcons];

                if (!Icon) {
                  return null;
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-md bg-industrial-orange/85 text-industrial-navy transition-all duration-300 hover:-translate-y-1 hover:bg-industrial-orange"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/"
              className="mt-7 inline-flex items-center gap-3 text-right"
            >
              <div className="flex flex-col leading-none">
                <span className="text-[1.35rem] font-extrabold tracking-wide text-white">
                  SEAMERCO
                </span>

                <span className="mt-1 text-sm font-medium text-white/85">
                  گروه صنعتی سیمرکو
                </span>
              </div>

              <Logo size={52} />
            </Link>
          </div>

          {/* Phones - Center */}
          <div className="space-y-4 text-center [direction:rtl] md:text-right">
            <Link
              href={contact.officePhone.href}
              className="flex items-center justify-center gap-3 text-sm text-white/90 transition-colors hover:text-industrial-orange md:justify-start"
            >
              <Phone className="size-5 text-industrial-orange" />
              {contact.officePhone.label}
            </Link>

            <Link
              href={contact.mobile.href}
              className="flex items-center justify-center gap-3 text-sm text-white/90 transition-colors hover:text-industrial-orange md:justify-start"
            >
              <Smartphone className="size-5 text-industrial-orange" />
              {contact.mobile.label}
            </Link>

            <Link
              href={contact.whatsapp.href}
              className="flex items-center justify-center gap-3 text-sm text-white/90 transition-colors hover:text-industrial-orange md:justify-start"
            >
              <Smartphone className="size-5 text-industrial-orange" />
              {contact.whatsapp.label}
            </Link>

            <p className="pt-2 text-sm font-bold text-white">
              از برقراری تماس‌های تبلیغاتی خودداری فرمایید.
            </p>
          </div>

          {/* Addresses - Right */}
          <div className="space-y-5 text-center [direction:rtl] md:text-right">
            <Link
              href={contact.officeAddress.mapUrl}
              className="flex items-start justify-center gap-3 text-sm leading-7 text-white/90 transition-colors hover:text-industrial-orange md:justify-start"
            >
              <MapPin className="mt-1 size-5 shrink-0 text-industrial-orange" />
              <span>{contact.officeAddress.label}</span>
            </Link>

            <Link
              href={contact.workshopAddress.mapUrl}
              className="flex items-start justify-center gap-3 text-sm leading-7 text-white/90 transition-colors hover:text-industrial-orange md:justify-start"
            >
              <MapPin className="mt-1 size-5 shrink-0 text-industrial-orange" />
              <span>{contact.workshopAddress.label}</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5 text-center text-xs text-white/80">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به گروه صنعتی سیمرکو است.
        </div>
      </div>
    </footer>
  );
}