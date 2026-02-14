import { useTranslation } from "react-i18next";
import { techIcons, stackTech } from "../lib/icons";
import { Card } from "./Card";

export function Technologies() {
    const { t } = useTranslation();

    // Pegamos as categorias do seu objeto stackTech (frontend, backend, etc)
    const categories = Object.keys(stackTech) as Array<keyof typeof stackTech>;

    return (
        <section id="technologies" className="py-20 lg:py-18 bg-card/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                <h2 className="text-center text-5xl font-bold mb-12 text-gradient-primary">{t("technologies.title")}</h2>
                <p text-muted-foreground text-xl max-w-2xl mx-auto>{t("technologies.description")}</p>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div key={category} className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-cyan-400 capitalize mb-2">
                                {category}
                            </h3>
                            
                            {stackTech[category].map((techKey) => {
                                const techData = techIcons[techKey];
                                
                                if (!techData) return null;

                                return (
                                    <Card 
                                        key={techKey}
                                        icon={techData.icon}
                                        title={techData.name}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}