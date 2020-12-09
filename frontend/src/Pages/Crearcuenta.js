import React, { Component } from 'react';
import '../Css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3001/api/nuevo_usuario";
const cookies = new Cookies();
class Crearcuenta extends Component {
    state = {
        form: {
            
            NombreUsuario: '', 
            Apellidos: '',
            Correo: '',
            Contraseña: '',
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
    /*pantallaprincipal=async()=>{
        await axios.post(baseUrl, this.state.form).then(response=>{
            this.iniciarSesion();
        }).catch(err=>{
            console.log(error.message); 
        })
    }*/
    pantallaprincipal = async () => {
        await axios.post(baseUrl, { params: { 
            NombreUsuario: this.state.form.NombreUsuario, 
            Apellidos: this.state.form.Apellidos, 
            Correo: this.state.form.Correo, 
            Contraseña: this.state.form.Contraseña } })
            .then(response => {
                return response.data; //Se retorna
            })

            /**Aquí se evidencia las cookies*/
            .then(response => {
                // Usamos lo que se retorna
                if (response.length > 0) {
                    //Significa que la longitud de response si es mayor a 0 podra iniciarse sección 
                    // o sea que inicio con los datos correctos 
                    var respuesta = response[0];
                    
                    cookies.set('NombreUsuario', respuesta.NombreUsuario, {path: "/"});
                    cookies.set('Apellidos', respuesta.Apellidos, {path: "/"});
                    cookies.set('Correo', respuesta.Correo, {path: "/"});
                    cookies.set('Contraseña', respuesta.Contraseña, {path: "/"});
                    alert(`Bienvenido ${respuesta.NombreUsuario} ${respuesta.Apellidos}` );
                window.location.href="./Pantallaprincipal"; 
                } else {
                    alert('El usuario o contraseña estan incorrectas');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    componentDidMount(){
        if(cookies.get('NombreUsuario' && 'Apellidos' && 'Correo' && 'Contraseña')){
            window.location.href="./Pantallaprincipal";
        }
    }
    
    inicio = () => {
        window.location.href = './Inicio';
    }
    render() {
        return (
            <header className="Pantalla">
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>¡Bienvenido! </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre(s)" /*"placeholder" Sirve para pone el nombre dentro del
                            cuadro*/
                            name="NombreUsuario"
                            onChange={this.handleChange} />

                        <br />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Apellido(s)"
                            name="Apellidos"
                            onChange={this.handleChange} />
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Correo"
                            name="Correo"
                            onChange={this.handleChange} />
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="Contraseña"
                            onChange={this.handleChange} />
                        <br />
                        <button className="btn btn-primary" onClick={() => this.pantallaprincipal()} >CREAR CUENTA</button>
                        <div className="Registrarse">
                        <button className="btn btn-primary" onClick={() => this.inicio()}>REGRESAR</button>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        )
    }
}
export default Crearcuenta;  