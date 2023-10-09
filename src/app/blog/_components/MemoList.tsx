import MemoLinks from '@/components/molecules/MemoLinks';
import { getMemos } from '@/lib/microcms';
import { getDate } from '@/lib/utils';

const getAllMemos = async () => {
  const res = await getMemos({ fields: ['id', 'createdAt', 'title'] });

  return res.contents.map((memo) => ({
    ...memo,
    createdAt: getDate(new Date(memo.createdAt)),
  }));
};

export default async function MemoList() {
  const memos = await getAllMemos();

  return <MemoLinks memos={memos} />;
}
