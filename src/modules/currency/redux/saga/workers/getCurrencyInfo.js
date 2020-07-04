import { apply, put } from 'redux-saga/effects';

import api from 'api';
import { currencyActions } from 'modules/currency';

export function* getCurrencyInfo({ payload }) {
  try {
    yield put(currencyActions.getCurrencyInfoRequest());
    const { body } = yield apply(api, api.currency.getInfo, [payload]);
    yield put(currencyActions.setInfo(body.data));
  } catch (error) {
    yield put(currencyActions.setError(error));
    throw Error(error);
  }
}
