import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth/server';

export default async function middleware(request: NextRequest) {
  return auth.middleware({ loginUrl: '/auth/sign-in' })(request);
}

export const config = {
  matcher: [
    '/dashboard/:path*',
  ],
};

