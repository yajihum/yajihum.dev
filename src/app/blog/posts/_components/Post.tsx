import { SVGElement } from '@/components/icons';
import {
  HeroiconsSvgWrapper,
  SnsSvgWrapper,
} from '@/components/icons/svg-wapper';
import { Stamp } from '@/components/molecules/Stamp';
import { Tag, getPostBySlug } from '@/lib/blog';
import { EMOJI_DOMAIN } from '@/lib/cloudflare';
import { getStamps } from '@/lib/stamp';
import Image from 'next/image';
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

  const stamps = await getStamps(slug);

  return (
    <div className="grid grid-cols-1 gap-12 py-4 md:py-8">
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex justify-center">
          <Image
            src={`${EMOJI_DOMAIN}${post.icon}.png`}
            alt="絵文字アイコン"
            className="h-16 w-16 p-1 md:h-24 md:w-24"
            width={64}
            height={64}
          />
        </div>
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

      <section className="rounded-xl p-1">
        <PostContent content={post.body.raw} />
      </section>

      <Stamp stamps={stamps} postName={post.title} />

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
