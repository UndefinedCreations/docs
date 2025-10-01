import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
          tabs: [
            {
              title: '1.0.5',
              // TODO add icon
              url: '/docs/stellar/v1.0.5',
            },
            {
              title: '1.1.0 (latest)',
              // TODO add icon
              url: '/docs/stellar/latest',
            },
          ],
        }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
