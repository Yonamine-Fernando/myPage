import { useTranslation } from "react-i18next";

const languageOptions = [
    {
        name: "PT",
        value: "pt-BR",
        flag: "🇧🇷"
    },
    {
        name: "EN",
        value: "en",
        flag: "🇺🇸"
    },
    {
        name: "JP",
        value: "ja",
        flag: "🇯🇵"
    }
]

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center gap-2 bg-background/50 border border-accent/30 rounded-full px-3 py-2.5 shadow-accent-glow backdrop-blur-md">
            {languageOptions.map((option) => {
                const isActive = i18n.language === option.value;
                return (
                    <button
                        key={option.value}
                        onClick={() => {
                            i18n.changeLanguage(option.value);
                        }}
                        className={`
                        cursor-pointer flex items-center gap-1.5 pb-0.5 transition-all duration-300
                        text-sm font-['Space_Grotesk'] font-medium border-b-2 
                        ${isActive
                                ? "border-accent text-foreground shadow-[0_10px_20px_-10px_rgba(var(--accent),0.5)]"
                                : "border-transparent text-muted-foreground hover:text-primary hover:border-primary/50"
                            }
                    `}
                    >
                        <span className="text-xl leading-none flex items-center">
                            {option.flag}
                        </span>
                        <span>{option.name}</span>
                    </button>

                )
            })}
        </div>
    )
}