import { handleActions } from 'redux-actions';

import { currencyActions } from './actions';

const initialState = {
  info: {},
  graph: [],
  error: null,
  loading: false,
  graphIds: [],
};

export const currencyReducer = handleActions(
  {
    [currencyActions.getCurrencyInfoRequest]: state => ({
      ...state,
      loading: true,
    }),
    [currencyActions.getGraphInfoRequest]: state => ({
      ...state,
      loading: true,
    }),
    [currencyActions.getGraphIdsRequest]: state => ({
      ...state,
      loading: true,
    }),
    [currencyActions.setInfo]: (state, { payload }) => ({
      ...state,
      loading: false,
      info: payload,
    }),
    [currencyActions.setGraphIds]: (state, { payload }) => ({
      ...state,
      loading: false,
      graphIds: payload,
    }),
    [currencyActions.setGraphData]: (state, { payload }) => ({
      ...state,
      loading: false,
      graph: payload,
    }),
    [currencyActions.setError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  initialState,
);
