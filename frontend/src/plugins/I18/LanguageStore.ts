import { create } from "zustand"
import i18n from "./index.ts"



type Language = "ru" | "en"



interface LanguageStore
{
    language: Language
    toggleLanguage: () => void
}



export const useLanguageStore = create<LanguageStore>((set, get) => ({
    language: "ru",

    toggleLanguage: () => {
        const language: Language = get().language === "ru" ? "en" : "ru"
        i18n.changeLanguage(language)
        set({ language })
    },
}))