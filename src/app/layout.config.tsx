import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <>{process.env.NEXT_PUBLIC_APP_NAME}</>,
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
