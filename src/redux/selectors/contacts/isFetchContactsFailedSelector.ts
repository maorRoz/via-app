import { createSelector } from 'reselect';
import { ViaAppState } from '../../store';

export const isFetchContactsFailedSelector = createSelector(
  (state: ViaAppState): ViaAppState['contacts'] => state.contacts,
  (contacts: ViaAppState['contacts']): boolean =>
    contacts.loaded && !contacts.list
);
