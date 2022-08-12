import React, { useEffect, useState } from "react";

import { Card } from "react-bootstrap";

export const CertificadoJavascript = () => {
    const [JavascriptImg, setJavascriptImg] = useState([]);
    const Javascript = "Curso de Javascript";
    
    useEffect(() => {
        setJavascriptImg("https://veih.github.io/portfolio-animado/assets/certificados/certificadoJavascript.jpg");
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
                <Card.Title>{Javascript}</Card.Title>
                <img src={JavascriptImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}