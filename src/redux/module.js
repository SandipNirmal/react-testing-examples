import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { userReducer } from './users/userReducer';
import usersSaga from './users/userSaga';

const reducer = combineReducers({
  users: userReducer
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(usersSaga);
