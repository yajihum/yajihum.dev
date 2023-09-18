import { SVGElement } from '@/components/icons';
import SVGWapper from '@/components/icons/svg-wapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import SideBar from './SideBar';

export const links = [
  { name: 'Home', href: '#', icon: SVGElement.home, current: true },
  { name: 'About', href: '#', icon: SVGElement.user, current: false },
  { name: 'Work', href: '#', icon: SVGElement.work, current: false },
  { name: 'Blog', href: '#', icon: SVGElement.blog, current: false },
];

export default function Header() {
  return (
    <header className="border-b py-1 md:py-2">
      <div className="mx-auto flex max-w-4xl justify-between px-4">
        <div className="py-1">
          <a
            href="https://yajium.day"
            className="flex items-center gap-4 hover:underline"
          >
            <Avatar>
              <AvatarImage alt="yajihum" src="https://github.com/yajihum.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold md:text-2xl">yajihum.day</h2>
          </a>
        </div>
        <div className="block md:hidden">
          <SideBar />
        </div>
        <nav className="hidden md:block">
          <ul className="grid grid-cols-4 gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="flex flex-col items-center rounded-lg p-2 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900"
                  href={link.href}
                >
                  <SVGWapper>{link.icon}</SVGWapper>
                  <p className="text-sm">{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
