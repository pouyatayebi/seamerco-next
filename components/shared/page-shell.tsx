// components/shared/page-shell.tsx

/**
 * Main page shell.
 * Use this wrapper for pages that need consistent top and bottom spacing.
 */

import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return <main className={cn("min-h-screen", className)}>{children}</main>;
}