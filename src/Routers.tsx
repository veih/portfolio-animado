import React from "react"
import { useRoutes } from "react-router-dom"
import { Main } from "./components/Mains"

import { CocaCola } from "./pages/Cocacola"
import { Cursos } from "./pages/Cursos"

export const Routers = () => {
    return useRoutes([
        { path: "/portfolio-animado/", element: <Main /> },
        { path: "/home", element: <Main /> },
        { path: "/pages/Cocacola", element: <CocaCola /> },
        { path: "/pages/Cursos", element: <Cursos /> },
    ]
    )
}