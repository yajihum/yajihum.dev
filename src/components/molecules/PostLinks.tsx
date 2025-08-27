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
    <section className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <div className="flex h-full flex-col gap-2" key={post.title}>
          <div className="flex flex-col gap-1.5">
            <Link
              href={`/blog/posts/${tag}/${post.slug}`}
              className="font-semibold text-neutral-300 underline-offset-2 hover:underline"
            >
              {post.title}
            </Link>

            <time className="text-xs text-neutral-400">{post.pubDate}</time>
          </div>
        </div>
      ))}
    </section>
  );
};
