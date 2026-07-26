import Card from "@mui/material/Card"
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined'
import { Typography } from "@mui/material"
import {Link} from "react-router"
import type {ReactNode} from "react"



export default function Home()
{
    interface MainLink
    {
        title: string
        link: string
        icon: ReactNode
    }

    const MainLinks: MainLink[] = [
        {
            title: 'Create room',
            link: '/room',
            icon: <AddIcCallOutlinedIcon sx={{ fontSize: 80 }} />,
        },
        {
            title: 'Connect to room',
            link: '/connect',
            icon: <ConnectWithoutContactOutlinedIcon sx={{ fontSize: 80 }} />,
        },
    ]

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px"
            }}>
                {MainLinks.map(({ title, link, icon }) => (
                    <Card
                        key={link}
                        component={Link}
                        to={link}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            width: 280,
                            height: 300,
                            textDecoration: "none",
                            cursor: "pointer",

                            transition: "0.3s",

                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: 3,
                            },
                        }}
                    >
                        {icon}

                        <Typography
                            variant="h6"
                            component="h6"
                        >
                            {title}
                        </Typography>
                    </Card>
                ))}
            </div>
        </div>
    )
}