import React from "react";

import { Card } from "react-bootstrap";

export const CertificadoTypescript = () => {
    const Typescript = "Curso de Typescript";
    const TypescriptImg = "https://veih.github.io/portfolio-animado/assets/certificados/certificadoTS.jpg";

    const styles = {
        image: {
            width: "100%",
            height: "auto"
        }
    };

    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>{Typescript}</Card.Title>
                <img src={TypescriptImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Typescript.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}