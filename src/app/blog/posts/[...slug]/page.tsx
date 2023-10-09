import { getPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
}
