import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Lista de Clinetes
        <ul id="menu"> 
        <li>
          <Link to='/ListarPessoas'>
          Listar Clinetes
          </Link>  
        </li> 
        <li>
          <Link to='/AdicionarPessoa'>
          Adicionar novo Clinetes
          </Link>  
        </li>
        </ul>            
        </header>
      </div>
    );
  }
}

export default App;
