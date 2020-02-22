import React, { ChangeEvent } from 'react';
import { SearchBarLayout, StyledSearchIcon } from './SearchBar.styled';

export type SearchBarProps = {
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchInput?: string;
};

export const SearchBar = ({
  className,
  onChange,
  searchInput = ''
}: SearchBarProps) => {
  return (
    <SearchBarLayout className={className}>
      <input placeholder="search..." value={searchInput} onChange={onChange} />
      <StyledSearchIcon fontSize="small" />
    </SearchBarLayout>
  );
};
