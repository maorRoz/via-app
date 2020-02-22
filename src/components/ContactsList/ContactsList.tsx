import React from 'react';
import { useSelector } from 'react-redux';
import { ContactCard } from './ContactCard';
import { ContactsListLayout } from './ContactsList.styled';
import {
  getContactsListSelector,
  isFetchContactsCompletedSelector
} from '../../redux';
import { Contact, DriverType } from '../../types';

export const ContactsList = () => {
  const contacts = useSelector(getContactsListSelector);
  const isLoaded = useSelector(isFetchContactsCompletedSelector);

  return isLoaded ? (
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
  ) : (
    <div>Loading...</div>
  );
};
