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
    Busqueda=()=>{
        alert('En construcción');

    }
    render() {
        return (
            
            <header className="Pantalla">
            <div className="title" >
            <p>TROFEOS</p> 
            <br/>
            
            <div className="movertitulos">
            <div className="Trofeo1"> 
            <p className="texto1">¡SE EL PRIMERO!
            <br/>
            Se obtiene al ganar el primer puesto
            </p>
            </div>
            <br/>
            <div className="Trofeo2"> 
            <p>¡Game Over!
            <br/>
            Se obtiene por haber terminado el modo
            <br/>
             de jugar "Normas de conducción"
            </p>
            </div>
            <br/>
            <div className="Trofeo3"> 
            <p>¡Alma Generosa!
            <br/>
            Se obtiene por haberles donado dinero
            <br/>
            a los creadores de Al Volante
            </p>
            </div>
            <br/>
            <div className="Trofeo4"> 
            <p>¡Alto Ahí!
            <br/>
            Se obtiene por haber terminado el modo    
            <br/>
            de jugar "señales de transito"
            </p>
            </div>
            </div>
            <div className="Barra">
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