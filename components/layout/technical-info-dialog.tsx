// components/layout/technical-info-dialog.tsx

"use client";

/**
 * Technical information request dialog.
 * Uses shadcn Dialog and keeps user-facing text in content files.
 */

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { faHeaderContent } from "@/content/fa/header";
import { siteConfig } from "@/config/site";

export function TechnicalInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-b border-white/70 pb-0.5 text-white/85 hover:text-white">
          {faHeaderContent.topBar.technicalRequestLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{faHeaderContent.technicalDialog.title}</DialogTitle>
          <DialogDescription className="leading-7">
            {faHeaderContent.technicalDialog.description}
          </DialogDescription>
        </DialogHeader>

        <Button asChild>
          <Link href={siteConfig.contact.whatsapp.href} target="_blank">
            {faHeaderContent.technicalDialog.whatsappButtonLabel}
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}