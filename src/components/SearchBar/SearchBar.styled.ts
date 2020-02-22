import styled from 'styled-components';

export const SearchBarLayout = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: white;

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
