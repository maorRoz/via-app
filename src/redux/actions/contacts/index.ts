import { FetchContactsListAction, AddContactsListAction } from './actions';

export type ContactsAction = FetchContactsListAction | AddContactsListAction;
export * from './actions';
export * from './ContactsActionsTypes';
