import { SVGElement } from '@/components/icons';
import { NavSvgWrapper } from '@/components/icons/svg-wapper';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { LinkType } from './data';

export default function SideBar({ links }: { links: LinkType[] }) {
  return (
    <Sheet>
      <SheetTrigger className="py-3">
        <NavSvgWrapper className="h-6 w-6">
          {SVGElement.humburger}
        </NavSvgWrapper>
      </SheetTrigger>
      <SheetContent className="w-[150px]">
        <nav className="py-10">
          <ul className="grid gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="flex gap-3 rounded-lg text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
                  href={link.href}
                >
                  <NavSvgWrapper>{link.icon}</NavSvgWrapper>
                  <p className="text-right text-sm font-semibold">
                    {link.name.toUpperCase()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
