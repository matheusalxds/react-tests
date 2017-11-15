import {store} from '../../App';

export const SERIES = {
  REQUEST: 'SERIES_REQUEST',
  SUCCESS: 'SERIES_SUCCESS'
};

export const Series_Action = () => {
  store.dispatch({type: SERIES.REQUEST});
};
