import React, {Component} from 'react';

import PropTypes from 'prop-types';

class OperatorComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      result: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    // nesse momento exporta o resultado para fora do component
    this.props.onClick();
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick} >{this.props.op}</button>
      </div>      
    );
  }
}

OperatorComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default OperatorComponent;