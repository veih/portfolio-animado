import React from "react";
import { Card } from "react-bootstrap";

export const JogoDaMemoria = () => {
    const JogoDaMemoria = "Jogo da Memoria";
    
    const JogoDaMemoriaImg = ("https://veih.github.io/portfolio-animado/assets/certificados/JogoDaMemoria.jpg");
    

    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{JogoDaMemoria}</Card.Title>
                <img src={JogoDaMemoriaImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </div>
    );
}