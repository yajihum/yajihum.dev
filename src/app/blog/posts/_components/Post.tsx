import { SVGElement } from '@/components/icons';
import {
  HeroiconsSvgWrapper,
  SnsSvgWrapper,
} from '@/components/icons/svg-wapper';
import Stamp from '@/components/molecules/Stamp';
import { Tag, getPostBySlug } from '@/lib/blog';
import { emojiDomain } from '@/lib/cloudflare';
import PostContent from './PostContent';

type Props = {
  tag: Tag;
  slug: string;
};

export const Post = ({ tag, slug }: Props) => {
  const post = getPostBySlug(tag, slug, [
    'title',
    'pubDate',
    'content',
    'icon',
  ]);

  return (
    <div className='grid grid-cols-1 gap-12 py-4 md:py-8'>
      <div className='flex flex-col gap-6 md:gap-10'>
        <div className='flex justify-center'>
          <img
            src={`${emojiDomain}${post.icon}.png`}
            alt='絵文字アイコン'
            className='h-16 w-16 p-1 md:h-24 md:w-24'
          />
        </div>
        <section className='grid grid-cols-1 justify-items-center gap-2 md:gap-4'>
          <h1 className='text-xl font-semibold md:text-3xl'>{post.title}</h1>
          <div className='flex items-center gap-1 text-xs text-neutral-300 md:text-sm'>
            <HeroiconsSvgWrapper className='h-4 w-4'>
              {SVGElement.calendar}
            </HeroiconsSvgWrapper>
            <time>{post.pubDate}</time>
          </div>
        </section>
      </div>
      <section className='rounded-xl p-1'>
        <PostContent content={post.content} />
      </section>
      <section className='flex justify-end'>
        <a
          href={`https://github.com/yajihum/yajihum.dev/blob/main/src/posts/${tag}/${slug}.md`}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1.5 border border-neutral-400 rounded-full hover:bg-neutral-800 text-sm text-white px-4 py-2'
        >
          <SnsSvgWrapper fill='#fff' className='h-5 w-5'>
            {SVGElement.github}
          </SnsSvgWrapper>
          GitHubで編集を提案
        </a>
      </section>
      <Stamp />
    </div>
  );
};
