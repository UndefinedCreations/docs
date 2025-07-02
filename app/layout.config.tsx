import { NavbarMenu, NavbarMenuContent, NavbarMenuLink, NavbarMenuTrigger } from 'fumadocs-ui/layouts/home/navbar';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="https://cdn.lutto.dev/undefinedcreations/logo.png"
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
          text: 'Echo',
          description: 'A Gradle plugin that simplifies working with Spigot NMS.',
          url: '/docs/echo/latest',
        },
      ],
    }
  ],
};
