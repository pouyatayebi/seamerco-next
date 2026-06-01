// components/layout/site-brand.tsx

/**
 * Reusable site brand component.
 * The Persian brand layout follows the original Seamerco header.
 */

import Link from "next/link";

import { Logo } from "@/components/svg/logo";
import { siteConfig } from "@/config/site";

type SiteBrandProps = {
  href?: string;
  logoSize?: number;
};

export function SiteBrand({ href = "/", logoSize = 34 }: SiteBrandProps) {
  return (
    <Link href={href} className="flex shrink-0 items-center gap-[3px]">
      <span className="-translate-y-[1px]">
        <Logo size={logoSize} />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className="
            -mr-[6px]
            text-[12px]
            font-normal
            tracking-[0.03em]
            text-white
          "
        >
          {siteConfig.brand.fa.top}
        </span>

        <span className="text-[18px] font-normal leading-[1.2] tracking-normal text-[#d9d9d9]">
          {siteConfig.brand.fa.bottom}
        </span>
      </span>
    </Link>
  );
}
