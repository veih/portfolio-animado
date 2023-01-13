import React from "react";
import { Card } from "react-bootstrap";

export const SpaceShooter = () => {
    const SpaceShooter = "Space Shooter";

    const SpaceShooterImg = ("https://veih.github.io/portfolio-animado/assets/certificados/SpaceShooter.jpg");

    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{SpaceShooter}</Card.Title>
                <img src={SpaceShooterImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Space Shooter.
                    B7Web
                </Card.Text>
            </Card.Body>
        </div>
    );
}