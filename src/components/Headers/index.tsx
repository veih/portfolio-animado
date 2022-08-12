import React from 'react';

import { Link } from 'react-router-dom';
import { IconsRedesSocias } from '../iconsRedesSocias/index';

import './Header.css';


export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/portfolio-animado/">Home</Link>
                            <div className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projetos
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <div><Link className="dropdown-item" to="/portfolio-animado/Cocacola">Coca Cola</Link></div>
                                    <div><Link className="dropdown-item" to="/portfolio-animado/SannaESerra">Evantos no Sanna</Link></div>
                                    <div><Link className="dropdown-item" to="/portfolio-animado/Calculadora">Calculadora</Link></div>
                                    <div><Link className="dropdown-item" to="/portfolio-animado/Bolhas">Bolhas</Link></div>
                                </div>
                            </div>
                            <Link className="nav-link" to="/portfolio-animado/Cursos">Cursos</Link>
                            <Link className="nav-link" to="/Cursos">Pricing</Link>

                        </div>
                    </div>
                </div>
                <IconsRedesSocias />
            </nav>
        </header>
    )
}