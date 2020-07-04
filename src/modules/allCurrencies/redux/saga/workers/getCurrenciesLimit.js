import { apply, put } from 'redux-saga/effects';

import api from 'api';
import { allCurrenciesActions } from 'modules/allCurrencies';

export function* getCurrenciesLimit({ payload }) {
  try {
    yield put(allCurrenciesActions.getCurrenciesLimitRequest());
    const { body } = yield apply(api, api.allCurrencies.getLimit, [payload]);
    yield put(allCurrenciesActions.setCurrencies(body.data));
  } catch (error) {
    throw Error(error);
  }
}
