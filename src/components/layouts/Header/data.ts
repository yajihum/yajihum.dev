import { SVGElement } from '@/components/icons';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export type LinkType = {
  name: string;
  href: string;
  icon: React.ReactNode;
  current: boolean;
  disable: boolean;
  color: string;
};

const linkDatas = [
  { name: 'home', href: '/', icon: SVGElement.home, current: true },
  { name: 'about', href: '/#about', icon: SVGElement.user, current: false },
  { name: 'works', href: '/#works', icon: SVGElement.work, current: false },
  { name: 'blog', href: '/blog', icon: SVGElement.blog, current: false },
];

export function useLinks() {
  const pathname = usePathname();
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    const hash = location.hash;
    console.log(hash, pathname);
    setIsCurrent(getIsCurrent(hash, pathname, 'home'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const links = linkDatas.map((link) => {
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

const getIsCurrent = (hash: string, pathname: string, linkName: string) => {
  return hash.includes(linkName) || (pathname === '/' && linkName === 'home');
};
