import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const JogoDeNaves = () => {
    const [JogoDeNavesImg, setJogoDeNavesImg] = useState([]);
    const JogoDeNaves = "Jogo de Naves";

    useEffect(() => {
        setJogoDeNavesImg("https://veih.github.io/portfolio-animado/assets/certificados/JogoDeNaves.jpg");
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
                <Card.Title>{JogoDeNaves}</Card.Title>
                <img src={JogoDeNavesImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}