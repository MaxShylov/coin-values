import { handleActions } from 'redux-actions';

import { allCurrenciesActions } from './actions';

const initialState = {
  currencies: [],
  count: 0,
  page: 1,
  error: null,
  loading: false,
};

export const allCurrenciesReducer = handleActions(
  {
    [allCurrenciesActions.setCount]: (state, { payload }) => ({
      ...state,
      count: payload,
    }),
    [allCurrenciesActions.getCurrenciesLimitRequest]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [allCurrenciesActions.setCurrencies]: (state, { payload }) => ({
      ...state,
      currencies: payload || [],
      loading: false,
    }),
    [allCurrenciesActions.getCurrenciesLimitFailure]: (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }),
    [allCurrenciesActions.setPage]: (state, { payload }) => ({
      ...state,
      page: payload,
    }),
  },
  initialState,
);
