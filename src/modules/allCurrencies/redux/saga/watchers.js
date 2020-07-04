import { takeEvery, all, call } from 'redux-saga/effects';

import { allCurrenciesActions } from '../actions';
import { getCurrenciesCount, getCurrenciesLimit } from './workers';

export function* watchGetCurrenciesCount() {
  yield takeEvery(
    allCurrenciesActions.getCurrenciesCountAsync,
    getCurrenciesCount,
  );
}

export function* watchGetCurrenciesLimit() {
  yield takeEvery(
    allCurrenciesActions.getCurrenciesLimitAsync,
    getCurrenciesLimit,
  );
}

export function* watchAllCurrencies() {
  yield all([
    call(watchGetCurrenciesCount),
    call(watchGetCurrenciesLimit),
  ]);
}
