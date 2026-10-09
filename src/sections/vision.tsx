import React from 'react';
import { Section, Container, Badge, Display, Body, Caption } from '@/components/ui';

export function VisionSection() {
  return (
    <Section background="canvas" hasBorderBottom={true} className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        <Badge variant="default">
          02 // THE ORBION TECHNOLOGIES THESIS
        </Badge>

        <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-white uppercase leading-[1.08] max-w-4xl">
          The way businesses work <br />
          <span className="text-text-muted">is about to change.</span>
        </h2>

        <div className="w-12 h-[2px] bg-brand-accent my-2" />

        <p className="font-sans text-lg sm:text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-3xl font-normal">
          &ldquo;The next generation of businesses will not rely only on traditional software. They will work alongside intelligent AI systems capable of understanding tasks, making decisions, using tools, and executing workflows.&rdquo;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 w-full text-left">
          <div className="p-6 rounded-xs bg-surface-card border border-border-hairline flex flex-col justify-between gap-3">
            <span className="font-mono text-[11px] text-brand-accent uppercase tracking-wider">
              Shift 01
            </span>
            <h4 className="font-sans text-base font-medium text-white">
              From Passive to Active
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Software evolves from passive databases waiting for clicks into proactive systems capable of fulfilling end-to-end tasks.
            </p>
          </div>

          <div className="p-6 rounded-xs bg-surface-card border border-border-hairline flex flex-col justify-between gap-3">
            <span className="font-mono text-[11px] text-brand-accent uppercase tracking-wider">
              Shift 02
            </span>
            <h4 className="font-sans text-base font-medium text-white">
              Tool Calling by Design
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              AI systems interact securely with databases, APIs, and business systems using strict protocols and verified boundaries.
            </p>
          </div>

          <div className="p-6 rounded-xs bg-surface-card border border-border-hairline flex flex-col justify-between gap-3">
            <span className="font-mono text-[11px] text-brand-accent uppercase tracking-wider">
              Shift 03
            </span>
            <h4 className="font-sans text-base font-medium text-white">
              Human Orchestration
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Human operators focus on strategy, taste, and high-level decisions while intelligent systems handle execution.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
