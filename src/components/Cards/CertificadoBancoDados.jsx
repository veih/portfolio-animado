import React from 'react';
import { Card } from 'react-bootstrap';

export const CertificadoBancoDados = () => {

    const Banco = 'Curso de Banco de dados';
    
    const BancoImg = 'https://veih.github.io/portfolio-animado/assets/certificados/certificadoBancodedados.jpg';
    

    const styles = {
        image: {
            width: '75%',
            height: 'auto'
        }
    }


    return (

        <div className="card-container">
            <Card.Body>
                <Card.Title>{Banco}</Card.Title>
                <img src={BancoImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Banco de Dados.
                    B7Web
                </Card.Text>
            </Card.Body>

        </div>

    )
}