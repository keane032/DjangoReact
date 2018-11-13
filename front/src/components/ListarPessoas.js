import React, { Component } from 'react';
import axios from 'axios';

const url = "http://localhost:8000/clientes/"

class ListarPessoas extends Component{

    constructor(porps){
        super(porps)
        this.state = {
            persons:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        axios.get(url)
          .then(res => {
            const lista = res.data;
            this.setState({persons:lista });
          })
      }
    
    render(){
        return(
        <div>
            <h1>Agenda</h1>
        <ul>
            {this.state.persons.map(person => <li key={person.id}>{person.nome}</li>)}
        </ul>
        </div>
        );
    }
}

export default ListarPessoas;