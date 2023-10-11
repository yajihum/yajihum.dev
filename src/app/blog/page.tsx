import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import PostLinks from '@/components/molecules/PostLinks';
import { getPosts } from '@/lib/blog';
import { Suspense } from 'react';
import { SVGElement } from '../../components/icons';
import MemoList from './_components/MemoList';

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
      <h1 className="text-3xl font-bold">BLOG</h1>
      <section className="grid grid-cols-1 gap-3">
        <div className="flex items-center">
          <HeroiconsSvgWrapper className="text-neutral-400">
            {SVGElement.hashtag}
          </HeroiconsSvgWrapper>
          <h2 className="px-2 text-2xl font-bold">All Posts</h2>
        </div>
        <PostLinks items={posts} />
      </section>
      <section className="grid grid-cols-1 gap-3">
        <div className="flex items-center">
          <HeroiconsSvgWrapper>{SVGElement.hashtag}</HeroiconsSvgWrapper>
          <h2 className="px-2 text-2xl font-bold">Memos</h2>
        </div>
        <Suspense fallback={<p>loading</p>}>
          <MemoList />
        </Suspense>
      </section>
    </section>
  );
}
