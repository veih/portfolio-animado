import React from "react";

import { Card } from "react-bootstrap";

export const AgeisSCRUM = () => {
    const AgeisSCRUM = "Ageis SCRUM";
    const AgeisSCRUMImg = "/public/assets/certificados/AgeisSCRUM.jpg";

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