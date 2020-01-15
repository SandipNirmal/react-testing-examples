import { takeEvery, call, put } from 'redux-saga/effects';

import { getUsers } from '../../api';
import { USERS } from './actionTypes';
import { setUsers, setError } from './userActions';

export function* getUsersSaga() {
  try {
    const response = yield call(getUsers);
    yield put(setUsers(response.data));
  } catch (e) {
    // console.log('Error', e.message);
    yield put(setError(e.message));
  }
}

export function* watchGetUsers() {
  yield takeEvery(USERS.GET, getUsersSaga);
}

export default watchGetUsers;
