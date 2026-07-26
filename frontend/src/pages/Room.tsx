import Card from "@mui/material/Card"
import { Box } from "@mui/material"



export default function Room()
{
    const Quantity: number = 2

    return (
        <Box
            sx={{
                height: "100vh",
                p: 2,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 2,
            }}
        >
            {Array.from({ length: Quantity }, (_, i) => (
                <Card
                    key={i}
                    sx={{
                        maxHeight: "600px"
                    }}
                >
                    <video
                        controls
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    >
                        ...
                    </video>
                </Card>
            ))}
        </Box>
    )
}