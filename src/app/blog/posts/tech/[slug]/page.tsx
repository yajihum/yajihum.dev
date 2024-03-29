import { metadata } from '@/app/layout';
import { getPostBySlug, getPostsByTag } from '@/lib/blog';
import { getOgpImageUrl } from '@/lib/cloudinary';
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
  const post = getPostBySlug('tech', params.slug, [
    'title',
    'pubDate',
    'content',
    'icon',
  ]);
  const baseMetadata = metadata;
  const ogpImageUrl = getOgpImageUrl(post.title);

  return {
    title: post.title,
    openGraph: {
      ...baseMetadata.openGraph,
      title: post.title,
      description: post.description,
      images: [ogpImageUrl],
    },
    twitter: {
      ...baseMetadata.twitter,
      images: [ogpImageUrl],
      title: post.title,
      description: post.description,
    },
  };
}

export function generateStaticParams() {
  const posts = getPostsByTag('tech', ['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: PostParams) {
  return <Post tag='tech' slug={params.slug} />;
}
