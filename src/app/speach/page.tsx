import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import SpeachLinks from '@/components/molecules/SpeachLinks';
import { Metadata } from 'next';
import { SVGElement } from '../../components/icons';

export const metadata: Metadata = {
  title: 'Speach',
  description: '今までLT会などで発表してきたものをまとめたページ',
};

export default function Speach() {
  return (
    <section className="grid grid-cols-1 gap-10">
      <h1 className="text-3xl font-bold">Speach</h1>
      <section className="grid grid-cols-1 gap-3">
        <div className="flex items-center">
          <h2
            id="all-slides"
            className="flex scroll-mt-20 items-center gap-2 px-2 text-lg font-semibold md:text-2xl"
          >
            <a id="all-slides" href="#all-slides">
              <HeroiconsSvgWrapper className="text-neutral-400 hover:text-neutral-200">
                {SVGElement.hashtag}
              </HeroiconsSvgWrapper>
            </a>
            All Slides
          </h2>
        </div>
        <SpeachLinks />
      </section>
    </section>
  );
}
