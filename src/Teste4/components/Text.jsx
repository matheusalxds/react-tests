import React from 'react';

import PropTypes from 'prop-types';

export default class Text extends React.PureComponent{

  handleText(text){
    // console.log(text);
    this.props.onChange(text);    
  }

  render(){
    const { currentText } = this.props;
    return(
      <div>
        <input
          type="text"
          onChange={(event) => this.handleText(event.target.value)}
          value={currentText}
        />
      </div>      
    );
  }
}

Text.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentText: PropTypes.string.isRequired,
};