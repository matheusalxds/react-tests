import React, {Component} from 'react';

class NameComponent extends Component{
  render(){
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <label>
          List of:         
        {
          data.map((item) => (
            <div key={item._id}>
              <label>{item.name}</label>
            </div>            
          ))
        }
        </label>
      </div>
    );
  }
}

export default NameComponent;