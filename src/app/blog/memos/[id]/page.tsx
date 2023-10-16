import Loading from '@/components/atoms/Loading';
import { Suspense } from 'react';
import MemoDetail from '../../_components/MemoDetail';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);

  return (
    <Suspense fallback={<Loading />}>
      <MemoDetail id={id} />
    </Suspense>
  );
}
