import { SVGElement } from '@/components/icons';
import { usePathname } from 'next/navigation';

export type LinkType = {
  name: string;
  href: string;
  icon: React.ReactNode;
  current: boolean;
  disable: boolean;
  color: string;
};

const linkDatas = [
  { name: 'home', href: '#', icon: SVGElement.home, current: true },
  { name: 'about', href: '#about', icon: SVGElement.user, current: false },
  { name: 'works', href: '#works', icon: SVGElement.work, current: false },
  { name: 'blog', href: '#', icon: SVGElement.blog, current: false },
];

export function useLinks() {
  const pathname = usePathname();

  const links = linkDatas.map((link) => {
    const isCurrent =
      (pathname === '/' && link.name === 'home') ||
      pathname.includes(link.name);
    const color = isCurrent ? 'border' : 'text-neutral-300 hover:underline';
    return {
      ...link,
      disable: isCurrent ? true : false,
      color,
    };
  });

  return {
    links,
  };
}
