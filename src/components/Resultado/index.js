//@ts-nocheck
import React from 'react';

const Resultado = ({cantidad, plazo, total}) => {

    const calcTotal = ()=>(total/plazo).toFixed(2);

    return (
    <div className="u-full-width resultado">
        <h3>Resumen del Prestamo</h3>
    <p><b>Cantidad Solicitada: </b>${cantidad}</p> 
    <p><b>En un plazo de: </b>{plazo} Meses</p> 
    <p><b>Valor cuota: </b>${calcTotal()}</p>
    <p><b>Total a pagar: </b>${total}</p> 
    </div>
    );
}
 
export default Resultado;