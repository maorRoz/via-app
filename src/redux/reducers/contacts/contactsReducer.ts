import { Reducer } from 'redux';
import { ContactsAction, ContactsActionsTypes } from '../../actions/contacts';

type ContactsState = { list: unknown[] };

const defaultState: ContactsState = { list: [] };

export const contactsReducer: Reducer<ContactsState, ContactsAction> = (
  state = defaultState,
  action: ContactsAction
): ContactsState => {
  switch (action.type) {
    case ContactsActionsTypes.ADD_CONTACTS_LIST: {
      return { ...state, list: action.payload.contactsList };
    }
    default:
      return state;
  }
};
