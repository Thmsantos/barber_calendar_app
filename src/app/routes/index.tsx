import { createBrowserRouter } from "react-router-dom";
import Presentation from "../../pages/Presentation";
import BarberPage from "../../pages/BarberPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Presentation />
    },
    {
        path: "/barber/:id",
        element: <BarberPage />
    }
])