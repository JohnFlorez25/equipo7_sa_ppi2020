import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Normasconduccion.css'; 

 
class informacion extends Component {
    respuesta1=()=>{
        window.location.href="./Pregunta1";
    }
    
    render() {
        return (
            
        <header className="Pantalla">
        <div className="Op1cuestionarioN1_1">
      <center>
        <h1 className="N2">NORMAS DE LOS PEATONES</h1>
      </center>
      <center><h2>ARTICULO 57. CIRCULACIÓN DE PEATONES.</h2></center>
      <p className="Pregunta1">Este 
articulo a lo que se refiere es que el peaton no 
debe de estar fuera de sus zonas transitoria 
(andenes, aceras,puentes peatonales, etc...). El
peatón solo podra cruzar una vía vehicular cuando
sea requerido y lo hará respetando las señales de transito y asegurandose de que no este en peligro al
hacerlo. </p>
<center><h2>ARTICULO 58. PROHIBICIONES A LOS PEATONES.</h2></center>
      <p className="Pregunta1">Este 
      Los peatones tienen unas prohibiciones expeciales las cuales son: </p>
      <p className="Pregunta1">- Invadir la zona destinada al tránsito de vehículos, ni transitar en ésta en patines, monopatines, patinetas o similares.
</p>
<p className="Pregunta1">- Llevar, sin las debidas precauciones, elementos que puedan obstaculizar o afectar el tránsito. 
</p>
<p className="Pregunta1">- Cruzar por sitios no permitidos o transitar sobre el guardavías del ferrocarril.
</p>
<p className="Pregunta1">- Colocarse delante o detrás de un vehiculo que tenga el motor encendido.</p>
<p className="Pregunta1">-Remolcarse de vehículos en movimiento.</p>
<p className="Pregunta1">-Actuar de manera que ponga en peligro su integridad física.</p>

      <button
        type="button"
        class="btn1 btn-info btn-lg btn-block"
        onClick={() =>  this.respuesta1()}
      >Termine</button>
      </div>
      </header>
        );
      }
      }
      export default informacion; 