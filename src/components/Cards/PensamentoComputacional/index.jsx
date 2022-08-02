import React from "react";

import { Card } from "react-bootstrap";

export const PensamentoComputacional = () => {
    const PensamentoComputacional = "Pensamento Computacional";
    const PensamentoComputacionalImg = "/public/assets/certificados/PensamentoComputacional.jpg";

    const styles = {
        image: {
            width: "100%",
            height: "auto"
        }
    };

    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>{PensamentoComputacional}</Card.Title>
                <img src={PensamentoComputacionalImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Pensamento Computacional.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}