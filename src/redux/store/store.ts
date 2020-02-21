import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';
import { sagaMiddleware } from '../middlewares';
import { ViaAppAction } from '../actions';

export type ViaAppState = ReturnType<typeof rootReducer>;

const configureStore = (): Store<ViaAppState, ViaAppAction> => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();
