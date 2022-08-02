import React from "react";

import { Card } from "react-bootstrap";

export const JavascriptAssincroo = () => {
    const JavascriptAssincroo = "Javascript Assincroo";
    const JavascriptAssincrooImg = "https://veih.github.io/portfolio-animado/assets/certificados/JavascriptAssincroo.jpg";

    const styles = {
        image: {
            width: "100%",
            height: "auto"
        }
    };

    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>{JavascriptAssincroo}</Card.Title>
                <img src={JavascriptAssincrooImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Javascript.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}