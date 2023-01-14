import React from "react";
import { Card } from "react-bootstrap";

export const CertificadoBootstrap = () => {

    const Bootstrap = "Curso de Bootstrap";

    const BootstrapImg = ("https://veih.github.io/portfolio-animado/assets/certificados/certificadoBootstrap4.jpg");
   
    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{Bootstrap}</Card.Title>
                <img src={BootstrapImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Bootstrap 4.
                    B7Web
                </Card.Text>
            </Card.Body>
        </div>
    );
}