import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../Css/Pantallaprincipal.css'; 
import '../Css/Donaciones.css'; 
class Raking extends Component {

    bancolombia=()=>{
alert('En construcción'); 
}
paypal=()=>{
    alert('En construcción'); 
    }
    
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
            <p>¡ESCOGE TU FORMA DE DONARNOS!</p> 
            <br/>
            <button className="bancolombia" onClick={()=>this.bancolombia()}></button>
            <br/>
            <button className="paypal" onClick={()=>this.paypal()}></button>
            
            <div className="Barramenu3">
                <br/>
            <button className="Menu" onClick={()=>this.Pantallaprincipal()}></button>
          
            <button className="Trofeos" onClick={()=>this.Trofeos()}></button>
           
            <button className="Raking" onClick={()=>this.Raking()}></button>
            
            <button className="Perfil" onClick={()=>this.Perfil()}></button>
            
            <button className="Donaciones" onClick={()=>this.Donaciones()}></button>
            
            <button className="Busqueda" onClick={()=>this.Busqueda()}></button>
            
            </div>
            </div>
            </header>
        );
    }
}
export default Raking; 