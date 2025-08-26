import { Tag } from '@/lib/blog';
import { Post } from 'contentlayer/generated';
import Link from 'next/link';
import { SVGElement } from '../icons';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';

type Props = {
  posts: Post[];
  tag: Tag;
};

export const PostLinks: React.FC<Props> = ({ posts, tag }) => {
  return (
    <section className="grid grid-cols-1 gap-6">
      {posts.map((post) => (
        <div className="flex h-full flex-col gap-2" key={post.title}>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1 text-xs text-neutral-400">
              <HeroiconsSvgWrapper className="h-4 w-4">
                {SVGElement.calendar}
              </HeroiconsSvgWrapper>
              <time>{post.pubDate}</time>
            </div>

            <Link
              href={`/blog/posts/${tag}/${post.slug}`}
              className="font-semibold underline-offset-2 hover:underline"
            >
              {post.title}
            </Link>
          </div>

          <p className="line-clamp-2 text-sm text-neutral-400">
            {post.description}
          </p>
        </div>
      ))}
    </section>
  );
};
