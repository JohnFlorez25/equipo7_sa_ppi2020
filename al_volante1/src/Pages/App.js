import React, { Component } from 'react';
import '../Css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
  class App extends Component {
    inicio=()=>{
      window.location.href='./Inicio';
    }
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <div className="empezar">
          <button className="Boton" onClick={() => this.inicio()}>Empezar</button>
        </div>
      </header>
    </div>
  );
}
}

export default App;
