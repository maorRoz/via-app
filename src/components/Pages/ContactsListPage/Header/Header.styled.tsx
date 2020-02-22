import styled from 'styled-components';

export const HeaderLayout = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 0;
  z-index: 1;
  align-items: center;
  height: 60px;
  padding-left: 20vw;
  padding-right: 10vw;
  background-color: #21b1db;
`;

export const HeaderName = styled.div`
  color: white;
  font-size: 22px;
  min-width: 120px;
`;
