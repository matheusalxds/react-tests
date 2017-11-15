import React, {Component} from 'react';

class CFormulario2 extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <div>
        <input type="text" onChange={this.handleChange} />

        <p>{this.state.value}</p>
      </div>      
    );
  }
}

export default CFormulario2;