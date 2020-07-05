import rootSaga from 'data/sagas/rootSaga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { loadingReducer } from '../loading/reducer';
import { postsReducer } from '../posts/reducer';

const initStore = () => {
  const initialState = {};
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const rootReducer = combineReducers({
    posts: postsReducer,
    loading: loadingReducer,
  });

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(rootReducer, initialState, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  return store;
};

const store = initStore();

export default store;
