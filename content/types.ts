// content/types.ts

/**
 * Shared content types.
 * Keep reusable content contracts outside content data files.
 */

export type NavigationItem = {
  title: string;
  href: string;
  links?: NavigationItem[];
};