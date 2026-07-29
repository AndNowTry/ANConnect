import { useThemeStore } from "../../../plugins/ThemeStore.ts"
import { IconButton } from "@mui/material"
import SunnyIcon from '@mui/icons-material/Sunny'
import BedtimeIcon from '@mui/icons-material/Bedtime'



export default function ThemeButton()
{
    const { mode, toggleTheme } = useThemeStore()

    return (
        <IconButton onClick={toggleTheme}>
            {mode === "light" ? <SunnyIcon /> : <BedtimeIcon />}
        </IconButton>
    )
}