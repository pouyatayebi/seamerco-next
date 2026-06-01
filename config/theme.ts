// config/theme.ts

/**
 * Shared design tokens used across layout and UI components.
 * CSS variables will be defined later in app/globals.css.
 */

export const themeConfig = {
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
  },
  layout: {
    container: "min(100% - 2rem, 1200px)",
    headerHeight: "5rem",
  },
  typography: {
    fontSans: "var(--font-sans)",
  },
} as const;