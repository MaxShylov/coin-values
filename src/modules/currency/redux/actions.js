import { createActions } from 'redux-actions';

export const currencyActions = createActions({
  // Sync
  SET_INFO: info => info,
  SET_ERROR: error => error,
  SET_GRAPH_DATA: data => data,
  SET_GRAPH_IDS: ids => ids,

  GET_CURRENCY_INFO_REQUEST: () => null,
  GET_GRAPH_IDS_REQUEST: () => null,
  GET_GRAPH_INFO_REQUEST: () => null,

  // Async
  GET_CURRENCY_INFO_ASYNC: void 0,
  GET_GRAPH_IDS_ASYNC: void 0,
  GET_GRAPH_INFO_ASYNC: void 0,
});
