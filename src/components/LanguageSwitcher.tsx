import { useTranslation } from "react-i18next";

const languageOptions = [
    {
        name: "Português", 
        value: "pt-BR",
        flag: "🇧🇷"
    },
    {
        name: "English", 
        value: "en",
        flag: "🇺🇸"
    },
    {
        name: "日本語",
        value: "ja",
        flag: "🇯🇵"
    }
]

export function LanguageSwitcher() {
   const { i18n } = useTranslation();

   return (
    <div className="flex gap-2"> 
        {languageOptions.map((option) => (
           
            <button 
                key={option.value} 
                onClick={() => {
                    i18n.changeLanguage(option.value);
                }}
                className=" rounded-2xl px-3 text-left text-lg font-medium  text-text hover:text-hover-primary "> 
                <span className="mr-2">{option.flag}</span>
                {option.name}
            </button>
    
        ))}
    </div>
   )
}