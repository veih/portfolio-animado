import React from "react";
import { Card } from "react-bootstrap";

export const CertificadoVueJS = () => {
    const certificadoVueJS = "Certificado VueJS";

    const CertificadoVueJSImg = ('https://veih.github.io/portfolio-animado/assets/certificados/certificadoVueJS.jpg');
    

    const styles = {
        image: {
            width: "75%",
            height: "auto"
        }
    };

    return (
        <div className="card-container">
            <Card.Body>
                <Card.Title>{certificadoVueJS}</Card.Title>
                <img src={CertificadoVueJSImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de VueJS.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </div>
    );
}