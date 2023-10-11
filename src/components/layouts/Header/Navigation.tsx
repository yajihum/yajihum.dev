'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import SideBar from './SideBar';
import { useLinks } from './data';

export default function Navigation() {
  const { links } = useLinks();
  return (
    <>
      <div className="block md:hidden">
        <SideBar links={links} />
      </div>
      <nav className="hidden items-center md:flex">
        <ul className="grid grid-cols-5 justify-items-center gap-4">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className={cn('font-bold', link.color)}
                  href={link.href}
                  aria-disabled={link.disable}
                >
                  <p className="text-base">{link.name.toUpperCase()}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
