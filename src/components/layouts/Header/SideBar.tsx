import { SVGElement } from '@/components/icons';
import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { LinkType } from './data';

export default function SideBar({ links }: { links: LinkType[] }) {
  return (
    <Sheet>
      <SheetTrigger className="py-3">
        <HeroiconsSvgWrapper className="h-6 w-6">
          {SVGElement.humburger}
        </HeroiconsSvgWrapper>
      </SheetTrigger>
      <SheetContent className="w-[150px] border-l border-neutral-700 bg-neutral-800">
        <nav className="py-10">
          <ul className="grid gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="flex gap-2.5 rounded-lg text-white"
                  href={link.href}
                >
                  <HeroiconsSvgWrapper>{link.icon}</HeroiconsSvgWrapper>
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
