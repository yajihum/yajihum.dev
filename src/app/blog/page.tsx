import { PostLinks } from '@/components/molecules/PostLinks';
import { Tag, getPostsByTag } from '@/lib/blog';
import { Metadata } from 'next';
import { metadata, ogImageUrl } from '../layout';

const title = 'Blog';
const description = `A page featuring blog posts categorized under 'Tech' and 'Life'.`;

export function generateMetadata(): Metadata {
  const baseMetadata = metadata;

  return {
    title: title,
    description: description,
    openGraph: {
      ...baseMetadata.openGraph,
      title: title,
      description: description,
      images: [ogImageUrl],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: title,
      description: description,
      images: [ogImageUrl],
    },
  };
}

export default function Blog() {
  return (
    <section className="grid grid-cols-1 gap-20 pt-10 pb-6 md:pt-16">
      <PostsListByTag tag="Tech" />
      <PostsListByTag tag="Life" />
    </section>
  );
}

const PostsListByTag = ({ tag }: { tag: string }) => {
  const lowerCaseTag = tag.toLowerCase() as Tag;
  const posts = getPostsByTag(lowerCaseTag);
  return (
    <section className="grid grid-cols-1 gap-6 border-t border-neutral-800 pt-8 md:grid-cols-[140px_1fr] md:gap-12">
      <div className="flex flex-col gap-1">
        <h2
          id={lowerCaseTag}
          className="text-xs font-medium tracking-[0.2em] text-neutral-300"
        >
          {tag.toUpperCase()}
        </h2>
        <p className="text-xs text-neutral-500">{posts.length} posts</p>
      </div>
      <PostLinks posts={posts} tag={lowerCaseTag} />
    </section>
  );
};
