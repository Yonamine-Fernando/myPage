import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";
import { X, Menu } from 'lucide-react';

const navigationItens = (t: (key: string) => string) => [
    { href: '#', label: t('nav.home') },
    { href: '#about', label: t('nav.sobre') },
    { href: '#technologies', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projetos') },
    { href: '#contact', label: t('nav.contato') },
] as const;

export function Header() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = navigationItens(t);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#" className="flex shrink-0">
                    <img className="h-12 w-auto" src="/logo.svg" alt="Logo" />
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((navItem) => (
                        <a
                            key={navItem.href}
                            href={navItem.href}
                            className="font-['Space_Grotesk'] text-xl font-medium text-foreground hover:text-primary transition-colors duration-300"
                        >
                            {navItem.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center">
                    <LanguageSwitcher />
                </div>

                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-foreground focus:outline-none">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((navItem) => (
                                <a
                                    key={navItem.href}
                                    href={navItem.href}
                                    onClick={toggleMenu}
                                    className="font-['Space_Grotesk'] text-3xl font-medium text-foreground hover:text-primary transition-colors duration-300"
                                >
                                    {navItem.label}
                                </a>
                            ))}
                        </nav>
                        <div className="mt-8">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}