import type Job from '@/types/job';
import enUS from '@/plugins/i18n/languages/en-US';

const infoList = (company: keyof typeof enUS.work_experience): string[] => {
  const keys: string[] = Object.keys(enUS.work_experience[company].activities);
  return keys.map((key) => `work_experience.${company}.activities.${key}`);
};

const JobsList: Job[] = [
  {
    id: 'az01',
    name: 'work_experience.azion.company',
    companyLink: 'https://www.azion.com',
    position: 'work_experience.azion.position',
    period: 'work_experience.azion.period',
    info: infoList('azion'),
    mainTechs: [
      { label: 'Vue 3', color: '#13ae82' },
      { label: 'Docker', color: '#3869d5' },
      { label: 'Jest', color: '#a04f6a' },
      { label: 'Storybook', color: '#d33ea4' },
      { label: 'Cypress', color: '#51dcbd' },
      { label: 'Django', color: '#16634d' },
      { label: 'PostgreSQL', color: '#10348f' }
    ]
  },
  {
    id: 'yo01',
    name: 'work_experience.youx.company',
    companyLink: 'https://youxgroup.com.br',
    position: 'work_experience.youx.position',
    period: 'work_experience.youx.period',
    info: infoList('youx'),
    mainTechs: [
      { label: 'Spring Boot', color: '#19b162' },
      { label: 'Angular 2', color: '#cf3434' },
      { label: 'Jest', color: '#a04f6a' },
      { label: 'Jasmine', color: '#881e80' },
      { label: 'React', color: '#2e70b8' },
      { label: 'React Native', color: '#2473c8' },
      { label: 'PostgreSQL', color: '#10348f' },
      { label: 'Vue 2', color: '#13ae82' }
    ]
  },
  {
    id: 'up01',
    name: 'work_experience.uptime.company',
    companyLink: 'https://www.instagram.com/uptimelavras/',
    position: 'work_experience.uptime.position',
    period: 'work_experience.uptime.period',
    info: infoList('uptime'),
    mainTechs: [
      { label: 'Python', color: '#d6c331' },
      { label: 'Tkinter', color: '#214ecb' },
      { label: 'SQLite', color: '#1b3e9e' }
    ]
  }
];

export default JobsList;
