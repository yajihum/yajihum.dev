import { getPostBySlug, getPosts } from '@/lib/blog';
import 'zenn-content-css';
import markdownToHtml from 'zenn-markdown-html';

export async function generateStaticParams() {
  const posts = getPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug, ['title', 'pubDate', 'content', 'icon']);
  const content = markdownToHtml(post.content, {
    embedOrigin: 'https://embed.zenn.studio',
  });

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.pubDate}</p>
      <section className="znc">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </div>
  );
}
