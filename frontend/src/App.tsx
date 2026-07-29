import CssBaseline from "@mui/material/CssBaseline"
import Header from "./layouts/Header/index.tsx"
import Main from "./layouts/Main.tsx"
import { Box, ThemeProvider } from "@mui/material"
import { useThemeStore } from "./plugins/ThemeStore.ts"



export default function App()
{
    const theme = useThemeStore((state) => state.theme)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box
                sx={{
                    minHeight: "100vh",
                    position: "relative",
                }}
            >
                <Header />

                <Main />
            </Box>
        </ThemeProvider>
    )
}