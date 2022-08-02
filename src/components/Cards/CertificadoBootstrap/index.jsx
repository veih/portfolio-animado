import React from "react";

import { Card } from "react-bootstrap";

export const CertificadoBootstrap = () => {
    const Bootstrap = "Curso de Bootstrap";
    const BootstrapImg = "/public/assets/certificados/certificadoBootstrap4.jpg";

    const styles = {
        image: {
            width: "100%",
            height: "auto"
        }
    };

    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>{Bootstrap}</Card.Title>
                <img src={BootstrapImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Bootstrap 4.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}