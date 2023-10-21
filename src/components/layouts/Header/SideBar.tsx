'use client';

import { SVGElement } from '@/components/icons';
import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LinkType } from './data';

type Props = {
  open: boolean;
  links: LinkType[];
  handleOpenChange: (open: boolean) => void;
  handleLinkClick: (link: string) => void;
};

export default function SideBar({
  open,
  links,
  handleOpenChange,
  handleLinkClick,
}: Props) {
  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger className="py-3">
        <HeroiconsSvgWrapper className="h-6 w-6">
          {SVGElement.humburger}
        </HeroiconsSvgWrapper>
      </SheetTrigger>
      <SheetContent className="w-[150px] border-l border-neutral-700 bg-neutral-800 px-3">
        <nav className="py-10">
          <ul className="grid gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <Button
                  className="flex gap-2.5 bg-inherit text-white"
                  onClick={() => handleLinkClick(link.href)}
                >
                  <HeroiconsSvgWrapper>{link.icon}</HeroiconsSvgWrapper>
                  <p className="text-right font-semibold">
                    {link.name.toUpperCase()}
                  </p>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
