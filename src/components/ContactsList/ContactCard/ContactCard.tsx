import React from 'react';
import { ContactCardLayout } from './ContactCard.styled';
import { CardDetails } from './CardDetails';
import { CardHeader } from './CardHeader';

export type ContactCardProps = {
  name: string;
  driverRank: string;
  phone: string;
  email: string;
  image: string;
  professional?: boolean;
};

export const ContactCard = ({
  name,
  driverRank,
  phone,
  email,
  image,
  professional
}: ContactCardProps) => (
  <ContactCardLayout>
    <CardHeader image={image} professional={professional} />
    <CardDetails
      name={name}
      driverRank={driverRank}
      phone={phone}
      email={email}
    />
  </ContactCardLayout>
);
