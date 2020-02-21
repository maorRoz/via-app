import { Action } from 'redux';
import { ContactsActionsTypes } from './ContactsActionsTypes';

export type FetchContactsListAction = Action<
  ContactsActionsTypes.FETCH_CONTACTS_LIST
>;

export const fetchContactsList: FetchContactsListAction = {
  type: ContactsActionsTypes.FETCH_CONTACTS_LIST
};

export interface AddContactsListAction
  extends Action<ContactsActionsTypes.ADD_CONTACTS_LIST> {
  payload: { contactsList: unknown[] };
}

export const addContactsList = (
  contactsList: unknown[]
): AddContactsListAction => ({
  type: ContactsActionsTypes.ADD_CONTACTS_LIST,
  payload: { contactsList }
});
