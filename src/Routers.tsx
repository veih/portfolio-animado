import React from "react"

import { useRoutes } from "react-router-dom"
import { CocaCola } from "./pages/Cocacola"
import { Cursos } from "./pages/Cursos"
import { Home } from "./pages/Home"

export const Routers = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/portfolio-animado/", element: <Home /> },
        { path: "/Cocacola", element: <CocaCola /> },
        { path: "/Cursos", element: <Cursos /> },
    ])
}