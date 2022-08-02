import React from "react";

import { Card } from "react-bootstrap";

export const CertificadoAngular = () => {
    const certificadoAngular = "Certificado Angular";
    const certificadoAngularImg = "/public/assets/certificados/certificadoAngular.jpg";

    const styles = {
        image: {
            width: "100%",
            height: "auto"
        }
    };

    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>{certificadoAngular}</Card.Title>
                <img src={certificadoAngularImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Angular.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}