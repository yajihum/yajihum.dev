import { SVGElement } from '@/components/icons';
import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import { getMemoDetail } from '@/lib/microcms';
import { getDate } from '@/lib/utils';

export default async function MemoDetail({ id }: { id: string }) {
  const memo = await getMemoDetail(id, {
    fields: ['createdAt', 'title', 'content'],
    richEditorFormat: 'html',
  });
  const date = new Date(memo.createdAt);
  memo.createdAt = getDate(date);

  return (
    <div className="grid grid-cols-1 gap-12 py-4 md:py-10">
      <div className="flex flex-col gap-6 md:gap-10">
        <section className="grid grid-cols-1 justify-items-center gap-2 md:gap-4">
          <h1 className="text-xl font-semibold md:text-3xl">{memo.title}</h1>
          <div className="flex items-center gap-1 text-xs text-neutral-300 md:text-sm">
            <HeroiconsSvgWrapper className="h-4 w-4">
              {SVGElement.calendar}
            </HeroiconsSvgWrapper>
            <time>{memo.createdAt}</time>
          </div>
        </section>
      </div>
      <section className="rounded-xl p-3 md:p-8">
        <div dangerouslySetInnerHTML={{ __html: memo.content }} />
      </section>
    </div>
  );
}
