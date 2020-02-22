import React, { useMemo } from 'react';
import {
  DriverName,
  DriverDetail,
  AdditionalDetails,
  FilledStarIcon,
  EmptyStarIcon
} from './ContactCard.styled';
import { DriverRank, MAX_DRIVER_RANK } from '../../../types';

export type CardDetailsProps = {
  name: string;
  driverRank: DriverRank;
  phone: string;
  email: string;
};

export const CardDetails = ({
  name,
  driverRank,
  phone,
  email
}: CardDetailsProps) => {
  const filledStars = useMemo(() => {
    const filledStarsArray = new Array(driverRank).fill({});
    return filledStarsArray.map((star, index) => (
      <FilledStarIcon key={index} fontSize="small" />
    ));
  }, [driverRank]);

  const emptyStars = useMemo(() => {
    const numberOfEmptyStars = MAX_DRIVER_RANK - filledStars.length;
    const filledStarsArray = new Array(numberOfEmptyStars).fill({});
    return filledStarsArray.map((star, index) => (
      <EmptyStarIcon key={index} fontSize="small" />
    ));
  }, [filledStars]);
  return (
    <div>
      <DriverName>{name}</DriverName>
      {filledStars}
      {emptyStars}
      <AdditionalDetails>
        <DriverDetail>Phone Number: {phone}</DriverDetail>
        <DriverDetail>Email: {email}</DriverDetail>
      </AdditionalDetails>
    </div>
  );
};
