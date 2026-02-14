import { useTranslation } from "react-i18next";
import { Zap, Code2, Layers } from 'lucide-react'
import { Card } from "./Card";


const softSkillsIcons = [Zap, Code2, Layers] as const

interface skillData {
    title: string;
    description: string
}

export function About() {

    const { t } = useTranslation();

    const description = t("about.description", { returnObjects: true }) as string[];

    const softSkills = t("about.card", { returnObjects: true }) as skillData[];

    return (
        <section id="about" className="relative">
            <div className="container mx-auto px-4 mb-16" >
                <div className="text-center  mb-16">
                    <h2 className="font-display text-5xl font-bold mb-4 text-gradient-primary">
                        {t("about.title")}
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center mb-16 max-w-5xl mx-auto">
                    <div className="relative w-56 h-56 rounded-2xl bg-card border border-accent/30 overflow-hidden">
                        <img className="w-full h-full object-cover" src="/logo.png" alt="imagem do logo FY-Dev" />
                    </div>
                    <div className="space-y-6 flex-1 text-center lg:text-left">
                        {description.map(function (paragraph, index) {
                            return (
                                <p className="text-lg text-muted-foreground leading-relaxed"
                                    key={index}>{paragraph}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-10">
                    {softSkillsIcons.map((IconComponent, index) => {
                        const skillData = softSkills[index];
                        return (
                            <Card
                                key={index}
                                icon={IconComponent}
                                title={skillData.title}
                                description={skillData.description}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}