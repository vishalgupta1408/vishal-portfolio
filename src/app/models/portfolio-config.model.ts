export interface NavItem {
  num: string;
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
  target: string;
}

export interface CtaButton {
  icon: string;
  label: string;
  href: string;
}

export interface QuickInfo {
  icon: string;
  text: string;
}

export interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

export interface SkillItem {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  badge: string;
  points: string[];
  tags: string[];
}

export interface Project {
  title: string;
  icon: string;
  type: string;
  typeLabel: string;
  featured: boolean;
  description: string;
  highlights: string[];
  tags: string[];
  github: string | null;
  live: string | null;
  category: string;
}

export interface Achievement {
  icon: string;
  date: string;
  title: string;
  org: string;
  description: string;
  badgeText: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  field: string | null;
  institution: string;
  icon: string;
  score: string;
  scoreLabel: string;
  note: string | null;
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export interface PortfolioConfig {
  meta: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  navbar: {
    logo: string;
    items: NavItem[];
    resumeUrl: string | null;
  };
  hero: {
    firstName: string;
    lastName: string;
    descriptionHtml: string;
    roles: string[];
    stats: HeroStat[];
    techBadges: string[];
    ctaPrimary: CtaButton;
    ctaSecondary: CtaButton;
    socialLinks: SocialLink[];
  };
  about: {
    quickInfo: QuickInfo[];
    highlights: Highlight[];
  };
  skills: {
    categories: SkillCategory[];
    tools: Tool[];
  };
  experience: Experience[];
  projects: Project[];
  achievements: {
    items: Achievement[];
    stats: Stat[];
  };
  education: EducationItem[];
  contact: {
    email: string;
    links: ContactLink[];
  };
}
