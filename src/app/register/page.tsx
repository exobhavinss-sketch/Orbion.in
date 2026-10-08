'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/auth-client';
import { BRAND_ASSETS } from '@/assets/brand';
import { Button, Badge } from '@/components/ui';
import { ArrowRight, Loader2, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError('Password must contain at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify both entries.');
      return;
    }

    setLoading(true);

    try {
      const res = await signUp.email({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      });

      if (res.error) {
        setError(res.error.message || 'Failed to create account. Please try again.');
        setLoading(false);
        return;
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred during registration.';
      setError(message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas pt-28 pb-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-surface-subtle/80 backdrop-blur-md border border-border-hairline rounded-sm p-6 sm:p-8 shadow-card relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Brand Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <Link href="/" className="mb-6 inline-block hover:opacity-85 transition-opacity" aria-label="Orbion Home">
              <Image
                src={BRAND_ASSETS.logoHorizontal}
                alt="Orbion"
                width={140}
                height={34}
                priority
                className="h-7 w-auto object-contain"
              />
            </Link>

            <Badge variant="status" indicatorColor="brand" className="mb-3">
              ACCOUNT_INITIALIZATION // LOCAL OS
            </Badge>

            <h1 className="text-2xl font-semibold text-text-pure tracking-tight">
              Create Orbion Account
            </h1>
            <p className="text-xs text-text-secondary mt-1.5 font-sans">
              Deploy your credentials for the autonomous business operating system.
            </p>
          </div>

          {/* Error Notification */}
          {error && (
            <div className="mb-6 p-3 rounded-xs bg-red-950/40 border border-red-500/30 flex items-start gap-2.5 text-red-300 text-xs animate-fade-in">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block font-mono text-[11px] text-text-secondary uppercase tracking-wider"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-surface-card border border-border-hairline focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xs px-3.5 py-2.5 text-sm text-text-pure placeholder:text-text-dim transition-colors outline-none"
              />
            </div>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@enterprise.com"
                className="w-full bg-surface-card border border-border-hairline focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xs px-3.5 py-2.5 text-sm text-text-pure placeholder:text-text-dim transition-colors outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block font-mono text-[11px] text-text-secondary uppercase tracking-wider"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full bg-surface-card border border-border-hairline focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xs px-3.5 py-2.5 text-sm text-text-pure placeholder:text-text-dim transition-colors outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="confirmPassword"
                className="block font-mono text-[11px] text-text-secondary uppercase tracking-wider"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className="w-full bg-surface-card border border-border-hairline focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-xs px-3.5 py-2.5 text-sm text-text-pure placeholder:text-text-dim transition-colors outline-none"
              />
            </div>

            {/* Password security hint */}
            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-text-muted">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Standard 8+ character password entropy</span>
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
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Initialize Account</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="mt-8 pt-6 border-t border-border-hairline text-center text-xs text-text-muted">
            <span>Already have an account? </span>
            <Link
              href="/login"
              className="text-text-primary hover:text-white font-medium underline underline-offset-4 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
