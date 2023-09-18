import { cn } from '@/lib/utils';

export default function SVGWapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
      stroke="currentColor"
      className={cn('h-5 w-5', className)}
    >
      {children}
    </svg>
  );
}
