
import {ADICIONAR, SUBTRAIR, MULTIPLICAR, SERIES} from '../actions/actions';

// o reducer só irá guardar o resultado do saga
// toda a lógica ficará no saga
// Aplicar immutable apenas no reducer


export default (value = 0, action) => {  
  switch(action.type){    
    case ADICIONAR.SUCCESS:      
      return action.payload.result;

    case SUBTRAIR.SUCCESS:
      return action.payload.result;

    case MULTIPLICAR.SUCCESS:
      return action.payload.result;

    case SERIES.SUCCESS:
      return { series: action.payload };

    default:
      return value;
  }
};