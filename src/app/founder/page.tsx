import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Cpu,
  Layers,
  ArrowUpRight,
  Mail,
  Terminal,
  Compass,
  CheckCircle2,
  Code2,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { Container, Section, Card, Badge, Button, Divider } from '@/components/ui';
import { FOUNDER } from '@/data/founder';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'Bhavin Shankur — Founder & CEO',
  description:
    'Profile and technical dossier of Bhavin Shankur, Founder & CEO of Orbion Technologies. Engineering the AI Operating System for modern businesses.',
};

export default function FounderPage() {
  const academicDetails = [
    { label: 'Degree', value: 'B.Tech in Computer Science & Engineering' },
    { label: 'Specialization', value: 'Artificial Intelligence & Machine Learning' },
    { label: 'Institution', value: 'MIT Vishwaprayag University' },
    { label: 'Location', value: 'Solapur, Maharashtra, India' },
    { label: 'Status', value: 'Undergraduate Engineering Researcher' },
  ];

  const coreFocusAreas = [
    {
      title: 'Cognitive Runtime Architecture',
      description:
        'Architecting the deterministic kernel that coordinates model inference, tool execution, and state persistence without stochastic drift.',
      tag: 'RUNTIME',
    },
    {
      title: 'Protocol-Driven Tool Calling (MCP)',
      description:
        'Implementing standard client and server adapters for the Model Context Protocol to allow models to safely query databases and trigger external APIs.',
      tag: 'PROTOCOL',
    },
    {
      title: 'Multi-Agent Consensus & DAGs',
      description:
        'Designing specialized swarms (Planner, Operator, Verifier) communicating across directed acyclic graph execution paths with explicit verification barriers.',
      tag: 'SWARMS',
    },
    {
      title: 'Episodic & Hierarchical Memory',
      description:
        'Developing hybrid memory stores combining semantic vector indexes, session working ledgers, and compressed historical snapshots for high-context longevity.',
      tag: 'MEMORY',
    },
  ];

  const aiResearchInterests = [
    {
      name: 'Autonomous Agent Loops',
      detail: 'Goal decomposition, tool reflection, deterministic retry gates, and exception-handling loops.',
    },
    {
      name: 'Model Context Protocol (MCP)',
      detail: 'Standardized client-server interfaces for cross-system tool discovery and secure payload schemas.',
    },
    {
      name: 'Deterministic Verification',
      detail: 'Stochastic containment layers, structural JSON validation, and safety invariants for enterprise actions.',
    },
    {
      name: 'Enterprise System Integration',
      detail: 'Bridging LLM reasoning with ERPs, CRMs, Git repositories, and relational database systems.',
    },
  ];

  return (
    <div className="min-h-screen bg-canvas text-text-primary selection:bg-brand-accent selection:text-white pt-20">
      {/* Hero Header */}
      <Section padding="lg" className="border-b border-border-hairline relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-grid opacity-30 pointer-events-none" />
        <Container size="lg" className="relative z-10">
          <div className="flex flex-col items-start max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="status" indicatorColor="brand">
                LEADERSHIP & ORIGIN
              </Badge>
              <span className="font-mono text-xs text-text-muted">DOSSIER // 001</span>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
              Bhavin Shankur
            </h1>

            <p className="font-mono text-sm sm:text-base text-brand-cyan tracking-wide mb-6">
              Founder &amp; CEO — {COMPANY.name}
            </p>

            <p className="font-sans text-lg sm:text-xl text-text-secondary leading-relaxed font-light">
              Engineering student and systems builder specializing in Artificial Intelligence and Machine Learning.
              Directing the architectural vision and technical foundation of Orbion Technologies’ AI Operating System.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link href="/contact">
                <Button variant="primary" size="md">
                  Initiate Dialogue
                </Button>
              </Link>
              <a href="#portfolios">
                <Button variant="outline" size="md" className="font-mono text-xs">
                  <span>Explore Portfolios ↓</span>
                </Button>
              </a>
              <a href="mailto:exobhavinss@gmail.com">
                <Button variant="outline" size="md" className="font-mono text-xs">
                  <Mail className="w-3.5 h-3.5 mr-2 text-brand-accent" />
                  exobhavinss@gmail.com
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Biography & Mission Statement */}
      <Section padding="lg" className="border-b border-border-hairline">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Biography Narrative */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>BIOGRAPHY &amp; TRAJECTORY</span>
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Building practical systems at the boundary of machine intelligence.
              </h2>

              <div className="space-y-5 font-sans text-base text-text-secondary leading-relaxed">
                <p>
                  Bhavin Shankur is a technologist and engineering student specializing in Artificial Intelligence and
                  Machine Learning at MIT Vishwaprayag University, Solapur.
                </p>
                <p>
                  Observing how modern organizations struggle with fragmented SaaS platforms and biological human glue
                  to shuttle data between unintegrated databases, Bhavin chose not to wait until graduation to start
                  building.
                </p>
                <p>
                  His technical approach prioritizes rigorous systems engineering, deterministic verification, and
                  open interoperability over superficial generative demos. Orbion Technologies is the tangible expression of this
                  focus — building the foundational operating layer that empowers enterprises to operate with autonomous,
                  protocol-guided AI agents.
                </p>
              </div>

              {/* Verified Channels Grid */}
              <div className="pt-6 border-t border-border-hairline">
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-4">
                  VERIFIED CHANNELS &amp; REPOSITORIES
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {FOUNDER.links.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xs border border-border-hairline bg-surface-card hover:bg-surface-elevated hover:border-border-subtle transition-all duration-150 flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between text-text-muted group-hover:text-white mb-2">
                        <span className="font-mono text-xs font-medium">{link.platform}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <span className="font-mono text-[11px] text-text-secondary truncate">
                        {link.username}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Academic Foundation Card */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span id="academics">ACADEMIC FOUNDATION</span>
              </div>

              <div className="p-6 sm:p-8 rounded-xs border border-border-hairline bg-surface-card relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-border-hairline">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xs bg-void border border-border-hairline flex items-center justify-center text-brand-cyan">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-white">MIT Vishwaprayag University</h3>
                      <p className="font-mono text-xs text-text-muted">Solapur, Maharashtra, India</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    ACTIVE
                  </Badge>
                </div>

                <div className="divide-y divide-border-hairline/60 pt-4">
                  {academicDetails.map((item) => (
                    <div key={item.label} className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs">
                      <span className="font-mono text-text-muted">{item.label}</span>
                      <span className="font-sans text-text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border-hairline text-xs font-mono text-text-secondary leading-relaxed bg-void/50 p-4 rounded-xs border border-border-hairline/40">
                  <p className="text-text-muted mb-1">{'// CURRICULAR CORE:'}</p>
                  Advanced Data Structures • Machine Learning • Neural Networks • Distributed Systems • Artificial Intelligence • Statistical Foundations.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Explore the Founder — External Portfolios & Dossiers */}
      <Section padding="lg" className="border-b border-border-hairline bg-surface-subtle/50 relative overflow-hidden" id="portfolios">
        <Container size="lg">
          <div className="max-w-4xl mx-auto flex flex-col space-y-8">
            <div className="text-left">
              <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-wider mb-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>EXTERNAL PORTFOLIOS &amp; WORK</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Explore The Founder
              </h2>
              <p className="font-sans text-sm sm:text-base text-text-secondary mt-2 max-w-2xl leading-relaxed">
                Independent portfolios highlighting Bhavin&apos;s software engineering projects, system architecture experiments, and personal journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FOUNDER.portfolios.map((portfolio) => (
                <a
                  key={portfolio.id}
                  href={portfolio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 sm:p-8 rounded-xs bg-surface-card border border-border-hairline hover:border-brand-accent/60 hover:bg-surface-elevated transition-all duration-200 flex flex-col justify-between"
                  aria-label={`${portfolio.title} — ${portfolio.subtitle} (opens in a new tab)`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-medium text-brand-cyan uppercase tracking-wider px-2 py-0.5 rounded-2xs bg-brand-cyan/10 border border-brand-cyan/20">
                        {portfolio.category}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>

                    <div>
                      <h3 className="font-sans text-xl font-semibold text-white mb-1.5 group-hover:text-white transition-colors">
                        {portfolio.title}
                      </h3>
                      <p className="font-mono text-xs text-brand-accent mb-3">
                        {portfolio.subtitle}
                      </p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        {portfolio.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-border-hairline flex items-center justify-between font-mono text-xs text-text-primary group-hover:text-white transition-colors">
                    <span className="font-medium">{portfolio.actionText}</span>
                    <span className="text-brand-accent group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Founder Vision & Philosophy */}
      <Section padding="lg" className="border-b border-border-hairline bg-void relative">
        <Container size="lg">
          <div className="max-w-4xl mx-auto flex flex-col space-y-8" id="vision">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>FOUNDER THESIS &amp; OPERATING PHILOSOPHY</span>
            </div>

            <blockquote className="font-sans text-2xl sm:text-3xl text-white font-normal leading-snug tracking-tight border-l-2 border-brand-accent pl-6 sm:pl-8 py-2">
              &ldquo;I believe the next generation of businesses will not rely only on traditional software.
              They will work alongside intelligent AI systems capable of understanding tasks, making decisions,
              using tools, and executing workflows.&rdquo;
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="p-6 rounded-xs border border-border-hairline bg-surface-card/60">
                <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider block mb-2">
                  01 // EARLY-STAGE INITIATIVE
                </span>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  &ldquo;Instead of waiting until graduation to begin building, I decided to start now. Orbion Technologies is my
                  attempt to build toward that future — learning through engineering real products and continuously
                  testing what is possible in business environments.&rdquo;
                </p>
              </div>

              <div className="p-6 rounded-xs border border-border-hairline bg-surface-card/60">
                <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider block mb-2">
                  02 // RADICAL HONESTY
                </span>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  We reject artificial hype and fabricated testimonials. We are an early-stage startup laying deep
                  architectural foundations. Every capability we claim is grounded in working code and reproducible
                  protocols.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Current Focus & AI/ML Research Interests */}
      <Section padding="lg" className="border-b border-border-hairline" id="interests">
        <Container size="lg">
          <div className="flex flex-col space-y-12">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-brand-cyan uppercase tracking-wider mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>TECHNICAL SPECIALIZATION</span>
              </div>
              <h2 className="font-sans text-3xl font-semibold text-white tracking-tight">
                Current Technical Focus &amp; Research Interests
              </h2>
            </div>

            {/* Core Focus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreFocusAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-6 rounded-xs border border-border-hairline bg-surface-card hover:border-border-subtle transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-2xs">
                        {area.tag}
                      </span>
                      <Workflow className="w-4 h-4 text-text-muted" />
                    </div>
                    <h3 className="font-sans text-lg font-medium text-white mb-2">{area.title}</h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Research Deep Dive */}
            <div className="p-6 sm:p-8 rounded-xs border border-border-hairline bg-void">
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-6">
                ACTIVE AI / ML EXPLORATION AREAS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aiResearchInterests.map((interest) => (
                  <div key={interest.name} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-text-primary mb-1">
                        {interest.name}
                      </h4>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">
                        {interest.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Professional Inquiries CTA */}
      <Section padding="lg" className="border-b border-border-hairline bg-surface-card/40">
        <Container size="md" className="text-center flex flex-col items-center">
          <Badge variant="status" indicatorColor="brand" className="mb-4">
            FOUNDER DIALOGUE
          </Badge>
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
            Connect with Bhavin Shankur
          </h2>
          <p className="font-sans text-base text-text-secondary max-w-xl mx-auto mb-8 font-light">
            Open to technical discussions on AI agent architecture, early enterprise trials, and research
            collaborations with peer engineers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="md">
                Reach Out Directly
              </Button>
            </Link>
            <a href="mailto:exobhavinss@gmail.com">
              <Button variant="secondary" size="md">
                exobhavinss@gmail.com
              </Button>
            </a>
          </div>

          <p className="font-mono text-xs text-text-muted mt-8">
            Solapur, Maharashtra, India • Responses typically within 24-48 business hours
          </p>
        </Container>
      </Section>
    </div>
  );
}
