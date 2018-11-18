import React, { Component } from 'react';
import axios from 'axios';

import '../style/ListarPessoas.css'
const url = "http://localhost:8000/clientes/"

class ListarPessoas extends Component {

    constructor(porps) {
        super(porps)
        this.state = {
            persons: []
        }
       
        this.componentDidMount = this.componentDidMount.bind(this)
        this.detalhes = this.detalhes.bind(this)
        this.remover = this.remover.bind(this)
    }

    componentDidMount() {
        axios.get(url)
            .then(res => {
                const lista = res.data;
                this.setState({ persons: lista });
            })
    }

    detalhes(event){
       console.log(event.target.id) 
    }

    remover(event){
        console.log(event.target.id) 
        let id = event.target.id + "/"
        axios.delete(url + id).then(
            res => {
                window.location.reload();
            }
        )
    }

    render() {
        return (
            <div id="ListaPessoas">
                <h1>Agenda</h1>
                <ul>
                    {this.state.persons.map(person => <li id = {person.id} onClick={this.detalhes}
                    key={person.id}>{person.nome}
                    <div id="detalhes" className="hidden">
                        Idade: {person.idade} <br/>  
                        Endereco: {person.endereco} <br/>
                        <button id={person.id} onClick={this.remover}>remover</button>
                    </div>
                    </li>)}
                </ul>
            </div>
        );
    }
}

export default ListarPessoas;