import React from "react";
import { Card } from "react-bootstrap";

export const CertificadoAngular = () => {

    const certificadoAngular = "Certificado Angular";

    const CertificadoAngularImg = "https://veih.github.io/portfolio-animado/assets/certificados/certificadoAngular.jpg"
       
    const styles = {
        image: {
            width: "75%",
            height: "auto",
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{certificadoAngular}</Card.Title>
                <img src={CertificadoAngularImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Angular.
                    B7 Web
                </Card.Text>
            </Card.Body>
        </div>
    );
}