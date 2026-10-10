import React from 'react';
import Link from 'next/link';
import { AccountView } from '@neondatabase/auth-ui';
import { accountViewPaths } from '@neondatabase/auth-ui/server';
import { Logo } from '@/components/ui';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(accountViewPaths).map((path) => ({ path }));
}

export default async function AccountPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return (
    <div className="min-h-screen bg-canvas pt-28 pb-16 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <div className="mb-6 flex flex-col items-center z-10">
        <Link
          href="/"
          className="inline-block hover:opacity-85 transition-opacity"
          aria-label="Orbion Technologies Home"
        >
          <Logo priority size="md" />
        </Link>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <AccountView path={path} />
      </div>
    </div>
  );
}
