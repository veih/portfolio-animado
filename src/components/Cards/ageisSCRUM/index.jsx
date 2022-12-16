import React from "react";
import { useState, useEffect } from "react";

import { Card } from "react-bootstrap";

export const AgeisSCRUM = () => {
    const [AgeisSCRUMImg, setAgesSCRUMImg] = useState();

    const AgeisSCRUM = "Ageis SCRUM";

    useEffect(() => {
        setAgesSCRUMImg('https://veih.github.io/portfolio-animado/assets/certificados/ageisSCRUM.jpg');
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
                <Card.Title>{AgeisSCRUM}</Card.Title>
                <img src={AgeisSCRUMImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Ageis SCRUM.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}