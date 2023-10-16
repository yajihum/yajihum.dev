import { SVGElement } from '@/components/icons';
import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import { getPostBySlug, getPosts } from '@/lib/blog';
import PostContent from './_components/PostContent';

export const runtime = 'edge';

export function generateStaticParams() {
  const posts = getPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug, ['title', 'pubDate', 'content', 'icon']);

  return (
    <div className="grid grid-cols-1 gap-12 py-4 md:py-8">
      <div className="flex flex-col gap-6 md:gap-10">
        <section className="text-center">
          <p className="text-5xl md:text-7xl">{post.icon}</p>
        </section>
        <section className="grid grid-cols-1 justify-items-center gap-2 md:gap-4">
          <h1 className="text-xl font-semibold md:text-3xl">{post.title}</h1>
          <div className="flex items-center gap-1 text-xs text-neutral-300 md:text-sm">
            <HeroiconsSvgWrapper className="h-4 w-4">
              {SVGElement.calendar}
            </HeroiconsSvgWrapper>
            <time>{post.pubDate}</time>
          </div>
        </section>
      </div>
      <section className="rounded-xl p-3 md:p-8">
        <PostContent content={post.content} />
      </section>
      <section className="px-4 md:px-8">
        <a
          href="/blog"
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-neutral-200 px-4 py-2 font-semibold text-neutral-800 hover:bg-white hover:text-black"
        >
          <HeroiconsSvgWrapper className="h-5 w-5">
            {SVGElement.allowUturnLeft}
          </HeroiconsSvgWrapper>
          Back to Blog
        </a>
      </section>
    </div>
  );
}
