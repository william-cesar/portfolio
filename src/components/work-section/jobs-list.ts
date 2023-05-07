import type Job from '@/types/job';
import enUS from '@/plugins/i18n/languages/en-US';

const infoList = (company: keyof typeof enUS.work_experience): string[] => {
  const keys: string[] = Object.keys(enUS.work_experience[company].activities);
  return keys.map((key) => `work_experience.${company}.activities.${key}`);
};

const techList = (company: keyof typeof enUS.work_experience): string[] => {
  const keys: string[] = Object.keys(enUS.work_experience[company].main_techs);
  return keys.map((key) => `work_experience.${company}.main_techs.${key}`);
};

const JobsList: Job[] = [
  {
    id: 'az01',
    name: 'work_experience.azion.company',
    companyLink: 'https://www.azion.com',
    position: 'work_experience.azion.position',
    period: 'work_experience.azion.period',
    info: infoList('azion'),
    mainTechs: techList('azion')
  },
  {
    id: 'yo01',
    name: 'work_experience.youx.company',
    companyLink: 'https://youxgroup.com.br',
    position: 'work_experience.youx.position',
    period: 'work_experience.youx.period',
    info: infoList('youx'),
    mainTechs: techList('youx')
  },
  {
    id: 'up01',
    name: 'work_experience.uptime.company',
    companyLink: 'https://www.instagram.com/uptimelavras/',
    position: 'work_experience.uptime.position',
    period: 'work_experience.uptime.period',
    info: infoList('uptime'),
    mainTechs: techList('uptime')
  }
];

export default JobsList;
