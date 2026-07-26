import CssBaseline from "@mui/material/CssBaseline"
import Header from "./layouts/Header.tsx"
import { RouterProvider } from "react-router/dom"
import router from "./plugins/Router.ts"



export default function App()
{
    return (
        <div>
            <CssBaseline />

            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Header />

                <RouterProvider router={router} />
            </div>
        </div>
    )
}