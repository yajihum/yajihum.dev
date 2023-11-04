import H2WithId from '@/components/atoms/H2WithId';
import PostLinks from '@/components/molecules/PostLinks';
import { getPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { Suspense } from 'react';
import MemoList from './_components/MemoList';
import MemoSkelton from './_components/MemoSkelton';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'ブログの投稿や、簡単なメモの一覧ページ',
};

export default function Blog() {
  const posts = getPosts([
    'title',
    'description',
    'pubDate',
    'tags',
    'icon',
    'slug',
  ]);

  return (
    <section className="grid grid-cols-1 gap-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <section className="grid grid-cols-1 gap-3">
        <H2WithId id="all-posts" title="All Posts" />
        <PostLinks items={posts} />
      </section>
      <section className="grid grid-cols-1 gap-3">
        <H2WithId id="memos" title="Memos" />
        <Suspense fallback={<MemoSkelton />}>
          <MemoList />
        </Suspense>
      </section>
    </section>
  );
}
