import styled, { keyframes } from 'styled-components';

export const ContactCardLayout = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  width: 150px;
  height: 220px;
  overflow: hidden;
  &:hover {
    background-color: #e6ebf5;
  }
`;

export const CardHeaderLayout = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const CardImageLayout = styled.div`
  position: relative;
  height: 160px;
  transition: height 0.7s ease-in-out;
  overflow: hidden;
  ${ContactCardLayout}:hover & {
    transition: height 0.7s ease-in-out;
    height: 132px;
  }

  img {
    min-height: 160px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardIconLayout = styled.div`
  position: absolute;
  bottom: -24px;
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

const fadeIn = keyframes` 
  0% {
    opacity:0;
    visibility: hidden;
  }

  100% {
    opacity:1;
    visibility: visible;
  }
`;

export const AdditionalDetails = styled.div`
  display: none;
  ${ContactCardLayout}:hover & {
    animation: ${fadeIn} 0.7s forwards;
    display: block;
  }
`;
