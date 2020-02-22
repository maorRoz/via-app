import {
  FetchContactsListAction,
  FetchContactsListErrorAction,
  AddContactsListAction
} from './actions';

export type ContactsAction =
  | FetchContactsListAction
  | FetchContactsListErrorAction
  | AddContactsListAction;
export * from './actions';
export * from './ContactsActionsTypes';
