import { Tag } from '@/lib/blog';
import { Post } from 'contentlayer/generated';
import Link from 'next/link';

type Props = {
  posts: Post[];
  tag: Tag;
};

export const PostLinks: React.FC<Props> = ({ posts, tag }) => {
  return (
    <div className="flex flex-col">
      {posts.map((post) => {
        const topicTag = post.tags.find(
          (t: string) => t !== 'tech' && t !== 'life',
        );
        return (
          <Link
            key={post.title}
            href={`/blog/posts/${tag}/${post.slug}`}
            className="group border-b border-neutral-800/80 py-4 first:pt-0 last:border-b-0 last:pb-0"
          >
            <p className="text-base text-neutral-300 transition-colors group-hover:text-white md:text-base">
              {post.title}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <time className="text-sm text-neutral-500">
                {post.pubDate}
              </time>
              {post.tags
                .filter((t: string) => t !== 'tech' && t !== 'life')
                .map((t: string) => (
                  <span
                    key={t}
                    className="rounded-md bg-neutral-800 px-2 py-0.5 text-sm text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
