import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GitBranch, GitBranchIcon, GitCommitIcon } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      themeSwitch={{enabled: false}}
      sidebar={{
          tabs: [
            {
              title: '1.0.5 (latest)',
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
