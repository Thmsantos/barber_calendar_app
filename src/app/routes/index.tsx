import { createBrowserRouter } from "react-router-dom";
import Presentation from "../../pages/Presentation";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Presentation />
    }
])