import { call, put, takeLatest } from 'redux-saga/effects';
import { GetContactsListApi } from '../../api';
import { ContactsActionsTypes, addContactsList } from '../actions';

export function* fetchContactsList() {
  try {
    const data = yield call(GetContactsListApi);
    yield put(addContactsList(data));
  } catch (e) {
    //yield put({});
  }
}

export function* watchFetchContactsList() {
  yield takeLatest(ContactsActionsTypes.FETCH_CONTACTS_LIST, fetchContactsList);
}
