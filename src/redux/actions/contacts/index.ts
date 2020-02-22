import {
  FetchContactsListAction,
  FetchContactsListErrorAction,
  AddContactsListAction,
  UpdateSerchInputAction
} from './actions';

export type ContactsAction =
  | FetchContactsListAction
  | FetchContactsListErrorAction
  | AddContactsListAction
  | UpdateSerchInputAction;
export * from './actions';
export * from './ContactsActionsTypes';
