import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const navigationItems = (t: (key: string) => string) => [
  { href: "#", label: t("nav.home") },
  { href: "#about", label: t("nav.sobre") },
  { href: "#technologies", label: t("nav.skills") },
  { href: "#projects", label: t("nav.projetos") },
  { href: "#contact", label: t("nav.contato") },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = navigationItems(t);

  return (
    <>
      {/* HEADER PRINCIPAL (Desktop e Barra Superior) */}
      <header className="fixed top-0 w-full z-40 bg-[#080A0F]/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex shrink-0">
            <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00D2FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Switcher Desktop */}
          <div className="hidden lg:flex">
            <LanguageSwitcher />
          </div>

          {/* Botão Mobile */}
          <button
            className="lg:hidden text-gray-100 p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MENU MOBILE (SIDEBAR) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          
          {/* 1. Fundo Escuro */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)}
          />

          {/* 2. A Barra Lateral */}
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-[#080A0F] border-r border-gray-800 shadow-xl flex flex-col">
            
            {/* Cabeçalho do Menu */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <span className="text-white font-bold text-xl tracking-wider">MENU</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-[#00D2FF] py-2 border-b border-gray-800/50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto p-6 bg-gray-900/50 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  );
}