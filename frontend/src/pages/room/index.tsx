import { Box } from "@mui/material"
import GridCards from "./components/GridCards.tsx"
import RoomFooter from "./components/RoomFooter.tsx";



export default function Room()
{
    return (
        <>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <GridCards
                    quantity={10}
                    renderCard={(i) => (
                        <h4>{i}</h4>
                    )}
                />
            </Box>

            <RoomFooter />
        </>
    )
}