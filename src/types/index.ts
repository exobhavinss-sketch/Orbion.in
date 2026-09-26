export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  username?: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  degree: string;
  field: string;
  institution: string;
  vision: string;
  bio: string[];
  links: SocialLink[];
}

export interface CompanyMeta {
  name: string;
  legalName: string;
  tagline: string;
  domain: string;
  statusBadge: string;
  visionSummary: string;
}
