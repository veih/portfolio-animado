import React from "react"
import { useRoutes } from "react-router-dom"
import { Main } from "./components/Mains"

import { CocaCola } from "./pages/Cocacola"
import { Cursos } from "./pages/Cursos"
import { Home } from "./pages/Home"

export const Routers = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/home", element: <Main /> },
        { path: "/pages/Cocacola", element: <CocaCola /> },
        { path: "/pages/Cursos", element: <Cursos /> },
    ]
    )
}