import React from 'react';

export default class Show extends React.Component{
  render(){
    const {value, textA, textB, result } = this.props;
    return(
      <div>
        <p>Valor: {value}</p>
        <p>TextoA: {textA} </p>
        <p>TextoB: {textB} </p>
        <p>São iguais? {result} </p>
      </div>
    );
  }
}