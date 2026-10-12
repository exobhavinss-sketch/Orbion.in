import { NextResponse, type NextRequest } from 'next/server';
import { auth, isAuthConfigured } from '@/lib/auth/server';

export default async function middleware(request: NextRequest) {
  if (!isAuthConfigured()) {
    console.warn(
      `[Auth Middleware] Unconfigured auth environment: redirecting unauthenticated request for ${request.nextUrl.pathname} to /auth/sign-in`
    );
    const signInUrl = new URL('/auth/sign-in', request.url);
    signInUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  try {
    return await auth.middleware({ loginUrl: '/auth/sign-in' })(request);
  } catch (error) {
    console.error(
      `[Auth Middleware Error] Failed handling ${request.nextUrl.pathname}:`,
      error instanceof Error ? error.message : error
    );
    const signInUrl = new URL('/auth/sign-in', request.url);
    signInUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
  ],
};

