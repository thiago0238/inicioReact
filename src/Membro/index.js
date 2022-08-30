import React, {Component} from "react";

class Membro extends Component{
    constructor(props){
        super(props);
        this.state ={
            Nome: props.Nome
        };

        this.entrar = this.entrar.bind(this);
    }
    entrar(){
        this.setState({Nome: 'thiago'})
    }

    render(){
        return(
            <div>
                <h2>bem vindo {this.state.Nome}</h2>
                <button onClick={this.entrar}> entrar como thiago</button>
                <button onClick={() => this.setState({Nome: ''})}>sair</button>
            </div>
        );
    }
}
export default Membro;