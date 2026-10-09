import React from 'react';
import Image from 'next/image';
import { BRAND_ASSETS } from '@/assets/brand';

export interface LogoProps {
  /**
   * full: Full Orbion Technologies wordmark
   * compact: Original Orbion wordmark
   * symbol: Standalone Orbion emblem
   */
  variant?: 'full' | 'compact' | 'symbol';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  priority?: boolean;
  alt?: string;
}

const SIZE_MAP = {
  sm: 'h-[16.5px] min-[360px]:h-[19px] min-[390px]:h-[22px] sm:h-7',
  md: 'h-7 sm:h-8',
  lg: 'h-8 sm:h-9',
};

export function Logo({
  variant = 'full',
  size = 'sm',
  className = '',
  priority = false,
  alt = 'Orbion Technologies',
}: LogoProps) {
  if (variant === 'symbol') {
    return (
      <Image
        src={BRAND_ASSETS.symbolSvg}
        alt={alt}
        width={48}
        height={48}
        priority={priority}
        className={`w-auto object-contain shrink-0 ${className || 'h-8'}`}
      />
    );
  }

  if (variant === 'compact') {
    return (
      <Image
        src={BRAND_ASSETS.logoCompact}
        alt={alt}
        width={130}
        height={32}
        priority={priority}
        className={`w-auto object-contain shrink-0 ${className || 'h-6 sm:h-7'}`}
      />
    );
  }

  return (
    <Image
      src={BRAND_ASSETS.logoHorizontal}
      alt={alt}
      width={286}
      height={28}
      priority={priority}
      className={`w-auto object-contain shrink-0 ${className || SIZE_MAP[size]}`}
    />
  );
}
