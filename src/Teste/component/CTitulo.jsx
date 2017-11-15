import React, {Component} from 'react';

class ComponentHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            tittle: this.props.tittle,
        };  
    }

    render(){
        return(
            <div>
                <h1>{this.state.tittle}</h1>
            </div>
        );
    }
}  

export default ComponentHeader