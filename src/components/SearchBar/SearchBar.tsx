import React from 'react';
import { SearchBarLayout, StyledSearchIcon } from './SearchBar.styled';

export const SearchBar = ({ className }: { className?: string }) => (
  <SearchBarLayout className={className}>
    <input placeholder="search..." style={{ marginLeft: 'auto' }} />
    <StyledSearchIcon fontSize="small" />
  </SearchBarLayout>
);
