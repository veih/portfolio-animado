import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const CertificadoVueJS = () => {
    const [certificadoVueJSImg, setCertificadoVueJSImg] = useState([]);
    const certificadoVueJS = "Certificado VueJS";

    useEffect(() => {
        setCertificadoVueJSImg('https://veih.github.io/portfolio-animado/assets/certificados/certificadoVueJS.jpg');
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
                <Card.Title>{certificadoVueJS}</Card.Title>
                <img src={certificadoVueJSImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de VueJS.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}