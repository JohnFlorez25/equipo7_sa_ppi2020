import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Normasconduccion.css'; 

 
class Pregunta3 extends Component {
    
    respuesta3=()=>{
        window.location.href="./Normasconduccion";
    }
    render() {
       
        return (
            
        <header className="Pantalla">
        <div className="Op1cuestionarioN1_1">
      <center>
        <h1 className="N2">CUESTIONARIO</h1>
      </center>
      <p className="Pregunta1">"El
peatón solo podra cruzar una vía vehicular cuando
sea requerido y lo hará respetando las señales de transito y asegurandose de que no este en peligro al
hacerlo." Este texto hace parte del articulo... </p>
      <button
        type="button"
        class="btn1 btn-info btn-lg btn-block"
        onClick={() => alert(`INCORRECTO! VUELVE A INTENTARLO`)}
      >
        56
      </button>
      <button
        type="button"
        class="btn2 btn-info btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO¡`) || this.respuesta3() 
        }
      >
        57 
      </button>
      <button
        type="button"
        class="btn3 btn-info btn-lg btn-block"
        onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}
      >
        58
      </button>
      <button
        type="button"
        class="btn4 btn-info btn-lg btn-block"
        onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}
      >
        60
      </button>
            </div>
            </header>

    );
    }
}
export default Pregunta3;