import { allPosts, Post } from '../../.contentlayer/generated';

export type Tag = 'tech' | 'life';

export function getPostBySlug(tag: Tag, slug: string): Post | null {
  const post = allPosts.find((post) => post.tag === tag && post.slug === slug);
  return post || null;
}

export function getPostsByTag(tag: Tag, limit?: number) {
  const posts = allPosts
    .filter((post) => post.tag === tag)
    .sort((post1, post2) => (post1.pubDate > post2.pubDate ? -1 : 1));

  return limit ? posts.slice(0, limit) : posts;
}

export function getAllPosts(limit?: number) {
  const posts = allPosts.sort((post1, post2) =>
    post1.pubDate > post2.pubDate ? -1 : 1,
  );

  return limit ? posts.slice(0, limit) : posts;
}
