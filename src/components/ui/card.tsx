import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'ghost' | 'accent';
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Card({
  variant = 'default',
  hoverable = true,
  children,
  className,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-surface-subtle border border-border-hairline',
    elevated: 'bg-surface-card border border-border-hairline shadow-card',
    ghost: 'bg-transparent border border-border-hairline',
    accent: 'bg-surface-card border border-brand-accent/30',
  };

  return (
    <div
      className={cn(
        'rounded-sm p-6 flex flex-col justify-between transition-all duration-200 ease-out-expo',
        variants[variant],
        hoverable && 'hover:border-border-strong hover:bg-surface-card',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center justify-between pb-4 border-b border-border-hairline', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('py-4 space-y-2', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('pt-4 border-t border-border-hairline flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  );
}
