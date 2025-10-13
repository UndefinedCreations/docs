import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import Link from 'next/link';
import { BsDiscord } from 'react-icons/bs';
import BasicFooter from '../components/layout/basic-footer';
import { Navbar } from 'fumadocs-ui/layouts/home/navbar';
import { SearchDialog } from 'fumadocs-ui/components/dialog/search';

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
