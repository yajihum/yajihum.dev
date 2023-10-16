import { Skeleton } from '@/components/ui/skeleton';

export default async function MemoSkelton() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Skeleton className="h-20 rounded-lg bg-neutral-400" />
      <Skeleton className="h-20 rounded-lg bg-neutral-400 " />
      <Skeleton className="h-20 rounded-lg bg-neutral-400 " />
      <Skeleton className="h-20 rounded-lg bg-neutral-400 " />
      <Skeleton className="h-20 rounded-lg bg-neutral-400 " />
      <Skeleton className="h-20 rounded-lg bg-neutral-400 " />
    </div>
  );
}
