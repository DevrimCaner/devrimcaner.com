export type LocaleCode = 'en' | 'tr' | 'de';

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
  description: string;
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
  description: string[];
  url?: string;
  techs: string[];
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
  contact: {
    heading: string;
    description: string;
    email: string;
    cta: string;
  };
  footer?: {
    text: string;
    builtWith: string;
  };
};
