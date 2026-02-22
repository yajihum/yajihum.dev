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
  { name: 'Home', href: '/', icon: SVGElement.home },
  { name: 'Blog', href: '/blog', icon: SVGElement.blog },
];

export function useLinks() {
  const pathname = usePathname();

  const links = linkDatas.map((link) => {
    const isActive =
      link.href === '/'
        ? pathname === '/'
        : pathname.startsWith(link.href);
    const color =
      'text-neutral-400 transition-colors duration-300 hover:text-neutral-100';
    return {
      ...link,
      current: isActive,
      disable: false,
      color,
    };
  });

  return {
    links,
  };
}
