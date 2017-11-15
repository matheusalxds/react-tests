import { fork } from 'redux-saga/effects';
import saga from './saga';

export default function* startForman() {
  yield fork(saga);
}