import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Normasconduccion.css'; 

 
class Pregunta2 extends Component {
    respuesta2=()=>{
        window.location.href="./Pregunta3";
    }
    
    render() {
        return (
            
        <header className="Pantalla">
        <div className="Op1cuestionarioN1_1">
      <center>
        <h1 className="N2">CUESTIONARIO</h1>
      </center>
      <p className="Pregunta1">¿De qué trata el articulo 57? </p>
      <button
        type="button"
        class="btn1 btn-info btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO¡`) || this.respuesta2()}
      >
        Circulación de peatones
      </button>
      <button
        type="button"
        class="btn2 btn-info btn-lg btn-block"
        onClick={() => alert(`INCORRECTO! VUELVE A INTENTARLO`) 
        }
      >
        PROHIBICIONES A LOS PEATONES 
      </button>
      <button
        type="button"
        class="btn3 btn-info btn-lg btn-block"
        onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}
      >
        ÁMBITO DE APLICACIÓN Y PRINCIPIOS
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
export default Pregunta2;