import Loading from '@/components/atoms/Loading';
import { getMemoDetail } from '@/lib/microcms';
import { Metadata } from 'next';
import { Suspense } from 'react';
import MemoDetail from '../../_components/MemoDetail';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const memo = await getMemoDetail(id, {
    fields: ['title', 'content'],
  });

  return {
    title: memo.title,
    openGraph: {
      title: memo.title,
      description: memo.content,
    },
    twitter: {
      title: memo.title,
      description: memo.content,
    },
  };
}

export default function Memos({ params }: Props) {
  const { id } = params;

  return (
    <Suspense fallback={<Loading />}>
      <MemoDetail id={id} />
    </Suspense>
  );
}
