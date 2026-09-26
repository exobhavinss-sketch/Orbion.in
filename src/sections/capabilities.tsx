import React from 'react';
import { TrendingUp, LifeBuoy, Search, Cpu, BarChart3 } from 'lucide-react';
import { Section, Card, CardHeader, CardContent, CardFooter, Badge, H2, Body, Caption, IconWrapper } from '@/components/ui';

interface CapabilityItem {
  id: string;
  title: string;
  role: string;
  icon: React.ReactNode;
  description: string;
  roadmapStage: string;
  targetTools: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'CAP_01',
    title: 'Sales & Inbound Intelligence',
    role: 'Autonomous Pipeline Assistance',
    icon: <TrendingUp className="w-4 h-4 text-brand-accent" />,
    description:
      'Comprehending inbound prospect intent, semantic account qualification, draft proposal synthesis, and automated CRM updates.',
    roadmapStage: 'Architecture & Design',
    targetTools: ['CRM Systems', 'Email Gateways', 'Calendar'],
  },
  {
    id: 'CAP_02',
    title: 'Mission-Critical Support',
    role: 'Technical Incident Resolution',
    icon: <LifeBuoy className="w-4 h-4 text-emerald-400" />,
    description:
      'Parsing runtime logs, reproducing reported errors against code repositories, synthesizing context, and preparing verified resolutions.',
    roadmapStage: 'Prototyping Sandbox',
    targetTools: ['Error Logs', 'Ticket Systems', 'Git Repos'],
  },
  {
    id: 'CAP_03',
    title: 'Deep Market & Business Research',
    role: 'Unstructured Data Synthesis',
    icon: <Search className="w-4 h-4 text-white" />,
    description:
      'Continuous extraction of regulatory filings, academic research, competitive indexing, and transforming raw information into queryable databases.',
    roadmapStage: 'Research Roadmap',
    targetTools: ['Public Registries', 'Vector DB', 'SQL Feeds'],
  },
  {
    id: 'CAP_04',
    title: 'Operations & Workflow Scaling',
    role: 'Cross-System Runbook Execution',
    icon: <Cpu className="w-4 h-4 text-brand-cyan" />,
    description:
      'Cross-platform ticket reconciliation, logistics supply tracking, operational bottleneck detection, and executing multi-step business runbooks.',
    roadmapStage: 'Architecture & Design',
    targetTools: ['ERPs', 'Issue Trackers', 'Internal APIs'],
  },
  {
    id: 'CAP_05',
    title: 'Marketing & Performance Analysis',
    role: 'Telemetry & Campaign Indexing',
    icon: <BarChart3 className="w-4 h-4 text-white" />,
    description:
      'Cross-channel attribution analysis, performance telemetry indexing, automated report preparation, and structured asset coordination.',
    roadmapStage: 'Future Exploration',
    targetTools: ['Analytics APIs', 'Ad Engines', 'CMS'],
  },
];

export function CapabilitiesSection() {
  return (
    <Section id="solutions" background="void" hasBorderBottom={true}>
      <div className="max-w-4xl mx-auto flex flex-col space-y-4 mb-16 text-left">
        <Badge variant="status" indicatorColor="brand" className="self-start">
          03 // FUTURE PRODUCT DIRECTION
        </Badge>

        <H2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white uppercase">
          Autonomous Systems Across <br />
          Core Business Functions.
        </H2>

        <Body className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          As Orbion develops, the operating system is being architected to support specialized autonomous AI systems tailored for distinct operational domains.
        </Body>

        {/* Honest Early Stage Disclaimer */}
        <div className="p-3 rounded-xs bg-surface-card border border-border-hairline max-w-xl font-mono text-xs text-text-muted">
          <span className="text-brand-accent font-medium">NOTE:</span> The modules below represent Orbion’s planned product direction and engineering roadmap. We do not claim all domains are currently deployed.
        </div>
      </div>

      {/* Grid of Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {CAPABILITIES.map((cap) => (
          <Card key={cap.id} variant="default" className="flex flex-col justify-between space-y-6">
            <CardHeader className="pb-3 border-b border-border-hairline flex items-center justify-between">
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                {cap.id}
              </span>
              <IconWrapper size="sm" variant="default">
                {cap.icon}
              </IconWrapper>
            </CardHeader>

            <CardContent className="space-y-3 py-0">
              <div>
                <span className="font-mono text-[11px] text-brand-accent uppercase tracking-wider block">
                  {cap.role}
                </span>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mt-1">
                  {cap.title}
                </h3>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                {cap.description}
              </p>
            </CardContent>

            <CardFooter className="pt-4 border-t border-border-hairline flex flex-col items-start gap-2.5">
              <div className="flex items-center justify-between w-full font-mono text-[10px] text-text-muted">
                <span>PHASE:</span>
                <span className="text-white font-medium">{cap.roadmapStage}</span>
              </div>
              <div className="flex flex-wrap gap-1 w-full">
                {cap.targetTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-1.5 py-0.5 rounded-xs bg-surface-elevated text-[9px] font-mono text-text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
