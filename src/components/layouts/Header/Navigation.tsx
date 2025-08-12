'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import SideBarContainer from './SideBarContainer';
import { useLinks } from './data';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const { links } = useLinks();

  return (
    <>
      <div className="block md:hidden">
        <SideBarContainer />
      </div>
      <nav className="my-2 hidden items-end md:flex">
        <ul className="grid grid-cols-2 justify-items-center gap-4">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className={cn('font-bold', link.color)}
                  href={link.href}
                  aria-disabled={link.disable}
                >
                  <p className="text-md">{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
