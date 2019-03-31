import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension'

import rootEpic from '../epics/rootEpic';
import rootReducer from '../reducers/rootReducer';

const epicMiddleware = createEpicMiddleware();

const configureStore = (apis) => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic(apis));

  return store;
}

export default configureStore;