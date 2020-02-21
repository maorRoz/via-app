import React from 'react';
import { useSelector } from 'react-redux';
import { ContactCard } from './ContactCard';
import { ContactsListLayout } from './ContactsList.styled';
import { getContactsListSelector } from '../../redux';
import { Contact, DriverType } from '../../types';

export const ContactsList = () => {
  const contacts = useSelector(getContactsListSelector);

  return (
    <ContactsListLayout>
      {contacts.map(
        (
          { name, driverType, driverRank, phone, email, image }: Contact,
          index
        ) => (
          <ContactCard
            key={index}
            name={name}
            driverRank={driverRank}
            phone={phone}
            email={email}
            image={image}
            professional={driverType === DriverType.Professional}
          />
        )
      )}
    </ContactsListLayout>
  );
};
