import React from 'react';
import { cn } from '@/lib/utils';

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'accent' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export function IconWrapper({
  size = 'md',
  variant = 'default',
  children,
  className,
  ...props
}: IconWrapperProps) {
  const sizes = {
    sm: 'w-7 h-7 p-1 text-sm',
    md: 'w-9 h-9 p-1.5 text-base',
    lg: 'w-12 h-12 p-2.5 text-xl',
  };

  const variants = {
    default: 'bg-surface-card border border-border-hairline text-text-primary',
    accent: 'bg-brand-accent/10 border border-brand-accent/30 text-brand-accent',
    ghost: 'bg-transparent text-text-muted hover:text-white',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-xs shrink-0',
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
