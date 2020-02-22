import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { SearchBarLayout } from './SearchBar.styled';

export const SearchBar = ({ className }: { className?: string }) => (
  <SearchBarLayout className={className}>
    <input placeholder="search..." style={{ marginLeft: 'auto' }} />
    <SearchIcon style={{ opacity: 0.3 }} fontSize="small" />
  </SearchBarLayout>
);
