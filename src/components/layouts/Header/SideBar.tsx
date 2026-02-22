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
      <SheetTrigger className="py-1">
        <HeroiconsSvgWrapper className="h-5 w-5 text-neutral-300">
          {SVGElement.humburger}
        </HeroiconsSvgWrapper>
      </SheetTrigger>
      <SheetContent className="w-[200px] border-l border-neutral-700 bg-neutral-800 px-3">
        <nav className="py-10">
          <ul className="grid gap-10 px-4">
            {links.map((link) => (
              <li key={link.name} className="border-b border-neutral-500">
                <Button
                  className="flex w-full items-center justify-between bg-inherit px-0 text-white hover:bg-inherit"
                  onClick={() => handleLinkClick(link.href)}
                >
                  <p className="text-right">{link.name}</p>
                  <HeroiconsSvgWrapper
                    className="h-5 w-5 text-neutral-200"
                    aria-label={`${link.name}へ遷移する`}
                  >
                    {SVGElement.chevronRight}
                  </HeroiconsSvgWrapper>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
