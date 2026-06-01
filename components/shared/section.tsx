// components/shared/section.tsx

/**
 * Shared section wrapper.
 * Keeps vertical spacing consistent across homepage and inner pages.
 */

import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      {children}
    </section>
  );
}