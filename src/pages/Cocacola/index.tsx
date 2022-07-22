import React from 'react'
import { Link } from 'react-router-dom'

import './Cocacola.css'

export const CocaCola = () => {
    return (

        <div className='cards'>
            <div className="card">
                <div className="circulo">
                    <img src="https://veih.github.io/portfolio-animado/assets/imgCocacola/cocacola_logo.png" alt="#" className="logo" />
                </div>
                <div className="contato">
                    <h1>CocaCola</h1>
                    <p>Para ...! <br /> A sua bebida favorita.</p>
                    <Link to="https://www.coca-cola.com.br/" target="_blank" rel="noopener noreferrer">Explore</Link>
                </div>
                <img src="https://veih.github.io/portfolio-animado/assets/imgCocacola/cocacola2.png" alt="" className="produto" />
            </div>
            <div className="card">
                <div className="circulor">
                    <img src="https://veih.github.io/portfolio-animado/assets/imgCocacola/logo_sprite.jpg" alt="#" className="logo_sprite" />
                </div>
                <div className="contato">
                    <h1>Sprite</h1>
                    <p>Para ...! <br /> A sua bebida favorita.</p>
                    <Link to="#" target="_blank" rel="noopener noreferrer">Explore</Link>
                </div>
                <img src="https://veih.github.io/portfolio-animado/assets/imgCocacola/sprite2.png" alt="" className="produto" />
            </div>
        </div>
    )
}
