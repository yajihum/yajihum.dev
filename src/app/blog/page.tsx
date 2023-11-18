import H2WithId from '@/components/atoms/H2WithId';
import PostLinks from '@/components/molecules/PostLinks';
import { Tag, getPostsByTag } from '@/lib/blog';
import { Metadata } from 'next';

const title = 'Blog';
const description = `A page featuring blog posts categorized under 'Tech' and 'Life'.`;

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
  twitter: {
    title: title,
    description: description,
  },
};

export default function Blog() {
  return (
    <section className="grid grid-cols-1 gap-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <PostsListByTag tag="Tech" />
      <PostsListByTag tag="Life" />
    </section>
  );
}

const PostsListByTag = ({ tag }: { tag: string }) => {
  const lowerCaseTag = tag.toLowerCase() as Tag;
  return (
    <section className="grid grid-cols-1 gap-3">
      <H2WithId id="all-posts" title={tag} />
      <PostLinks items={getPosts(lowerCaseTag)} tag={lowerCaseTag} />
    </section>
  );
};

const getPosts = (tag: Tag) =>
  getPostsByTag(tag, [
    'title',
    'description',
    'pubDate',
    'tags',
    'icon',
    'slug',
  ]);
