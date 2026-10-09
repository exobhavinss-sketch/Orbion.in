import { NavItem } from '@/types';

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Platform', href: '/#platform' },
  { label: 'Technology', href: '/technology' },
  { label: 'Company', href: '/company' },
  { label: 'Founder', href: '/founder' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Platform',
    links: [
      { label: 'Operating System', href: '/#platform' },
      { label: 'System Architecture', href: '/technology' },
      { label: 'Autonomous Workflows', href: '/#capabilities' },
      { label: 'Model Context Protocol', href: '/technology' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'AI Agents', href: '/technology#agents' },
      { label: 'Tool Calling & MCP', href: '/technology#mcp' },
      { label: 'Memory Systems', href: '/technology#memory' },
      { label: 'Workflow Orchestration', href: '/technology#orchestration' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Orbion Technologies', href: '/company' },
      { label: 'Thesis & Origin', href: '/company#thesis' },
      { label: 'Current Stage', href: '/company#stage' },
      { label: 'Leadership', href: '/founder' },
    ],
  },
  {
    title: 'Founder',
    links: [
      { label: 'Meet Bhavin', href: '/founder' },
      { label: 'Academic Foundation', href: '/founder#academics' },
      { label: 'Research Interests', href: '/founder#interests' },
      { label: 'Direct Dialogue', href: '/contact' },
    ],
  },
];
