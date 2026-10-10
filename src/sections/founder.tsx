import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/team';
import { Section, Badge, H2, Body, Button } from '@/components/ui';
import { TeamProfileCard } from '@/components/team-profile-card';

export function FounderSection() {
  return (
    <Section id="team" background="canvas" hasBorderBottom={true}>
      {/* Anchor for backward compatibility with #founder hash links */}
      <div id="founder" className="sr-only" aria-hidden="true" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-4 mb-14 text-left">
        <Badge variant="default" className="self-start">
          04 // LEADERSHIP &amp; TEAM
        </Badge>

        <H2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white uppercase">
          Engineered By Builders.
        </H2>

        <Body className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          Orbion Technologies is founded and led by systems builders committed to delivering practical, verified AI software designed for real-world enterprise utility.
        </Body>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Balanced Two-Column Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {TEAM_MEMBERS.map((member) => (
            <TeamProfileCard key={member.id} member={member} />
          ))}
        </div>

        {/* Link to Full Team Dossier */}
        <div className="pt-6 flex justify-center">
          <Link href="/team">
            <Button variant="secondary" size="lg" className="font-mono text-xs gap-2">
              <Users className="w-4 h-4 text-brand-cyan" />
              <span>Explore Full Team Dossier &amp; Architecture &rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export const TeamSection = FounderSection;
