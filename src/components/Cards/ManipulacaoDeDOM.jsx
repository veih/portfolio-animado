import React from "react";
import { Card } from "react-bootstrap";

export const ManipulacaoDeDOM = () => {
    const ManipulacaoDeDOM = "Manipulação de DOM";

    const ManipulacaoDeDOMImg = ("https://veih.github.io/portfolio-animado/assets/certificados/ManipulacaoDeDOM.jpg");
    

    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{ManipulacaoDeDOM}</Card.Title>
                <img src={ManipulacaoDeDOMImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Manipulação de DOM.
                    B7Web
                </Card.Text>
            </Card.Body>
        </div>
    );
}