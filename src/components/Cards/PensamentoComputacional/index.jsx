import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const PensamentoComputacional = () => {
    const [PensamentoComputacionalImg, setPensamentoComputacionalImg] = useState([]);
    const PensamentoComputacional = "Pensamento Computacional";

    useEffect(() => {
        setPensamentoComputacionalImg("https://veih.github.io/portfolio-animado/assets/certificados/PensamentoComputacional.jpg");
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