// components/layout/site-navigation.tsx

/**
 * Compact desktop navigation with dropdown support.
 * Navigation content is loaded from separated content files.
 */

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { faNavigation } from "@/content/fa/navigation";
import { cn } from "@/lib/utils";

export function SiteNavigation() {
  return (
    <nav
      className="hidden items-center gap-0 lg:flex"
      aria-label="Main navigation"
    >
      {faNavigation.map((item) => {
        const hasLinks = Boolean(item.links?.length);

        return (
          <div key={item.href} className="group relative">
            <Link
              href={item.href}
              className={cn(
                "flex h-11 items-center gap-1 px-3 text-[18px] font-normal text-white/78",
                "hover:bg-white/8 hover:text-white"
              )}
            >
              {item.title}
              {hasLinks ? <ChevronDown className="size-3" /> : null}
            </Link>

            {hasLinks ? (
              <div className="invisible absolute right-0 top-full z-50 min-w-64 translate-y-2 rounded-b-xl border border-border bg-white p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid gap-1">
                  {item.links?.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-3 py-2 text-xs font-medium text-foreground hover:bg-secondary hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}