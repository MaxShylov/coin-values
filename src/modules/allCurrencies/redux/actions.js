import { createActions } from 'redux-actions';

export const allCurrenciesActions = createActions({
  // Sync
  SET_CURRENCIES: data => data,
  SET_COUNT: data => data,
  SET_PAGE: page => page,

  TEST: () => null,
  GET_CURRENCIES_LIMIT_REQUEST: () => null,
  GET_CURRENCIES_LIMIT_FAILURE: error => error,

  // Async
  GET_CURRENCIES_LIMIT_ASYNC: void 0,
  GET_CURRENCIES_COUNT_ASYNC: void 0,
});
