import React from "react";
import { Card } from "react-bootstrap";

export const LogicaDeProgramacao = () => {
    const LogicaDeProgramacao = "Logica de Programacao";

    const LogicaDeProgramacaoImg = ("https://veih.github.io/portfolio-animado/assets/certificados/LogicaDeProgramacao.jpg");
    
    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{LogicaDeProgramacao}</Card.Title>
                <img src={LogicaDeProgramacaoImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Logica de Programacao.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </div>
    );
}