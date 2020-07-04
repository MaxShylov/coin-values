import { all, call } from 'redux-saga/effects';

import { watchAllCurrencies } from 'modules/allCurrencies/redux/saga/watchers';
import { watchCurrency } from 'modules/currency/redux/saga/watchers';

export function* saga() {
  yield all([
    call(watchAllCurrencies),
    call(watchCurrency),
  ]);
}
