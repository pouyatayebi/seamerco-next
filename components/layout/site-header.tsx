// components/layout/site-header.tsx

/**
 * Main website header.
 * The header follows the original Seamerco structure:
 * a compact navy contact bar and a dark navigation bar.
 */

import Link from "next/link";
import { Headphones, MapPin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SiteNavigation } from "@/components/layout/site-navigation";
import { TechnicalInfoDialog } from "@/components/layout/technical-info-dialog";
import { siteConfig } from "@/config/site";
import { SiteBrand } from "./site-brand";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 text-white">
      <div className="hidden bg-industrial-navy text-[12px] font-light md:block pt-1 pb-1">
        <div className="mx-auto flex h-6 w-[min(100%-2rem,64rem)] items-center justify-start text-white/80">
          <Link
            href={siteConfig.contact.officeAddress.mapUrl}
            target="_blank"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <MapPin className="size-3 text-accent" />
            {siteConfig.contact.officeAddress.label}
          </Link>

          <Link
            href={siteConfig.contact.officePhone.href}
            className="mr-2 hover:text-white"
          >
            {siteConfig.contact.officePhone.label}
          </Link>

          <Link
            href={siteConfig.contact.consultation.mobileHref}
            className="mr-8 inline-flex items-center gap-1.5 hover:text-white"
          >
            <Headphones className="size-3 text-accent" />
            {siteConfig.contact.consultation.label}
          </Link>

          <Link
            href={siteConfig.contact.consultation.mobileHref}
            className="mr-3 hover:text-white"
          >
            {siteConfig.contact.consultation.mobileLabel}
          </Link>

          <div className="mr-8">
            <TechnicalInfoDialog />
          </div>
        </div>
      </div>

      <div className="bg-[#242424]">
        <Container className="max-w-[64rem]">
          <div className="flex h-11 items-center justify-start gap-12">
            <SiteBrand />

            <SiteNavigation />
            <div className="mr-auto lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
