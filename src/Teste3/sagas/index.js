import { fork } from 'redux-saga/effects';
import {
  watchFetchDataSerie
} from './saga';

export default function* startForman() {
  yield fork(watchFetchDataSerie);
}