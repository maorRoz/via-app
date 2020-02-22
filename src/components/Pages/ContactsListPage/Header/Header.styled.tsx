import styled from 'styled-components';
import { SearchBar } from '../../../SearchBar';

export const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 100px;
  padding-right: 40px;
  background-color: #21b1db;
`;

export const HeaderName = styled.div`
  color: white;
  font-size: 22px;
`;

export const ContactsListSearchBar = styled(SearchBar)`
  margin-left: auto;
`;
