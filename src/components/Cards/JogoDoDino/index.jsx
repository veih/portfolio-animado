import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const JogoDoDino = () => {
    const [JogoDoDinoImg, setJogoDoDinoImg] = useState([]);
    const JogoDoDino = "Jogo do Dino";

    useEffect(() => {
        setJogoDoDinoImg("https://veih.github.io/portfolio-animado/assets/certificados/JogoDoDino.jpg");
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
                <Card.Title>{JogoDoDino}</Card.Title>
                <img src={JogoDoDinoImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}