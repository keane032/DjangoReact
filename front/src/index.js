import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pagina404 from './view/Pagina404';
import ListarPessoas from './components/ListarPessoas';
import Cadastrar from './view/Cadastrar';
import Atualizar from './view/Atualizar';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/AdicionarPessoa" exact={true} component={Cadastrar} />
            <Route path="/ListarPessoas" component={ListarPessoas} />
            <Route path="/Atualizar/:id" component={Atualizar} />
            <Route path='*' component={Pagina404} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
