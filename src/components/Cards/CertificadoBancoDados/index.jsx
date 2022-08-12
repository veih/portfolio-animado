import React from 'react';
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const CertificadoBancoDados = () => {
    const [BancoImg, setBancoImg] = useState([]);

    const Banco = 'Curso de Banco de dados';
    
    useEffect(() => {
        setBancoImg('https://veih.github.io/portfolio-animado/assets/certificados/certificadoBancodedados.jpg');
    }, []);

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