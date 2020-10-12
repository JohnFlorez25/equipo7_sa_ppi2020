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
        alert('En construcción');

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
            <div className="Menu1">
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
            <button className="Busqueda" onClick={() => this.Busqueda()}></button>
            <br/>
            </div>
            </div>
            </header>

    );
    }
}
export default Trofeos;