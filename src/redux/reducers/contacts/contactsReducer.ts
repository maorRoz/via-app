import { Reducer } from 'redux';

type ContactsState = {};
type ContactsAction = { type: undefined; payload: [] };
const defaultState: ContactsState = {};

export const contactsReducer: Reducer<ContactsState, ContactsAction> = (
  state = defaultState,
  action: ContactsAction
): ContactsState => {
  switch (action.type) {
    default:
      return state;
  }
};
