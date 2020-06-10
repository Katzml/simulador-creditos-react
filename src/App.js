//@ts-nocheck
import React,{useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Resultado from './components/Resultado';
import Mensaje from "./components/Mensaje";
import Spinner from './components/Spinner';

function App() {

    // Define state
    //      state       setState
    const [cantidad, guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState('');
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);

    let activeComponent;

    if (cargando) {
      activeComponent = <Spinner/>
    }else if (total === 0) {
      activeComponent = <Mensaje/>
    } else {
      activeComponent = <Resultado 
      cantidad={cantidad}
      total={total}
      plazo={plazo}
      />
    }

  return (
    <div className="App">
      <Header titulo="Simulador de Creditos"/>
      <div className="container">
        <Form 
         cantidad={cantidad}
         guardarCantidad={guardarCantidad}
         plazo={plazo}
         guardarPlazo={guardarPlazo}
         total={total}
         guardarTotal={guardarTotal}
         guardarCargando={guardarCargando}
        />
        <div className="mensajes">
        {activeComponent}
        </div>
      </div>
    </div>
  );
}

export default App;
