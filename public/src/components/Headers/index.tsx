import { Link } from 'react-router-dom';
import { React} from 'react'; 

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
                                    <div><Link className="dropdown-item" to="#">Another action</Link></div>
                                    <div><Link className="dropdown-item" to="#">Something else here</Link></div>
                                </div>
                            </div>
                            <Link className="nav-link" to="/portfolio-animado/Cursos">Cursos</Link>
                            <Link className="nav-link" to="/portfolio-animado/Cursos">Pricing</Link>

                        </div>
                    </div>
                </div>
                <div className=" icons">
                    <Link to="https://github.com/veih" target="_blank" rel="noopener noreferrer">

                        <i className="bi bi-github" id="github"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/marcelo-evangelista-847515175/" target="_blank"
                        rel="noopener noreferrer">
                        <i className="bi bi-linkedin" id="linkedin"></i>

                    </Link>
                    <Link to="https://www.instagram.com/marceloveih/" target="_blank" rel="noopener noreferrer">

                        <i className="bi bi-instagram" id="instagram"></i>
                    </Link>
                    <Link to="https://www.facebook.com/veihbabal/" target="_blank" rel="noopener noreferrer">

                        <i className="bi bi-facebook" id="facebook"></i>
                    </Link>
                    <Link to="#(85)999568243" onClick={() => { alert("Para contato, entre em contato pelo telefone: (85)9995-68243") }}
                        rel="noopener noreferrer">

                        <i className="bi bi-whatsapp" id="whatsapp"></i>
                    </Link>
                    <Link to="https://twitter.com/Babal92258376" target="_blank" rel="noopener noreferrer">

                        <i className="bi bi-twitter" id="twitter"></i>
                    </Link>
                </div>
            </nav>
        </header>
    )
}