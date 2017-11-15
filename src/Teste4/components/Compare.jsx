import React from 'react';
import PropTypes from 'prop-types';

export default class Compare extends React.PureComponent{

  handleText() {
    this.props.onClick();
  }

  render(){
    const { label } = this.props;
    return(
      <div>
        <button
          onClick={() => this.handleText()}
        >
          {label}
        </button>
      </div>
    );
  }
}

Compare.propTypes = {
  onClick: PropTypes.func.isRequired,
};