import { TeamMember } from '@/types';
import { FOUNDER } from './founder';

export const CTO: TeamMember = {
  id: 'apurv-nimbarge',
  name: 'Apurv Nimbarge',
  role: 'Chief Technology Officer (CTO)',
  title: 'Chief Technology Officer',
  department: 'ENGINEERING & ARCHITECTURE',
  degree: 'B.Tech in Artificial Intelligence and Machine Learning',
  field: 'Artificial Intelligence & Machine Learning',
  institution: 'MIT Vishwaprayag University',
  location: 'Solapur, Maharashtra, India',
  description:
    'Apurv Nimbarge serves as Chief Technology Officer at Orbion Technologies while pursuing a B.Tech in Artificial Intelligence and Machine Learning at MIT Vishwaprayag University. His technical interests include AI-powered applications, computer vision, generative AI integrations, modern full-stack development, and software architecture. He contributes to technical planning, engineering practices, and the development of reliable digital products.',
  portfolioUrl: 'https://developer-portfolio-ruby-eight.vercel.app/',
  links: [
    {
      platform: 'GitHub',
      label: 'GitHub',
      url: 'https://github.com/Apurva200631',
      username: 'Apurva200631',
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/apurva-nimbarge-a40310353',
      username: 'apurva-nimbarge',
    },
    {
      platform: 'X',
      label: 'X (Twitter)',
      url: 'https://x.com/apurv2116',
      username: '@apurv2116',
    },
  ],
  portfolios: [
    {
      id: 'developer',
      title: 'Developer Portfolio',
      category: 'TECHNICAL & ENGINEERING',
      subtitle: 'Technical work, AI integrations & engineering',
      description: "Explore Apurv's technical projects, AI integrations, and modern full-stack development work.",
      url: 'https://developer-portfolio-ruby-eight.vercel.app/',
      actionText: 'View Developer Portfolio',
    },
  ],
};

export const FOUNDER_MEMBER: TeamMember = {
  id: 'bhavin-shankur',
  name: FOUNDER.name,
  role: FOUNDER.role,
  title: 'Founder & CEO',
  department: 'EXECUTIVE LEADERSHIP',
  degree: `${FOUNDER.degree} — ${FOUNDER.field}`,
  field: FOUNDER.field,
  institution: FOUNDER.institution,
  location: 'Solapur, Maharashtra, India',
  description: FOUNDER.vision,
  bio: FOUNDER.bio,
  links: FOUNDER.links,
  portfolios: FOUNDER.portfolios,
};

export const TEAM_MEMBERS: TeamMember[] = [FOUNDER_MEMBER, CTO];

export { FOUNDER };
