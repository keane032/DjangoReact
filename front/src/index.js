import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FromPessoa from './components/FormPessoa';
import ComponenteDePagina404 from './view/ComponenteDePagina404';
import ListarPessoas from './components/ListarPessoas';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/AdicionarPessoa" exact={true} component={FromPessoa} />
            <Route path="/ListarPessoas" component={ListarPessoas} />
            <Route path='*' component={ComponenteDePagina404} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
