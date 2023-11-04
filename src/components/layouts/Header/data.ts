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
  { name: 'Home', href: '/', icon: SVGElement.home, current: true },
  { name: 'About', href: '/#about', icon: SVGElement.user, current: false },
  { name: 'Works', href: '/#works', icon: SVGElement.work, current: false },
  {
    name: 'Speach',
    href: '/speach',
    icon: SVGElement.microphone,
    current: false,
  },
  { name: 'Blog', href: '/blog', icon: SVGElement.blog, current: false },
];

export function useLinks() {
  const links = linkDatas.map((link) => {
    const color =
      'text-neutral-200 transition-colors duration-300 hover:text-emerald-400';
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
