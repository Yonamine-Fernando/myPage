import { FaReact, FaNode, FaGit, FaDocker, FaCode, FaFigma, FaServer, FaPython, FaHtml5, FaGithub } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiPostgresql, SiAxios, SiPrisma } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const stackTech = {
    frontend: ["React", "TypeScript", "Tailwindcss", "HTML", "CSS"],
    backend: ["NodeJS", "RestApi", "Axios", "PostgreSql"],
    tools: ["GitHub", "Git", "Docker", "VSCode", "Figma", "Prisma"]
}

export const techIcons: Record<string, { icon: React.ElementType, name: string }> = {
    React: { icon: FaReact, name: "React" },
    NodeJS: { icon: FaNode, name: "NodeJS" },
    Git: { icon: FaGit, name: "Git" },
    Code: { icon: FaCode, name: "Code" },
    Figma: { icon: FaFigma, name: "Figma" },
    RestApi: { icon: FaServer, name: "REST API" },
    TypeScript: { icon: SiTypescript, name: "TypeScript" },
    Tailwindcss: { icon: SiTailwindcss, name: "Tailwind CSS" },
    HTML: { icon: FaHtml5, name: "HTML" },
    PostgreSql: { icon: SiPostgresql, name: "PostgreSQL" },
    Axios: { icon: SiAxios, name: "Axios" },
    VSCode: { icon: VscVscode, name: "VsCode" },
    Python: { icon: FaPython, name: "Python" },
    GitHub: { icon: FaGithub, name: "GitHub" },
    Prisma: { icon: SiPrisma, name: "Prisma" },
    Docker: { icon: FaDocker, name: "Docker" }
}