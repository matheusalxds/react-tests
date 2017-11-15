import { fork } from 'redux-saga/effects';
import {
  watchFetchDataCompare
} from './saga';

export default function* startForman() {
  yield fork(watchFetchDataCompare);
}