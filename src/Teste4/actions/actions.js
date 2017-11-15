import {store} from '../../App';

export const COMPARE = {
  REQUEST: 'COMPARE_REQUEST',
  SUCCESS: 'COMPARE_SUCCESS',
  FAILED: 'COMPARE_FAILED',  
};

export const compareAction = (textA, textB) => {
  store.dispatch({
    type: COMPARE.REQUEST,
    payload: {
      textA: textA,
      textB: textB,
    }
  });
};