import React from "react";

import { Card } from "react-bootstrap";

export const CertificadoGitGithub = () => {
    const certificadoGitGithub = "Certificado Git & Github";
    const certificadoGitGithubImg = "https://veih.github.io/portfolio-animado/assets/certificados/certificadoGitGithub.jpg";

    const styles = {
        image: {
            width: "100%",
            height: "auto"
        }
    };

    return (
        <Card className="card-container">
            <Card.Body>
                <Card.Title>{certificadoGitGithub}</Card.Title>
                <img src={certificadoGitGithubImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Git & Github.
                    Dio.me
                </Card.Text>
            </Card.Body>
        </Card>
    );
}