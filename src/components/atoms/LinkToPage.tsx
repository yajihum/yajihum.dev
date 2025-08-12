import { SVGElement } from '@/components/icons';
import Link from 'next/link';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';

export const LinkToPage: React.FC<{
  href: string;
  title: string;
  icon?: 'chevronRight' | 'arrowUpRight';
}> = ({ href, title, icon = 'chevronRight' }) => {
  return (
    <Link
      href={href}
      className="ml-auto flex items-center justify-end gap-1 px-1 hover:underline"
    >
      <p className="text-sm md:text-base">{title}</p>
      <HeroiconsSvgWrapper
        className="h-5 w-5 text-blue-500 md:h-6 md:w-6"
        aria-label={`${title}へ遷移する`}
      >
        {SVGElement[icon]}
      </HeroiconsSvgWrapper>
    </Link>
  );
};
