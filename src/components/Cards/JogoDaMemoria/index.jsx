import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const JogoDaMemoria = () => {
    const [JogoDaMemoriaImg, setJogoDaMemoriaImg] = useState([]);
    const JogoDaMemoria = "Jogo da Memoria";
    
    useEffect(() => {
        setJogoDaMemoriaImg("https://veih.github.io/portfolio-animado/assets/certificados/JogoDaMemoria.jpg");
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
                <Card.Title>{JogoDaMemoria}</Card.Title>
                <img src={JogoDaMemoriaImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}