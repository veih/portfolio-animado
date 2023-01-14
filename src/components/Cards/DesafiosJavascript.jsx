import React from "react";
import { Card } from "react-bootstrap";

export const DesafiosJavascript = () => {
    const DesafiosJavascript = "Desafios Javascript";
   
    const DesafiosJavascriptImg = ("https://veih.github.io/portfolio-animado/assets/certificados/DesafiosJavascript.jpg");
    

    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{DesafiosJavascript}</Card.Title>
                <img src={DesafiosJavascriptImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </div>
    );
}