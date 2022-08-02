import React from "react";

import { Card } from "react-bootstrap";

export const CertificadoReactJS = () => {
    const ReactJS = "Curso de ReactJS";
    const ReactJSImg = "/public/assets/certificados/certificadoReactJS.jpg";

    const styles = {
        image: {
            width: "100%",
            height: "auto"
        }
    };

    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>{ReactJS}</Card.Title>
                <img src={ReactJSImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de ReactJS.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}