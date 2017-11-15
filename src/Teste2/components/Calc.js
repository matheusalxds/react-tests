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
    body: null,
    data: {}
  };
  
  componentWillReceiveProps(nextProps) {
    //Pega o result do reducer
    this.setState({
      result: nextProps.result,
      data: Object.assign({}, nextProps.series),
    })
    console.log('nextProps RESULT: ' + nextProps.series);
  }

  componentWillMount(){  
    Series_Action('{}');    
  }

  componentDidMount(){
    let data = this.state.body;
    this.setState({
      data: Object.assign(data)
    })    
  }

  render(){
  console.log('->>'+JSON.stringify(this.state.data));    
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

        <NamesComponent 
          data = {this.props.data}
        />
        
      </div>
    )
  } 
}

// Sempre necessário criar um mapStateToProps, para poder mapear o restultado e 
// poder utitlizar com this.props em qualquer lugar
const mapStateToProps = (state) => ({
  series: state.series,
  result: state
})

export default connect(mapStateToProps)(Calc);