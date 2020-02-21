import { createSelector } from 'reselect';
import { ViaAppState } from '../../store';
import { Contact } from '../../../types';

export const getContactsListSelector = createSelector(
  ({ contacts }: ViaAppState): Contact[] => contacts.list,
  (contactsList: Contact[]): Contact[] => contactsList
);
