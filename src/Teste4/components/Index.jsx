
import React from 'react';

import Button from './Button';
import Show from './Show';
import Text from './Text';
import Compare from './Compare';

import { compareAction } from '../actions/actions';
import { connect } from 'react-redux'; // Com o connect eu pego os dados do reducer para poder
                                       // utilizar os dados na aplicação
export class Index extends React.Component{
  state = {
    value: 0,
    textA: '',
    textB: '',
    result: 'False',
    label: 'Comparar',
  }
  componentWillReceiveProps(nextProps){
    console.log('NextProps ->', nextProps);
    this.setState({
      result: nextProps.result,
    })
  }
  render(){
    return(
      <div>
        <Button
          option="+"
          onClick={value => this.setState({value: value})}
          currentValue={this.state.value}
        />
        <Text
          onChange={text => this.setState({textA: text})}          
          currentText={this.state.text}
        />
        <Text
          onChange={text => this.setState({textB: text})}
          currentText={this.state.text}
        />
        <Compare
          onClick={ () => compareAction(this.state.textA, this.state.textB)}
          label={this.state.label}
          result={this.props.result}
        />
        <Show 
          value={this.state.value}
          textA={this.state.textA}
          textB={this.state.textB}
          result={this.state.result}
        />
      </div>
    );
  }
}

// Aqui ele recebe o valor que é enviado do reducer
const mapStateToProps = (state) => ({
  result: state
})

export default connect(mapStateToProps)(Index);
