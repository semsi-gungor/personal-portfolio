export const projects = [
  {
    id: "01",
    role: ["Frontend Development"],
    images: [
      "https://i.imgur.com/015p0HQ.png",
      "https://i.imgur.com/015p0HQ.png",
    ],
    tools: ["Next.js", "Next.js", "Next.js"],
    title: "Project Title",
    year: "2023",
    description: "",
    url: "",
  },
  {
    id: "02",
    role: ["Frontend Development"],
    images: [
      "https://i.imgur.com/015p0HQ.png",
      "https://i.imgur.com/015p0HQ.png",
    ],
    tools: ["Next.js", "Next.js"],
    title: "Project Title",
    year: "2023",
    description: "",
    url: "",
  },
];

export type Project = (typeof projects)[number];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getIds() {
  return projects.map((project) => project.id);
}
