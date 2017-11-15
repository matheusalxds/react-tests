
import { COMPARE } from '../actions/actions';

export default (initialState = 'waiting until the 1rd compare', action) => {
  switch(action.type){
    case COMPARE.SUCCESS:
      return action.payload.result;
    case COMPARE.FAILED:
      return action.payload.result;
    default:
      return initialState;
  }
};
