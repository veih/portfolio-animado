import {
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://awesome-portfolio.piyushmehta.com";
export const NAME = "Marcelo Evangelista";

export const SECTIONS = ["Home", "Experiências", "Projetos", "Habilidades"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "Quer mais";
export const MENU: MenuProps[] = [
  { key: 1, route: "home", name: SECTIONS[0] },
  { key: 2, route: "Experiências", name: SECTIONS[1] },
  { key: 3, route: "Projetos", name: SECTIONS[2] },
  { key: 4, route: "Habilidades", name: SECTIONS[3] },
];

export const GREETING_TEXT = "Ola,";
export const GREETING_DESCRIPTION =
  "Estou muito feliz de receber você aqui ";

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    company: " ",
    position: "Software Engineer",
    logo: "#",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "Em breve.",
  },
  {
    key: 2,
    company: " ",
    position: "Software Engineer",
    logo: " #",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "Em breve.",
  },
  {
    key: 3,
    company: " ",
    position: "Software Engineer",
    logo: " ",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "Em breve.",
  },
  {
    key: 4,
    company: " ",
    position: "Software Engineer",
    logo: "#",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "Em breve.",
  },
];
export const KEYWORDS = [
  "Developer",
  "front end developer based in Brazil",
  "Marcelo Evangelista",
  "Portfólio",
];

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Awesome Portfolio",
    projectDescription:
      "A portfolio of my work, where all the projects I've made are listed. The wesbite is made using latest technologies",
    projectImageLogo: `https://picsum.photos/id/1/600/314`,
    link: "#",
    buttonText: "View Project",
    tech: ["React", "TailwindCSS", "CSS", "Javascript"],
  },
  {
    id: 2,
    projectName: "Sawan",
    projectDescription:
      "Online Immunity store serving PAN India. Serving 10000 requests per day organically. Customer base of 10k+ people",
    projectImageLogo: `https://picsum.photos/id/2/600/314`,
    link: "#",
    buttonText: "View Project",
    tech: ["React", "TailwindCSS", "Kubernetes", "NodeJS"],
  },
  {
    id: 3,
    projectName: "Meaww Influencers Dashboard",
    projectDescription:
      "A complete Comprehensive dashboard built for the influencers. Used to track their growth and reach.",
    projectImageLogo: `https://picsum.photos/id/3/600/314`,
    link: "#",
    buttonText: "View Project",
    tech: ["React", "Redux", "SCSS", "Javascript"],
  },
];
/**
 *  @type {SkillsProps}
 * skills
 * Kept level as random but you can hard code it if you want
 */
export const skills: SkillsProps[] = [
  {
    id: 1,
    skill: "Javascript",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 2,
    skill: "React",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 3,
    skill: "CSS",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 4,
    skill: "HTML",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 5,
    skill: "Angular 13",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 6,
    skill: "VueJS",
    level: Math.floor(Math.random() * 100) + 1,
  },
];
