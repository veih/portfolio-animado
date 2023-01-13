import React from "react"

import { useRoutes } from "react-router-dom"
import { Bolhas } from "./pages/Bolhas"
import { Calculadora } from "./pages/Calculadora"
import { CocaCola } from "./pages/Cocacola"
import { Cursos } from "./pages/Cursos"
import { Home } from "./pages/Home"
import { Todo } from "./pages/Todo/Todo"

export const Routers = () => {

    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/portfolio-animado/", element: <Home /> },
        { path: "/portfolio-animado/Cocacola", element: <CocaCola /> },
        { path: "/portfolio-animado/Calculadora", element: <Calculadora /> },
        { path: "/portfolio-animado/Bolhas", element: <Bolhas /> },
        { path: "/portfolio-animado/Cursos", element: <Cursos /> },
        { path: '/portfolio-animado/Todo', element: <Todo />}
    ])
}