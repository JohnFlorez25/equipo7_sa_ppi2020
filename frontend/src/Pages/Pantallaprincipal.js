import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import '../Css/Pantallaprincipal.css'; 
const cookies = new Cookies();
class Pantallaprincipal extends Component {
    
    componentDidMount(){
        if(!cookies.get('Correo' && 'Contraseña')){
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
        console.log('Id_usuario: '+cookies.get('Id_usuario'));
        console.log('NombreUsuario: ' +cookies.get('NombreUsuario'));
        console.log('Apellidos: ' +cookies.get('Apellidos'));
        console.log('Correo: ' +cookies.get('Correo'));
        console.log('Contraseña: ' +cookies.get('Contraseña'));

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