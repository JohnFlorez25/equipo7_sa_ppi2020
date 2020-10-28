import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import App from '../Pages/App';
import Inicio from '../Pages/Inicio'; 
import Pantallaprincipal from '../Pages/Pantallaprincipal';
import Crearcuenta from '../Pages/Crearcuenta';
import Normasconduccion from '../Pages/Normasconduccion';
import Señalestransito from '../Pages/Señalestransito';
import Trofeos from '../Pages/Trofeos';
import Raking from '../Pages/Raking';
import Perfil from '../Pages/Perfil';
import Donaciones from '../Pages/Donaciones';             

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>; 
            <Route exact path="/Inicio"component={Inicio}/>
            <Route exact path="/Pantallaprincipal/" component={Pantallaprincipal}/>
            <Route exact path="/Crearcuenta" component={Crearcuenta}/>
            <Route exact path="/Normasconduccion" component={Normasconduccion}/>
            <Route exact path="/Señalestransito" component={Señalestransito}/>
            <Route exact path="/Trofeos" component={Trofeos}/>
            <Route exact path="/Raking" component={Raking}/>
            <Route exact path="/Perfil" component={Perfil}/>
            <Route exact path="/Donaciones" component={Donaciones}/>
        </Switch>
        </BrowserRouter>
    );
}
export default Routes; 