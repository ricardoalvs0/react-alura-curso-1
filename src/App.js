import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';

import "./assets/App.css";
import './assets/index.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            notas:[]
        };
    }

    criarNota(titulo, texto) {
        const novaNota = {
            titulo,
            texto
        };

        this.setState({notas:[...this.state.notas, novaNota]});
    }

    render() {
        console.log('hey');

        return (
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
                <ListaDeNotas notas={this.state.notas}/>
            </section>
        );
    }
}

export default App;
