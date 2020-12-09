import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Normasconduccion.css'; 

 
class Pregunta1 extends Component {
    respuesta1=()=>{
        window.location.href="./Pregunta2";
    }
    
    render() {
        return (
            
        <header className="Pantalla">
        <div className="Op1cuestionarioN1_1">
      <center>
        <h1 className="N2">CUESTIONARIO</h1>
      </center>
      <p className="Pregunta1">Un peaton NO puede </p>
      <button
        type="button"
        class="btn1 btn-info btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO¡`) || this.respuesta1()}
      >
        Llevar, sin las debidas precauciones, elementos 
        que puedan obstaculizar o afectar el tránsito. 
      </button>
      <button
        type="button"
        class="btn2 btn-info btn-lg btn-block"
        onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`) 
        }
      >
        Cruzar una vía vehicular cuando sea requerido respetando las señales de transito y asegurandose de que no este en peligro al hacerlo. 
      </button>
      <button
        type="button"
        class="btn3 btn-info btn-lg btn-block"
        onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}
      >
        Pasar la vía vehicular cuando el semaforo este en rojo.
      </button>
      <button
        type="button"
        class="btn4 btn-info btn-lg btn-block"
        onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}
      >
        Ninguna
      </button>
            </div>
            </header>

    );
    }
}
export default Pregunta1;