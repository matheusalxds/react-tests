import { take, put, call } from 'redux-saga/effects';
import { store } from '../../App';
import {ADICIONAR_STR} from '../actions/action';

export function* fetchDataWorker(str) {
  if (str){
    try {
      console.log(str);
      const newStr = str.toUpperCase();
      
      // const res = yield call(fetch, 'http://www.randomtext.me/api/');
      // const body = yield res.json();
      
      // console.log(newStr, 'STRING')
      yield put({ type: ADICIONAR_STR.SUCCESS, payload: { str: newStr } }); 
    } catch(e) {
      console.log(e);
    }
  } else {
    console.log('empty');
    return null;
  }
}

export default function* watchFetchData(action) {
  while (true) {
    const request = yield take(ADICIONAR_STR.REQUEST);
    const payload = request.payload;
    try {
      yield call(fetchDataWorker, payload.str);
    } catch (e) {
      console.log(e);
    }
  }
}
