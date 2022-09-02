import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const ManipulacaoDeDOM = () => {
    const [ManipulacaoDeDOMImg, setManipulacaoDeDOMImg] = useState([]);
    const ManipulacaoDeDOM = "Manipulação de DOM";

    useEffect(() => {
        setManipulacaoDeDOMImg("https://veih.github.io/portfolio-animado/assets/certificados/ManipulacaoDeDOM.jpg");
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
                <Card.Title>{ManipulacaoDeDOM}</Card.Title>
                <img src={ManipulacaoDeDOMImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Manipulação de DOM.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}