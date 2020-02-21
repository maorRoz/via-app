import React from 'react';

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
  <>
    <div>{name}</div>
    <div>{driverRank}</div>
    {expanded && (
      <>
        <div>Phone Number: {phone}</div>
        <div>Email: {email}</div>
      </>
    )}
  </>
);
