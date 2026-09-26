import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'status' | 'accent' | 'outline';
  indicatorColor?: 'brand' | 'cyan' | 'emerald' | 'amber';
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = 'default',
  indicatorColor = 'brand',
  children,
  className,
  ...props
}: BadgeProps) {
  const dotColors = {
    brand: 'bg-brand-accent shadow-[0_0_8px_rgba(91,79,255,0.6)]',
    cyan: 'bg-brand-cyan shadow-[0_0_8px_rgba(0,224,214,0.6)]',
    emerald: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
    amber: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]',
  };

  const variants = {
    default: 'bg-surface-card border border-border-hairline text-text-secondary',
    status: 'bg-surface-card border border-border-hairline text-text-primary',
    accent: 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent',
    outline: 'bg-transparent border border-border-hairline text-text-muted',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-2.5 py-1 rounded-xs font-mono text-[11px] uppercase tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    >
      {variant === 'status' && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotColors[indicatorColor]
            )}
          />
          <span
            className={cn('relative inline-flex rounded-full h-1.5 w-1.5', dotColors[indicatorColor])}
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
