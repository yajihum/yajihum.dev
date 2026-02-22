import { cn } from '@/lib/utils';
import { SVGElement } from '../icons';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';

type Props = {
  id: string;
  title?: string;
  children?: React.ReactNode;
  hasBorder?: boolean;
};

export default function H2WithId({
  id,
  title,
  children,
  hasBorder = false,
}: Props) {
  const borderClass = hasBorder ? 'border-b border-neutral-700 py-3' : '';
  return (
    <h2
      id={id}
      className={cn(
        'h2-hover relative pt-14 flex scroll-mt-20 items-center gap-1 text-base md:gap-0 md:text-xl',
        borderClass,
      )}
    >
      <a id={id} href={`#${id}`} className="not-prose md:absolute md:-left-6">
        <HeroiconsSvgWrapper className="hover-opacity h-5 w-5 text-neutral-400 transition-opacity duration-200 md:opacity-0">
          {SVGElement.hashtag}
        </HeroiconsSvgWrapper>
      </a>

      {title}

      {children}
    </h2>
  );
}
