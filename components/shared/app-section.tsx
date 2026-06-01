// components/shared/app-section.tsx

/**
 * Reusable section wrapper for all main page sections.
 * Keeps spacing, container width, background, and alignment consistent.
 */

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AppSectionTone = "default" | "surface" | "navy";

type AppSectionProps = {
  children: ReactNode;
  tone?: AppSectionTone;
  className?: string;
  containerClassName?: string;
  innerClassName?: string;
};

const sectionToneClassName: Record<AppSectionTone, string> = {
  default: "bg-background text-foreground",
  surface: "bg-industrial-surface text-foreground",
  navy: "bg-industrial-navy text-white",
};

export function AppSection({
  children,
  tone = "default",
  className,
  containerClassName,
  innerClassName,
}: AppSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-12 md:py-16",
        sectionToneClassName[tone],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-4 md:px-8",
          containerClassName
        )}
      >
        <div className={cn("w-full", innerClassName)}>{children}</div>
      </div>
    </section>
  );
}

type AppSectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "right" | "center" | "left";
  className?: string;
};

export function AppSectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "right",
  className,
}: AppSectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        align === "center" && "items-center text-center md:items-center",
        align === "right" && "text-right",
        align === "left" && "text-left",
        className
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className="text-xs font-bold tracking-[0.18em] text-industrial-orange">
            {eyebrow}
          </p>
        ) : null}

        <h2 className="mt-2 text-2xl font-black leading-10 text-current md:text-3xl">
          {title}
        </h2>

        {description ? (
          <p className="mt-3 text-sm leading-8 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}