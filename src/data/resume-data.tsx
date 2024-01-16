import { LinkedInIcon, GitHubIcon } from "../components/UI/Icons";

export const RESUME_DATA = {
  name: "Şemsi Güngör",
  initials: "ŞG",
  location: "Rize, Türkiye",
  locationLink: "https://www.google.com/maps/place/Rize",
  about:
    "Frontend Developer focused on building detailed products for web experience",
  summary:
    "Hello, I'm Şemsi, a recent Computer Engineering graduate with a passion for frontend development, specializing in React. As I embark on this exciting journey in the tech industry, I am eager to contribute my skills, creativity, and determination to build innovative and user-friendly web solutions.",
  avatarUrl: "https://i.imgur.com/ZvObu1U.jpg",
  personalWebsiteUrl: "https://semsigungor.xyz",
  contact: {
    email: "semsi.gungor00@gmail.com",
    tel: "+905382313298",
    website: "www.semsigungor.xyz",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/semsi-gungor",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/semsi-gungor/",
        icon: LinkedInIcon,
      },
      {
        name: "Website",
        url: "https://www.semsigungor.xyz",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Karadeniz Technical University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Elasoft",
      link: "https://elasoft.com.tr",
      badges: [],
      title: "Frontend Developer Intern",
      logo: "",
      start: "2023",
      end: "2023",
      description:
        "Created a fullstack application for a physiotherapy clinic. Implemented booking system, user registration and authorization. Designed interfaces for users, personnels and administrators. Technologies: React, TypeScript, Next.js, MongoDB",
    },
    {
      company: "Çaykur",
      link: "https://www.caykur.gov.tr",
      badges: [],
      title: "IT Intern",
      logo: "",
      start: "2020",
      end: "2020",
      description: "",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "CSS/SASS",
    "HTML",
    "React/Next.js",
    "Jest",
    "State Management",
    "Responsive Design",
    "Accessible Design",
  ],
  projects: [
    {
      title: "Personal Portfolio",
      techStack: ["Side Project", "TypeScript", "Next.js", "SASS"],
      description: "My personal website. Built with Next.js and SASS.",
      logo: "",
      link: {
        label: "semsigungor.co",
        href: "https://semsigungor.co",
      },
    },
    {
      title: "Clinic App",
      techStack: [
        "Intern Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "MongoDB",
        "Prisma",
      ],
      description:
        "A fullstack web application for managing phytography clinic. Booking system, user registration and authorization, personnel and admin dashboards.",
      logo: "",
      link: {
        label: "semsigungor.co",
        href: "https://semsigungor.co",
      },
    },
    {
      title: "Chat App",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Socket.io",
      ],
      description:
        "Minimalist chat application that uses websocket room architecture.",
      logo: "",
      link: {
        label: "semsigungor.co",
        href: "https://semsigungor.co",
      },
    },
    {
      title: "The Mare",
      techStack: ["Side Project", "TypeScript", "Next.js", "TailwindCSS"],
      description:
        "Web application project for a mock restaurant called The Mare. Inspired by Fx's tv series 'The Bear'.",
      logo: "",
      link: {
        label: "semsigungor.co",
        href: "https://semsigungor.co",
      },
    },
    {
      title: "Canvas Applications",
      techStack: ["Side Project", "TypeScript", "React"],
      description:
        "Collection of demos that i created with pure Canvas API and Typescript.",
      logo: "",
      link: {
        label: "semsigungor.co",
        href: "https://semsigungor.co",
      },
    },
  ],
} as const;
