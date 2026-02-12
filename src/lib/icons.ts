import { FaReact, FaNode, FaGit, FaDocker, FaCode, FaFigma, FaServer, FaPython } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiAxios, } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const stackTech = {
    frontend: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    backend: ["NodeJS", "REST API", "Axios", "Python"],
    database: ["PostgreSQL", "Prisma"],
    tools: ["GitHub", "Git", "Docker", "VSCode", "Figma"]
}

export const techIcons: Record<string, { icon: React.ElementType, name: string }> = {
    React: { icon: FaReact, name: "React" },
    NodeJs: { icon: FaNode, name: "NodeJS" },
    Git: { icon: FaGit, name: "Git" },
    Docker: { icon: FaDocker, name: "Docker" },
    Code: { icon: FaCode, name: "Code" },
    Figma: { icon: FaFigma, name: "Figma" },
    Server: { icon: FaServer, name: "Sever" },
    Typescript: { icon: SiTypescript, name: "TypeScript" },
    Tailwindcss: { icon: SiTailwindcss, name: "Tailwind CSS" },
    NextJs: { icon: SiNextdotjs, name: "NextJs" },
    Postgresql: { icon: SiPostgresql, name: "PostgreSql" },
    Axios: { icon: SiAxios, name: "Axios" },
    VSCode: { icon: VscVscode, name: "VsCode" },
    Python: { icon: FaPython, name: "Python" }

}