import styled, { keyframes } from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export const ContactCardLayout = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  justify-self: stretch;
  &:hover {
    background-color: #e6ebf5;
  }
`;

export const CardHeaderLayout = styled.div`
  position: relative;
  margin-bottom: 34px;
`;

export const CardImageLayout = styled.div`
  position: relative;
  max-height: 160px;
  overflow: hidden;
  ${ContactCardLayout}:hover & {
    max-height: 132px;
  }
`;

export const CardImage = styled.img`
  min-height: 160px;
  width: 100%;
`;

export const CardIconLayout = styled.div`
  position: absolute;
  bottom: -15%;
  left: 10%;
`;

export const CardDetailsLayout = styled.div``;

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
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const AdditionalDetails = styled.div`
  display: none;
  ${ContactCardLayout}:hover & {
    animation: ${fadeIn} 0.6s forwards;
    display: block;
  }
`;

export const FilledStarIcon = styled(StarIcon)`
  color: orange;
`;

export const EmptyStarIcon = styled(StarBorderIcon)`
  color: orange;
`;
