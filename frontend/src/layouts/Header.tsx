import Card from '@mui/material/Card'
import { IconButton, Typography } from "@mui/material"
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'


export default function Header()
{
    return (
        <Card sx={{
            position: "absolute",
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

            <IconButton aria-label="theme">
                <WbSunnyOutlinedIcon />
            </IconButton>

            <IconButton aria-label="language">
                <LanguageOutlinedIcon />
            </IconButton>

            <IconButton aria-label="info">
                <GitHubIcon />
            </IconButton>
        </Card>
    )
}