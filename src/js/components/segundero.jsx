//create your first component
import React, { useState, useEffect } from "react";

const Segundero = (props) => {
    const [contador, setContador] = useState(props.inicio);
    let valorAnterior = props.inicio;

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador(valorAnterior = valorAnterior + 1);
        }, props.lapso);

        return () => clearInterval(intervalo); 
    }, []);

    return (
        <div className="container text-center cuadro">
            <p>{contador}</p>
        </div>
    );
};

export default Segundero;