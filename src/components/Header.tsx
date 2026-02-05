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
      <header className="fixed top-0 w-full z-40 bg-black backdrop-blur-md border-b border-gray-800">
        
        <div className="container mx-auto px-4 h-16 grid grid-cols-3 items-center">
          
          <div className="justify-self-start flex shrink-0">
            <a href="#">
              <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
            </a>
          </div>

          <div className="justify-self-center flex items-center">
            
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-['Space_Grotesk'] font-bold text-gray-300 hover:text-[#00D2FF] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="lg:hidden transform scale-90">
               <LanguageSwitcher />
            </div>

          </div>

          <div className="justify-self-end flex items-center gap-4">
            
            <div className="hidden lg:block transform scale-100">
              <LanguageSwitcher />
            </div>

            <button
              className="lg:hidden text-gray-100 p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-black border-r border-gray-800 shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <span className="text-white font-bold text-xl tracking-wider">MENU</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
            </div>
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
          </div>
        </div>
      )}
    </>
  );
}