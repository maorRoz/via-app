import { createSelector } from 'reselect';
import { ViaAppState } from '../../store';

export const isFetchContactsCompletedSelector = createSelector(
  (state: ViaAppState): ViaAppState['contacts'] => state.contacts,
  (contacts: ViaAppState['contacts']): boolean =>
    contacts.loaded && Boolean(contacts.list)
);
