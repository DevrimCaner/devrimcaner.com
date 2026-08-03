export type SocialLinks = {
  github?: string;
  linkedin?: string;
};

export type NavigationData = {
  name: string;
  title: string;
  bio?: string;
  social: SocialLinks;
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
  navigation: NavigationData;
  about: string;
  projects: Project[];
  experience: Experience[];
};
