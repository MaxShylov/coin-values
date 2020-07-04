import { apply, put } from 'redux-saga/effects';

import api from 'api';
import { currencyActions } from 'modules/currency';

export function* getGraphInfo({ payload }) {
  try {
    yield put(currencyActions.getGraphInfoRequest());
    const { body } = yield apply(api, api.currency.getGraphInfo, [payload]);
    yield put(currencyActions.setGraphData(body.market_caps));
  } catch (error) {
    yield put(currencyActions.setError(error));
    throw Error(error);
  }
}
