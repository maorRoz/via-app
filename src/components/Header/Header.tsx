import React from 'react';
import {
  HeaderLayout,
  HeaderName,
  ContactsListSearchBar
} from './Header.styled';

export const Header = () => (
  <HeaderLayout>
    <HeaderName>Contact List</HeaderName>
    <ContactsListSearchBar />
  </HeaderLayout>
);
