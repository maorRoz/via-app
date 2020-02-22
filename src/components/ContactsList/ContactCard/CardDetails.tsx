import React from 'react';
import {
  DriverName,
  DriverDetail,
  AdditionalDetails
} from './ContactCard.styled';

export type CardDetailsProps = {
  name: string;
  driverRank: string;
  phone: string;
  email: string;
};

export const CardDetails = ({
  name,
  driverRank,
  phone,
  email
}: CardDetailsProps) => (
  <div>
    <DriverName>{name}</DriverName>
    <DriverDetail>{driverRank}</DriverDetail>
    <AdditionalDetails>
      <DriverDetail>Phone Number: {phone}</DriverDetail>
      <DriverDetail>Email: {email}</DriverDetail>
    </AdditionalDetails>
  </div>
);
