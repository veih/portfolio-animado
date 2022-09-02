import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const OrientacaoObjetoJS = () => {
    const [OrientacaoObjetoJSImg, setOrientacaoObjetoJSImg] = useState([]);
    const OrientacaoObjetoJS = "Orientação a Objetos";
   
    useEffect(() => {
        setOrientacaoObjetoJSImg("https://veih.github.io/portfolio-animado/assets/certificados/OrientacaoObjetoJS.jpg");
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
                <Card.Title>{OrientacaoObjetoJS}</Card.Title>
                <img src={OrientacaoObjetoJSImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Orientação a Objetos.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}