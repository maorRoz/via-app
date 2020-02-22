import { Action } from 'redux';
import { ContactsActionsTypes } from './ContactsActionsTypes';
import { Contact } from '../../../types';

export type FetchContactsListAction = Action<
  ContactsActionsTypes.FETCH_CONTACTS_LIST
>;

export const fetchContactsList: FetchContactsListAction = {
  type: ContactsActionsTypes.FETCH_CONTACTS_LIST
};

export type FetchContactsListErrorAction = Action<
  ContactsActionsTypes.FETCH_CONTACTS_LIST_ERROR
>;

export const fetchContactsListError: FetchContactsListErrorAction = {
  type: ContactsActionsTypes.FETCH_CONTACTS_LIST_ERROR
};

export interface AddContactsListAction
  extends Action<ContactsActionsTypes.ADD_CONTACTS_LIST> {
  payload: { contactsList: Contact[] };
}

export const addContactsList = (
  contactsList: Contact[]
): AddContactsListAction => ({
  type: ContactsActionsTypes.ADD_CONTACTS_LIST,
  payload: { contactsList }
});
