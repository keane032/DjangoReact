import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import '../style/FormPessoa.css'

const URL = "http://localhost:8000/pessoas/"

class FormPessoa extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', endereco: '', idade: '' }

        this.mudarValor = this.mudarValor.bind(this)
        this.enviar = this.enviar.bind(this)
    }

    mudarValor(event) {
        this.setState({ [event.target.name]: event.target.value, })
    }

    componentDidMount() {       
        console.log(this.props.user)
        if (this.props.user)
            this.setState({
                nome: this.props.user.nome,
                endereco: this.props.user.endereco,
                idade: this.props.user.idade
            });
    }

    enviar(event) {
        if(this.props.user){
            // axios.post(URL+'/'+this.props.user.id,)
        }else{
        axios.post(URL, this.state).then(
            res => {
                console.log("oi")
                this.props.user.history.push('/ListarPessoas');    
            }
        )
        }
    }

    render() {
        return (
            <div id="formulario">
                <h1>Formulario</h1>
                <label>Nome</label>
                <input type="text" id="nome" name="nome" value={this.state.nome} onChange={this.mudarValor} /><br />
                <label>Endereco</label>
                <input type="text" id="endereco" name="endereco" value={this.state.endereco} onChange={this.mudarValor} /><br />
                <label>idade</label>
                <input type="number" id="idade" name="idade" value={this.state.idade} onChange={this.mudarValor} /><br />
                <button onClick={this.enviar}>Salvar</button>
            </div>
        );
    }
}

export default FormPessoa
FormData.propTypes = {
    user: PropTypes.object
}