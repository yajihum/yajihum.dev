'use client';

import { NavSvgWrapper } from '@/components/icons/svg-wapper';
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
      <nav className="hidden md:block">
        <ul className="grid grid-cols-4 gap-5">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className={cn(
                    'grid place-items-center gap-1 rounded-lg p-2 font-semibold',
                    link.color,
                  )}
                  href={link.href}
                  aria-disabled={link.disable}
                >
                  <NavSvgWrapper>{link.icon}</NavSvgWrapper>
                  <p className="text-xs">{link.name.toUpperCase()}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
