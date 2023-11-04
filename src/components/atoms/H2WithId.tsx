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
        'relative flex scroll-mt-20 items-center gap-1 text-lg font-bold md:gap-0 md:text-2xl',
        borderClass,
      )}
    >
      <a id={id} href={`#${id}`} className="md:absolute md:-left-7">
        <HeroiconsSvgWrapper className="h-6 w-6 text-emerald-500 transition-opacity duration-200 hover:opacity-100 md:opacity-0">
          {SVGElement.hashtag}
        </HeroiconsSvgWrapper>
      </a>
      {title}
      {children}
    </h2>
  );
}
