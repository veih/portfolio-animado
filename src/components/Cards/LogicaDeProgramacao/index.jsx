import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const LogicaDeProgramacao = () => {
    const [LogicaDeProgramacaoImg, setLogicaDeProgramacaoImg] = useState([]);
    const LogicaDeProgramacao = "Logica de Programacao";

    useEffect(() => {
        setLogicaDeProgramacaoImg("https://veih.github.io/portfolio-animado/assets/certificados/LogicaDeProgramacao.jpg");
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
                <Card.Title>{LogicaDeProgramacao}</Card.Title>
                <img src={LogicaDeProgramacaoImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Logica de Programacao.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}