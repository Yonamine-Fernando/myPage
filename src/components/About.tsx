import { useTranslation } from "react-i18next";
import { Zap, Code, Layers } from "lucide-react"

const softIcons = [Zap, Code, Layers] as const

export function About() {
    const { t } = useTranslation();
    return (
        <section id="about" className="lg:py-32 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-primary">
                        {t("about.title")}
                    </h2>
                </div>
            </div>
        </section>
    )
}