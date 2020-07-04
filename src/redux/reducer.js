import { combineReducers } from 'redux';

import { allCurrenciesReducer as allCurrencies } from 'modules/allCurrencies';
import { currencyReducer as currency } from 'modules/currency';

export const reducer = combineReducers({
  allCurrencies,
  currency
});
