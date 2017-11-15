import { store } from '../../App';

export const ADICIONAR_A = 'ADICIONAR_A';
export const ADICIONAR_B = 'ADICIONAR_B';

export const ADICIONAR_STR = {
  REQUEST: 'ADICIONAR_STR_REQUEST',
  SUCCESS: 'ADICIONAR_STR_SUCCESS',
};

export const adicionarStr = (str) => {
  store.dispatch({ type: ADICIONAR_STR.REQUEST, payload: { str: str } });

  // const payload = yield take(ADICIONAR_STR.REQUEST);
  // const newStr = payload.str.toUpperCase();
  // store.dispatch({ type: ADICIONAR_STR.SUCCESS, payload: { str: newStr } });
};