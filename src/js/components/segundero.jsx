// //create your first component
// import React, { useState, useEffect } from "react";

// const Segundero = (props) => {
//     const [contador, setContador] = useState(props.inicio);

//     useEffect(() => {
//         const intervalo = setInterval(() => {
//             setContador((valorAnterior) =>
//                 props.tipo === "regresiva" ? valorAnterior - 1 : valorAnterior + 1
//             );
//         }, props.lapso);

//         return () => clearInterval(intervalo);
//     }, [props.lapso, props.tipo]);

//     return (
//         <div className="container text-center cuadro">
//             <p>{contador}</p>
//         </div>
//     );
// };

// export default Segundero;

import React from "react";

const Segundero = (props) => {
    const { inicio, lapso } = props;
    let contador = inicio;

    setInterval(() => {
       
            contador++;
            const almacenParaContador = document.getElementById(`contador-${lapso}`);
            if (almacenParaContador) almacenParaContador.innerText = contador%10;

    }, lapso);
    
    
    return (
        <div className="container text-center cuadro">
            <p id={`contador-${lapso}`}>{contador}</p>
        </div>
    );
};

export default Segundero;
