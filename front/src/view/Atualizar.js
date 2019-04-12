import React, { Component } from 'react';
import axios from 'axios';
import FormPessoa from '../components/FormPessoa';

const url = "http://localhost:8000/pessoas/"


class Atualizar extends Component{

    constructor(props){
        super(props)
        this.state = {id: '', nome: '', endereco: '', idade: '' }
        this.getContato = this.getContato.bind(this)
    }

    getContato(){
        try{
            axios.get(url + this.props.match.params.id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    nome: res.data.nome,
                    endereco: res.data.endereco,
                    idade: res.data.idade,
                });
                console.log('state value',this.state)
            })
        }catch(e){
            console.error(e)
        }
    }

    async componentDidMount(){    
       await this.getContato()
       console.log(this.state)
    }

    render(){
        if(this.state.nome !== ''){
            return(
               <FormPessoa user = {this.state}/>
            );
        }
        return(
            <div>
                Loading..
            </div>
        );

    }


}

export default Atualizar