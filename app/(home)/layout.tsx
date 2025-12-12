import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import BasicFooter from '../components/layout/basic-footer';

export default function Layout({ children }: { children: ReactNode }) {
  return <div>
        <HomeLayout
          {...baseOptions}
          themeSwitch={{enabled: false}}
        >
            <div className='min-h-screen inline'>
              {children}
            </div>
          <BasicFooter />
        </HomeLayout>
      </div>;
}
