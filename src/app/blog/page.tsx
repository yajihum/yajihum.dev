import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
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
      <h1 className="text-3xl font-bold">Blog</h1>
      <section className="grid grid-cols-1 gap-3">
        <div className="flex items-center">
          <HeroiconsSvgWrapper className="text-neutral-400">
            {SVGElement.hashtag}
          </HeroiconsSvgWrapper>
          <h2 className="px-2 text-2xl font-bold">All Posts</h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-lg border border-neutral-700 hover:bg-neutral-800"
            >
              <a href="/blog" className="flex gap-4 p-4">
                <p>
                  <span className="grid aspect-square w-full place-content-center rounded-lg bg-white p-3 text-center text-5xl">
                    {post.icon}
                  </span>
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <HeroiconsSvgWrapper className="h-4 w-4">
                        {SVGElement.calendar}
                      </HeroiconsSvgWrapper>
                      <p>{post.pubDate}</p>
                    </div>
                    <p className="font-semibold">{post.title}</p>
                  </div>
                  <p className="line-clamp-2 text-xs text-neutral-300">
                    {post.description}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
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
