import React, {Component} from 'react';

import OperatorComponent from './OperatorComponent';
import InsertComponent from './InsertComponent';
import ResultComponent from './ResultComponent';
import NamesComponent from './NamesComponent';

import {Adicionar_Action,
        Subtrir_Action,
        Multiplicar_Action,
        Dividir_Action,
        Series_Action} from '../actions/actions';

import { connect } from 'react-redux';
  
class Calc extends Component{
  state = {
    valorA: null,
    valorB: null,
    result: null,
    body: null
  };
  
  componentWillReceiveProps(nextProps) {
    //Pega o result do reducer
    this.setState({result: nextProps.result})
    this.setState({body: nextProps.dados})
    // console.log('nextProps RESULT: ' + this.props.result);
  }

  componentWillMount(){  
    Series_Action('{}');    
  }

  render(){
    const dados = this.props.body;
    console.log('->>'+JSON.stringify(dados).name);

    return(
      <div>
        <InsertComponent
          //O valor que é jogado pra fora através do props, é pego no value e depois esse value
          // é setado na variável valorA
          onChange={(value) => {
            this.setState({ valorA: value });
          }}
        />
        <InsertComponent
          onChange={(value) => {
            this.setState({ valorB: value });
        }}
        />

        <OperatorComponent 
          op="+"
          onClick={() => {
            Adicionar_Action(this.state.valorA, this.state.valorB);
          }}          
        />

        <OperatorComponent 
          op="-"
          onClick={() => {
            Subtrir_Action(this.state.valorA, this.state.valorB);
          }}          
        />

        <OperatorComponent
          op="*"
          onClick={() => {
            Multiplicar_Action(this.state.valorA, this.state.valorB);
          }}
        />

        <OperatorComponent 
          op="/"
          onClick={() => {
            Dividir_Action(this.state.valorA, this.state.valorB);
          }}
        />
        <ResultComponent 
          result = {this.props.result}
        />
        
      </div>
    )
  } 
}

// Sempre necessário criar um mapStateToProps, para poder mapear o restultado e 
// poder utitlizar com this.props em qualquer lugar
const mapStateToProps = (state) => ({
  result: state,
  body: state
})

export default connect(mapStateToProps)(Calc);