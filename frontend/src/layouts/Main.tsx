import router from "../plugins/Router.ts"
import {RouterProvider} from "react-router/dom"



export default function Main()
{
    return (
        <RouterProvider router={router} />
    )
}