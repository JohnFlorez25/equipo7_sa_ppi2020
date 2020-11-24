import React, { Component } from 'react';
import '../Css/Pantallaprincipal.css'; 
import '../Css/Raking.css'; 
 
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
    Busqueda=()=>{
        alert('En construcción');

    }
    render() {
        return (
            
            <header className="Pantalla">
            <div className="title" >
            <p>RAKING</p> 
            <br/>
            <div className="perfil">
                <p>
                    Brayan Suárez Restrepo
                    <br/>
                    0pts
                </p>
            </div>
            <div className="Trofeo5"></div>
            <div className="Menu0">
            <button className="Menu" onClick={()=>this.Pantallaprincipal()}></button>
            
            <button className="Trofeos" onClick={()=>this.Trofeos()}></button>
            
            <button className="Raking" onClick={()=>this.Raking()}></button>
            
            <button className="Perfil" onClick={()=>this.Perfil()}></button>
            
            <button className="Donaciones" onClick={()=>this.Donaciones()}></button>
            
            <button className="Busqueda" onClick={() => this.Busqueda()}></button>
            
            </div>
            </div>
            </header>

    );
    }
}
export default Trofeos;