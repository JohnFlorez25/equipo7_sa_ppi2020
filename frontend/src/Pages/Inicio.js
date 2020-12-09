import React, { Component } from 'react';
import '../Css/Inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3001/api/usuario";
const cookies=new Cookies(); 

class Inicio extends Component {
    state = {
        form: {
            Correo: '', 
            Contraseña: ''
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
    iniciarSesion = async () => {
        await axios.get(baseUrl, { params: { Correo: this.state.form.Correo, Contraseña: this.state.form.Contraseña } })
            .then(response => {
                return response.data; //Se retorna
                 
            })
            /**Aquí se evidencia las cookies*/
            .then(response => {
                // Usamos lo que se retorna
                if (response.length > 0) {
                    //Significa que la longitud de response si es mayor a 0 podra iniciarse sesión 
                    // o sea que inicio con los datos correctos 
                    var respuesta = response[0];
                    cookies.set('Id_usuario', respuesta.Id_usuario, {path: "/"});
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
        if(cookies.get('Correo' && 'Contraseña')){
            window.location.href="./Pantallaprincipal";
        }
    }
    crearcuenta=()=>{
        window.location.href="./Crearcuenta"; 
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
                            placeholder="Correo" /*"placeholder" Sirve para pone el nombre dentro del
                            cuadro*/
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
                        <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>ENTRAR</button>
                        <div className="RegiclassName">
                        <button className="btn btn-primary" onClick={()=> this.crearcuenta()}>CREAR CUENTA</button>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        );
    }
}
export default Inicio; 