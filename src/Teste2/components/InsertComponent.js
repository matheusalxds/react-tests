import React, {Component} from 'react';

import PropTypes from 'prop-types';

class InsertComponent extends Component{

  // static propTypes = {    
  // }

  constructor(props){
    super(props);   
    
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange(value); //Aqui ele joga o valor para fora através do props
  }

  render(){
    return (
      <div>
        <input 
          type="number"  
          onChange={this.handleChange}   
          value={this.state.value}          
        />
        <div>
          {this.state.value}
        </div>
      </div>      
    );
  }
}

InsertComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InsertComponent;