import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import App from '../Pages/App'
import Inicio from '../Pages/Inicio'; 
import Pantallaprincipal from '../Pages/Pantallaprincipal';
import Crearcuenta from '../Pages/Crearcuenta'
function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>; 
            <Route exact path="/Inicio"component={Inicio}/>
            <Route exact path="/Pantallaprincipal" component={Pantallaprincipal}/>
            <Route exact path="/Crearcuenta" component={Crearcuenta}/>
        </Switch>
        </BrowserRouter>
    );
}
export default Routes; 