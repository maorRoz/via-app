import React from 'react';
import { ContactCard } from './ContactCard';
import { ContactsListLayout } from './ContactsList.styled';

export const ContactsList = () => (
  <ContactsListLayout>
    <ContactCard />
    <ContactCard />
    <ContactCard />
    <ContactCard />

    <ContactCard />
    <ContactCard />
    <ContactCard />
    <ContactCard />

    <ContactCard />
  </ContactsListLayout>
);
