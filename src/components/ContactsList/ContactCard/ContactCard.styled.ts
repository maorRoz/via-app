import styled from 'styled-components';

export const ContactCardLayout = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  width: 150px;
  height: 240px;
  &:hover {
    background-color: #e6ebf5;
  }
`;

export const CardHeaderLayout = styled.div`
  position: relative;
  height: 204px;
  transition: height 1s ease-in-out;
  ${ContactCardLayout}:hover & {
    transition: height 1s ease-in-out;
    height: 176px;
  }
`;

export const CardImage = styled.img`
  height: 90%;
  width: 100%;
`;

export const CardIconLayout = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
`;

export const DriverDetail = styled.div`
  font-size: 10.5px;
  color: grey;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DriverName = styled(DriverDetail)`
  font-size: 16px;
`;
