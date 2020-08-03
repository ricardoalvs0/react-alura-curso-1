import React, { Component } from 'react';
import CardNota from '../CardNota';
import "./style.css";

class ListaDeNotas extends Component {
    render() {
        return (
            <div>
                <ul className="lista-notas">
                    {this.props.notas.map((nota, index) => {
                        return (
                            <li className ='lista-notas_item' key={index}>
                                <CardNota nota={nota}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default ListaDeNotas;
