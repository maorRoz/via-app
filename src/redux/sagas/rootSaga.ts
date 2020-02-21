import { all, fork } from 'redux-saga/effects';
import { watchFetchContactsList } from './contactsSaga';

const sagas = [watchFetchContactsList];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
