import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowUpRight, Mail } from 'lucide-react';
import { FOUNDER } from '@/data/founder';
import { Section, Container, Card, CardHeader, CardContent, CardFooter, Badge, H2, Body, Caption, Button } from '@/components/ui';

export function FounderSection() {
  return (
    <Section id="founder" background="canvas" hasBorderBottom={true}>
      <div className="max-w-4xl mx-auto flex flex-col space-y-4 mb-14 text-left">
        <Badge variant="default" className="self-start">
          04 // FOUNDER & ORIGIN
        </Badge>

        <H2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white uppercase">
          Engineered By Builders.
        </H2>

        <Body className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          Orbion was founded with the conviction that intelligent, autonomous software should be practical, accessible, and designed for real-world enterprise utility.
        </Body>
      </div>

      {/* Founder Dossier Card */}
      <div className="max-w-4xl mx-auto">
        <Card variant="elevated" className="p-6 sm:p-10 border-border-hairline bg-surface-subtle">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Credentials & Identifiers */}
            <div className="md:col-span-5 space-y-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-brand-accent block mb-1">
                  CO-FOUNDER & CEO
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {FOUNDER.name}
                </h3>
              </div>

              {/* Education Box */}
              <div className="p-4 rounded-xs bg-surface-card border border-border-hairline space-y-1.5">
                <div className="flex items-center gap-2 text-text-muted">
                  <GraduationCap className="w-4 h-4 text-white" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white font-medium">
                    ACADEMIC FOUNDATION
                  </span>
                </div>
                <p className="font-sans text-sm text-text-primary font-medium">
                  {FOUNDER.degree} — {FOUNDER.field}
                </p>
                <p className="font-mono text-xs text-text-muted">
                  {FOUNDER.institution}
                </p>
              </div>

              {/* Verified Profiles Matrix */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block">
                  VERIFIED CHANNELS
                </span>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER.links.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xs bg-surface-card border border-border-hairline text-xs font-mono text-text-secondary hover:text-white hover:border-border-strong transition-colors"
                    >
                      <span>{link.platform}</span>
                      <ArrowUpRight className="w-3 h-3 text-text-muted" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Personal Thesis & Quotes */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6 md:pl-6 md:border-l md:border-border-hairline">
              <div className="space-y-4 font-sans text-sm text-text-secondary leading-relaxed">
                <p>
                  &ldquo;I believe the next generation of businesses will not rely only on traditional software. They will work alongside intelligent AI systems capable of understanding tasks, making decisions, using tools, and executing workflows.&rdquo;
                </p>
                <p>
                  &ldquo;Instead of waiting until graduation to begin building, I decided to start now. Orbion is my attempt to build toward that future — learning through engineering real products and continuously testing what is possible.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border-hairline flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
                  <span>Solapur, India</span>
                  <span>•</span>
                  <span>MIT Vishwaprayag University</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="mailto:exobhavinss@gmail.com"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-accent hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>exobhavinss@gmail.com</span>
                  </a>

                  <Link
                    href="/founder"
                    className="inline-flex items-center gap-1 text-xs font-mono text-white hover:text-brand-cyan transition-colors"
                  >
                    <span>Full Profile →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
