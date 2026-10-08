'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, User as UserIcon } from 'lucide-react';
import { BRAND_ASSETS } from '@/assets/brand';
import { PRIMARY_NAV } from '@/data/navigation';
import { Button, Badge } from '@/components/ui';
import { useSession } from '@/lib/auth-client';

export function Navbar() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-border-hairline shadow-subtle'
          : 'bg-canvas/60 backdrop-blur-sm border-b border-border-hairline/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Brand Logo Lockup */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity duration-150 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent rounded-xs"
          aria-label="Orbion Home"
        >
          <Image
            src={BRAND_ASSETS.logoHorizontal}
            alt="Orbion"
            width={130}
            height={32}
            priority
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-text-secondary"
          aria-label="Main Navigation"
        >
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-text-pure transition-colors duration-150 py-1 font-sans text-[13px] tracking-normal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Status */}
        <div className="hidden md:flex items-center gap-3">
          <Badge variant="status" indicatorColor="brand" className="hidden lg:inline-flex text-[10px]">
            ARCH_V1.0
          </Badge>

          {session?.user ? (
            <Link href="/dashboard">
              <Button variant="secondary" size="sm" className="gap-1.5 font-mono text-xs">
                <UserIcon className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Dashboard</span>
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="secondary" size="sm">
                Sign In
              </Button>
            </Link>
          )}

          <Link href="/contact">
            <Button variant="primary" size="sm">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-3">
          {session?.user ? (
            <Link href="/dashboard">
              <Button variant="secondary" size="sm" className="h-8 px-2.5 text-xs font-mono gap-1">
                <UserIcon className="w-3 h-3 text-brand-cyan" />
                <span>OS</span>
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="secondary" size="sm" className="h-8 px-2.5 text-xs">
                Sign In
              </Button>
            </Link>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xs border border-border-hairline text-text-secondary hover:text-white hover:bg-surface-card transition-colors duration-150"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-[#050505] border-t border-border-hairline z-50 flex flex-col justify-between p-6 animate-fade-in">
          <div className="flex flex-col space-y-2 pt-4">
            <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest px-2 mb-2">
              NAVIGATION DIRECTORY
            </span>

            {PRIMARY_NAV.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3.5 rounded-xs text-base font-medium text-text-primary hover:text-white hover:bg-surface-card transition-colors border-b border-border-hairline/40"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-border-hairline flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted px-1">
              <span>ORBION OPERATING SYSTEM</span>
              <span className="text-brand-accent">ONLINE</span>
            </div>

            {session?.user ? (
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary" size="lg" className="w-full justify-center gap-2 font-mono text-xs">
                  <UserIcon className="w-4 h-4 text-brand-cyan" />
                  <span>Enter Enterprise Dashboard</span>
                </Button>
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="secondary" size="md" className="w-full justify-center">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="secondary" size="md" className="w-full justify-center">
                    Register
                  </Button>
                </Link>
              </div>
            )}

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="lg" className="w-full">
                Initiate Dialogue
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
