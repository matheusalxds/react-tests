import React, {Component} from 'react';

class InsertComponent extends Component{
  render(){
    return(
      <div>
        <label>
          Result: 
          {this.props.result}
        </label>
      </div>
    );
  }
}

export default InsertComponent;