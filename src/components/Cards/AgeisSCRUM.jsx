import React from "react";
import { Card } from "react-bootstrap";

export const AgeisSCRUM = () => {

    const AgeisSCRUM = "Ageis SCRUM";
    const AgeisSCRUMImg = `https://veih.github.io/portfolio-animado/assets/certificados/ageisSCRUM.jpg`
        

    const styles = {
        image: {
            width: "75%",
            height: "auto",
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{AgeisSCRUM}</Card.Title>
                <img src={AgeisSCRUMImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Ageis SCRUM.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </div>
    );
}