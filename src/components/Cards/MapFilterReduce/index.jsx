import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const MapFilterReduce = () => {
    const [MapFilterReduceImg, setMapFilterReduceImg] = useState([]);
    const MapFilterReduce = "Map/Filter/Reduce";

    useEffect(() => {
        setMapFilterReduceImg("https://veih.github.io/portfolio-animado/assets/certificados/MapFilterReduce.jpg");
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
                <Card.Title>{MapFilterReduce}</Card.Title>
                <img src={MapFilterReduceImg} style={styles.image} />
                <Card.Text>
                    Certificado de conclusão do curso de Map/Filter/Reduce.
                    B7Web
                </Card.Text>
            </Card.Body>
        </Card>
    );
}