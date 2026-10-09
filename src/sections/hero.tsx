'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { BRAND_ASSETS } from '@/assets/brand';
import { Button, Badge, Container } from '@/components/ui';

export function HeroSection() {
  return (
    <section className="relative w-full pt-12 pb-20 md:py-28 lg:py-32 bg-canvas overflow-hidden border-b border-border-hairline bg-tech-dots">
      {/* Structural ambient lighting (Strictly budgeted, under 5% opacity) */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs bg-surface-card border border-border-hairline font-mono text-xs uppercase tracking-wider text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span>ORBION TECHNOLOGIES OS • EARLY ARCHITECTURE</span>
            </div>

            {/* Colossal Minimalist Headline */}
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-text-pure uppercase leading-[1.05]">
              The AI Operating <br />
              <span className="text-text-muted">System for Business.</span>
            </h1>

            {/* Honest Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
              Orbion Technologies is building the foundational software layer that allows modern businesses to work alongside autonomous AI systems capable of understanding objectives, using tools, and executing workflows across teams.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  const el = document.getElementById('problem');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Platform
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('founder');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Meet the Founder
              </Button>
            </div>

            {/* Early Stage Fidelity Note */}
            <div className="pt-4 flex items-center gap-6 font-mono text-[11px] text-text-muted uppercase tracking-wider border-t border-border-hairline/60 w-full max-w-md">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">CORE SPEC</span>
                <span>•</span>
                <span>MODEL CONTEXT PROTOCOL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-accent font-medium">V1.0</span>
                <span>•</span>
                <span>EARLY ACCESS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Distinctive Abstract Geometric Architecture Visual */}
          {/* Concept: Business → Orbion Core → AI Systems → Actions */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px] p-6 rounded-sm bg-surface-subtle/80 border border-border-hairline backdrop-blur-sm shadow-card flex flex-col items-center space-y-4">
              {/* Stage 1: Business Operations Node */}
              <div className="w-full flex items-center justify-between p-3 rounded-xs bg-surface-card border border-border-hairline">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-text-muted" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                    01 // BUSINESS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                  STATE & DATA
                </span>
              </div>

              {/* Connecting Vector Flow Lines */}
              <div className="flex flex-col items-center justify-center space-y-1 py-1">
                <div className="w-[1px] h-4 bg-border-strong" />
                <ArrowDown className="w-3.5 h-3.5 text-text-muted" />
              </div>

              {/* Stage 2: Central Orbion Kernel */}
              <div className="w-full p-4 rounded-xs bg-[#0b101d] border border-brand-accent/40 relative overflow-hidden flex flex-col items-center justify-center text-center space-y-2">
                <div className="flex items-center justify-between w-full pb-2 border-b border-brand-accent/20 font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  <span>CENTRAL KERNEL</span>
                  <span>SUBSTRATE V1.0</span>
                </div>

                <div className="relative my-2 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-brand-accent/30 animate-spin-slow" />
                  <Image
                    src={BRAND_ASSETS.symbolSvg}
                    alt="Orbion Symbol"
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <span className="font-sans text-sm font-semibold tracking-tight text-white uppercase">
                  Orbion Technologies Operating Layer
                </span>
                <span className="font-mono text-[11px] text-text-secondary">
                  DAG Engine • Tool Dispatch • Context Memory
                </span>
              </div>

              {/* Connecting Vector Flow Lines */}
              <div className="flex flex-col items-center justify-center space-y-1 py-1">
                <div className="w-[1px] h-4 bg-border-strong" />
                <ArrowDown className="w-3.5 h-3.5 text-text-muted" />
              </div>

              {/* Stage 3: Autonomous AI Systems */}
              <div className="w-full flex items-center justify-between p-3 rounded-xs bg-surface-card border border-border-hairline">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-brand-accent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                    02 // AI SYSTEMS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest">
                  SPECIALIZED SWARMS
                </span>
              </div>

              {/* Connecting Vector Flow Lines */}
              <div className="flex flex-col items-center justify-center space-y-1 py-1">
                <div className="w-[1px] h-4 bg-border-strong" />
                <ArrowDown className="w-3.5 h-3.5 text-text-muted" />
              </div>

              {/* Stage 4: Deterministic Actions */}
              <div className="w-full flex items-center justify-between p-3 rounded-xs bg-surface-card border border-border-hairline">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                    03 // ACTIONS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                  DETERMINISTIC MUTATIONS
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
