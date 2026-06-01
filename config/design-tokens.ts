// config/design-tokens.ts

/**
 * Global design system values.
 * These values should remain stable across the entire project.
 */

export const designTokens = {
  layout: {
    container: "76rem",
    headerHeight: "5rem",
  },

  spacing: {
    sectionY: "clamp(4rem, 7vw, 7rem)",
  },

  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
  },
} as const;