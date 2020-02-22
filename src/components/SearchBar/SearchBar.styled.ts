import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBarLayout = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  padding: 3px 10px;
  border-radius: 15px;
  border: 2px solid transparent;
  background-color: white;
  transition: border-color 0.3s ease-in-out;
  &:hover {
    transition: border-color 0.3s ease-in-out;
    border-color: #ced7db;
  }

  &:focus-within {
    border-color: #454d4f;
  }

  input {
    border: 0;
    width: 100%;
    &:focus {
      outline: none;
    }
    ::placeholder {
      opacity: 0.7;
    }
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
  ${SearchBarLayout}:hover & {
    transition: opacity 0.3s ease-in-out;
    opacity: 0.5;
  }
  ${SearchBarLayout}:focus-within & {
    opacity: 1;
  }
`;
