import React from "react";

import './IconsRedesSocias.css';

export const IconsRedesSocias = () => {
    return (
        <div className=" icons cursor">
            <a href="https://github.com/veih" target="_blank" rel="noopener noreferrer">

                <i className="bi bi-github" id="github"></i>
            </a>
            <a href="https://www.linkedin.com/in/marcelo-evangelista-847515175/" target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-linkedin" id="linkedin"></i>

            </a>
            <a href="https://www.instagram.com/marceloveih/" target="_blank" rel="noopener noreferrer">

                <i className="bi bi-instagram" id="instagram"></i>
            </a>
            <a href="https://www.facebook.com/veihbabal/" target="_blank" rel="noopener noreferrer">

                <i className="bi bi-facebook" id="facebook"></i>
            </a>
            <a href="#(85)999568243" onClick={() => { alert("Para contato, entre em contato pelo telefone: (85)9995-68243") }}
                rel="noopener noreferrer">

                <i className="bi bi-whatsapp" id="whatsapp"></i>
            </a>
            <a href="https://twitter.com/Babal92258376" target="_blank" rel="noopener noreferrer">

                <i className="bi bi-twitter" id="twitter"></i>
            </a>
        </div>
    )
}