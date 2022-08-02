import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import './IconsCursos.css';

export const IconsCursos = () => {
    const [certificados, setCertificados] = useState(false);
    const [certificadoHTML, setCertificadoHTML] = useState(false);
    const [certificadoJS, setCertificadoJS] = useState(false);
    const [certificadoTS, setCertificadoTS] = useState(false);
    const [certificadoReact, setCertificadoReact] = useState(false);
    const [certificadoBootstrap, setCertificadoBootstrap] = useState(false);

    const handleCertificadoDB = () => {
        setCertificados(!certificados);
    }

    const handleCertificadoHTML = () => {
        setCertificadoHTML(!certificadoHTML);
    }

    const handleCertificadoBootstrap = () => {
        setCertificadoBootstrap(!certificadoBootstrap);
    }

    const handleCertificadoJS = () => {
        setCertificadoJS(!certificadoJS);
    }

    const handleCertificadoTS = () => {
        setCertificadoTS(!certificadoTS);
    }

    const handleCertificadoReact = () => {
        setCertificadoReact(!certificadoReact);
    }

    return (
        <div id="cursor" className="matrix">

            <div className="efeito ">
                <div className="a1">
                    <i className="bi bi-calendar2-week-fill modal-button" onClick={handleCertificadoDB} title="Certificado Banco de dados"></i>
                </div>

                <Modal show={certificados} onHide={handleCertificadoDB}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="img" src="https://veih.github.io/portfolio-animado/assets/certificados/certificadoBancodedados.jpg" alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleCertificadoDB}>Fechar</button>
                    </Modal.Footer>
                </Modal>

            </div>
            <div className="efeito ">
                <div className="a2">
                    <i className="bi bi-filetype-html" onClick={handleCertificadoHTML} title="Certificado HTML 5 e CSS 3"></i>
                </div>

                <Modal show={certificadoHTML} onHide={handleCertificadoHTML}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <img className="img" src="https://veih.github.io/portfolio-animado/assets/certificados/certificadoHTML5.jpg" alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleCertificadoHTML}>Fechar</button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="efeito ">
                <div className="a3">
                    <i className="bi bi-filetype-js" onClick={handleCertificadoJS} title="Certificado Javasrcipt"></i>
                </div>

                <Modal show={certificadoJS} onHide={handleCertificadoJS}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <img className="img" src="https://veih.github.io/portfolio-animado/assets/certificados/certificadoJavascript.jpg" alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleCertificadoJS}>Fechar</button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="efeito">
                <div className="a4">
                    <i className="bi bi-filetype-tsx" onClick={handleCertificadoTS} title="Certificado Typescript"></i>
                </div>

                <Modal show={certificadoTS} onHide={handleCertificadoTS}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <img className="img" src="https://veih.github.io/portfolio-animado/assets/certificados/certificadoTS.jpg" alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleCertificadoTS}>Fechar</button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="efeito">
                <div className="a5">
                    <i className="bi bi-filetype-jsx" onClick={handleCertificadoReact} title="Certificado React,js"></i>
                </div>

                <Modal show={certificadoReact} onHide={handleCertificadoReact}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <img className="img" src="https://veih.github.io/portfolio-animado/assets/certificados/certificadoReactJS.jpg" alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleCertificadoReact}>Fechar</button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="efeito">
                <div className="a6">
                    <i className="bi bi-bootstrap" onClick={handleCertificadoBootstrap} title="Certificado Bootstrap 4"></i>
                </div>

                <Modal show={certificadoBootstrap} onHide={handleCertificadoBootstrap}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <img className="img" src="https://veih.github.io/portfolio-animado/assets/certificados/certificadoBootstrap4.jpg" alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleCertificadoBootstrap}>Fechar</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}