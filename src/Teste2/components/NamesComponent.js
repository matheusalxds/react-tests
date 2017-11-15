import React, {Component} from 'react';

class InsertComponent extends Component{
  render(){
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        {
          data.map((item) => (
            <label>{item.name}</label>
          ))
        }
      </div>
    );
  }
}

export default InsertComponent;