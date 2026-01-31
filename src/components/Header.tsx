import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "./LanguageSwitcher"

export function Header() {

    const { t } = useTranslation()

    const navigationItens = [
        { href: '#', label: t('nav.home') },
        { href: '#about', label: t('nav.sobre') },
        { href: '#technologies', label: t('nav.skills') },
        { href: '#projects', label: t('nav.projetos') },
        { href: '#contact', label: t('nav.contato') },
    ] as const
    return (

        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#"
                    className="flex shrink-0">
                    <img className="h-12 w-auto" src="/logo.svg" alt="Logo" />
                </a>
                <nav className="flex items-center gap-8">
                    {navigationItens.map((navItem) => (
                        <button key={navItem.href}
                            className="text-lg font-medium text-text hover:text-hover-primary ">
                            {navItem.label}
                        </button>
                    ))}
                </nav>
                <div className=" overflow-hiden transition-all duration-300 bg-border/50 px-4 py-3 rounded-3xl
                 ">
                    <LanguageSwitcher /></div>

            </div>
        </header>
    )
}