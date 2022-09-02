import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const CertificadoHTML = () => {
    const [HTMLImg, setHTMLImg] = useState([]);
    const HTML = "Curso de HTML";
    
    useEffect(() => {
        setHTMLImg("https://veih.github.io/portfolio-animado/assets/certificados/certificadoHTML5.jpg");
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
                <Card.Title>{HTML}</Card.Title>
                <img src={HTMLImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de HTML5.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}