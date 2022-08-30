// import React from "react"; 
import React, {Component} from "react"; 
import Membro from "./Membro";
// const Bemvindo = () => <h2> bem vindo</h2>
// // esse de cima so funciona para quando so for uma linha de codigo  

// // dentro das {} pode se usar js
// //  props apenas carrega um conteudo sem que haja nele alterações
// const BemVindo = (props) => {
//   return(
//     <div>
//       <h2> bem vindo {props.nome}</h2>
//       <h3> sua idade é de {props.idade}</h3>
//     </div>
//   );
// }
// const Equipe = (props)=>{
//     return(
//       <div>
//         <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
//         <Social fb={props.facebook}/>
//       </div>
//     );
// }
// const Sobre = (props) =>{
//   return(
//     <div>
//       <h2>Ola, sou o(a) {props.nome}</h2>
//       <h3>Cargo: {props.cargo}</h3>  
//       <h3>idade: {props.idade} anos</h3>
//     </div>
//   );
// }
// const Social =(props) =>{
//   return(
//     <div>
//       <a href={props.fb}>facebook</a>
//     </div>
//   );
// }

// começar a usar a atributo componente 
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      name: "thiago", 
      nome1:'',
      contador:0,
      hora: "",
      dia: "",
      email: '',
      email1:'',
      senha:'',
      senha1:'',
      sexo:'maculino',
      erro:''
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
    this.sair1 = this.sair1.bind(this);
    this.cadastro = this.cadastro.bind(this);
    this.trocaEmail= this.trocaEmail.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }
  aumentar(){
    let state = this.state;
    state.contador +=1
    this.setState({state})
  }
  diminuir(){
    let state = this.state;
    state.contador -=1;
    this.setState({state})
  }
  // esse componentDid serve para que depois que iniciado o construtor, ele comece a fornecer dados
  componentDidMount(){
    setInterval(()=>{
      this.setState({hora: new Date().toLocaleTimeString()})
    },5);

    setInterval(()=>{
      this.setState({dia: new Date().toLocaleDateString()})
    });
    
  }
  // esse ja serve para quando um state for atualizado
  componentDidUpdate(){
    console.log('atualizou!!');
    // a cada segundo que o relogio atualizar, sera mandada essa mensagem oara o console 
  }
  
  sair1(){
    this.setState({status: false})
  }
  cadastro(){
    this.setState({status: true})
  }
 /**
  * A function that changes the value of the email state.
  * @param e - the event object
  */
  trocaEmail(e){
    // target faz a função trocaEmail mirar aonde esta sendo chamada
    let valorDigitado = e.target.value;
    this.setState({email: valorDigitado});
  }
  cadastrar(e){
    const {nome1, email1, senha1} = this.state;
    if(nome1!=='' && email1!=='' && senha1!=='')
      alert (`Nome: ${nome1} \nEmail: ${email1} \nSenha: ${senha1}`);
      else
      this.setState({erro:'ops! algo deu errado'});
    /* It prevents the default behavior of the form, which is to refresh the page. */
    e.preventDefault();
  }
  render(){
    return(
      <div>
        <h1>Contador</h1>
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
        <h1>hora local</h1>
        <h3>{this.state.hora}</h3>
        <h1>dia</h1>
        <h3>{this.state.dia}</h3>
        <Membro Nome="visitante"/>
        <hr/>
        <div>
            {this.state.status ?
              <div>
                <h2> bem vindo ao sistema</h2>
                <button onClick={this.sair1}>Sair</button>
              </div> :
              <div>
                <h2> Fazer cadastro</h2>
                <button onClick={this.cadastro}>cadastro</button>
              </div>  
            }
            <hr></hr>  
        </div>
        <div>
              <h1>formularios </h1>
              Email:
              <input type="email" name="email" value={this.email} onChange={this.trocaEmail}></input>
              Senha:
              <input type="password" name="senha" value={this.senha} 
                onChange={(e) => this.setState({senha: e.target.value})}></input>  <br/>
                Sexo:
                <select name="sexo" value={this.state.sexo} 
                    onChange={(e)=> this.setState({sexo: e.target.value})}>
                  <option value="masculino">Masculino</option>
                  <option value="feminino" >Feminino</option>
                </select>
            </div>
            <div>
              <h3>{this.state.email}</h3>
              <h3>{this.state.senha}</h3>
              <h3>{this.state.sexo}</h3>
            </div>
            <div>
                <h1> Novos usuarios</h1>
                {this.state.erro && <p>{this.state.erro}</p>}
                <form onSubmit={this.cadastrar}>
                  <label>Nome:</label>
                  <input type="text" value={this.state.nome1}
                  onChange={(e)=> this.setState({nome1: e.target.value})} /><br/>
                  <label>Email:</label>
                  <input type="email" value={this.state.email1}
                    onChange={(e) => this.setState({email1: e.target.value})} /><br/>
                    <label>Senha:</label>
                    <input type="password" value={this.state.senha1}
                      onChange={(e)=> this.setState({senha1: e.target.value})} />
                      <button type="submit">Cadastrar</button>
                </form>
            </div>
      </div>
    );
  }
}
//  function App(){
//   return(
//     <div>
//       ola mundo!
//       <Bemvindo/>
//       <BemVindo nome="thiago" idade="22"/>
//       <BemVindo nome="thiag" idade="24"/>
//       {/* sempre que for chamado um BemVindo o props é enviado e a função é iniciada */}
//       <h1>Bem vindo ao sistema</h1>
//       <hr/>
//       <h1> conheça nossa equipe:</h1>
//       <Equipe nome ="thiago" cargo="programador" idade="22" facebook="this.props"/>
//       <hr/>
//     </div>
//   );
// }

export default App;