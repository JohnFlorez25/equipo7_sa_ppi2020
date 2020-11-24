import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import '../Css/Pantallaprincipal.css'; 
const cookies = new Cookies();
class Pantallaprincipal extends Component {
    
    componentDidMount(){
        if(!cookies.get('correo' && 'contraseña')){
            window.location.href="./Inicio"; 
        }
    }
    Normasdeconduccion=()=>{
        window.location.href="./Normasconduccion"; 
    }
    Señalestransito=()=>{
        window.location.href="./Señalestransito"; 
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
        console.log('id: '+cookies.get('id'));
        console.log('apellidos: ' +cookies.get('apellido_Paterno'));
        console.log('nombre: ' +cookies.get('nombre'));
        console.log('correo: ' +cookies.get('nombre'));
        console.log('username: ' +cookies.get('username'));
        console.log('contraseña: ' +cookies.get('contraseña'));

        return (
            <header className="Pantalla">
            <div className="title" >
            <p>¡ESCOGE EL TIPO</p> 
            <p>DE JUEGO!</p>
            <br/>
            <button className="Normasdeconduccion" onClick={()=>this.Normasdeconduccion()}></button>
            <br/>
            <button className="Señalesdetransito" onClick={()=>this.Señalestransito()}></button>
            <br/>
            <div className="Barramenu">
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
export default Pantallaprincipal;