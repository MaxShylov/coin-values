import { createStore } from 'redux';

import { reducer } from './reducer';
import { saga } from './saga';
import { enhancedStore, sagaMiddleware } from './middleware/core';

const store = createStore(reducer, enhancedStore);

sagaMiddleware.run(saga);

export default store;
