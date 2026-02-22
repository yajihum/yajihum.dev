'use client';

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
      <nav className="hidden items-center md:flex">
        <ul className="flex items-center gap-5">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
                href={link.href}
                aria-disabled={link.disable}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
