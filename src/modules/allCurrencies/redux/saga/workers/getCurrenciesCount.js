import { apply, put } from '@redux-saga/core/effects';

import api from 'api';
import { allCurrenciesActions } from 'modules/allCurrencies';

export function* getCurrenciesCount({ payload }) {
  try {
    const { body } = yield apply(api, api.allCurrencies.getMap, [payload]);
    yield put(allCurrenciesActions.setCount(body.data.length));
  } catch (error) {
    yield put(allCurrenciesActions.getCurrenciesLimitFailure(error));
    throw Error(error);
  }
}
