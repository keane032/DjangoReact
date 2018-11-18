import React, { Component } from 'react';

import axios from 'axios';
import '../style/FormPessoa.css'
const URL = "http://localhost:8000/clientes/"
class FormPessoa extends Component {
   
    constructor(props){
        super(props)
        this.state = {nome:'', endereco:'', idade:''}
    
        this.mudarValor = this.mudarValor.bind(this)
        this.enviar = this.enviar.bind(this)
    }

    mudarValor(event){
        this.setState({[event.target.name]:event.target.value,})
    }

    componentDidMount() {
        // let id = 0;
        // axios.get(URL + id).then(
        //     res => {
        //     }
        // )
    }

    enviar(){
        console.log(this.state)
        axios.post(URL,this.state).then(
            res => {
                this.props.history.push('/ListarPessoas')
            }
        )
    }

    render(){
        return(
            <div id="formulario">
                <h1>Formulario</h1>
                <label>Nome</label>
                <input type="text" id="nome" name="nome" value={this.state.nome} onChange={this.mudarValor}/><br/>
                <label>Endereco</label>
                <input type="text" id="endereco" name="endereco" value={this.state.endereco} onChange={this.mudarValor}/><br/>
                <label>idade</label>
                <input type="number" id="idade" name="idade" value={this.state.idade} onChange={this.mudarValor}/><br/>          
                <button onClick={this.enviar}>Salvar</button>
            </div>
        );
    }
}

export default FormPessoa