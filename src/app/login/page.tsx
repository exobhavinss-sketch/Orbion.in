'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from '@/lib/auth-client';
import { BRAND_ASSETS } from '@/assets/brand';
import { Button, Badge, Logo } from '@/components/ui';
import { ArrowRight, Loader2, ShieldAlert } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawCallback = searchParams.get('callbackUrl');
  const callbackUrl = (rawCallback && rawCallback.startsWith('/') && !rawCallback.startsWith('//'))
    ? rawCallback
    : '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dbConfigured, setDbConfigured] = useState<boolean | null>(null);

  React.useEffect(() => {
    fetch('/api/auth/status')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.configured === 'boolean') {
          setDbConfigured(data.configured);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await signIn.email({
        email: email.trim().toLowerCase(),
        password,
      });

      if (res.error) {
        console.error('Sign-in failed:', {
          code: res.error.code,
          status: res.error.status,
          message: res.error.message,
        });
        if (res.error.status === 503) {
          setError(
            res.error.message ||
              'Authentication is temporarily unavailable because server-side database configuration has not been enabled.'
          );
        } else if (res.error.status === 500) {
          setError('Database connection error. Please try again shortly.');
        } else {
          setError(res.error.message || 'Invalid email or password.');
        }
        setLoading(false);
        return;
      }

      router.push(callbackUrl);
      router.refresh();
    } catch (err: unknown) {
      console.error('Unexpected login error:', err);
      const message = err instanceof Error ? err.message : 'An unexpected network error occurred during login.';
      setError(message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Container Card */}
      <div className="bg-surface-subtle/80 backdrop-blur-md border border-border-hairline rounded-sm p-6 sm:p-8 shadow-card relative overflow-hidden">
        {/* Subtle Accent Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link href="/" className="mb-6 inline-block hover:opacity-85 transition-opacity" aria-label="Orbion Technologies Home">
            <Logo priority size="md" />
          </Link>

          <Badge variant="status" indicatorColor="cyan" className="mb-3">
            AUTH_GATEWAY // SECURE ACCESS
          </Badge>

          <h1 className="text-2xl font-semibold text-text-pure tracking-tight">
            Sign In to Orbion Technologies
          </h1>
          <p className="text-xs text-text-secondary mt-1.5 font-sans">
            Enter your credentials to access the AI Operating System.
          </p>
        </div>

        {/* Database Unconfigured Notification */}
        {dbConfigured === false && !error && (
          <div className="mb-6 p-3 rounded-xs bg-amber-950/40 border border-amber-500/30 flex items-start gap-2.5 text-amber-300 text-xs animate-fade-in">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <span className="leading-relaxed">
              Authentication is temporarily unavailable because server-side database configuration has not been enabled for this deployment.
            </span>
          </div>
        )}

        {/* Error Notification */}
        {error && (
          <div className="mb-6 p-3 rounded-xs bg-red-950/40 border border-red-500/30 flex items-start gap-2.5 text-red-300 text-xs animate-fade-in">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
            <span className="leading-relaxed">{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4.5">
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block font-mono text-[11px] text-text-secondary uppercase tracking-wider"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@enterprise.com"
              className="w-full bg-surface-card border border-border-hairline focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xs px-3.5 py-2.5 text-sm text-text-pure placeholder:text-text-dim transition-colors outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block font-mono text-[11px] text-text-secondary uppercase tracking-wider"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-surface-card border border-border-hairline focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xs px-3.5 py-2.5 text-sm text-text-pure placeholder:text-text-dim transition-colors outline-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="w-full justify-center text-sm font-medium tracking-tight"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Authenticate Session</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="mt-8 pt-6 border-t border-border-hairline text-center text-xs text-text-muted">
          <span>Don&apos;t have an account? </span>
          <Link
            href="/register"
            className="text-text-primary hover:text-white font-medium underline underline-offset-4 transition-colors"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-canvas pt-28 pb-16 px-4 flex items-center justify-center">
      <Suspense fallback={<div className="text-text-muted text-xs font-mono">Loading authentication portal...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
