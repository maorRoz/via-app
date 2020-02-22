import { Reducer } from 'redux';
import { ContactsAction, ContactsActionsTypes } from '../../actions/contacts';
import { Contact } from '../../../types';

type ContactsState = { list?: Contact[]; loaded: boolean; searchInput: string };

const defaultState: ContactsState = { loaded: false, searchInput: '' };

export const contactsReducer: Reducer<ContactsState, ContactsAction> = (
  state = defaultState,
  action: ContactsAction
): ContactsState => {
  switch (action.type) {
    case ContactsActionsTypes.ADD_CONTACTS_LIST: {
      return { ...state, list: action.payload.contactsList, loaded: true };
    }
    case ContactsActionsTypes.FETCH_CONTACTS_LIST_ERROR: {
      return { ...state, loaded: true };
    }
    case ContactsActionsTypes.UPDATE_SEARCH_INPUT: {
      return { ...state, searchInput: action.payload.value };
    }
    default:
      return state;
  }
};
