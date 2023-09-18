import { SVGElement } from '@/components/icons';
import SVGWapper from '@/components/icons/svg-wapper';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { links } from '.';

export default function SideBar() {
  return (
    <Sheet>
      <SheetTrigger className="py-3">
        <SVGWapper className="h-6 w-6">{SVGElement.humburger}</SVGWapper>
      </SheetTrigger>
      <SheetContent className="w-[150px]">
        <SheetHeader className="my-4">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="py-2">
          <ul className="grid gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="flex items-center gap-3 rounded-lg p-2 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
                  href={link.href}
                >
                  <SVGWapper>{link.icon}</SVGWapper>
                  <p className="text-base">{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
