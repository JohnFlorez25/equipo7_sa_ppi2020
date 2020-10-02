import React, { Component } from 'react';
import '../Css/Inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3001/usuario";
const cookies=new Cookies(); 

class Inicio extends Component {
    state = {
        form: {
            username: '', //Correo: brayan repo2015@gmail.com contraseña: 123456789 
            password: ''//Correo: Yereimisanchez@gmail.com contraseña: 12345
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
        await axios.get(baseUrl, { params: { correo: this.state.form.correo, contraseña: md5(this.state.form.contraseña) } })
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
                    cookies.set('id', respuesta.id, {path: "/"});
                    cookies.set('apellidos', respuesta.apellidos, {path: "/"});
                    cookies.set('nombre', respuesta.nombre, {path: "/"});
                    cookies.set('correo', respuesta.correo, {path: "/"});
                    cookies.set('username', respuesta.username, {path: "/"});
                    cookies.set('contraseña', respuesta.contraseña, {path: "/"});
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellidos}` );
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
        if(cookies.get('correo' && 'contraseña')){
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
                            name="correo"
                            onChange={this.handleChange} />

                        <br />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="contraseña"
                            onChange={this.handleChange} />
                        <br />
                        
                        <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>ENTRAR</button>
                        <div className="Registrarse">
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