import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Normasconduccion.css'; 
class Normasconduccion extends Component {
    nivel1=()=>{
        alert('En construcción');
    }
    nivel2=()=>{
        alert('En construcción');
    }
    nivel3=()=>{
        alert('En construcción');
    }
    Pantallaprincipal=()=>{
        window.location.href="./Pantallaprincipal";
 
    }
    render() {
        
        return (
            <div className="niveles">
                <div className="titulo">Escoge el nivel</div>
                <button className="nivel1" onClick={()=>this.nivel1()}>NORMAS DE PEATONES, LICENCIAS DE
                CONDUCCIÓN Y EQUIPO DE CARRETERAS</button>
                
                <button className="nivel2" onClick={()=>this.nivel2()}>COMPORTAMIENTO EN LA VÍA, AUTORIDADES
                DE TRANSITO Y CONDUCCIÓN DE VEHICULO </button>
                
                <button className="nivel3" onClick={()=>this.nivel3()}>UTILIZACIÓN DE SEÑALES, VÍAS PUBLICAS,
                REMOLQUES.</button>

                <button className="Regresar" onClick={()=>this.Pantallaprincipal()}>Regresar</button>
            </div>
        );
    }
}
export default Normasconduccion; 