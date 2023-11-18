import { SVGElement } from '@/components/icons';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';

export const LinkToPage = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => {
  return (
    <a href={href} className="flex items-end gap-1 px-1">
      <p className="text-sm hover:underline md:text-base">{title}</p>
      <HeroiconsSvgWrapper
        className="h-5 w-5 text-emerald-400 md:h-6 md:w-6"
        aria-label={`${title}へ遷移する`}
      >
        {SVGElement.chevronRight}
      </HeroiconsSvgWrapper>
    </a>
  );
};
