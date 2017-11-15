import { fork } from 'redux-saga/effects';
import {
  watchFetchDataAdicionar,
  watchFetchDataSubtrair,
  watchFetchDataMultiplicar,
  watchFetchDataSerie
} from './saga';

export default function* startForman() {
  yield fork(watchFetchDataAdicionar);
  yield fork(watchFetchDataSubtrair);
  yield fork(watchFetchDataMultiplicar);
  yield fork(watchFetchDataSerie);
}