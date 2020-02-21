import React, { useState, useCallback } from 'react';
import { ContactCardLayout } from './ContactCard.styled';
import { CardDetails } from './CardDetails';
import { ProfessionalDriverIcon } from './ProfessionalDriverIcon';
import { CitizenDriverIcon } from './CitizenDriverIcon';

const CardImage = () => <div />;

export type ContactCardProps = {
  name: string;
  driverRank: string;
  phone: string;
  email: string;
  professional?: boolean;
};

export const ContactCard = ({
  name,
  driverRank,
  phone,
  email,
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
      <CardImage />
      {professional ? <ProfessionalDriverIcon /> : <CitizenDriverIcon />}
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
