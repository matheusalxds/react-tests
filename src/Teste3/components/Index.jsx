import React, {Component} from 'react';
import { connect } from 'react-redux';
import NameComponent from './NameComponent';

import {Series_Action} from '../actions/actions';

class Index extends Component{

  state = {
    data: []
  };

  async componentWillReceiveProps(nextProps){
    await this.setState({
      data: nextProps.series,
    });

    console.log(this.state);
  }

  // Sempre que for necessário tirar algo do Immutable para transformar em JS
  // é necessário usar toJS(), pois são estruturas diferentes.
  // async componentWillReceiveProps(nextProps) {
  //   await this.setState({
  //     // Immutable -> JS
  //     data: nextProps.budget.toJS(),
  //   });
  //   console.log(this.state.data);
  // }

  componentWillMount(){  
    Series_Action('{}');    
  }

  render(){
    return(
      <NameComponent 
        data = {this.state.data}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  series: state.series,
});

export default connect(mapStateToProps)(Index);