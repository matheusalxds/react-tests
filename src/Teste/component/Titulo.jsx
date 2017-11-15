
import React from 'react';

import CTitulo from '../component/CTitulo';
import CFormulario from '../component/CFormulario';
// import CFormulario2 from '../component/CFormulario2';

import { connect } from 'react-redux';
// import { store } from '../../App';

import { adicionarStr } from '../actions/action';

class HeaderTest extends React.Component{

    constructor(props){
        super(props);
        this.state ={ 
            tittle: this.props.tittle
        };
    }
   
    
    render(){        
        return (            
            <div> 
                <CTitulo
                    tittle={this.state.tittle}
                />

                <CFormulario
                    ADICIONAR_A={(valor) => adicionarStr(valor)}
                    ADICIONAR_B={(valor) => adicionarStr(valor)}
                />       
                
                <div>
                    {this.props.valor}
                </div>

            </div>
        );        
    }    
}

const mapStateToProps = (state) => ({
    valor: state,
});
export default connect(mapStateToProps)(HeaderTest);