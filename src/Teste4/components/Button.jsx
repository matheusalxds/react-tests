import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent{  

  handleValue(value) {
    let _value = parseInt(value, 10);    
    this.props.onClick(_value += 1);
  }

  render(){
    const { option, currentValue } = this.props;
    return(      
       <div>
        <button
          onClick={(event) =>  this.handleValue(event.target.value) }
          value={currentValue}
        >{option}</button>
       </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentValue: PropTypes.number.isRequired,  
};