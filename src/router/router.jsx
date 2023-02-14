import { createBrowserRouter } from "react-router-dom";
import Films from "../pages/Films";
import People from "../pages/People";
import Vehicles from "../pages/Vehicles"; 
import Species from "../pages/Species";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <p>Waiting for info</p>,
            },
            {
                path: "/films/:id",
                element: <Films/>,
                errorElement: <NotFound/>,
            },
            {
                path: "/people/:id",
                element: <People/>,
                errorElement: <NotFound/>,
            },
            {
                path: "/vehicles/:id",
                element: <Vehicles/>,
                errorElement: <NotFound/>,
            }, 
            {
                path: "/species/:id",
                element: <Species/>,
                errorElement: <NotFound/>,
            }
        ]
    },
]);