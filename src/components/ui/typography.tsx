import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Display({
  children,
  className,
  as: Component = 'h1',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-sans text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-text-pure uppercase leading-[1.05]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H1({
  children,
  className,
  as: Component = 'h1',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-pure uppercase leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H2({
  children,
  className,
  as: Component = 'h2',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-sans text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-pure uppercase leading-snug',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H3({
  children,
  className,
  as: Component = 'h3',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-sans text-xl sm:text-2xl font-medium tracking-tight text-text-pure leading-normal',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Body({
  children,
  className,
  as: Component = 'p',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-sans text-base text-text-primary leading-relaxed font-normal',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Small({
  children,
  className,
  as: Component = 'p',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-sans text-sm text-text-secondary leading-relaxed font-normal',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Caption({
  children,
  className,
  as: Component = 'span',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-mono text-xs text-text-muted tracking-wide uppercase',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function ButtonText({
  children,
  className,
  as: Component = 'span',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-sans text-sm font-medium tracking-normal',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function NavText({
  children,
  className,
  as: Component = 'span',
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'font-sans text-sm font-medium text-text-secondary hover:text-text-pure transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  variant?: 'display' | 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  level = 2,
  variant,
  children,
  className,
  ...props
}: HeadingProps) {
  const chosenVariant = variant || (level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3');
  
  if (chosenVariant === 'display') {
    return <Display className={className} as="h1" {...props}>{children}</Display>;
  }
  if (chosenVariant === 'h1') {
    return <H1 className={className} as={`h${level}` as React.ElementType} {...props}>{children}</H1>;
  }
  if (chosenVariant === 'h2') {
    return <H2 className={className} as={`h${level}` as React.ElementType} {...props}>{children}</H2>;
  }
  return <H3 className={className} as={`h${level}` as React.ElementType} {...props}>{children}</H3>;
}
