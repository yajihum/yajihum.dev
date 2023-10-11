import { Items } from '@/lib/blog';
import { SVGElement } from '../icons';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';

export default function PostLinks({ items }: { items: Items[] }) {
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {items.map((post) => (
        <article
          key={post.title}
          className="rounded-lg border border-neutral-700 hover:bg-neutral-800"
        >
          <a href={`/blog/posts/${post.slug}`} className="flex gap-4 p-4">
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
                <p className="text-sm font-semibold">{post.title}</p>
              </div>
              <p className="line-clamp-2 text-xs text-neutral-300">
                {post.description}
              </p>
            </div>
          </a>
        </article>
      ))}
    </section>
  );
}
