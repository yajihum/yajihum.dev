import { Memo } from '@/lib/microcms';
import { SVGElement } from '../icons';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';

export default function MemoLinks({ memos }: { memos: Memo[] }) {
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {memos.map((memo) => (
        <article
          key={memo.title}
          className="rounded-lg border border-neutral-700 hover:bg-neutral-800"
        >
          <a href="/blog" className="flex gap-4 p-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1 text-xs text-neutral-400">
                <HeroiconsSvgWrapper className="h-4 w-4">
                  {SVGElement.calendar}
                </HeroiconsSvgWrapper>
                <p>{memo.createdAt}</p>
              </div>
              <p className="font-semibold">{memo.title}</p>
            </div>
            <p className="line-clamp-2 text-xs text-neutral-300"></p>
          </a>
        </article>
      ))}
    </section>
  );
}
