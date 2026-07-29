import { create } from "zustand"
import { createTheme } from "@mui/material/styles"



type ThemeMode = "light" | "dark"



interface ThemeStore
{
    mode: ThemeMode
    theme: ReturnType<typeof createTheme>
    toggleTheme: () => void
}

const createAppTheme = (mode: ThemeMode) =>
    createTheme({
        palette: {
            mode,
        },
    })



export const useThemeStore = create<ThemeStore>((set, get) => ({
    mode: "light",
    theme: createAppTheme("light"),

    toggleTheme: () => {
        const newMode: ThemeMode = get().mode === "light" ? "dark" : "light"

        set({
            mode: newMode,
            theme: createAppTheme(newMode),
        })
    },
}))