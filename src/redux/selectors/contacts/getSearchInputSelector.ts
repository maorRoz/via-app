import { createSelector } from 'reselect';
import { ViaAppState } from '../../store';

export const getSearchInputSelector = createSelector(
  (state: ViaAppState): ViaAppState['contacts'] => state.contacts,
  (contacts: ViaAppState['contacts']): string => contacts.searchInput
);
