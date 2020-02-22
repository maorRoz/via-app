import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ContactCard } from './ContactCard';
import { ContactsListLayout } from './ContactsList.styled';
import {
  getContactsListSelector,
  isFetchContactsCompletedSelector,
  getSearchInputSelector
} from '../../redux';
import { Contact, DriverType } from '../../types';

const getFilteredContacts = (
  contacts: Contact[],
  searchInput: string
): Contact[] => {
  const formattedSearchInput = searchInput.toLowerCase();
  return contacts.filter(({ name }) => {
    const formattedContactName = name.toLowerCase();
    return formattedContactName.search(formattedSearchInput) >= 0;
  });
};

export const ContactsList = () => {
  const isLoaded = useSelector(isFetchContactsCompletedSelector);

  const contacts = useSelector(getContactsListSelector);
  const searchInput = useSelector(getSearchInputSelector);

  const filteredContacts = useMemo(
    () => (searchInput ? getFilteredContacts(contacts, searchInput) : contacts),
    [contacts, searchInput]
  );

  const filteredContactsCards = useMemo(
    () =>
      filteredContacts.map(
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
      ),
    [filteredContacts]
  );

  return isLoaded ? (
    <>
      {filteredContacts.length > 0 ? (
        <ContactsListLayout>{filteredContactsCards}</ContactsListLayout>
      ) : (
        <div>Couldn't find any contact :(</div>
      )}
    </>
  ) : (
    <div>Loading...</div>
  );
};
