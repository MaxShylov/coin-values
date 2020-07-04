import { apply, put } from 'redux-saga/effects';

import api from 'api';
import { currencyActions } from 'modules/currency';

export function* getGraphIds({ payload }) {
  try {
    yield put(currencyActions.getGraphIdsRequest());
    const { body } = yield apply(api, api.currency.getGraphIds, [payload]);
    yield put(currencyActions.setGraphIds(body));
  } catch (error) {
    yield put(currencyActions.setError(error));
    throw Error(error);
  }
}
