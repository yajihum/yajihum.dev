import { metadata } from '@/app/layout';
import { getPostBySlug } from '@/lib/blog';
import { getOgpImageUrl } from '@/lib/cloudinary';
import { Metadata } from 'next';
import { Post } from '../../_components/Post';

interface PostParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostParams): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug('tech', slug);

  const baseMetadata = metadata;

  const title = post ? post.title : 'Tech Post';
  const description = post ? post.description : 'A tech blog post.';
  const ogpImageUrl = post ? getOgpImageUrl(post.title) : '';

  return {
    title,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description: post ? post.description : '',
      images: [ogpImageUrl],
    },
    twitter: {
      ...baseMetadata.twitter,
      images: [ogpImageUrl],
      title,
      description,
    },
  };
}

export default async function Page({ params }: PostParams) {
  const { slug } = await params;
  return <Post tag="tech" slug={slug} />;
}
