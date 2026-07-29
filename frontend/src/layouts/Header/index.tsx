import Card from '@mui/material/Card'
import { IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import ThemeButton from "./components/ThemeButton.tsx"
import LanguageButton from "./components/LanguageButton.tsx"



export default function Header()
{
    return (
        <Card sx={{
            position: "fixed",
            top: 40,
            right: 40,
            padding: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
        }}>
            <Typography
                variant="h6"
                sx={{
                    userSelect: "none",
                }}
            >
                ANConnect
            </Typography>

            <ThemeButton />

            <LanguageButton />

            <IconButton
                href="https://github.com/AndNowTry/ANConnect"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon />
            </IconButton>
        </Card>
    )
}