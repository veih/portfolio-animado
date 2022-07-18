import React from 'react'

import './Cocacola.css'

export const CocaCola = () => {
    return (

        <div className='cards'>
            <div className="card">
                <div className="circulo">
                    <img src="https://veih.github.io/portfolio-animado/assets/cocacola/cocacola_logo.png" alt="#" className="logo" />
                </div>
                <div className="contato">
                    <h1>CocaCola</h1>
                    <p>Para refesca! <br /> A sua bebida favorita.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">Explore</a>
                </div>
                <img src="https://veih.github.io/portfolio-animado/assets/cocacola/cocacola2.png" alt="" className="produto" />
            </div>
            <div className="card">
                <div className="circulor">
                    <img src="https://veih.github.io/portfolio-animado/assets/cocacola/logo_sprite.jpg" alt="#" className="logo_sprite" />
                </div>
                <div className="contato">
                    <h1>Sprite</h1>
                    <p>Para refesca! <br /> A sua bebida favorita.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">Explore</a>
                </div>
                <img src="https://veih.github.io/portfolio-animado/assets/cocacola/sprite2.png" alt="" className="produto" />
            </div>
        </div>
    )
}
