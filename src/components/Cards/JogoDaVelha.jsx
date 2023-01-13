import React from "react";
import { Card } from "react-bootstrap";

export const JogoDaVelha = () => {
    const JogoDaVelha = "Jogo da Velha";

    const JogoDaVelhaImg = ("https://veih.github.io/portfolio-animado/assets/certificados/JogoDaVelha.jpg");


    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{JogoDaVelha}</Card.Title>
                <img src={JogoDaVelhaImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </div>
    );
}