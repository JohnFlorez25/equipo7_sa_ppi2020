import React, { Component } from 'react';
import '../Css/Pantallaprincipal.css';
import '../Css/Perfil.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Perfil extends Component {
    CerrarSesion = () => {
        cookies.remove('Id_usuario', { path: "/" });
        cookies.remove('NombreUsuario', { path: "/" });
        cookies.remove('Apellidos ', { path: "/" });
        cookies.remove('Correo ', { path: "/" });
        cookies.remove('Contraseña ', { path: "/" });

        window.location.href = './Inicio';
    }
    Pantallaprincipal = () => {
        window.location.href = "./Pantallaprincipal";
    }
    Trofeos = () => {
        window.location.href = "./Trofeos";
    }
    Raking = () => {
        window.location.href = "./Raking";
    }
    Perfil = () => {
        window.location.href = "./Perfil";

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
                    <p>PERFIL</p>
                    <br />
                    <div className="perfil1">
                        <div className="perfil2">
                            <p>
                                <input

                                    className="perfil3"
                                    placeholder="Brayan Suarez Restrepo" /*"placeholder" Sirve para pone el nombre dentro del
                            cuadro*/
                                />

                                
                            </p>
                            <p>
                                <input

                                    className="perfil3"
                                    placeholder="brayanrepo2015@gmail.com" /*"placeholder" Sirve para pone el nombre dentro del
                            cuadro*/
                                />

                                
                            </p>
                            <p>
                                <input

                                    className="perfil3"
                                    placeholder="**************" /*"placeholder" Sirve para pone el nombre dentro del
                            cuadro*/
                                />

                                <br />
                            </p>
                        </div>
                    </div>

                    <div className="Menu1">
                        <button className="Menu" onClick={() => this.Pantallaprincipal()}></button>
                        
                        <button className="Trofeos" onClick={() => this.Trofeos()}></button>
                        
                        <button className="Raking" onClick={() => this.Raking()}></button>
                        
                        <button className="Perfil" onClick={() => this.Perfil()}></button>
                        
                        <button className="Donaciones" onClick={() => this.Donaciones()}></button>
                        
                        <button className="Busqueda" onClick={() => this.Busqueda()} ></button>
                        
                        <button className="Cerrarsesion" onClick={() => this.CerrarSesion()}>Cerrar Sesion</button>
                        
                    </div>
                </div>
            </header>

        );
    }
}
export default Perfil;