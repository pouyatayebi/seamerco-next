// components/shared/section-heading.tsx

/**
 * Reusable section heading block.
 * Useful for homepage sections, machine groups, and production line sections.
 */

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold text-accent">{eyebrow}</p>
      ) : null}

      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}