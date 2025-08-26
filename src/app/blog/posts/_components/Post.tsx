import { SVGElement } from '@/components/icons';
import {
  HeroiconsSvgWrapper,
  SnsSvgWrapper,
} from '@/components/icons/svg-wapper';
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
    <div className="grid grid-cols-1 gap-12 py-4 md:py-20">
      <section className="grid grid-cols-1 gap-2 md:gap-4">
        <h1 className="text-xl font-semibold md:text-3xl">{post.title}</h1>
        <div className="flex items-center gap-1 text-xs text-neutral-300 md:text-sm">
          <HeroiconsSvgWrapper className="h-4 w-4">
            {SVGElement.calendar}
          </HeroiconsSvgWrapper>
          <time>{post.pubDate}</time>
        </div>
      </section>

      <section className="rounded-xl p-1">
        <PostContent content={post.body.raw} />
      </section>

      <Stamp slug={slug} postName={post.title} />

      <section className="flex items-center justify-between">
        <a
          href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://yajihum.dev/blog/posts/${tag}/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Xでポストする"
          className="px-2"
        >
          <SnsSvgWrapper
            fill="currentColor"
            className="h-6 w-6 text-neutral-300 hover:text-neutral-100 md:h-6 md:w-6"
          >
            {SVGElement.x}
          </SnsSvgWrapper>
        </a>
        <a
          href={`https://github.com/yajihum/yajihum.dev/blob/main/src/posts/${tag}/${slug}.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full border border-neutral-400 px-4 py-2 text-sm text-white hover:bg-neutral-800"
        >
          <SnsSvgWrapper fill="#fff" className="h-5 w-5 md:h-5 md:w-5">
            {SVGElement.github}
          </SnsSvgWrapper>
          GitHubで編集を提案
        </a>
      </section>
    </div>
  );
};
