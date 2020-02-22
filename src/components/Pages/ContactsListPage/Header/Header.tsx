import React, { useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSerchInput, getSearchInputSelector } from '../../../../redux';
import {
  HeaderLayout,
  HeaderName,
  ContactsListSearchBar
} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();

  const handleSearchInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(updateSerchInput(event.target.value));
    },
    [dispatch]
  );

  const searchInput = useSelector(getSearchInputSelector);

  return (
    <HeaderLayout>
      <HeaderName>Contact List</HeaderName>
      <ContactsListSearchBar
        onChange={handleSearchInput}
        searchInput={searchInput}
      />
    </HeaderLayout>
  );
};
