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
            <br/>
            <button className="Trofeos" onClick={()=>this.Trofeos()}></button>
            <br/>
            <button className="Raking" onClick={()=>this.Raking()}></button>
            <br/>
            <button className="Perfil" onClick={()=>this.Perfil()}></button>
            <br/>
            <button className="Donaciones" onClick={()=>this.Donaciones()}></button>
            <br/>
            <button className="Busqueda" onClick={()=>this.Busqueda()}></button>
            <br/>
            </div>
            </div>
            </header>
        );
    }
}
export default Raking; 