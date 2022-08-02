import React from 'react';
import { Card } from 'react-bootstrap';

export const CertificadoBancoDados = () => {
    const Banco = 'Curso de Banco de dados';
    const BancoImg = '/public/assets/certificados/certificadoBancodedados.jpg';

    const styles = {
        image: {
            width: '100%',
            height: 'auto'
        }
    }


    return (

        <Card className="card-container">
            <Card.Body>
                <Card.Title>{Banco}</Card.Title>
                <img src={BancoImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Banco de Dados.
                    B7Web
                </Card.Text>
            </Card.Body>

        </Card>

    )
}