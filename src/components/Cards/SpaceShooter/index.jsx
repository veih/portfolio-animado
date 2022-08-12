import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const SpaceShooter = () => {
    const [SpaceShooterImg, setSpaceShooterImg] = useState([]);
    const SpaceShooter = "Space Shooter";
    
    useEffect(() => {
        setSpaceShooterImg("https://veih.github.io/portfolio-animado/assets/certificados/SpaceShooter.jpg");
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
                <Card.Title>{SpaceShooter}</Card.Title>
                <img src={SpaceShooterImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Space Shooter.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}