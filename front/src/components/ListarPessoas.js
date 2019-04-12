import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';

import 'react-table/react-table.css'
import '../style/ListarPessoas.css'
const url = "http://localhost:8000/pessoas/"

class ListarPessoas extends Component {

    constructor(porps) {
        super(porps)
        this.state = {
            persons: []
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.detalhes = this.detalhes.bind(this)
        this.remover = this.remover.bind(this)
        this.atualizar = this.atualizar.bind(this)
    }

    componentDidMount() {
        axios.get(url)
            .then(res => {
                const lista = res.data;
                this.setState({ persons: lista });
            })
    }

    detalhes(event) {
        console.log(event.target.id)
    }

    remover(idUser) {
        let id = idUser + "/"
        axios.delete(url + id).then(
            res => {
                //this.state.persons.splice(id)
                 window.location.reload();
            }
        )
    }

    atualizar(id){
       this.props.history.push('Atualizar/'+id)
    }

    render() {
        const columns = [{
            Header: 'Nome',
            accessor:'nome'
        }, {
            Header: 'Idade',
            accessor: 'idade'
        }, {
            Header:'Endereco',
            accessor: 'endereco'
        }, {
            Header: 'Opcoes',
            accessor: 'id',
            Cell: props => (
                <div>
                    <button onClick={() => this.atualizar(props.value)}>Atualizar</button>
                    <button onClick={() => this.remover(props.value)}>Deletar</button>
                </div>
            )
        }       
        ]
    
        
        return (
            <div>
                <h1>Agenda</h1>
                <div>
                    <ReactTable 
                        data={this.state.persons} 
                        columns={columns}/>
               </div> 
            </div>    
        );
    }
}

export default ListarPessoas;