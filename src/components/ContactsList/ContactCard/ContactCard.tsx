import React, { useState, useCallback } from 'react';
import { ContactCardLayout } from './ContactCard.styled';
import { CardDetails } from './CardDetails';

const CardImage = () => <div />;

export const ContactCard = () => {
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
      <CardDetails
        name="Moshe"
        driverRank="4"
        phone="123456789"
        email="email@gmail.com"
        expanded={hovered}
      />
    </ContactCardLayout>
  );
};
