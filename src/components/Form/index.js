//@ts-nocheck
import React, { useState } from "react";
import { calcularTotal } from "../../util";

//when the state is too huge like this you can destructure props in other variables
// const Form = ({cantidad, guardarCantidad,plazo,guardarPlazo}) => {

const Form = (props) => {
  const {
    cantidad,
    guardarCantidad,
    plazo,
    guardarPlazo,
    guardarTotal,
    guardarCargando
  } = props;

  //localstate
  const [error, guardarError] = useState(false);

  //ref for submit input
    
  //component logic
  const leerCantidad = (e) => guardarCantidad(parseInt(e.target.value));

  const leerPlazo = (e) => guardarPlazo(parseInt(e.target.value));

  const calcularPrestamo = (e) => {
    e.preventDefault();
    //validate form inputs
    if (cantidad === 0 && plazo === ''){
       return guardarError(true);
      }
    guardarError(false);

    //spinner
    guardarCargando(true)
    setTimeout(()=>{
          //calc prestamo
    const total = calcularTotal(cantidad, plazo);
    guardarTotal(total);
    guardarCargando(false)
    },2000)

  };

  return (
    <>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Monto a Solicitar</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 100000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo en Cuotas</label>
            <select className="u-full-width" onChange={leerPlazo}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"

            />
          </div>
        </div>
      </form>
      {error ? (
        <p className="error">Ambos campos son obligatorios!</p>
      ) : null}
    </>
  );
};

export default Form;
