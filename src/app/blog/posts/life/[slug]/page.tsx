import { getPostBySlug, getPostsByTag } from '@/lib/blog';
import { Metadata } from 'next';
import { Post } from '../../_components/Post';

export const dynamicParams = false;

export type PostParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PostParams): Promise<Metadata> {
  const post = getPostBySlug('life', params.slug, [
    'title',
    'pubDate',
    'content',
    'icon',
  ]);

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.description,
      images: ['https://images.yajium.day/ogp.png'],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: ['https://images.yajium.day/ogp.png'],
    },
  };
}

export function generateStaticParams() {
  const posts = getPostsByTag('life', ['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: PostParams) {
  return <Post tag="life" slug={params.slug} />;
}
