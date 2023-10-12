import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import SpeachLinks from '@/components/molecules/SpeachLinks';
import { getPosts } from '@/lib/blog';
import { SVGElement } from '../../components/icons';

export default function Blog() {
  const posts = getPosts([
    'title',
    'description',
    'pubDate',
    'tags',
    'icon',
    'slug',
  ]);

  return (
    <section className="grid grid-cols-1 gap-10">
      <h1 className="text-3xl font-bold">SPEACH</h1>
      <section className="grid grid-cols-1 gap-3">
        <div className="flex items-center">
          <HeroiconsSvgWrapper className="text-neutral-400">
            {SVGElement.hashtag}
          </HeroiconsSvgWrapper>
          <h2 className="px-2 text-2xl font-bold">All Slides</h2>
        </div>
        <SpeachLinks />
      </section>
    </section>
  );
}