import { SVGElement } from '@/components/icons';
import { SpeakerDeckEmbedding } from '../../speacker-deck';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';

type Props = {
  speackerDeckEmbeddings: SpeakerDeckEmbedding[];
  sliceCount?: number;
  className?: string;
};

export default function SpeachLinks({
  speackerDeckEmbeddings,
  sliceCount = 1,
  className,
}: Props) {
  if (!speackerDeckEmbeddings || speackerDeckEmbeddings.length <= 0)
    return null;

  return (
    <div className={className}>
      {speackerDeckEmbeddings.slice(0, sliceCount).map((speach) => (
        <div
          key={speach.title}
          className="grid grid-cols-1 gap-4 rounded-lg border border-neutral-700 bg-neutral-900 p-3 md:justify-items-end md:p-4"
        >
          {speach.embedding}
          <section className="grid grid-cols-1 gap-2 text-neutral-200">
            <a
              href={speach.speakerDeckUrl}
              target="_blank"
              className="flex items-center gap-1 hover:text-white"
            >
              <p className="text-sm md:text-base md:font-semibold">
                {speach.title}
              </p>
              <HeroiconsSvgWrapper className="hidden h-5 w-5 md:block">
                {SVGElement.arrowUpRight}
              </HeroiconsSvgWrapper>
            </a>
            <div className="flex items-center gap-1 text-neutral-300 md:justify-end">
              <HeroiconsSvgWrapper className="h-4 w-4">
                {SVGElement.atSymbol}
              </HeroiconsSvgWrapper>
              <p className="text-xs md:text-sm">{speach.event}</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
