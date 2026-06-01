// components/layout/mobile-navigation.tsx

"use client";

/**
 * Mobile navigation drawer.
 * Uses shadcn Sheet and Accordion components.
 */

import Link from "next/link";
import { ChevronLeft, Menu} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiteBrand } from "@/components/layout/site-brand";
import { faNavigation } from "@/content/fa/navigation";

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          aria-label="باز کردن منوی سایت"
          className="text-white hover:bg-white/10 hover:text-white lg:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] overflow-y-auto p-0">
        <SheetHeader className="border-b bg-[#242424] px-4 py-4 text-right">
          <SheetTitle className="sr-only">منوی اصلی سایت</SheetTitle>
          <SiteBrand logoSize={32} />
        </SheetHeader>

        <div className="px-4 py-5">
          <Accordion type="multiple" className="w-full">
            {faNavigation.map((item) => {
              const hasLinks = Boolean(item.links?.length);

              if (!hasLinks) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-sm font-bold text-foreground hover:bg-secondary"
                  >
                    {item.title}
                  </Link>
                );
              }

              return (
                <AccordionItem key={item.href} value={item.href}>
                  <AccordionTrigger className="group rounded-lg px-3 py-3 text-sm font-bold hover:bg-secondary hover:no-underline">
                    <span>{item.title}</span>

                    <ChevronLeft
                      className="size-4 transition-transform duration-200 group-data-[state=open]:-rotate-90"
                    />
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="mr-3 mt-1 grid gap-1 border-r pr-3">
                      {item.links?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
