import React from "react";
import { Card } from "react-bootstrap";

export const JogoDoDino = () => {
    const JogoDoDino = "Jogo do Dino";

    const JogoDoDinoImg = ("https://veih.github.io/portfolio-animado/assets/certificados/JogoDoDino.jpg");
    

    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{JogoDoDino}</Card.Title>
                <img src={JogoDoDinoImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </div>
    );
}