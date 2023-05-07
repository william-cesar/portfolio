type TechTags = {
  label: string;
  color: string;
};

type Job = {
  id: string;
  name: string;
  companyLink: string;
  position: string;
  period: string;
  info: string[];
  mainTechs: TechTags[];
};

export default Job;
