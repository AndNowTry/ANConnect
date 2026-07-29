import { Box, Card } from "@mui/material"
import useMeasure from "react-use-measure"
import type { ReactNode } from "react"



interface GridCardsProps
{
    quantity: number
    renderCard: (index: number) => ReactNode
}



export default function GridCards({ quantity, renderCard }: GridCardsProps)
{
    const [ref, bounds] = useMeasure()

    function CardWidth(containerWidth: number, containerHeight: number, count: number, gap: number)
    {
        const ratio: number = 16 / 9
        let bestWidth: number = 0

        for(let columns = 1; columns <= count; columns++)
        {
            const rows: number = Math.ceil(count / columns)
            const width: number = (containerWidth - gap * (columns - 1)) / columns
            const height: number = width / ratio

            const totalHeight: number = rows * height + gap * (rows - 1)

            if(totalHeight <= containerHeight)
            {
                bestWidth = Math.max(bestWidth, width)
            }
        }

        return bestWidth
    }

    return (
        <Box
            ref={ref}
            sx={{
                width: "90%",
                height: "90vh",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignContent: "center",
                gap: 2,
            }}
        >
            {Array.from({ length: quantity }, (_, i) => (
                <Card
                    key={i}
                    sx={{
                        width: CardWidth(bounds.width, bounds.height, quantity, 16),
                        aspectRatio: "16 / 9",
                    }}
                >
                    {renderCard(i)}
                </Card>
            ))}
        </Box>
    )
}