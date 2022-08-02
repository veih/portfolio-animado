import React from "react";

import { Card } from "react-bootstrap";

export const PageBootstrap = () => {
    const PageBootstrap = "Page Bootstrap";
    const PageBootstrapImg = "/public/assets/certificados/PageBootstrap.jpg";

    const styles = {
        image: {
            width: "100%",
            height: "auto"
        }
    };

    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>{PageBootstrap}</Card.Title>
                <img src={PageBootstrapImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Page Bootstrap.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}