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
  { name: 'Blog', href: '/blog', icon: SVGElement.blog, current: false },
  { name: 'Photos', href: '/photos', icon: SVGElement.camera, current: false },
];

export function useLinks() {
  const links = linkDatas.map((link) => {
    const color =
      'text-neutral-300 transition-colors duration-300 hover:text-neutral-100';
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
