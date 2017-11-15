import { take, put, call } from 'redux-saga/effects';

import { COMPARE } from '../actions/actions';

export function* fetchDataWorkerCompare(textA, textB){
  
  if(textA && textB) {
    try {
      if(textA === textB){
        yield put({type: COMPARE.SUCCESS, payload: {result: 'TRUEEE'}});
      }else{
        yield put({type: COMPARE.FAILED, payload: {result: 'NOOOO'}});
      }
    } catch (error) {
      console.log(error);
    }
  }else{
    return null;
  }
}


export function* watchFetchDataCompare(){
  while(true){
    const request = yield take(COMPARE.REQUEST);
    const payload = request.payload;
    const textA = payload.textA;
    const textB = payload.textB;

    try {
      yield call(fetchDataWorkerCompare, textA, textB);  
    } catch (error) {
      console.log(error);
    }    
  }
}

export default{
  watchFetchDataCompare
};