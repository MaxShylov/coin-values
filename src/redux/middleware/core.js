import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = devtools || compose;

const enhancedStore = composeEnchancers(applyMiddleware(sagaMiddleware));

export { enhancedStore, sagaMiddleware };
