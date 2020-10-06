import React, { Component } from 'react';
import '../Css/Pantallaprincipal.css'; 
import '../Css/Trofeos.css'; 
class Trofeos extends Component {
    
    Pantallaprincipal=()=>{
        window.location.href="./Pantallaprincipal"; 
    }
    Trofeos=()=>{
        window.location.href="./Trofeos"; 
    }
    Raking=()=>{
        window.location.href="./Raking"; 
    }
    Perfil=()=>{
        window.location.href="./Perfil"; 

    }
    Donaciones=()=>{
        window.location.href="./Donaciones"; 

    }
    render() {
        return (
            
            <header className="Pantalla">
            <div className="title" >
            <p>TROFEOS</p> 
            <br/>
            
            
            <div className="Trofeo1"> 
            <p>¡SE EL PRIMERO!
            <br/>
            Se obtiene al ganar el primer
            <br/>
             puesto
            </p>
            </div>
            <br/>
            <div className="Barra">
            <button className="Menu" onClick={()=>this.Pantallaprincipal()}></button>
            <br/>
            <button className="Trofeos" onClick={()=>this.Trofeos()}></button>
            <br/>
            <button className="Raking" onClick={()=>this.Raking()}></button>
            <br/>
            <button className="Perfil" onClick={()=>this.Perfil()}></button>
            <br/>
            <button className="Donaciones" onClick={()=>this.Donaciones()}></button>
            <br/>
            <button className="Busqueda" ></button>
            <br/>
            </div>
            </div>
            </header>

    );
    }
}
export default Trofeos;