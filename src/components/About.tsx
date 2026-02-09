import { useTranslation } from "react-i18next";
import { Zap, Code, Layers } from "lucide-react"

const softIcons = [Zap, Code, Layers] as const

export function About() {

    const { t } = useTranslation();

    const descripiton = t("about.description", { returnObjects: true }) as (string | object)

    return (
        <section id="about" className="lg:py-32 relative">
            <div className="container mx-auto px-4">
                <div className="text-center  mb-16">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-primary">
                        {t("about.title")}
                    </h2>
                </div>

                < div className="flex gap-6 lg:gap-8 items-center mb-16 max-w-5xl mx-auto">
                    <div className="relative sm:w-56 sm:h-56 rounded-2xl bg-card border border-accent/30 overflow-hidden">
                        <img className="w-full h-full object-cover" src="/logo.png" alt="imagem do logo FY-Dev" />
                    </div>

                    <div className="space-y-6 order-1 lg:order-2 flex-1 text-center lg:text-left">
                        {descripiton.map((paragraph, index) => (
                            <p className="text-lg text-muted-foreground leading-relaxed"
                                key={index}>{paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}