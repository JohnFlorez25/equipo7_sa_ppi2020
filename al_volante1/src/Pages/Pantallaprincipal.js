import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import '../Css/Pantallaprincipal.css'; 
const cookies = new Cookies();
class Pantallaprincipal extends Component {
    CerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellidos', {path: "/"});
        cookies.remove('nombre ', {path: "/"});
        cookies.remove('correo ', {path: "/"});
        cookies.remove('username ', {path: "/"});
        cookies.remove('contraseña ', {path: "/"});

        window.location.href='./Inicio'; 
    }
    componentDidMount(){
        if(!cookies.get('correo' && 'contraseña')){
            window.location.href="./Inicio"; 
        }
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
           <button className="Normasdeconduccion"></button>
            <br/>
            <button className="Señalesdetransito"></button>
            <br/>
            <div className="Barramenu">
            <button className="Menu"></button>
            <br/>
            <button className="Trofeos"></button>
            <br/>
            <button className="Raking"></button>
            <br/>
            <button className="Perfil"></button>
            <br/>
            <button className="Donaciones"></button>
            <br/>
            <button className="Busqueda"></button>
            <br/>
            </div>
            <button className="Cerrarsesion" onClick={()=>this.CerrarSesion()}>Cerrar Sesion</button>
            <br/>
            </div>
            </header>

    );
    }
}
export default Pantallaprincipal;