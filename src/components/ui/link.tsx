import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cn } from '@/lib/utils';

export interface LinkProps
  extends NextLinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  variant?: 'default' | 'muted' | 'accent' | 'nav';
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Link({
  href,
  variant = 'default',
  isExternal,
  children,
  className,
  ...props
}: LinkProps) {
  const isExt = isExternal || (typeof href === 'string' && href.startsWith('http'));

  const variants = {
    default: 'text-text-primary hover:text-white transition-colors duration-150 underline-offset-4 hover:underline',
    muted: 'text-text-muted hover:text-text-primary transition-colors duration-150',
    accent: 'text-brand-accent hover:text-brand-accent-hover transition-colors duration-150 font-medium',
    nav: 'text-text-secondary hover:text-white text-sm font-medium transition-colors duration-150',
  };

  if (isExt) {
    return (
      <a
        href={href.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('inline-flex items-center gap-1.5', variants[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={cn('inline-flex items-center gap-1.5', variants[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}
