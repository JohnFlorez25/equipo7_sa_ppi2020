import React, { Component } from 'react';
import '../Css/Pantallaprincipal.css';
import '../Css/Perfil.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Perfil extends Component {
    CerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('apellidos', { path: "/" });
        cookies.remove('nombre ', { path: "/" });
        cookies.remove('correo ', { path: "/" });
        cookies.remove('username ', { path: "/" });
        cookies.remove('contraseña ', { path: "/" });

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
        alert('En construcción');

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

                                <br />
                            </p>
                            <p>
                                <input

                                    className="perfil3"
                                    placeholder="brayanrepo2015@gmail.com" /*"placeholder" Sirve para pone el nombre dentro del
                            cuadro*/
                                />

                                <br />
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
                        <br />
                        <button className="Trofeos" onClick={() => this.Trofeos()}></button>
                        <br />
                        <button className="Raking" onClick={() => this.Raking()}></button>
                        <br />
                        <button className="Perfil" onClick={() => this.Perfil()}></button>
                        <br />
                        <button className="Donaciones" onClick={() => this.Donaciones()}></button>
                        <br />
                        <button className="Busqueda" onClick={() => this.Busqueda()} ></button>
                        <br />
                        <button className="Cerrarsesion" onClick={() => this.CerrarSesion()}>Cerrar Sesion</button>
                        <br />
                    </div>
                </div>
            </header>

        );
    }
}
export default Perfil;