import { cn } from '@/lib/utils';

type HeroiconsSvgWrapperProps = {
  children: React.ReactNode;
  className?: string;
  role?: string;
  'aria-label'?: string;
};

export function HeroiconsSvgWrapper({
  children,
  className,
  role,
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
      role={role}
    >
      <title>{ariaLabel}</title>
      {children}
    </svg>
  );
}

export function SnsSvgWrapper({
  children,
  className,
  fill,
  'aria-label': ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  fill?: string;
  'aria-label'?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
      aria-label={ariaLabel}
    >
      {ariaLabel && <title>{ariaLabel}</title>}
      {children}
    </svg>
  );
}
