import { take, put, call } from 'redux-saga/effects';

import {SERIES} from '../actions/actions';

export function* fetchDataWorkerSerie(){

  const res = yield call(fetch, 'http://localhost:3001/series');
  const body = yield res.json();
  
  yield put ({type: SERIES.SUCCESS, payload: body});
}
  
export function* watchFetchDataSerie() {
  while(true){
    const request = yield take(SERIES.REQUEST);
    try {  
      yield call(fetchDataWorkerSerie);
    } catch (error) {
      console.log(error);
    }
  }
}
  
export default{
  watchFetchDataSerie
};