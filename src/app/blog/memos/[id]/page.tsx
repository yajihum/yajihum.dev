import { Suspense } from 'react';
import 'zenn-content-css';
import MemoDetail from '../../_components/MemoDetail';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemoDetail id={id} />
    </Suspense>
  );
}
