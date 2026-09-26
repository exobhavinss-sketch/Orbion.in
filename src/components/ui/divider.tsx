import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
}

export function Divider({
  orientation = 'horizontal',
  label,
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn('w-[1px] h-full bg-border-hairline self-stretch', className)}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        className={cn('w-full flex items-center gap-4 my-6', className)}
        role="separator"
        aria-orientation="horizontal"
        {...props}
      >
        <div className="flex-1 h-[1px] bg-border-hairline" />
        <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
          {label}
        </span>
        <div className="flex-1 h-[1px] bg-border-hairline" />
      </div>
    );
  }

  return (
    <div
      className={cn('w-full h-[1px] bg-border-hairline my-6', className)}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    />
  );
}
