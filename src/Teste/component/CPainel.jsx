import React, {Component} from 'React';

import reducer, {alterarString} from '../reducers/reducers';



class CPainel extends Component{

    constructor(props){
        super(props);
        this.state ={ 
            value
        };
    }
   

    setState(state){
        return (
            value = this.state.value
        );
    }

    render(){
        return(
            <div> 
                <h1>
                    {value}
                </h1>
            </div>
        );
    }
}