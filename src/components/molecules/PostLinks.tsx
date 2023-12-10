import { Items, Tag } from '@/lib/blog';
import { emojiDomain } from '@/lib/cloudflare';
import Link from 'next/link';
import { SVGElement } from '../icons';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';

type Props = {
  items: Items[];
  tag: Tag;
};

export default function PostLinks({ items, tag }: Props) {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((post) => (
        <article
          key={post.title}
          className="rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700"
        >
          <Link
            href={`/blog/posts/${tag}/${post.slug}`}
            className="flex items-center gap-4 p-4 md:p-5"
          >
            <div className="flex max-h-20 items-center rounded-xl bg-white p-2 md:w-1/4">
              <img
                src={`${emojiDomain}${post.icon}.png`}
                alt="絵文字アイコン"
                className="h-14 w-14 p-1 md:h-16 md:w-16"
              />
            </div>
            <div className="flex w-3/4 flex-col gap-2">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1 text-xs text-neutral-400">
                  <HeroiconsSvgWrapper className="h-4 w-4">
                    {SVGElement.calendar}
                  </HeroiconsSvgWrapper>
                  <time>{post.pubDate}</time>
                </div>
                <p className="text-sm font-semibold">{post.title}</p>
              </div>
              <p className="line-clamp-2 text-xs text-neutral-300">
                {post.description}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}
