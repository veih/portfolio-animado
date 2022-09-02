import React, { useEffect, useState } from "react";

import { Card } from "react-bootstrap";

export const CertificadoAngular = () => {
    const [certificadoAngularImg, setCertificadoAngularImg] = useState([]);

    const certificadoAngular = "Certificado Angular";

    useEffect(() => {
        setCertificadoAngularImg("https://veih.github.io/portfolio-animado/assets/certificados/certificadoAngular.jpg");
    }, []);
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