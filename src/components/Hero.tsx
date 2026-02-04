import { useTranslation } from "react-i18next"
import { Sparkle, Github, Download } from "lucide-react"

export function Hero() {
    const { t } = useTranslation()

    return (
        <section className="py-20 flex flex-col items-center justify-center text-center">

            <div className="relative mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                    <img
                        className="w-full h-full object-cover"
                        src="/avatar.png"
                        alt={t('hero.avatar_alt')}
                    />
                </div>
            </div>

            <div className="space-y-4 max-w-2xl px-4">
                <p className="font-mono text-lg">
                    {t('hero.headline')}
                </p>

                <h1 className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 text-5xl font-bold tracking-tight  md:text-6xl lg:text-6xl">
                    {t('hero.name')}
                </h1>

                <h2 className="mb-6 text-2xl font-bold text-foreground  md:text-3xl lg:text-3xl">
                    {t('hero.greeting')}
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
                    {t('hero.subline')}
                </p>
            </div>


            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                <a
                    href="#projects"
                    className="inline-flex h-11 items-center justify-center group bg-gradient-primary from-primary to-accent px-8 rounded hover:border-gray-400 border hover:text-secondary"
                >
                    <Sparkle className="h-4 w-4" />
                    <span className="ml-2">{t('hero.cta_projects')}</span>
                </a>

                <a
                    href="https://github.com/Yonamine-Fernando"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm border rounded h-11 w-45 px-8 gap-2 border-border/50 bg-card/50 font-medium backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                >
                    <Github className="h-4 w-4" />
                    <span className="ml-2">{t('hero.cta_github')}</span>

                </a>
                <a
                    href="#cv"
                    className=" inline-flex items-center justify-center px-6 py-2 border border-gray-600 text-gray-300 rounded font-medium transition-all hover:text-primary hover:border-primary/50"
                >
                    <Download className="h-4 w-4 mr-2" />
                    {t('hero.cta_cv')}
                </a>
            </div>
        </section >
    )
}