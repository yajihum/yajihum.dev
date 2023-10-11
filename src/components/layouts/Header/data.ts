import { SVGElement } from '@/components/icons';

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
  {
    name: 'speach',
    href: '/speach',
    icon: SVGElement.microphone,
    current: false,
  },
  { name: 'blog', href: '/blog', icon: SVGElement.blog, current: false },
];

export function useLinks() {
  const links = linkDatas.map((link) => {
    const color = 'text-neutral-100 hover:underline';
    return {
      ...link,
      disable: false,
      color,
    };
  });

  return {
    links,
  };
}
