import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { GetContactsListApi } from '../../api';
import { ContactsActionsTypes, addContactsList } from '../actions';
import { ContactDto } from '../../types';
import { parseContact } from '../../parsers';

export function* fetchContactsList() {
  try {
    const response: AxiosResponse<Partial<ContactDto>[]> = yield call(
      GetContactsListApi
    );
    const contactDtosList = response.data;
    const contactsList = parseContact(contactDtosList);
    yield put(addContactsList(contactsList));
  } catch (e) {
    //yield put({});
  }
}

export function* watchFetchContactsList() {
  yield takeLatest(ContactsActionsTypes.FETCH_CONTACTS_LIST, fetchContactsList);
}
