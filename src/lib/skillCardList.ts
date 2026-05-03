import type { SkillCardType } from "../types/SkillCardtype";

export const skillCardList: SkillCardType[] = [
  {
    title: "Frontend",
    desc: "Building modern, responsive and performant user interfaces with strong focus on UX and scalability.",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    desc: "Designing scalable backend systems, APIs and server-side architecture with modern frameworks and cloud services.",
    tech: [
      "Golang",
      "Node.js",
      "Express.js",
      "Supabase",
      "Firebase",
      "Flask",
    ],
  },
  {
    title: "DevOps",
    desc: "Managing deployments, infrastructure and performance optimization for production-ready systems.",
    tech: ["Docker", "Redis", "VPS", "Vercel", "CDN"],
  },
];