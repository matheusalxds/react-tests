import {ADICIONAR_A, ADICIONAR_B, ADICIONAR_STR} from '../actions/action';

export default (value, action) => {  
    console.log(action);
    const valor = (action.payload || {}).valor;  
    switch(action.type){
        case ADICIONAR_A:;
            console.log(valor);
            return valor+'A';
        case ADICIONAR_B:
            console.log(valor);
            return valor+'B';

        case ADICIONAR_STR.SUCCESS:
            return action.payload.str + 'OK';
            
        default:
            return valor;
    }        
};