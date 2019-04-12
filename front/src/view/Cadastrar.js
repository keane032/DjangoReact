import React, { Component } from 'react';
import FormPessoa from '../components/FormPessoa';
class Cadastrar extends Component{

    constructor(props){
        super(props)
        this.sube = this.sube.bind(this)
    }

    sube() {
        console.log(this.props)
    }

    render(){
        return(
            <FormPessoa user = {this.props}/>
        );
    }


}

export default Cadastrar