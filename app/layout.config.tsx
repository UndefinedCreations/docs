import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.undefinedcreations.com",
  nav: {
    title: (
      <>
        <img
          src="https://cdn.undefinedcreations.com/undefinedcreations/logo.png"
          width={24}
          height={24}
          alt="Logo"
        />
        Undefined Creations
      </>
    ),
  },
};
