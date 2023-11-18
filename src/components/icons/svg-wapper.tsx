import { cn } from '@/lib/utils';

type HeroiconsSvgWrapperProps = {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
};

export function HeroiconsSvgWrapper({
  children,
  className,
  'aria-label': ariaLabel,
}: HeroiconsSvgWrapperProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
      stroke="currentColor"
      className={cn('h-5 w-5', className)}
      aria-label={ariaLabel}
    >
      {children}
    </svg>
  );
}

export function SnsSvgWrapper({
  children,
  className,
  fill,
}: {
  children: React.ReactNode;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      className={cn('h-9 w-9 md:h-11 md:w-11', className)}
      fill={fill}
    >
      {children}
    </svg>
  );
}
