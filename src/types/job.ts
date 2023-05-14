type TechTags = {
  label: string;
  color: string;
};

export type Company = 'uptime' | 'azion' | 'youx';

export type Job = {
  id: string;
  name: string;
  companyLink: string;
  position: string;
  period: string;
  info: string[];
  mainTechs: TechTags[];
};
