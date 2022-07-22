import React from "react"

import { useRoutes } from "react-router-dom"
import { CocaCola } from "./pages/Cocacola"
import { Cursos } from "./pages/Cursos"
import { Home } from "./pages/Home"
import { SannaESerra } from "./pages/SannaESerra"

export const Routers = () => {
    
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/portfolio-animado/", element: <Home /> },
        { path: "/Cocacola", element: <CocaCola /> },
        { path: "/SannaESerra", element: <SannaESerra /> },
        { path: "/Cursos", element: <Cursos /> },
    ])
}