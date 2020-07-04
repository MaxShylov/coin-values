import { takeEvery, all, call } from 'redux-saga/effects';

import { currencyActions } from '../actions';
import { getCurrencyInfo, getGraphInfo, getGraphIds } from './workers';

export function* watchGetCurrencyInfo() {
  yield takeEvery(currencyActions.getCurrencyInfoAsync, getCurrencyInfo);
}

export function* watchGetGraphIds() {
  yield takeEvery(currencyActions.getGraphIdsAsync, getGraphIds);
}

export function* watchGetGraphInfo() {
  yield takeEvery(currencyActions.getGraphInfoAsync, getGraphInfo);
}

export function* watchCurrency() {
  yield all([
    call(watchGetCurrencyInfo),
    call(watchGetGraphIds),
    call(watchGetGraphInfo),
  ]);
}
