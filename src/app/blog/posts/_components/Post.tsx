import { SVGElement } from '@/components/icons';
import { SnsSvgWrapper } from '@/components/icons/svg-wapper';
import { Stamp } from '@/components/molecules/Stamp';
import { Tag, getPostBySlug } from '@/lib/blog';
import { redirect } from 'next/navigation';
import PostContent from './PostContent';

type Props = {
  tag: Tag;
  slug: string;
};

export const Post: React.FC<Props> = async ({ tag, slug }) => {
  const post = getPostBySlug(tag, slug);

  if (!post) {
    redirect('/404');
  }

  return (
    <div className="grid grid-cols-1 gap-12 py-10 md:py-20">
      <section className="grid grid-cols-1 gap-3 md:gap-4">
        <h1 className="text-xl font-semibold md:text-4xl">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          <time className="text-xs text-neutral-500">{post.pubDate}</time>
          {post.tags
            .filter((t: string) => t !== 'tech' && t !== 'life')
            .map((t: string) => (
              <span
                key={t}
                className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400"
              >
                {t}
              </span>
            ))}
        </div>
      </section>

      <section className="rounded-xl p-1 md:mt-8">
        <PostContent content={post.body.raw} />
      </section>

      <Stamp slug={slug} postName={post.title} />

      <section className="flex items-center justify-end gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://yajihum.dev/blog/posts/${tag}/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Xでポストする"
          className="flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200"
        >
          <SnsSvgWrapper
            fill="currentColor"
            className="h-4 w-4"
          >
            {SVGElement.x}
          </SnsSvgWrapper>
          ポストする
        </a>
        <a
          href={`https://github.com/yajihum/yajihum.dev/blob/main/src/posts/${tag}/${slug}.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200"
        >
          <SnsSvgWrapper fill="currentColor" className="h-4 w-4">
            {SVGElement.github}
          </SnsSvgWrapper>
          GitHubで編集を提案
        </a>
      </section>
    </div>
  );
};
