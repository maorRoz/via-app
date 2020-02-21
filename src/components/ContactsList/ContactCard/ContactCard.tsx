import React, { useState, useCallback } from 'react';
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
}: ContactCardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <ContactCardLayout
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader image={image} professional={professional} />
      <CardDetails
        name={name}
        driverRank={driverRank}
        phone={phone}
        email={email}
        expanded={hovered}
      />
    </ContactCardLayout>
  );
};
