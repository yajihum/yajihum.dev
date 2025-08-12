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
        'h2-hover relative flex scroll-mt-20 items-start gap-1 text-lg font-bold md:items-center md:gap-0 md:text-2xl',
        borderClass,
      )}
    >
      <a id={id} href={`#${id}`} className="md:absolute md:-left-7">
        <HeroiconsSvgWrapper className="hover-opacity h-6 w-6 text-blue-500 transition-opacity duration-200 md:opacity-0">
          {SVGElement.hashtag}
        </HeroiconsSvgWrapper>
      </a>

      {title}

      {children}
    </h2>
  );
}
