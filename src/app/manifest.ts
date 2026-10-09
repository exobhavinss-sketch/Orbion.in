import type { MetadataRoute } from 'next';
import { COMPANY, BRAND_ASSETS } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.name,
    short_name: COMPANY.shortName,
    description: COMPANY.visionSummary,
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050505',
    icons: [
      {
        src: BRAND_ASSETS.faviconPng,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: BRAND_ASSETS.appIconPng,
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
  };
}
