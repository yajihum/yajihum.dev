'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import SideBarContainer from './SideBarContainer';
import { useLinks } from './data';

export default function Navigation() {
  const { links } = useLinks();
  return (
    <>
      <div className="block md:hidden">
        <SideBarContainer />
      </div>
      <nav className="my-0.5 hidden items-end md:flex">
        <ul className="grid grid-cols-5 justify-items-center gap-4">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className={cn('font-bold', link.color)}
                  href={link.href}
                  aria-disabled={link.disable}
                >
                  <p className="text-lg">{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
