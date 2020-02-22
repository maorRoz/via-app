import { createSelector } from 'reselect';
import { ViaAppState } from '../../store';
import { Contact } from '../../../types';

export const getContactsListSelector = createSelector(
  (state: ViaAppState): ViaAppState['contacts'] => state.contacts,
  (contacts: ViaAppState['contacts']): Contact[] => contacts.list || []
);
