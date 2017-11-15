import {store} from '../../App';

export const ADICIONAR = {
  REQUEST: 'ADICIONAR_REQUEST',
  SUCCESS: 'ADICIONAR_SUCCESS',
};

export const SUBTRAIR = {
  REQUEST: 'SUBTRAIR_REQUEST',
  SUCCESS: 'SUBTRAIR_SUCCESS',
};

export const MULTIPLICAR = {
  REQUEST: 'MULTIPLICAR_REQUEST',
  SUCCESS: 'MULTIPLICAR_SUCCESS',
};

export const DIVIDIR = {
  REQUEST: 'DIVIDIR_REQUEST',
  SUCCESS: 'DIVIDIR_SUCCESS',
};

export const SERIES = {
  REQUEST: 'SERIES_REQUEST',
  SUCCESS: 'SERIES_SUCCESS'
};

export const Adicionar_Action = (n1, n2) => {
  store.dispatch({type: ADICIONAR.REQUEST, payload: {n1 : n1, n2: n2}});
};

export const Subtrir_Action = (n1, n2) => {
  store.dispatch({type: SUBTRAIR.REQUEST, payload: {n1: n1, n2: n2}});
};

export const Multiplicar_Action = (n1, n2) => {
  store.dispatch({type: MULTIPLICAR.REQUEST, payload: {n1: n1, n2: n2}});
};

export const Dividir_Action = (n1, n2) => {
  store.dispatch({type: DIVIDIR.REQUEST, payload: {n1: n1, n2: n2}});
};

export const Series_Action = () => {
    store.dispatch({type: SERIES.REQUEST});
};
