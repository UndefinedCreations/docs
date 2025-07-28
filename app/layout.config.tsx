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
    links: [
        {
            type: 'menu',
            text: 'Projects',
            items: [
                {
                    text: 'Stellar',
                    description: 'Our Command Library for Spigot and Paper',
                    url: '/docs/stellar/latest',
                },
                {
                    text: 'Lynx',
                    description: 'Our General Library for Spigot and Paper',
                    url: '/docs/lynx/latest',
                },
                {
                    text: 'Nova',
                    description: 'A Gradle plugin what allows you to run Minecraft server using Gradle',
                    url: '/docs/nova/latest',
                },
                {
                    text: 'Echo',
                    description: 'A Gradle plugin that simplifies working with Spigot NMS.',
                    url: '/docs/echo/latest',
                },
            ],
        }
    ],
};
