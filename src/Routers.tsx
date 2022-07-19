import React from "react"
import { useRoutes } from "react-router-dom"
import { Main } from "./pages/Mains/index"

import { CocaCola } from "./pages/Cocacola"
import { Cursos } from "./pages/Cursos"
import { Home } from "./pages/Home"

export const Routers = () => {
    return useRoutes([
        { path: "/portfolio-animado/", element: <Home /> },
        { path: "/portfolio-animado/Cocacola", element: <CocaCola /> },
        { path: "/pages/Cursos", element: <Cursos /> },
    ]
    )
}