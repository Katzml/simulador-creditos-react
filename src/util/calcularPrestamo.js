//@ts-nocheck
const calcularTotal = (cantidad, plazo) => {
  let totalCantidad = 0;
  let prestamoAfterPlazo = 0;

  switch (cantidad > 0) {
    case cantidad <= 1000:
      totalCantidad = cantidad * 0.25;
      break;

    case cantidad > 1000 && cantidad <= 5000:
      totalCantidad = cantidad * 0.20;
      break;

    case cantidad > 5000 && cantidad <= 10000:
      totalCantidad = cantidad * 0.15;
      break;

    case cantidad > 10000:
      totalCantidad = cantidad * 0.10;
      break;

    default:
      console.info("No valid number!");
      break;
  }

  const prestamoBeforePlazo = cantidad + totalCantidad;

  //Calculate plazo tax

  switch (plazo) {
    case 3:
      prestamoAfterPlazo =prestamoBeforePlazo * 0.05;
      break;

    case 6:
      prestamoAfterPlazo = prestamoBeforePlazo * 0.10;
      break;

    case 12:
      prestamoAfterPlazo = prestamoBeforePlazo * 0.15;
      break;

    case 24:
      prestamoAfterPlazo = prestamoBeforePlazo * 0.20;
      break;

    default:
        console.info("No valid number!");
      break;
  }

   return Math.round(prestamoBeforePlazo+prestamoAfterPlazo);
  
};

export default calcularTotal;
