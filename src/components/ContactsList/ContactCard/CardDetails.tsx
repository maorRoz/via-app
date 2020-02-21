import React from 'react';
import { DriverName, DriverDetail } from './ContactCard.styled';

export type CardDetailsProps = {
  name: string;
  driverRank: string;
  phone: string;
  email: string;
  expanded?: boolean;
};

export const CardDetails = ({
  name,
  driverRank,
  phone,
  email,
  expanded
}: CardDetailsProps) => (
  <div>
    <DriverName>{name}</DriverName>
    <DriverDetail>{driverRank}</DriverDetail>
    {expanded && (
      <>
        <DriverDetail>Phone Number: {phone}</DriverDetail>
        <DriverDetail>Email: {email}</DriverDetail>
      </>
    )}
  </div>
);
