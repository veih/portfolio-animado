import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const JogoDaVelha = () => {
    const [JogoDaVelhaImg, setJogoDaVelhaImg] = useState([]);
    const JogoDaVelha = "Jogo da Velha";
    
    useEffect(() => {
        setJogoDaVelhaImg("https://veih.github.io/portfolio-animado/assets/certificados/JogoDaVelha.jpg");
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
                <Card.Title>{JogoDaVelha}</Card.Title>
                <img src={JogoDaVelhaImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}