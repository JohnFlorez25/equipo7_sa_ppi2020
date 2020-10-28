import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Normasconduccion.css'; 
class Señalestransito extends Component {
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
                <button className="nivel1" onClick={()=>this.nivel1()}>SEÑALES DE TRANSITO INFORMATIVAS</button>
                
                <button className="nivel2" onClick={()=>this.nivel2()}>SEÑALES DE TRANSITO REGLAMENTARIAS </button>
                
                <button className="nivel3" onClick={()=>this.nivel3()}>SEÑALES DE TRANSITO PRESEVARTIDAS Y FLECHAS BLANCAS</button>

                <button className="Regresar" onClick={()=>this.Pantallaprincipal()}>Regresar</button>
            </div>
        );
    }
}
export default Señalestransito; 