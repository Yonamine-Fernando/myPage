import { useTranslation } from "react-i18next"

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
                
                <h1 className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    {t('hero.name')}
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
                    {t('hero.greeting')} 
                </h2>

                <p className="text-gray-400 leading-relaxed text-base md:text-lg pt-4">
                    {t('hero.subline')} 
                </p>
            </div>

           
            <div className="flex flex-col md:flex-row gap-4 mt-10">
                <a 
                    href="#projects" 
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105"
                >
                    {t('hero.cta_projects')}
                </a>
                
                <a 
                    href="#contact" 
                    className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-full font-medium transition-all"
                >
                    {t('hero.cta_contact')}
                </a>
                 <a 
                    href="#cv" 
                    className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-full font-medium transition-all"
                >
                    {t('hero.cta_cv')}
                </a>

                
            </div>

        </section>
    )
}