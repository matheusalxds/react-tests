
import {SERIES} from '../actions/actions';

// o reducer só irá guardar o resultado do saga
// toda a lógica ficará no saga

export default (value = 0, action) => {  
  switch(action.type){    

    case SERIES.SUCCESS:
      return { series: action.payload };

    default:
      return value;
  }
};