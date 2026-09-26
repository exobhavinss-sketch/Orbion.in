import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  hasBorderTop?: boolean;
  hasBorderBottom?: boolean;
  pattern?: 'dots' | 'grid' | 'none';
  background?: 'canvas' | 'void' | 'subtle';
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  container?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  hasBorderTop = false,
  hasBorderBottom = true,
  pattern = 'none',
  background = 'canvas',
  containerSize = 'lg',
  padding = 'lg',
  container = true,
  children,
  className,
  ...props
}: SectionProps) {
  const backgrounds = {
    canvas: 'bg-canvas',
    void: 'bg-void',
    subtle: 'bg-surface-subtle',
  };

  const patterns = {
    none: '',
    dots: 'bg-tech-dots',
    grid: 'bg-tech-grid',
  };

  const paddings = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-24 lg:py-28',
  };

  return (
    <section
      id={id}
      className={cn(
        'w-full relative overflow-hidden',
        paddings[padding],
        backgrounds[background],
        patterns[pattern],
        hasBorderTop && 'border-t border-border-hairline',
        hasBorderBottom && 'border-b border-border-hairline',
        className
      )}
      {...props}
    >
      {container ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  );
}
