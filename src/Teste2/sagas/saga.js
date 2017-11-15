import { take, put, call } from 'redux-saga/effects';

import {ADICIONAR, 
        SUBTRAIR,
        MULTIPLICAR,
        DIVIDIR,
        SERIES} from '../actions/actions';

// o reducer só irá guardar o resultado do saga
// toda a lógica ficará no saga


//Adicionar
export function* fetchDataWorkerAdicionar(n1, n2) {
  console.log('Adicionar Saga: '+n1, n2);
  if(n1 && n2){
    try{
      let result = parseInt(n1,10) + parseInt(n2,10);
      yield put({type: ADICIONAR.SUCCESS, payload: { result: result }});
    }catch(e){
      console.log(e);
    }
  }
  return null;
}

export function* watchFetchDataAdicionar(action) {
  while(true){
    const request = yield take(ADICIONAR.REQUEST);
    const payload = request.payload;
    const n1      = payload.n1;
    const n2      = payload.n2;
    try {
      yield call(fetchDataWorkerAdicionar, n1, n2);
    } catch (e) {
      console.log(e);
    }
  }
}

// Subtrair
export function* fetchDataWorkerSubtrair(n1, n2){
  console.log('Subtrair Saga: ' + n1, n2);
  //  Lógica fica aqui
  if(n1 && n2){
    try{
      let result = parseInt(n1,10) - parseInt(n2,10);
      yield put({type: SUBTRAIR.SUCCESS, payload: { result: result}});
    }catch(e){
      console.log(e);
    }
  }
  return null;
}



export function* watchFetchDataSubtrair(action){
  while(true){
    const request = yield take(SUBTRAIR.REQUEST);
    const payload = request.payload;
    const n1      = payload.n1;
    const n2      = payload.n2;

    try{      
      yield call(fetchDataWorkerSubtrair, n1, n2);
    }catch(e){
      console.log(e);
    }
  }
}

export function* fetchDataWorkerMultiplicar(n1, n2){
  console.log('Multiplicar Saga: ' + n1, n2);

  if(n1 && n2){
    try {
      let result = parseInt(n1,10) * parseInt(n2,10);
      yield put({type: MULTIPLICAR.SUCCESS, payload: {result}});
    } catch (error) {
      console.log(error);
    }
  }
}

// Multiplicar
export function* watchFetchDataMultiplicar(action){  
  while(true){
    const request = yield take(MULTIPLICAR.REQUEST);
    const payload = request.payload;
    const n1      = payload.n1;
    const n2      = payload.n2;
    
    try{
      yield call (fetchDataWorkerMultiplicar, n1, n2);      
    }catch(e){
      console.log(e);
    }
  }
}

// Dividir
export function* fetchDataWorkerDividir(n1, n2){

}

export function* watchFetchDataDividir(action){
  while(true){
    const request = yield take(DIVIDIR.REQUEST);
    const payload = request.payload;
    const n1      = payload.n1;
    const n2      = payload.n2;
    try {
      yield call (fetchDataWorkerDividir, n1, n2);
    } catch (error) {
      console.log(error);
    }
  }
}

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
  watchFetchDataAdicionar,
  watchFetchDataSubtrair,
  watchFetchDataMultiplicar,
  watchFetchDataSerie
};