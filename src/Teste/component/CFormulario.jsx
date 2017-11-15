import React, {Component} from 'react';

import PropTypes from 'prop-types';

import { adicionarStr } from '../actions/action';

class Formulario extends Component {

    constructor(props){
        super(props);                 

        this.state = {
            value: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render(){

        return (
            <div>            
                <input type="text" onChange={this.handleChange}/>
            
                <button onClick={() => adicionarStr(this.state.value)}>
                    Adicionar_a
                </button>
                <button onClick={() => adicionarStr(this.state.value)}>
                    Adicionar_b
                </button>

                <div>{this.state.value}</div>
            </div>
        );
    }
}

Formulario.propTypes = {
    ADICIONAR_A: PropTypes.func.isRequired,
    ADICIONAR_B: PropTypes.func.isRequired,
    adicionarStr: PropTypes.func.isRequired,
};
  

export default Formulario;