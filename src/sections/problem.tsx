import React from 'react';
import { Layers, Workflow, Unplug } from 'lucide-react';
import { Section, Container, Card, CardHeader, CardContent, Badge, H2, Body, Caption } from '@/components/ui';

export function ProblemSection() {
  return (
    <Section id="problem" background="void" hasBorderBottom={true}>
      <div className="max-w-4xl mx-auto flex flex-col space-y-4 mb-16 text-left">
        <Badge variant="default" className="self-start">
          01 // THE SYSTEMIC PROBLEM
        </Badge>

        <H2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white uppercase">
          Businesses Have Software. <br />
          Humans Still Act As Glue.
        </H2>

        <Body className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          The modern enterprise operates on dozens of isolated applications. Yet despite endless subscriptions, software remains inert—waiting for human input to move data, trigger next steps, and resolve routine exceptions.
        </Body>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Fragmented Tools */}
        <Card variant="default" className="p-6 sm:p-8 space-y-6">
          <CardHeader className="pb-4 border-b border-border-hairline flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Current Reality
            </span>
            <Unplug className="w-4 h-4 text-text-muted" />
          </CardHeader>

          <CardContent className="space-y-4 py-0">
            <h3 className="font-sans text-xl font-medium text-white tracking-tight">
              Disconnected Software Islands
            </h3>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              CRMs, ERPs, issue trackers, and databases operate in isolation. Human knowledge workers spend considerable time acting as biological connectors—manually synchronizing states and updating dashboards.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs font-mono text-text-muted">
              <li className="flex items-center gap-2">
                <span className="text-text-dim">•</span>
                <span>Manual data handoffs across departments</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-text-dim">•</span>
                <span>Context fragmented in chat logs and email threads</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-text-dim">•</span>
                <span>Passive dashboards requiring constant human checking</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* The Intelligent Operating Layer */}
        <Card variant="elevated" className="p-6 sm:p-8 space-y-6 border-brand-accent/30 bg-[#070b14]">
          <CardHeader className="pb-4 border-b border-brand-accent/20 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-accent">
              Orbion Technologies Direction
            </span>
            <Workflow className="w-4 h-4 text-brand-accent" />
          </CardHeader>

          <CardContent className="space-y-4 py-0">
            <h3 className="font-sans text-xl font-medium text-white tracking-tight">
              The Intelligent Operating Layer
            </h3>
            <p className="font-sans text-sm text-text-primary leading-relaxed">
              Orbion Technologies’ long-term vision is an active operating substrate that sits beneath existing tools. It comprehends business intent, formulates execution plans, calls tools deterministically, and executes multi-step workflows.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs font-mono text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">✓</span>
                <span>Autonomous coordination between disparate business tools</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">✓</span>
                <span>Standardized tool calling via Model Context Protocol (MCP)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">✓</span>
                <span>Humans define objectives; autonomous agents execute workflows</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
