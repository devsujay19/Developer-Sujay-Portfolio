import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  sass,
  Solidity,
  hardhat,
  angular,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id:"resume",
    title:"Resume"
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Real-World Apps Developer",
    icon: mobile,
  },
  {
    title: "Open Source Contributor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Solidity",
    icon: Solidity,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "Angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "Beginner-level Ethical Hacker",
    // icon: honeyWell,
    iconBg: "rgb(29, 24, 54)",
    date: "October, 2023 - Present",
    points: [
      "Recently, I did set up WSL (Windows Subsystem for Linux) in my Windows 10 Pro system.",
      "I installed two linux distributions, which are - Ubuntu and Kali Linux.",
      "I started watching tutorials on various platforms for understanding and learning Kali Linux.",
      "I got started with Kali Linux by learning \"apt\", which is Kali Linux's Package Manager.",
      "I started installing Hacking tools and softwares like \"NMap\", \"CiLocks\" and other tools.",
    ],
  },
  {
    title: "Software Engineer/Developer",
    iconBg: "rgb(29, 24, 54)",
    date: "February, 2023 - Present",
    points: [
      "Got started with Microsoft Visual Studio.",
      "Learned how to create an executable software application in Visual Studio.",
      "This resulted on me to make me create my software application.",
      "Although, for having not much idea on \"What should I build?\", I didn't upload any of my progress in GitHub.",
      "I was contributing on open-source projects and also contibuted to the repository of Apple's Swift language's README.md file on GitHub.",
    ],
  },
  {
    title: "Beginner-level Developer",
    iconBg: "rgb(29, 24, 54)",
    date: "July, 2019 - January, 2020",
    points: [
      "I was just started out as a developer, learned Python, then Java and C.",
      "I was confusing on Pointers and Memory Management in C.",
      "Also went to the Front-end, where I first learnt HTML for structuring the web page, CSS for styling the web page and JavaScript for building logics and program the web page.",
      "I learnt JavaScript so fast, may be under 3 months - 3.6 months.",
    ],
  },
];

const projects = [
  {
    domain: "All (1)",
    name: "GitHub Profile Link",
    description:
      "Visit my GitHub profile to see my uploaded projects on GitHub.",
  },
];

export { services, technologies, experiences, projects };
