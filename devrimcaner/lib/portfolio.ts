export type LocaleCode = 'en' | 'tr';

export type SocialLinks = {
  github?: string;
  linkedin?: string;
};

export type NavigationData = {
  name: string;
  title: string;
  bio?: string;
  social: SocialLinks;
  sections?: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
};

export type AboutData = {
  heading: string;
  content: string;
};

export type Project = {
  id: string;
  name: string;
  description: string | string[];
  url?: string;
  period: {
    display: string;
  };
  techs: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string | string[];
  url?: string;
  techs: string[];
};

export type Certificate = {
  title: string;
  badge: string;
  verified: boolean;
};

export type PortfolioData = {
  meta: {
    title: string;
    description: string;
    locale: string;
  };
  navigation: NavigationData;
  about: AboutData;
  experience: {
    heading: string;
    items: Experience[];
  };
  projects: {
    heading: string;
    items: Project[];
  };
  certificates?: {
    heading: string;
    verifiedLabel: string;
    completedLabel: string;
    items: Certificate[];
  };
};
